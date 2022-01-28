import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CacheDataSource} from '../datasources';
import {Technique, TechniqueRelations} from '../models';

export class TechniqueRepository extends DefaultCrudRepository<
  Technique,
  typeof Technique.prototype.pid,
  TechniqueRelations
> {
  constructor(@inject('datasources.cache') dataSource: CacheDataSource) {
    super(Technique, dataSource);
  }
}
