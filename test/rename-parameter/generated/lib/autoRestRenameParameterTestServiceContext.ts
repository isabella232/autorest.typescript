/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";

const packageName = "";
const packageVersion = "";

export class AutoRestRenameParameterTestServiceContext extends msRest.ServiceClient {

  withCredentialsProperty: string;

  /**
   * Initializes a new instance of the AutoRestRenameParameterTestServiceContext class.
   * @param noRetryPolicy A query parameter.
   * @param [options] The parameter options
   */
  constructor(noRetryPolicy: string, options?: Models.AutoRestRenameParameterTestServiceOptions) {
    if (noRetryPolicy === null || noRetryPolicy === undefined) {
      throw new Error('\'noRetryPolicy\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
    this.requestContentType = "application/json; charset=utf-8";
    this.noRetryPolicy = noRetryPolicy;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.withCredentialsProperty !== null && options.withCredentialsProperty !== undefined) {
      this.withCredentialsProperty = options.withCredentialsProperty;
    }
  }
}
