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

export class AutoRestParameterizedCustomHostTestClientContext extends msRest.ServiceClient {

  subscriptionId: string;

  dnsSuffix: string;

  /**
   * Initializes a new instance of the AutoRestParameterizedCustomHostTestClientContext class.
   * @param subscriptionId The subscription id with value 'test12'.
   * @param [options] The parameter options
   */
  constructor(subscriptionId: string, options?: Models.AutoRestParameterizedCustomHostTestClientOptions) {
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.dnsSuffix = 'host';
    this.baseUri = "{vault}{secret}{dnsSuffix}";
    this.requestContentType = "application/json; charset=utf-8";
    this.subscriptionId = subscriptionId;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.dnsSuffix !== null && options.dnsSuffix !== undefined) {
      this.dnsSuffix = options.dnsSuffix;
    }
  }
}
