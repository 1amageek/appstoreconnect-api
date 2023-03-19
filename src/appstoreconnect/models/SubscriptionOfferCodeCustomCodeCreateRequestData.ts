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
import type { SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes } from './SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes';
import {
    SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesFromJSON,
    SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesFromJSONTyped,
    SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesToJSON,
} from './SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes';
import type { SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships } from './SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships';
import {
    SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSON,
    SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsToJSON,
} from './SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodeCreateRequestData
 */
export interface SubscriptionOfferCodeCustomCodeCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequestData
     */
    type: SubscriptionOfferCodeCustomCodeCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequestData
     */
    attributes: SubscriptionOfferCodeCustomCodeCreateRequestDataAttributes;
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequestData
     */
    relationships: SubscriptionOfferCodeCustomCodeCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionOfferCodeCustomCodeCreateRequestDataTypeEnum = {
    SubscriptionOfferCodeCustomCodes: 'subscriptionOfferCodeCustomCodes'
} as const;
export type SubscriptionOfferCodeCustomCodeCreateRequestDataTypeEnum = typeof SubscriptionOfferCodeCustomCodeCreateRequestDataTypeEnum[keyof typeof SubscriptionOfferCodeCustomCodeCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeCreateRequestData interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodeCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodeCreateRequestDataFromJSON(json: any): SubscriptionOfferCodeCustomCodeCreateRequestData {
    return SubscriptionOfferCodeCustomCodeCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodeCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionOfferCodeCustomCodeCreateRequestDataToJSON(value?: SubscriptionOfferCodeCustomCodeCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': SubscriptionOfferCodeCustomCodeCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
