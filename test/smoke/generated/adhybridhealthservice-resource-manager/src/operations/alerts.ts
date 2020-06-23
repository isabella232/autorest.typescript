/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ADHybridHealthService } from "../aDHybridHealthService";
import {
  AlertsListAddsAlertsOptionalParams,
  AlertsListAddsAlertsResponse,
  AlertsListAddsAlertsNextOptionalParams,
  AlertsListAddsAlertsNextResponse
} from "../models";

/**
 * Class representing a Alerts.
 */
export class Alerts {
  private readonly client: ADHybridHealthService;

  /**
   * Initialize a new instance of the class Alerts class.
   * @param client Reference to the service client
   */
  constructor(client: ADHybridHealthService) {
    this.client = client;
  }

  /**
   * Gets the alerts for a given Active Directory Domain Service.
   * @param serviceName The name of the service.
   * @param options The options parameters.
   */
  listAddsAlerts(
    serviceName: string,
    options?: AlertsListAddsAlertsOptionalParams
  ): Promise<AlertsListAddsAlertsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, options: operationOptions },
      listAddsAlertsOperationSpec
    ) as Promise<AlertsListAddsAlertsResponse>;
  }

  /**
   * ListAddsAlertsNext
   * @param serviceName The name of the service.
   * @param nextLink The nextLink from the previous successful call to the ListAddsAlerts method.
   * @param options The options parameters.
   */
  listAddsAlertsNext(
    serviceName: string,
    nextLink: string,
    options?: AlertsListAddsAlertsNextOptionalParams
  ): Promise<AlertsListAddsAlertsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { serviceName, nextLink, options: operationOptions },
      listAddsAlertsNextOperationSpec
    ) as Promise<AlertsListAddsAlertsNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listAddsAlertsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/providers/Microsoft.ADHybridHealthService/addsservices/{serviceName}/alerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Alerts
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.state,
    Parameters.fromParam,
    Parameters.to
  ],
  urlParameters: [Parameters.$host, Parameters.serviceName],
  serializer
};
const listAddsAlertsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Alerts
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.state,
    Parameters.fromParam,
    Parameters.to
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  serializer
};