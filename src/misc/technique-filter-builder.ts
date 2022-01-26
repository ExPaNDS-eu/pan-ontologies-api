import {Condition, Where, AnyObject} from '@loopback/repository';

import * as cacheClass from "./cache";
import {Technique} from '../models';
import * as techGetter from "./technique-getter";
import * as utils from "./utils";
import {cacheInit, config as configType, GenericGetter} from "../config"

type WherePids <T extends object = AnyObject> = Where<{
  pid: {
    [key: string]: T[]
  }
}>

export class FreeFormTechniques {

  cache: cacheClass.LoopbackCache

  async buildTechniques(): Promise<void> {}

  buildFilter(filter: Where<Technique>): Where<Technique> {
    return filter;
  }

};

export class OntologyTechniquesLoopbackCacheBuilder {

  cache: cacheClass.cacheClass
  isNegative: {[key: string]: string} = {false: "inq", true: "nin"}
  negationMap: {[key: string]: string} = {
    neq: "eq", nin: "inq", nlike: "like", nilike: "ilike"
  };
  techniqueGetter: techGetter.techniqueGetterClass

  constructor(config: configType<cacheInit, GenericGetter>["technique"]) {
    this.techniqueGetter = new techGetter[
      config.class as keyof typeof techGetter || "GitHubOwlTechnique"](config as any);
    this.cache = new cacheClass[
      config.cache.class as keyof typeof cacheClass || "LoopbackCache"](config.cache);
    this.negationMap = {
      neq: "eq", nin: "inq", nlike: "like", nilike: "ilike"
    };
  }

  async andOr(filter: Where<Technique>[], condition: string): Promise<WherePids<Technique>> {
    const techniques = filter.map(async f => await this.flat(f));
    return { [condition]: await Promise.all(techniques) };
  }

  async flat(filter: Where<Technique>): Promise<WherePids<Technique>> {
    const [f, isNegative] = this.transformToPositive(filter);
    const synonymFilter = this.createSynonym(f);
    const techniques = await this.cache.get(
      { where: synonymFilter ? { or: [f, synonymFilter] } : f }
      );
    return {
      pid: {
        [this.isNegative[`${isNegative}`]]: utils.unionArraysOfObjects(
          techniques, "relatives").relatives
      }
    };
  }

  transformToPositive(filter: any, start: any = {}, negatives: true[] = []): [any, boolean] {
    return [Object.keys(filter).reduce((o: {[key: string]: any}, key) => {
      if (this.negationMap[key]) negatives.push(true);
      const k = this.negationMap[key] || key;
      if (typeof filter[key] === "object" && filter[key] !== null) {
        o[k] = {};
        this.transformToPositive(filter[key], o[k], negatives);
      }
      else o[k] = filter[key];
      return o;
    }, start), negatives[0] || false];
  }

  createSynonym(item: Condition<Technique>): Condition<Technique>|null {
    const synonym = Object.keys(item).reduce((o: Condition<Technique>, key) => (
      key === "name" ? o["synonym"] = item[key] : o[key] = item[key], o),
    {});
    return synonym.synonym ? synonym : null;
  }

  * prepareForCache(tech: techGetter.techniqueGetterClass, keyMap: {[key: string]: string} = {
    name: "prefLabel", synonym: "synonyms",
    pid: "pid"
  }): Generator<Technique> {
    var index = 0;
    while (index < tech.collection.length) {
      const out = Object.keys(keyMap).reduce((o: {[key:string]: any}, km: string) => (
        o[km] = tech.collection[index][keyMap[km] as keyof techGetter.techniqueCollection], o), {});
      out.relatives = [...tech.relatives[out.pid]];
      out.createdAt = Date.now();
      yield out as Technique;
      index++;
    }
  }

  async buildFilter(filter: Where<Technique>): Promise<WherePids<Technique>> {
    var outFilter;
    if ("and" in filter) {
      outFilter = await this.andOr(filter.and, "and");
    } else if ("or" in filter) {
      outFilter = await this.andOr(filter.or, "or");
    } else {
      outFilter = await this.flat(filter);
    }
    return outFilter;
  }

  async buildTechniques(): Promise<void> {
    const first = await this.cache.get({ limit: 1 });
    if (first.length === 0) {
      await this.techniqueGetter.build();
      const items = this.prepareForCache(this.techniqueGetter);
      await this.cache.set("pid", items);
    }
  }

};
