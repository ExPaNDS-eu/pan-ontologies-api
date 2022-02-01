import {Condition, Where, AnyObject} from '@loopback/repository';

import * as cacheClass from './cache';
import {Technique} from '../models';
import * as techGetter from './technique-getter';
import * as utils from './utils';
import {CacheInit, Config as configType, GenericGetter} from '../config';
import {ApplicationConfig} from '..';

export type WherePids<T extends object = AnyObject> = Where<{
  pid: {
    [key: string]: T[];
  };
}>;

export class FreeFormTechniques {
  cache: cacheClass.LoopbackCache;

  async buildTechniques(): Promise<void> {}

  buildFilter(filter: Where<Technique> = {}): Where<Technique> {
    return filter;
  }
}

export class OntologyTechniquesLoopbackCacheBuilder {
  cache: cacheClass.CacheClass;
  isNegative: {[key: string]: string} = {false: 'inq', true: 'nin'};
  negationMap: {[key: string]: string} = {
    neq: 'eq',
    nin: 'inq',
    nlike: 'like',
    nilike: 'ilike',
  };
  techniqueGetter: techGetter.TechniqueGetterClass;

  constructor(config: configType<CacheInit, GenericGetter>['technique']) {
    this.techniqueGetter = new techGetter[
      (config.class as keyof typeof techGetter) || 'GitHubOwlTechnique'
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    ](config as any);
    this.cache = new cacheClass[
      (config.cache.class as keyof typeof cacheClass) || 'LoopbackCache'
    ](config.cache);
  }

  async andOr(
    filter: Where<Technique>[],
    condition: string,
  ): Promise<WherePids<Technique>> {
    const techniques = filter.map(async f => this.flat(f));
    return {[condition]: await Promise.all(techniques)};
  }

  async flat(filter: Where<Technique>): Promise<WherePids<Technique>> {
    const [f, isNegative] = this.transformToPositive(filter);
    const synonymFilter = this.createSynonym(f);
    const techniques = await this.cache.get({
      where: synonymFilter ? {or: [f, synonymFilter]} : f,
    });
    return {
      pid: {
        [this.isNegative[`${isNegative}`]]: utils.unionArraysOfObjects(
          techniques,
          'relatives',
        ).relatives,
      },
    };
  }

  transformToPositive(
    filter: Where<Technique>,
    start: Where<Technique> = {},
    negatives: true[] = [],
  ): [Where<Technique>, boolean] {
    return [
      Object.keys(filter).reduce((o: Where<Technique>, key) => {
        if (this.negationMap[key]) negatives.push(true);
        const k = (this.negationMap[key] || key) as keyof Where<Technique>;
        if (
          typeof filter[key as keyof Where<Technique>] === 'object' &&
          filter[key as keyof Where<Technique>] !== null
        ) {
          o[k] = {} as never;
          this.transformToPositive(
            filter[key as keyof Where<Technique>] as {
              [key: string]: string | object;
            },
            o[k],
            negatives,
          );
        } else o[k] = filter[key as keyof Where<Technique>];
        return o;
      }, start),
      negatives[0] || false,
    ];
  }

  createSynonym(item: Condition<Technique>): Condition<Technique> | null {
    const synonym = Object.keys(item).reduce(
      (o: Condition<Technique>, key) => (
        key === 'name' ? (o['synonym'] = item[key]) : (o[key] = item[key]), o
      ),
      {},
    );
    return synonym.synonym ? synonym : null;
  }

  *prepareForCache(
    tech: techGetter.TechniqueOntology,
    keyMap: {[key: string]: string} = {
      name: 'prefLabel',
      synonym: 'synonym',
      pid: 'pid',
    },
  ): Generator<Technique> {
    let index = 0;
    while (index < tech.collection.length) {
      const out = Object.keys(keyMap).reduce(
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (o: {[key: string]: any}, km: string) => (
          (o[km] =
            tech.collection[index][
              keyMap[km] as keyof techGetter.TechniqueCollection
            ]),
          o
        ),
        {},
      );
      out.relatives = [...tech.relatives[out.pid]];
      out.createdAt = Date.now();
      yield out as Technique;
      index++;
    }
  }

  async buildFilter(
    filter: Where<Technique> = {},
  ): Promise<WherePids<Technique>> {
    let outFilter;
    if ('and' in filter) {
      outFilter = await this.andOr(filter.and, 'and');
    } else if ('or' in filter) {
      outFilter = await this.andOr(filter.or, 'or');
    } else {
      outFilter = await this.flat(filter);
    }
    return outFilter;
  }

  async buildTechniques(): Promise<void> {
    const first = await this.cache.get({limit: 1});
    if (first.length === 0) {
      await this.techniqueGetter.build();
      const items = this.prepareForCache(this.techniqueGetter);
      await this.cache.set('pid', items);
    }
  }
}

export async function selectTechniqueBuilder(
  config: ApplicationConfig,
  dataModel: Promise<AnyObject>,
): Promise<OntologyTechniquesLoopbackCacheBuilder | FreeFormTechniques> {
  let techniqueBuilder:
    | OntologyTechniquesLoopbackCacheBuilder
    | FreeFormTechniques;
  if ('technique' in config) {
    config.technique.cache.model = await dataModel;
    techniqueBuilder = new OntologyTechniquesLoopbackCacheBuilder(
      config.technique,
    );
  } else techniqueBuilder = new FreeFormTechniques();
  return techniqueBuilder;
}
