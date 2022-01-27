import { Entity, Filter } from '@loopback/repository';
import { cacheConstructor } from '../config';

export class LoopbackCache {

  sttl: number;
  model: any

  constructor(
    config: cacheConstructor) {
    this.sttl = config.sttl;
    this.model = config.model
  }

  // eslint-disable-next-line no-unused-vars
  async set(key: string,
    value: { [key: string]: string|number } | Iterable<{ [key: string]: string|number }>,
    ttl: number | null = null): Promise<void> {
    const valueArray = Symbol.iterator in Object(value) ?
      value as Iterable<{ [key: string]: string }> : [value as { [key: string]: string }];
    for (let v of valueArray) {
      const valueWithTtl = ttl != null ? { ...v, ttl: ttl } : v
      await (await this.model.exists(v[key])? this.model.replaceById(v[key], valueWithTtl): this.model.create(valueWithTtl))
    }
  }

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
