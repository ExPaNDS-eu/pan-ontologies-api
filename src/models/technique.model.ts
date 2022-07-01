import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Technique extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  pid: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  synonym?: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  relatives: string[];

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  children?: string[];

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  parents?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Technique>) {
    super(data);
  }
}

export interface TechniqueRelations {
  // describe navigational properties here
}

export type TechniqueWithRelations = Technique & TechniqueRelations;
