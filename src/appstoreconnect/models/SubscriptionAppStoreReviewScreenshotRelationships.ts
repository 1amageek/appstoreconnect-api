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

/**
 * 
 * @export
 * @interface SubscriptionAppStoreReviewScreenshotRelationships
 */
export interface SubscriptionAppStoreReviewScreenshotRelationships {
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscription}
     * @memberof SubscriptionAppStoreReviewScreenshotRelationships
     */
    subscription?: PromotedPurchaseRelationshipsSubscription;
}

/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotRelationships interface.
 */
export function instanceOfSubscriptionAppStoreReviewScreenshotRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionAppStoreReviewScreenshotRelationshipsFromJSON(json: any): SubscriptionAppStoreReviewScreenshotRelationships {
    return SubscriptionAppStoreReviewScreenshotRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionAppStoreReviewScreenshotRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': !exists(json, 'subscription') ? undefined : PromotedPurchaseRelationshipsSubscriptionFromJSON(json['subscription']),
    };
}

export function SubscriptionAppStoreReviewScreenshotRelationshipsToJSON(value?: SubscriptionAppStoreReviewScreenshotRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': PromotedPurchaseRelationshipsSubscriptionToJSON(value.subscription),
    };
}

