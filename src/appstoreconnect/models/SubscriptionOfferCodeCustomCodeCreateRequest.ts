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
import type { SubscriptionOfferCodeCustomCodeCreateRequestData } from './SubscriptionOfferCodeCustomCodeCreateRequestData';
import {
    SubscriptionOfferCodeCustomCodeCreateRequestDataFromJSON,
    SubscriptionOfferCodeCustomCodeCreateRequestDataFromJSONTyped,
    SubscriptionOfferCodeCustomCodeCreateRequestDataToJSON,
} from './SubscriptionOfferCodeCustomCodeCreateRequestData';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodeCreateRequest
 */
export interface SubscriptionOfferCodeCustomCodeCreateRequest {
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeCreateRequestData}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequest
     */
    data: SubscriptionOfferCodeCustomCodeCreateRequestData;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeCreateRequest interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodeCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodeCreateRequestFromJSON(json: any): SubscriptionOfferCodeCustomCodeCreateRequest {
    return SubscriptionOfferCodeCustomCodeCreateRequestFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodeCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeCustomCodeCreateRequestDataFromJSON(json['data']),
    };
}

export function SubscriptionOfferCodeCustomCodeCreateRequestToJSON(value?: SubscriptionOfferCodeCustomCodeCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeCustomCodeCreateRequestDataToJSON(value.data),
    };
}

