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
import { AutoRestSwaggerBATFileServiceContext } from "./autoRestSwaggerBATFileServiceContext";

class AutoRestSwaggerBATFileService extends AutoRestSwaggerBATFileServiceContext {
  // Operation groups
  files: operations.Files;

  /**
   * Initializes a new instance of the AutoRestSwaggerBATFileService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestSwaggerBATFileServiceOptions) {
    super(options);
    this.files = new operations.Files(this);
  }
}

// Operation Specifications

export {
  AutoRestSwaggerBATFileService,
  AutoRestSwaggerBATFileServiceContext,
  Models as AutoRestSwaggerBATFileServiceModels,
  Mappers as AutoRestSwaggerBATFileServiceMappers
};
export * from "./operations";
