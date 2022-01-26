import { Entity, Filter } from '@loopback/repository';
import { cacheInit } from '../config';

export class LoopbackCache {

  sttl: number;
  model: any

  /**
   * Sets the internal default timeout and collection to use to store the cache
   * in the loopback datasource
   * @param {object} config Object which might contain the collection to use to
   * store the cache and the default cache timeout
   */

  constructor(
    config: cacheInit) {
    this.sttl = config.sttl;
    this.model = config.model
  }

  /**
   * Stores the value list or object in the loopback datasource
   * @param {string|number} key Id to use to refernce the cached element. Not
   * used, added to maintain node-cache signature
   * @param {object|object[]} value List of objects or single object to store in
   *  the loopback datasource
   * @param {number} [ttl] Cache timeout to set on the value being cached
   */

  // eslint-disable-next-line no-unused-vars
  async set(key: string,
    value: { [key: string]: string } | Iterable<{ [key: string]: string }>,
    ttl: number | null = null): Promise<void> {
    const valueArray = Symbol.iterator in Object(value) ?
      value as Iterable<{ [key: string]: string }> : [value as { [key: string]: string }];
    for (let v of valueArray) {
      const valueWithTtl = ttl != null ? { ...v, ttl: ttl } : v
      await (await this.model.exists(v[key])? this.model.replaceById(v[key], valueWithTtl): this.model.create(valueWithTtl))
    }
  }

  /**
   * Gets the cache from the loopback datasource using the provided filter. If
   * the cache has expaired it clears the item
   * @param {object} filter Object containing the loopback filter to use to
   * retrieve the cache
   * @returns {object[]|null|Array} When the cache is cleared or empty, it
   * returns null, otherwise the items after having applied the filter
   */

  async get(filter: Filter<Entity> = {}): Promise<Entity[]> {
    const collection = this.model;
    const data = await collection.find(filter);
    if (data[0]
      && data[0].createdAt + (
        data[0].ttl != undefined ? data[0].ttl : this.sttl) * 1000 < Date.now()
    ) {
      await collection.deleteAll(filter.where);
      return [];
    } else {
      return data;
    }
  }
};


export type cacheClass = LoopbackCache
