/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestUrlTestServiceContext } from "./autoRestUrlTestServiceContext";

class AutoRestUrlTestService extends AutoRestUrlTestServiceContext {
  // Operation groups
  paths: operations.Paths;
  queries: operations.Queries;
  pathItems: operations.PathItems;

  /**
   * Initializes a new instance of the AutoRestUrlTestService class.
   * @param globalStringPath A string value 'globalItemStringPath' that appears in the path
   * @param [options] The parameter options
   */
  constructor(globalStringPath: string, options?: Models.AutoRestUrlTestServiceOptions) {
    super(globalStringPath, options);
    this.paths = new operations.Paths(this);
    this.queries = new operations.Queries(this);
    this.pathItems = new operations.PathItems(this);
  }
}

// Operation Specifications

export {
  AutoRestUrlTestService,
  AutoRestUrlTestServiceContext,
  Models as AutoRestUrlTestServiceModels,
  Mappers as AutoRestUrlTestServiceMappers
};
export * from "./operations";
