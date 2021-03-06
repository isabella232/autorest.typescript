/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/apiVersionLocalMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a ApiVersionLocal. */
export class ApiVersionLocal {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a ApiVersionLocal.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getMethodLocalValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getMethodLocalValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getMethodLocalValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getMethodLocalValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMethodLocalValidOperationSpec,
      callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = null to succeed
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getMethodLocalNull(options?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getMethodLocalNull(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getMethodLocalNull(options: Models.ApiVersionLocalGetMethodLocalNullOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  getMethodLocalNull(options?: Models.ApiVersionLocalGetMethodLocalNullOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMethodLocalNullOperationSpec,
      callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getPathLocalValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getPathLocalValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPathLocalValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getPathLocalValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPathLocalValidOperationSpec,
      callback);
  }

  /**
   * Get method with api-version modeled in the method.  pass in api-version = '2.0' to succeed
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getSwaggerLocalValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getSwaggerLocalValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getSwaggerLocalValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getSwaggerLocalValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSwaggerLocalValidOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getMethodLocalValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/2.0",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getMethodLocalNullOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/local/null",
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getPathLocalValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/path/string/none/query/local/2.0",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getSwaggerLocalValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/swagger/string/none/query/local/2.0",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
