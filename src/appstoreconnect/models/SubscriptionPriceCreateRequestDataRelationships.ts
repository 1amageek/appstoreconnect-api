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
import type { InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory } from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import {
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON,
} from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import type { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription } from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import {
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON,
} from './SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription';
import type { SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint } from './SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint';
import {
    SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointFromJSON,
    SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointFromJSONTyped,
    SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointToJSON,
} from './SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint';

/**
 * 
 * @export
 * @interface SubscriptionPriceCreateRequestDataRelationships
 */
export interface SubscriptionPriceCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription}
     * @memberof SubscriptionPriceCreateRequestDataRelationships
     */
    subscription: SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscription;
    /**
     * 
     * @type {InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory}
     * @memberof SubscriptionPriceCreateRequestDataRelationships
     */
    territory?: InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory;
    /**
     * 
     * @type {SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint}
     * @memberof SubscriptionPriceCreateRequestDataRelationships
     */
    subscriptionPricePoint: SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePoint;
}

/**
 * Check if a given object implements the SubscriptionPriceCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionPriceCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscription" in value;
    isInstance = isInstance && "subscriptionPricePoint" in value;

    return isInstance;
}

export function SubscriptionPriceCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionPriceCreateRequestDataRelationships {
    return SubscriptionPriceCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionPriceCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionFromJSON(json['subscription']),
        'territory': !exists(json, 'territory') ? undefined : InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json['territory']),
        'subscriptionPricePoint': SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointFromJSON(json['subscriptionPricePoint']),
    };
}

export function SubscriptionPriceCreateRequestDataRelationshipsToJSON(value?: SubscriptionPriceCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscription': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationshipsSubscriptionToJSON(value.subscription),
        'territory': InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value.territory),
        'subscriptionPricePoint': SubscriptionPriceCreateRequestDataRelationshipsSubscriptionPricePointToJSON(value.subscriptionPricePoint),
    };
}
