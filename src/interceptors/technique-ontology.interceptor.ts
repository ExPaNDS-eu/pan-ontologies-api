import {
  injectable,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  ValueOrPromise,
  inject,
} from '@loopback/core';

import {
  OntologyTechniquesLoopbackCacheBuilder,
  FreeFormTechniques,
} from '../misc';

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

  constructor(
    @inject('technique')
    private technique:
      | OntologyTechniquesLoopbackCacheBuilder
      | FreeFormTechniques,
  ) {}

  /**
   * The logic to intercept an invocation
   * @param invocationCtx - Invocation context
   * @param next - A function to invoke next interceptor or the target method
   */
  async intercept(
    invocationCtx: InvocationContext,
    next: () => ValueOrPromise<InvocationResult>,
  ) {
    await this.technique.buildTechniques();
    const result = await next();
    return result;
  }
}
