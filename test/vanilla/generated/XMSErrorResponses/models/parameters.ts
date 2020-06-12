/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const petId: msRest.OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    required: true,
    serializedName: "petId",
    type: {
      name: "String"
    }
  }
};
export const whatAction: msRest.OperationURLParameter = {
  parameterPath: "whatAction",
  mapper: {
    required: true,
    serializedName: "whatAction",
    type: {
      name: "String"
    }
  }
};