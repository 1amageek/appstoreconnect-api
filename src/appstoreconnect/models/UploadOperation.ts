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
import type { HttpHeader } from './HttpHeader';
import {
    HttpHeaderFromJSON,
    HttpHeaderFromJSONTyped,
    HttpHeaderToJSON,
} from './HttpHeader';

/**
 * 
 * @export
 * @interface UploadOperation
 */
export interface UploadOperation {
    /**
     * 
     * @type {string}
     * @memberof UploadOperation
     */
    method?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadOperation
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof UploadOperation
     */
    length?: number;
    /**
     * 
     * @type {number}
     * @memberof UploadOperation
     */
    offset?: number;
    /**
     * 
     * @type {Array<HttpHeader>}
     * @memberof UploadOperation
     */
    requestHeaders?: Array<HttpHeader>;
}

/**
 * Check if a given object implements the UploadOperation interface.
 */
export function instanceOfUploadOperation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UploadOperationFromJSON(json: any): UploadOperation {
    return UploadOperationFromJSONTyped(json, false);
}

export function UploadOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadOperation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'method': !exists(json, 'method') ? undefined : json['method'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'requestHeaders': !exists(json, 'requestHeaders') ? undefined : ((json['requestHeaders'] as Array<any>).map(HttpHeaderFromJSON)),
    };
}

export function UploadOperationToJSON(value?: UploadOperation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'method': value.method,
        'url': value.url,
        'length': value.length,
        'offset': value.offset,
        'requestHeaders': value.requestHeaders === undefined ? undefined : ((value.requestHeaders as Array<any>).map(HttpHeaderToJSON)),
    };
}

