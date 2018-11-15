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
import * as Models from "../models";
import * as Mappers from "../models/queriesMappers";
import * as Parameters from "../models/parameters";
import { AutoRestUrlTestServiceContext } from "../autoRestUrlTestServiceContext";

/** Class representing a Queries. */
export class Queries {
  private readonly client: AutoRestUrlTestServiceContext;

  /**
   * Create a Queries.
   * @param {AutoRestUrlTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestUrlTestServiceContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value on path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getBooleanTrue(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getBooleanTrue(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getBooleanTrue(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getBooleanTrue(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBooleanTrueOperationSpec,
      callback);
  }

  /**
   * Get false Boolean value on path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getBooleanFalse(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getBooleanFalse(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getBooleanFalse(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getBooleanFalse(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBooleanFalseOperationSpec,
      callback);
  }

  /**
   * Get null Boolean value on query (query string should be absent)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getBooleanNull(options?: Models.QueriesGetBooleanNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getBooleanNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getBooleanNull(options: Models.QueriesGetBooleanNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getBooleanNull(options?: Models.QueriesGetBooleanNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBooleanNullOperationSpec,
      callback);
  }

  /**
   * Get '1000000' integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getIntOneMillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getIntOneMillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getIntOneMillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getIntOneMillion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntOneMillionOperationSpec,
      callback);
  }

  /**
   * Get '-1000000' integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getIntNegativeOneMillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getIntNegativeOneMillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getIntNegativeOneMillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getIntNegativeOneMillion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntNegativeOneMillionOperationSpec,
      callback);
  }

  /**
   * Get null integer value (no query parameter)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getIntNull(options?: Models.QueriesGetIntNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getIntNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getIntNull(options: Models.QueriesGetIntNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getIntNull(options?: Models.QueriesGetIntNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntNullOperationSpec,
      callback);
  }

  /**
   * Get '10000000000' 64 bit integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getTenBillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getTenBillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getTenBillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getTenBillion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getTenBillionOperationSpec,
      callback);
  }

  /**
   * Get '-10000000000' 64 bit integer value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getNegativeTenBillion(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getNegativeTenBillion(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNegativeTenBillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getNegativeTenBillion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNegativeTenBillionOperationSpec,
      callback);
  }

  /**
   * Get 'null 64 bit integer value (no query param in uri)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getLongNull(options?: Models.QueriesGetLongNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getLongNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLongNull(options: Models.QueriesGetLongNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getLongNull(options?: Models.QueriesGetLongNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLongNullOperationSpec,
      callback);
  }

  /**
   * Get '1.034E+20' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  floatScientificPositive(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  floatScientificPositive(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  floatScientificPositive(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  floatScientificPositive(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      floatScientificPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-1.034E-20' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  floatScientificNegative(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  floatScientificNegative(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  floatScientificNegative(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  floatScientificNegative(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      floatScientificNegativeOperationSpec,
      callback);
  }

  /**
   * Get null numeric value (no query parameter)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  floatNull(options?: Models.QueriesFloatNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  floatNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  floatNull(options: Models.QueriesFloatNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  floatNull(options?: Models.QueriesFloatNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      floatNullOperationSpec,
      callback);
  }

  /**
   * Get '9999999.999' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  doubleDecimalPositive(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  doubleDecimalPositive(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  doubleDecimalPositive(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  doubleDecimalPositive(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      doubleDecimalPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-9999999.999' numeric value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  doubleDecimalNegative(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  doubleDecimalNegative(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  doubleDecimalNegative(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  doubleDecimalNegative(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      doubleDecimalNegativeOperationSpec,
      callback);
  }

  /**
   * Get null numeric value (no query parameter)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  doubleNull(options?: Models.QueriesDoubleNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  doubleNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  doubleNull(options: Models.QueriesDoubleNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  doubleNull(options?: Models.QueriesDoubleNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      doubleNullOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringUnicode(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  stringUnicode(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  stringUnicode(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stringUnicode(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringUnicodeOperationSpec,
      callback);
  }

  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringUrlEncoded(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  stringUrlEncoded(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  stringUrlEncoded(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stringUrlEncoded(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringUrlEncodedOperationSpec,
      callback);
  }

  /**
   * Get ''
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringEmpty(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  stringEmpty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  stringEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stringEmpty(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringEmptyOperationSpec,
      callback);
  }

  /**
   * Get null (no query parameter in url)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stringNull(options?: Models.QueriesStringNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  stringNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  stringNull(options: Models.QueriesStringNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  stringNull(options?: Models.QueriesStringNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringNullOperationSpec,
      callback);
  }

  /**
   * Get using uri with query parameter 'green color'
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enumValid(options?: Models.QueriesEnumValidOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  enumValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  enumValid(options: Models.QueriesEnumValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  enumValid(options?: Models.QueriesEnumValidOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      enumValidOperationSpec,
      callback);
  }

  /**
   * Get null (no query parameter in url)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enumNull(options?: Models.QueriesEnumNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  enumNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  enumNull(options: Models.QueriesEnumNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  enumNull(options?: Models.QueriesEnumNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      enumNullOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  byteMultiByte(options?: Models.QueriesByteMultiByteOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  byteMultiByte(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  byteMultiByte(options: Models.QueriesByteMultiByteOptionalParams, callback: msRest.ServiceCallback<void>): void;
  byteMultiByte(options?: Models.QueriesByteMultiByteOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      byteMultiByteOperationSpec,
      callback);
  }

  /**
   * Get '' as byte array
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  byteEmpty(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  byteEmpty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  byteEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  byteEmpty(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      byteEmptyOperationSpec,
      callback);
  }

  /**
   * Get null as byte array (no query parameters in uri)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  byteNull(options?: Models.QueriesByteNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  byteNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  byteNull(options: Models.QueriesByteNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  byteNull(options?: Models.QueriesByteNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      byteNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01' as date
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  dateValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  dateValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  dateValid(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateValidOperationSpec,
      callback);
  }

  /**
   * Get null as date - this should result in no query parameters in uri
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateNull(options?: Models.QueriesDateNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  dateNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  dateNull(options: Models.QueriesDateNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  dateNull(options?: Models.QueriesDateNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateTimeValid(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  dateTimeValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  dateTimeValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  dateTimeValid(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateTimeValidOperationSpec,
      callback);
  }

  /**
   * Get null as date-time, should result in no query parameters in uri
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  dateTimeNull(options?: Models.QueriesDateTimeNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  dateTimeNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  dateTimeNull(options: Models.QueriesDateTimeNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  dateTimeNull(options?: Models.QueriesDateTimeNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateTimeNullOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * csv-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringCsvValid(options?: Models.QueriesArrayStringCsvValidOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringCsvValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringCsvValid(options: Models.QueriesArrayStringCsvValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringCsvValid(options?: Models.QueriesArrayStringCsvValidOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringCsvValidOperationSpec,
      callback);
  }

  /**
   * Get a null array of string using the csv-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringCsvNull(options?: Models.QueriesArrayStringCsvNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringCsvNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringCsvNull(options: Models.QueriesArrayStringCsvNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringCsvNull(options?: Models.QueriesArrayStringCsvNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringCsvNullOperationSpec,
      callback);
  }

  /**
   * Get an empty array [] of string using the csv-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringCsvEmpty(options?: Models.QueriesArrayStringCsvEmptyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringCsvEmpty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringCsvEmpty(options: Models.QueriesArrayStringCsvEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringCsvEmpty(options?: Models.QueriesArrayStringCsvEmptyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringCsvEmptyOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * ssv-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringSsvValid(options?: Models.QueriesArrayStringSsvValidOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringSsvValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringSsvValid(options: Models.QueriesArrayStringSsvValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringSsvValid(options?: Models.QueriesArrayStringSsvValidOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringSsvValidOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * tsv-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringTsvValid(options?: Models.QueriesArrayStringTsvValidOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringTsvValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringTsvValid(options: Models.QueriesArrayStringTsvValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringTsvValid(options?: Models.QueriesArrayStringTsvValidOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringTsvValidOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * pipes-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringPipesValid(options?: Models.QueriesArrayStringPipesValidOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringPipesValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringPipesValid(options: Models.QueriesArrayStringPipesValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringPipesValid(options?: Models.QueriesArrayStringPipesValidOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringPipesValidOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getBooleanTrueOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/bool/true",
  queryParameters: [
    Parameters.boolQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getBooleanFalseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/bool/false",
  queryParameters: [
    Parameters.boolQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getBooleanNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/bool/null",
  queryParameters: [
    Parameters.boolQuery2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntOneMillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/int/1000000",
  queryParameters: [
    Parameters.intQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntNegativeOneMillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/int/-1000000",
  queryParameters: [
    Parameters.intQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/int/null",
  queryParameters: [
    Parameters.intQuery2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getTenBillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/long/10000000000",
  queryParameters: [
    Parameters.longQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNegativeTenBillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/long/-10000000000",
  queryParameters: [
    Parameters.longQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLongNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/long/null",
  queryParameters: [
    Parameters.longQuery2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificPositiveOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/float/1.034E+20",
  queryParameters: [
    Parameters.floatQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificNegativeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/float/-1.034E-20",
  queryParameters: [
    Parameters.floatQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/float/null",
  queryParameters: [
    Parameters.floatQuery2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalPositiveOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/double/9999999.999",
  queryParameters: [
    Parameters.doubleQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalNegativeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/double/-9999999.999",
  queryParameters: [
    Parameters.doubleQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/double/null",
  queryParameters: [
    Parameters.doubleQuery2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUnicodeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/string/unicode/",
  queryParameters: [
    Parameters.stringQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUrlEncodedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend",
  queryParameters: [
    Parameters.stringQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/string/empty",
  queryParameters: [
    Parameters.stringQuery2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/string/null",
  queryParameters: [
    Parameters.stringQuery3
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/enum/green%20color",
  queryParameters: [
    Parameters.enumQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/enum/null",
  queryParameters: [
    Parameters.enumQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteMultiByteOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/byte/multibyte",
  queryParameters: [
    Parameters.byteQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/byte/empty",
  queryParameters: [
    Parameters.byteQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/byte/null",
  queryParameters: [
    Parameters.byteQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/date/2012-01-01",
  queryParameters: [
    Parameters.dateQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/date/null",
  queryParameters: [
    Parameters.dateQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/datetime/2012-01-01T01%3A01%3A01Z",
  queryParameters: [
    Parameters.dateTimeQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/datetime/null",
  queryParameters: [
    Parameters.dateTimeQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringCsvValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/csv/string/valid",
  queryParameters: [
    Parameters.arrayQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringCsvNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/csv/string/null",
  queryParameters: [
    Parameters.arrayQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringCsvEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/csv/string/empty",
  queryParameters: [
    Parameters.arrayQuery0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringSsvValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/ssv/string/valid",
  queryParameters: [
    Parameters.arrayQuery1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringTsvValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/tsv/string/valid",
  queryParameters: [
    Parameters.arrayQuery2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringPipesValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/pipes/string/valid",
  queryParameters: [
    Parameters.arrayQuery3
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
