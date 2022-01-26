import {
  injectable,
  Interceptor,
  InvocationContext,
  InvocationResult,
  Provider,
  ValueOrPromise,
} from '@loopback/core';

import { OntologyTechniquesLoopbackCacheBuilder, FreeFormTechniques } from '../misc';
import {cacheConfig, cacheInit, config as configType, GenericGetter} from "../config"

var config: configType<cacheConfig, GenericGetter>|{} = {};
try {
  config = require("../../config.json")
} catch (error) {
  console.log("missing config file, applying defaults");
}

/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
@injectable({ tags: { key: TechniqueOntologyInterceptor.BINDING_KEY } })
export class TechniqueOntologyInterceptor implements Provider<Interceptor> {
  static readonly BINDING_KEY = `interceptors.${TechniqueOntologyInterceptor.name}`;

  /*
  constructor() {}
  */

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
    try {
      let technique: FreeFormTechniques | OntologyTechniquesLoopbackCacheBuilder
      if ("technique" in config) {
        const techniqueWithModel: any = config.technique
        techniqueWithModel.cache.model = Object.values(invocationCtx.target)[0]
        technique = new OntologyTechniquesLoopbackCacheBuilder(techniqueWithModel as configType<cacheInit, GenericGetter>["technique"])
      }
      else 
        technique = new FreeFormTechniques()
      await technique.buildTechniques()
      const result = await next();
      // Add post-invocation logic here
      if (invocationCtx.methodName === "findPanOntology" && "where" in invocationCtx.args[0])
        return await technique.buildFilter(invocationCtx.args[0].where)
      else
        return result;
    } catch (err) {
      // Add error handling logic here
      throw err;
    }
  }
}
