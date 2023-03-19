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
import type { InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2 } from './InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2';
import {
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSON,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2ToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2';
import type { InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory } from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import {
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON,
} from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import type { InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices } from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices';
import {
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesToJSON,
} from './InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices';

/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleCreateRequestDataRelationships
 */
export interface InAppPurchasePriceScheduleCreateRequestDataRelationships {
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2}
     * @memberof InAppPurchasePriceScheduleCreateRequestDataRelationships
     */
    inAppPurchase: InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2;
    /**
     * 
     * @type {InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory}
     * @memberof InAppPurchasePriceScheduleCreateRequestDataRelationships
     */
    baseTerritory?: InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory;
    /**
     * 
     * @type {InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices}
     * @memberof InAppPurchasePriceScheduleCreateRequestDataRelationships
     */
    manualPrices: InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleCreateRequestDataRelationships interface.
 */
export function instanceOfInAppPurchasePriceScheduleCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "inAppPurchase" in value;
    isInstance = isInstance && "manualPrices" in value;

    return isInstance;
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsFromJSON(json: any): InAppPurchasePriceScheduleCreateRequestDataRelationships {
    return InAppPurchasePriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'inAppPurchase': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2FromJSON(json['inAppPurchase']),
        'baseTerritory': !exists(json, 'baseTerritory') ? undefined : InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json['baseTerritory']),
        'manualPrices': InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON(json['manualPrices']),
    };
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsToJSON(value?: InAppPurchasePriceScheduleCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'inAppPurchase': InAppPurchaseAppStoreReviewScreenshotCreateRequestDataRelationshipsInAppPurchaseV2ToJSON(value.inAppPurchase),
        'baseTerritory': InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value.baseTerritory),
        'manualPrices': InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesToJSON(value.manualPrices),
    };
}
