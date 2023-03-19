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
import type { InAppPurchaseSubmissionCreateRequestData } from './InAppPurchaseSubmissionCreateRequestData';
import {
    InAppPurchaseSubmissionCreateRequestDataFromJSON,
    InAppPurchaseSubmissionCreateRequestDataFromJSONTyped,
    InAppPurchaseSubmissionCreateRequestDataToJSON,
} from './InAppPurchaseSubmissionCreateRequestData';

/**
 * 
 * @export
 * @interface InAppPurchaseSubmissionCreateRequest
 */
export interface InAppPurchaseSubmissionCreateRequest {
    /**
     * 
     * @type {InAppPurchaseSubmissionCreateRequestData}
     * @memberof InAppPurchaseSubmissionCreateRequest
     */
    data: InAppPurchaseSubmissionCreateRequestData;
}

/**
 * Check if a given object implements the InAppPurchaseSubmissionCreateRequest interface.
 */
export function instanceOfInAppPurchaseSubmissionCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function InAppPurchaseSubmissionCreateRequestFromJSON(json: any): InAppPurchaseSubmissionCreateRequest {
    return InAppPurchaseSubmissionCreateRequestFromJSONTyped(json, false);
}

export function InAppPurchaseSubmissionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseSubmissionCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': InAppPurchaseSubmissionCreateRequestDataFromJSON(json['data']),
    };
}

export function InAppPurchaseSubmissionCreateRequestToJSON(value?: InAppPurchaseSubmissionCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchaseSubmissionCreateRequestDataToJSON(value.data),
    };
}

