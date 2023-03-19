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
import type { PromotedPurchaseRelationshipsSubscription } from './PromotedPurchaseRelationshipsSubscription';
import {
    PromotedPurchaseRelationshipsSubscriptionFromJSON,
    PromotedPurchaseRelationshipsSubscriptionFromJSONTyped,
    PromotedPurchaseRelationshipsSubscriptionToJSON,
} from './PromotedPurchaseRelationshipsSubscription';
import type { SubscriptionPromotionalOfferRelationshipsPrices } from './SubscriptionPromotionalOfferRelationshipsPrices';
import {
    SubscriptionPromotionalOfferRelationshipsPricesFromJSON,
    SubscriptionPromotionalOfferRelationshipsPricesFromJSONTyped,
    SubscriptionPromotionalOfferRelationshipsPricesToJSON,
} from './SubscriptionPromotionalOfferRelationshipsPrices';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferRelationships
 */
export interface SubscriptionPromotionalOfferRelationships {
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscription}
     * @memberof SubscriptionPromotionalOfferRelationships
     */
    subscription?: PromotedPurchaseRelationshipsSubscription;
    /**
     * 
     * @type {SubscriptionPromotionalOfferRelationshipsPrices}
     * @memberof SubscriptionPromotionalOfferRelationships
     */
    prices?: SubscriptionPromotionalOfferRelationshipsPrices;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferRelationships interface.
 */
export function instanceOfSubscriptionPromotionalOfferRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionPromotionalOfferRelationshipsFromJSON(json: any): SubscriptionPromotionalOfferRelationships {
    return SubscriptionPromotionalOfferRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': !exists(json, 'subscription') ? undefined : PromotedPurchaseRelationshipsSubscriptionFromJSON(json['subscription']),
        'prices': !exists(json, 'prices') ? undefined : SubscriptionPromotionalOfferRelationshipsPricesFromJSON(json['prices']),
    };
}

export function SubscriptionPromotionalOfferRelationshipsToJSON(value?: SubscriptionPromotionalOfferRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': PromotedPurchaseRelationshipsSubscriptionToJSON(value.subscription),
        'prices': SubscriptionPromotionalOfferRelationshipsPricesToJSON(value.prices),
    };
}

