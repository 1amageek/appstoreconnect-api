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
import type { SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes } from './SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes';
import {
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSON,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSONTyped,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesToJSON,
} from './SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodeUpdateRequestData
 */
export interface SubscriptionOfferCodeCustomCodeUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeCustomCodeUpdateRequestData
     */
    type: SubscriptionOfferCodeCustomCodeUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeCustomCodeUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes}
     * @memberof SubscriptionOfferCodeCustomCodeUpdateRequestData
     */
    attributes?: SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const SubscriptionOfferCodeCustomCodeUpdateRequestDataTypeEnum = {
    SubscriptionOfferCodeCustomCodes: 'subscriptionOfferCodeCustomCodes'
} as const;
export type SubscriptionOfferCodeCustomCodeUpdateRequestDataTypeEnum = typeof SubscriptionOfferCodeCustomCodeUpdateRequestDataTypeEnum[keyof typeof SubscriptionOfferCodeCustomCodeUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeUpdateRequestData interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodeUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestDataFromJSON(json: any): SubscriptionOfferCodeCustomCodeUpdateRequestData {
    return SubscriptionOfferCodeCustomCodeUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function SubscriptionOfferCodeCustomCodeUpdateRequestDataToJSON(value?: SubscriptionOfferCodeCustomCodeUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

