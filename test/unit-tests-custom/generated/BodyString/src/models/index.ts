/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";
import * as coreHttp from "@azure/core-http";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing RefColorConstant.
 */
export interface RefColorConstant {
  /**
   * Sample string.
   */
  field1?: string;
}

/**
 * An interface representing AutoRestSwaggerBATServiceOptions.
 */
export interface AutoRestSwaggerBATServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface StringPutNullOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Possible values include: ''
   */
  stringBody?: StringBody;
}

/**
 * Defines values for Colors.
 * Possible values include: 'red color', 'green-color', 'blue_color'
 * @readonly
 * @enum {string}
 */
export type Colors = 'red color' | 'green-color' | 'blue_color';

/**
 * Defines values for StringBody.
 * Possible values include: ''
 * @readonly
 * @enum {string}
 */
export type StringBody = null;

/**
 * Defines values for GetNullOKResponse.
 * Possible values include: ''
 * @readonly
 * @enum {string}
 */
export type GetNullOKResponse = null;

/**
 * Defines values for GetEmptyOKResponse.
 * Possible values include: ''
 * @readonly
 * @enum {string}
 */
export type GetEmptyOKResponse = '';

/**
 * Defines values for GetMbcsOKResponse.
 * Possible values include: '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€'
 * @readonly
 * @enum {string}
 */
export type GetMbcsOKResponse = '啊齄丂狛狜隣郎隣兀﨩ˊ〞〡￤℡㈱‐ー﹡﹢﹫、〓ⅰⅹ⒈€㈠㈩ⅠⅫ！￣ぁんァヶΑ︴АЯаяāɡㄅㄩ─╋︵﹄︻︱︳︴ⅰⅹɑɡ〇〾⿻⺁䜣€';

/**
 * Defines values for GetWhitespaceOKResponse.
 * Possible values include: '    Now is the time for all good men to come to the aid of their
 * country    '
 * @readonly
 * @enum {string}
 */
export type GetWhitespaceOKResponse = '    Now is the time for all good men to come to the aid of their country    ';

/**
 * Contains response data for the getNull operation.
 */
export type StringGetNullResponse = {
  /**
   * The parsed response body.
   */
  body: GetNullOKResponse;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GetNullOKResponse;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type StringGetEmptyResponse = {
  /**
   * The parsed response body.
   */
  body: GetEmptyOKResponse;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GetEmptyOKResponse;
    };
};

/**
 * Contains response data for the getMbcs operation.
 */
export type StringGetMbcsResponse = {
  /**
   * The parsed response body.
   */
  body: GetMbcsOKResponse;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GetMbcsOKResponse;
    };
};

/**
 * Contains response data for the getWhitespace operation.
 */
export type StringGetWhitespaceResponse = {
  /**
   * The parsed response body.
   */
  body: GetWhitespaceOKResponse;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GetWhitespaceOKResponse;
    };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type StringGetNotProvidedResponse = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the getBase64Encoded operation.
 */
export type StringGetBase64EncodedResponse = {
  /**
   * The parsed response body.
   */
  body: Uint8Array;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Uint8Array;
    };
};

/**
 * Contains response data for the getBase64UrlEncoded operation.
 */
export type StringGetBase64UrlEncodedResponse = {
  /**
   * The parsed response body.
   */
  body: Uint8Array;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Uint8Array;
    };
};

/**
 * Contains response data for the getNullBase64UrlEncoded operation.
 */
export type StringGetNullBase64UrlEncodedResponse = {
  /**
   * The parsed response body.
   */
  body: Uint8Array;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Uint8Array;
    };
};

/**
 * Contains response data for the getNotExpandable operation.
 */
export type EnumModelGetNotExpandableResponse = {
  /**
   * The parsed response body.
   */
  body: Colors;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Colors;
    };
};

/**
 * Contains response data for the getReferenced operation.
 */
export type EnumModelGetReferencedResponse = {
  /**
   * The parsed response body.
   */
  body: Colors;

  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Colors;
    };
};

/**
 * Contains response data for the getReferencedConstant operation.
 */
export type EnumModelGetReferencedConstantResponse = RefColorConstant & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RefColorConstant;
    };
};
