import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {param, get, getModelSchemaRef, response} from '@loopback/rest';
import {Technique} from '../models';
import {TechniqueRepository} from '../repositories';
import {intercept, inject} from '@loopback/core';
import {TechniqueOntologyInterceptor} from '../interceptors';
import {
  FreeFormTechniques,
  OntologyTechniquesLoopbackCacheBuilder,
  WherePids,
} from '../misc';

@intercept(TechniqueOntologyInterceptor.BINDING_KEY)
export class TechniqueController {
  constructor(
    @inject('technique')
    private technique:
      | OntologyTechniquesLoopbackCacheBuilder
      | FreeFormTechniques,
    @repository(TechniqueRepository)
    public techniqueRepository: TechniqueRepository,
  ) {}

  @get('/techniques/count')
  @response(200, {
    description: 'Technique model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Technique) where?: Where<Technique>,
  ): Promise<Count> {
    return this.techniqueRepository.count(where);
  }

  @get('/techniques')
  @response(200, {
    description: 'Array of Technique model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Technique, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Technique) filter?: Filter<Technique>,
  ): Promise<Technique[]> {
    return this.techniqueRepository.find(filter);
  }

  @get('/techniques/{id}')
  @response(200, {
    description: 'Technique model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Technique, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Technique, {exclude: 'where'})
    filter?: FilterExcludingWhere<Technique>,
  ): Promise<Technique> {
    return this.techniqueRepository.findById(id, filter);
  }

  @get('/techniques/pan-ontology')
  @response(200, {
    description: 'PIDs filter with condition',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          title: 'LoopbackCondtionOnPIDs',
          properties: {
            pid: {
              type: 'object', 
              properties: {
                loopbackCondtionOnPIDs: {
                  type: 'object'
                }
              }
            }
          }
        },
      },
    },
  })
  async findPanOntology(
    @param.where(Technique) where?: Where<Technique>,
  ): Promise<WherePids<Technique>> {
    return this.technique.buildFilter(where);
  }
}
