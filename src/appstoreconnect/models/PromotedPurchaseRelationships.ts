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
import type { InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 } from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
import type { PromotedPurchaseRelationshipsPromotionImages } from './PromotedPurchaseRelationshipsPromotionImages';
import {
    PromotedPurchaseRelationshipsPromotionImagesFromJSON,
    PromotedPurchaseRelationshipsPromotionImagesFromJSONTyped,
    PromotedPurchaseRelationshipsPromotionImagesToJSON,
} from './PromotedPurchaseRelationshipsPromotionImages';
import type { PromotedPurchaseRelationshipsSubscription } from './PromotedPurchaseRelationshipsSubscription';
import {
    PromotedPurchaseRelationshipsSubscriptionFromJSON,
    PromotedPurchaseRelationshipsSubscriptionFromJSONTyped,
    PromotedPurchaseRelationshipsSubscriptionToJSON,
} from './PromotedPurchaseRelationshipsSubscription';

/**
 * 
 * @export
 * @interface PromotedPurchaseRelationships
 */
export interface PromotedPurchaseRelationships {
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2}
     * @memberof PromotedPurchaseRelationships
     */
    inAppPurchaseV2?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2;
    /**
     * 
     * @type {PromotedPurchaseRelationshipsSubscription}
     * @memberof PromotedPurchaseRelationships
     */
    subscription?: PromotedPurchaseRelationshipsSubscription;
    /**
     * 
     * @type {PromotedPurchaseRelationshipsPromotionImages}
     * @memberof PromotedPurchaseRelationships
     */
    promotionImages?: PromotedPurchaseRelationshipsPromotionImages;
}

/**
 * Check if a given object implements the PromotedPurchaseRelationships interface.
 */
export function instanceOfPromotedPurchaseRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotedPurchaseRelationshipsFromJSON(json: any): PromotedPurchaseRelationships {
    return PromotedPurchaseRelationshipsFromJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inAppPurchaseV2': !exists(json, 'inAppPurchaseV2') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON(json['inAppPurchaseV2']),
        'subscription': !exists(json, 'subscription') ? undefined : PromotedPurchaseRelationshipsSubscriptionFromJSON(json['subscription']),
        'promotionImages': !exists(json, 'promotionImages') ? undefined : PromotedPurchaseRelationshipsPromotionImagesFromJSON(json['promotionImages']),
    };
}

export function PromotedPurchaseRelationshipsToJSON(value?: PromotedPurchaseRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inAppPurchaseV2': InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON(value.inAppPurchaseV2),
        'subscription': PromotedPurchaseRelationshipsSubscriptionToJSON(value.subscription),
        'promotionImages': PromotedPurchaseRelationshipsPromotionImagesToJSON(value.promotionImages),
    };
}
