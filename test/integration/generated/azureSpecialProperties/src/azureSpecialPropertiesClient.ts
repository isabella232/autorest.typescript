/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  XMsClientRequestId,
  SubscriptionInCredentials,
  SubscriptionInMethod,
  ApiVersionDefault,
  ApiVersionLocal,
  SkipUrlEncoding,
  Odata,
  Header
} from "./operations";
import { AzureSpecialPropertiesClientContext } from "./azureSpecialPropertiesClientContext";
import { AzureSpecialPropertiesClientOptionalParams } from "./models";

export class AzureSpecialPropertiesClient extends AzureSpecialPropertiesClientContext {
  /**
   * Initializes a new instance of the AzureSpecialPropertiesClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription id, which appears in the path, always modeled in credentials.
   *                       The value is always '1234-5678-9012-3456'
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: AzureSpecialPropertiesClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.xMsClientRequestId = new XMsClientRequestId(this);
    this.subscriptionInCredentials = new SubscriptionInCredentials(this);
    this.subscriptionInMethod = new SubscriptionInMethod(this);
    this.apiVersionDefault = new ApiVersionDefault(this);
    this.apiVersionLocal = new ApiVersionLocal(this);
    this.skipUrlEncoding = new SkipUrlEncoding(this);
    this.odata = new Odata(this);
    this.header = new Header(this);
  }

  xMsClientRequestId: XMsClientRequestId;
  subscriptionInCredentials: SubscriptionInCredentials;
  subscriptionInMethod: SubscriptionInMethod;
  apiVersionDefault: ApiVersionDefault;
  apiVersionLocal: ApiVersionLocal;
  skipUrlEncoding: SkipUrlEncoding;
  odata: Odata;
  header: Header;
}