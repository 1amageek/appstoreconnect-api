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
import type { BetaGroupCreateRequestData } from './BetaGroupCreateRequestData';
import {
    BetaGroupCreateRequestDataFromJSON,
    BetaGroupCreateRequestDataFromJSONTyped,
    BetaGroupCreateRequestDataToJSON,
} from './BetaGroupCreateRequestData';

/**
 * 
 * @export
 * @interface BetaGroupCreateRequest
 */
export interface BetaGroupCreateRequest {
    /**
     * 
     * @type {BetaGroupCreateRequestData}
     * @memberof BetaGroupCreateRequest
     */
    data: BetaGroupCreateRequestData;
}

/**
 * Check if a given object implements the BetaGroupCreateRequest interface.
 */
export function instanceOfBetaGroupCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaGroupCreateRequestFromJSON(json: any): BetaGroupCreateRequest {
    return BetaGroupCreateRequestFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaGroupCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaGroupCreateRequestToJSON(value?: BetaGroupCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaGroupCreateRequestDataToJSON(value.data),
    };
}

