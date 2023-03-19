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
import type { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription } from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import {
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON,
} from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import type { SubscriptionOfferCodeCreateRequestDataRelationshipsPrices } from './SubscriptionOfferCodeCreateRequestDataRelationshipsPrices';
import {
    SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSON,
    SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSONTyped,
    SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSON,
} from './SubscriptionOfferCodeCreateRequestDataRelationshipsPrices';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCreateRequestDataRelationships
 */
export interface SubscriptionOfferCodeCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionOfferCodeCreateRequestDataRelationships
     */
    subscription: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription;
    /**
     * 
     * @type {SubscriptionOfferCodeCreateRequestDataRelationshipsPrices}
     * @memberof SubscriptionOfferCodeCreateRequestDataRelationships
     */
    prices: SubscriptionOfferCodeCreateRequestDataRelationshipsPrices;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionOfferCodeCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscription" in value;
    isInstance = isInstance && "prices" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionOfferCodeCreateRequestDataRelationships {
    return SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON(json['subscription']),
        'prices': SubscriptionOfferCodeCreateRequestDataRelationshipsPricesFromJSON(json['prices']),
    };
}

export function SubscriptionOfferCodeCreateRequestDataRelationshipsToJSON(value?: SubscriptionOfferCodeCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON(value.subscription),
        'prices': SubscriptionOfferCodeCreateRequestDataRelationshipsPricesToJSON(value.prices),
    };
}

