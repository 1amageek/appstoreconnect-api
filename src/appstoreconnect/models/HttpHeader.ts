/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HttpHeader
 */
export interface HttpHeader {
    /**
     * 
     * @type {string}
     * @memberof HttpHeader
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof HttpHeader
     */
    value?: string;
}

/**
 * Check if a given object implements the HttpHeader interface.
 */
export function instanceOfHttpHeader(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HttpHeaderFromJSON(json: any): HttpHeader {
    return HttpHeaderFromJSONTyped(json, false);
}

export function HttpHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): HttpHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function HttpHeaderToJSON(value?: HttpHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

