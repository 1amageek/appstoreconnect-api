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
import type { SubscriptionPromotionalOfferCreateRequestDataRelationships } from './SubscriptionPromotionalOfferCreateRequestDataRelationships';
import {
    SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSON,
    SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSONTyped,
    SubscriptionPromotionalOfferCreateRequestDataRelationshipsToJSON,
} from './SubscriptionPromotionalOfferCreateRequestDataRelationships';
import type { SubscriptionPromotionalOfferInlineCreateAttributes } from './SubscriptionPromotionalOfferInlineCreateAttributes';
import {
    SubscriptionPromotionalOfferInlineCreateAttributesFromJSON,
    SubscriptionPromotionalOfferInlineCreateAttributesFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateAttributesToJSON,
} from './SubscriptionPromotionalOfferInlineCreateAttributes';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferCreateRequestData
 */
export interface SubscriptionPromotionalOfferCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionPromotionalOfferCreateRequestData
     */
    type: SubscriptionPromotionalOfferCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionPromotionalOfferInlineCreateAttributes}
     * @memberof SubscriptionPromotionalOfferCreateRequestData
     */
    attributes: SubscriptionPromotionalOfferInlineCreateAttributes;
    /**
     * 
     * @type {SubscriptionPromotionalOfferCreateRequestDataRelationships}
     * @memberof SubscriptionPromotionalOfferCreateRequestData
     */
    relationships: SubscriptionPromotionalOfferCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionPromotionalOfferCreateRequestDataTypeEnum = {
    SubscriptionPromotionalOffers: 'subscriptionPromotionalOffers'
} as const;
export type SubscriptionPromotionalOfferCreateRequestDataTypeEnum = typeof SubscriptionPromotionalOfferCreateRequestDataTypeEnum[keyof typeof SubscriptionPromotionalOfferCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionPromotionalOfferCreateRequestData interface.
 */
export function instanceOfSubscriptionPromotionalOfferCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function SubscriptionPromotionalOfferCreateRequestDataFromJSON(json: any): SubscriptionPromotionalOfferCreateRequestData {
    return SubscriptionPromotionalOfferCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': SubscriptionPromotionalOfferInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': SubscriptionPromotionalOfferCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionPromotionalOfferCreateRequestDataToJSON(value?: SubscriptionPromotionalOfferCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': SubscriptionPromotionalOfferInlineCreateAttributesToJSON(value.attributes),
        'relationships': SubscriptionPromotionalOfferCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

