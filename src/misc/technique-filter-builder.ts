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
  /**
   * Returns the untouched input
   * @param {object} filter PaNOSC loopback filter object
   * @returns {object} Object equal to filter
   */

  buildFilter(filter: Where<Technique>): Where<Technique> {
    return filter;
  }

};

export class OntologyTechniquesLoopbackCacheBuilder {

  // techniqueGetter: 
  cache: cacheClass.cacheClass
  isNegative: {[key: string]: string} = {false: "inq", true: "nin"}
  negationMap: {[key: string]: string} = {
    neq: "eq", nin: "inq", nlike: "like", nilike: "ilike"
  };
  techniqueGetter: techGetter.techniqueGetterClass

  /**
   * Creates an instance of BioPortalTechniques and LoopbackCache with the
   * provided config
   * @param {object} config Object containing the config values for cache and
   * TechniqueGetter
   */

  constructor(config: configType<cacheInit, GenericGetter>["technique"]) {
    this.techniqueGetter = new techGetter[
      config.class as keyof typeof techGetter || "GitHubOwlTechnique"](config as any);
    this.cache = new cacheClass[
      config.cache.class as keyof typeof cacheClass || "LoopbackCache"](config.cache);
    // this.isNegative = { false: "inq", true: "nin" };
    this.negationMap = {
      neq: "eq", nin: "inq", nlike: "like", nilike: "ilike"
    };
  }

  /**
   * Starting from loopback AND or OR filter it adds synonym to it and returns
   * the relatives combined in an AND or OR filter
   * @param {object} filter PaNOSC loopback filter object
   * @param {string} condition AND or OR string
   * @returns {object} Object the filter + synonym, joined by an OR condition,
   * and returns the loopback filter with concatenated AND or OR conditions
   */

  async andOr(filter: Where<Technique>[], condition: string): Promise<WherePids<Technique>> {
    const techniques = filter.map(async f => await this.flat(f));
    return { [condition]: await Promise.all(techniques) };
  }

  /**
   * Starting from loopback filter it adds synonym to it and returns the
   * relatives, combined in a INQ or NIN filter depending if there is a negative
   * condition in the original filter
   * @param {object} filter PaNOSC loopback filter object
   * @returns {object} Object the filter + synonym, joined by an OR condition,
   * and returns the relatives, creating a filter {pid: inq/nin: [...]}
   * depending if there is a negative condition in the original filter
   */

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

  /**
   * Returns a loopback filter having changed the negative conditions to
   * positive and a boolean condition, which is true when a change was made,
   * false otherwise
   * @param {object} filter PaNOSC loopback filter object
   * @param {object} start object used to store the final PaNOSC loopback filter
   * @param {Array} negatives array used to store if a negative condition
   * was met
   * @returns {[object, boolean]} PaNOSC loopback filter, having changed the
   * negative conditions and a boolean condition, which is true when a change
   * was made, false otherwise
   */

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

  /**
   * Returns the same filter structure used by the NAME field, replacing the
   * NAME key with SYNONYM
   * @param {object} item PaNOSC loopback filter object
   * @returns {object} filter where the NAME key is replaced by SYNONYM
   */

  createSynonym(item: Condition<Technique>): Condition<Technique>|null {
    const synonym = Object.keys(item).reduce((o: Condition<Technique>, key) => (
      key === "name" ? o["synonym"] = item[key] : o[key] = item[key], o),
    {});
    return synonym.synonym ? synonym : null;
  }

  /**
   * Tranforms an object with the structure of BioPortalTechniques to a format
   * that can be used by LoopbackCache
   * @param {object} obj BioPortal nodes attribute
   * @param {object} [keyMap] Keymap to map BioPortal.nodes to list of object
   * for LoopbackCache
   * @returns {object[]} List of objects that can be saved using LoopbackCache
   */

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

  /**
   * Returns Loopback filter with relatives from filtered LoopbacCache or
   * BioPortal in INQ clause
   * @param {object} filter PaNOSC loopback filter object
   * @returns {object} Loopback filter with relatives from filtered LoopbacCache
   * or BioPortal in INQ clause
   */

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

  /**
   * Builds the items from filtered LoopbacCache or BioPortal
   * @param {object} filter PaNOSC loopback filter object including synonyms
   * @returns {object[]} Array of objects from filtered LoopbacCache or
   * BioPortal
   */

  async buildTechniques(): Promise<void> {
    const first = await this.cache.get({ limit: 1 });
    if (first.length === 0) {
      await this.techniqueGetter.build();
      const items = this.prepareForCache(this.techniqueGetter);
      await this.cache.set("pid", items);
    }
  }

};

// export const technique = "technique" in config ?
//   new OntologyTechniquesLoopbackCacheBuilder(config.technique) :
//   new FreeFormTechniques()
