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
import type { SubscriptionPromotionalOfferRelationshipsPricesDataInner } from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';
import {
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON,
} from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices
 */
export interface SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices {
    /**
     * 
     * @type {Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>}
     * @memberof SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices
     */
    data: Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices interface.
 */
export function instanceOfSubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSON(json: any): SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices {
    return SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionPromotionalOfferCreateRequestDataRelationshipsPricesToJSON(value?: SubscriptionPromotionalOfferCreateRequestDataRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON)),
    };
}

