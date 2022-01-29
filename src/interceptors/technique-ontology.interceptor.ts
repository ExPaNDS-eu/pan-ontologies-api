import {
  injectable,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  ValueOrPromise,
} from '@loopback/core';

import {
  OntologyTechniquesLoopbackCacheBuilder,
  FreeFormTechniques,
} from '../misc';
import {
  CacheInit,
  Config as configType,
  GenericGetter,
  getConfig,
} from '../config';

const config = getConfig();

/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@injectable({tags: {key: TechniqueOntologyInterceptor.BINDING_KEY}})
export class TechniqueOntologyInterceptor implements Provider<Interceptor> {
  static readonly BINDING_KEY = `interceptors.${TechniqueOntologyInterceptor.name}`;

  /**
   * This method is used by LoopBack context to produce an interceptor function
   * for the binding.
   *
   * @returns An interceptor function
   */
  value() {
    return this.intercept.bind(this);
  }

  /**
   * The logic to intercept an invocation
   * @param invocationCtx - Invocation context
   * @param next - A function to invoke next interceptor or the target method
   */
  async intercept(
    invocationCtx: InvocationContext,
    next: () => ValueOrPromise<InvocationResult>,
  ) {
    let technique: FreeFormTechniques | OntologyTechniquesLoopbackCacheBuilder;
    if ('technique' in config) {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      const techniqueWithModel: any = config.technique;
      techniqueWithModel.cache.model = Object.values(invocationCtx.target)[0];
      technique = new OntologyTechniquesLoopbackCacheBuilder(
        techniqueWithModel as configType<CacheInit, GenericGetter>['technique'],
      );
    } else technique = new FreeFormTechniques();
    await technique.buildTechniques();
    const result = await next();
    if (
      invocationCtx.methodName === 'findPanOntology' &&
      'where' in invocationCtx.args[0]
    )
      return technique.buildFilter(invocationCtx.args[0].where);
    else return result;
  }
}
