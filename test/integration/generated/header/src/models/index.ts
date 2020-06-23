/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * Defines headers for Header_responseExistingKey operation.
 */
export interface HeaderResponseExistingKeyHeaders {
  userAgent?: string;
}

/**
 * Defines headers for Header_responseProtectedKey operation.
 */
export interface HeaderResponseProtectedKeyHeaders {
  contentType?: string;
}

/**
 * Defines headers for Header_responseInteger operation.
 */
export interface HeaderResponseIntegerHeaders {
  value?: number;
}

/**
 * Defines headers for Header_responseLong operation.
 */
export interface HeaderResponseLongHeaders {
  value?: number;
}

/**
 * Defines headers for Header_responseFloat operation.
 */
export interface HeaderResponseFloatHeaders {
  value?: number;
}

/**
 * Defines headers for Header_responseDouble operation.
 */
export interface HeaderResponseDoubleHeaders {
  value?: number;
}

/**
 * Defines headers for Header_responseBool operation.
 */
export interface HeaderResponseBoolHeaders {
  value?: boolean;
}

/**
 * Defines headers for Header_responseString operation.
 */
export interface HeaderResponseStringHeaders {
  value?: string;
}

/**
 * Defines headers for Header_responseDate operation.
 */
export interface HeaderResponseDateHeaders {
  value?: Date;
}

/**
 * Defines headers for Header_responseDatetime operation.
 */
export interface HeaderResponseDatetimeHeaders {
  value?: Date;
}

/**
 * Defines headers for Header_responseDatetimeRfc1123 operation.
 */
export interface HeaderResponseDatetimeRfc1123Headers {
  value?: Date;
}

/**
 * Defines headers for Header_responseDuration operation.
 */
export interface HeaderResponseDurationHeaders {
  value?: string;
}

/**
 * Defines headers for Header_responseByte operation.
 */
export interface HeaderResponseByteHeaders {
  value?: Uint8Array;
}

/**
 * Defines headers for Header_responseEnum operation.
 */
export interface HeaderResponseEnumHeaders {
  value?: GreyscaleColors;
}

/**
 * Defines values for GreyscaleColors.
 */
export type GreyscaleColors = "White" | "black" | "GREY";

/**
 * Contains response data for the responseExistingKey operation.
 */
export type HeaderResponseExistingKeyResponse = HeaderResponseExistingKeyHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseExistingKeyHeaders;
  };
};

/**
 * Contains response data for the responseProtectedKey operation.
 */
export type HeaderResponseProtectedKeyResponse = HeaderResponseProtectedKeyHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseProtectedKeyHeaders;
  };
};

/**
 * Contains response data for the responseInteger operation.
 */
export type HeaderResponseIntegerResponse = HeaderResponseIntegerHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseIntegerHeaders;
  };
};

/**
 * Contains response data for the responseLong operation.
 */
export type HeaderResponseLongResponse = HeaderResponseLongHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseLongHeaders;
  };
};

/**
 * Contains response data for the responseFloat operation.
 */
export type HeaderResponseFloatResponse = HeaderResponseFloatHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseFloatHeaders;
  };
};

/**
 * Contains response data for the responseDouble operation.
 */
export type HeaderResponseDoubleResponse = HeaderResponseDoubleHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseDoubleHeaders;
  };
};

/**
 * Contains response data for the responseBool operation.
 */
export type HeaderResponseBoolResponse = HeaderResponseBoolHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseBoolHeaders;
  };
};

/**
 * Optional parameters.
 */
export interface HeaderParamStringOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Send a post request with header values "The quick brown fox jumps over the lazy dog" or null or ""
   */
  value?: string;
}

/**
 * Contains response data for the responseString operation.
 */
export type HeaderResponseStringResponse = HeaderResponseStringHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseStringHeaders;
  };
};

/**
 * Contains response data for the responseDate operation.
 */
export type HeaderResponseDateResponse = HeaderResponseDateHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseDateHeaders;
  };
};

/**
 * Contains response data for the responseDatetime operation.
 */
export type HeaderResponseDatetimeResponse = HeaderResponseDatetimeHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseDatetimeHeaders;
  };
};

/**
 * Optional parameters.
 */
export interface HeaderParamDatetimeRfc1123OptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Send a post request with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT"
   */
  value?: Date;
}

/**
 * Contains response data for the responseDatetimeRfc1123 operation.
 */
export type HeaderResponseDatetimeRfc1123Response = HeaderResponseDatetimeRfc1123Headers & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseDatetimeRfc1123Headers;
  };
};

/**
 * Contains response data for the responseDuration operation.
 */
export type HeaderResponseDurationResponse = HeaderResponseDurationHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseDurationHeaders;
  };
};

/**
 * Contains response data for the responseByte operation.
 */
export type HeaderResponseByteResponse = HeaderResponseByteHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseByteHeaders;
  };
};

/**
 * Optional parameters.
 */
export interface HeaderParamEnumOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Send a post request with header values 'GREY'
   */
  value?: GreyscaleColors;
}

/**
 * Contains response data for the responseEnum operation.
 */
export type HeaderResponseEnumResponse = HeaderResponseEnumHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderResponseEnumHeaders;
  };
};

/**
 * Optional parameters.
 */
export interface HeaderClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}