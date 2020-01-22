/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyStringClient } from "../bodyStringClient";

/**
 * Class representing a Enum.
 */
export class Enum {
  private readonly client: BodyStringClient;

  /**
   * Initialize a new instance of the class Enum class.
   * @param client Reference to the service client
   */
  constructor(client: BodyStringClient) {
    this.client = client;
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param options The options parameters.
   */
  getNotExpandable(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.EnumGetNotExpandableResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNotExpandableOperationSpec
    ) as Promise<Models.EnumGetNotExpandableResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param stringBody
   * @param options The options parameters.
   */
  putNotExpandable(
    stringBody: Models.Colors,
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { stringBody, options },
      putNotExpandableOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param options The options parameters.
   */
  getReferenced(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.EnumGetReferencedResponse> {
    return this.client.sendOperationRequest(
      { options },
      getReferencedOperationSpec
    ) as Promise<Models.EnumGetReferencedResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param enumStringBody
   * @param options The options parameters.
   */
  putReferenced(
    enumStringBody: Models.Colors,
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { enumStringBody, options },
      putReferencedOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get value 'green-color' from the constant.
   * @param options The options parameters.
   */
  getReferencedConstant(
    options?: coreHttp.RequestOptionsBase
  ): Promise<Models.EnumGetReferencedConstantResponse> {
    return this.client.sendOperationRequest(
      { options },
      getReferencedConstantOperationSpec
    ) as Promise<Models.EnumGetReferencedConstantResponse>;
  }

  /**
   * Sends value 'green-color' from a constant
   * @param enumStringBody
   * @param options The options parameters.
   */
  putReferencedConstant(
    enumStringBody: Models.RefColorConstant,
    options?: coreHttp.RequestOptionsBase
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { enumStringBody, options },
      putReferencedConstantOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers);

const getNotExpandableOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/notExpandable",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Enum",
          allowedValues: ["red color", "green-color", "blue_color"]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
const putNotExpandableOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/notExpandable",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.stringBody5,
  serializer
};
const getReferencedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/Referenced",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Enum",
          allowedValues: ["red color", "green-color", "blue_color"]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
const putReferencedOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/Referenced",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.enumStringBody,
  serializer
};
const getReferencedConstantOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/ReferencedConstant",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RefColorConstant
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
const putReferencedConstantOperationSpec: coreHttp.OperationSpec = {
  path: "/string/enum/ReferencedConstant",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.enumStringBody1,
  serializer
};
