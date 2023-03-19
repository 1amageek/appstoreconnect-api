"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InAppPurchasePriceScheduleRelationshipsToJSON = exports.InAppPurchasePriceScheduleRelationshipsFromJSONTyped = exports.InAppPurchasePriceScheduleRelationshipsFromJSON = exports.instanceOfInAppPurchasePriceScheduleRelationships = void 0;
const runtime_1 = require("../runtime");
const AppPricePointV3RelationshipsTerritory_1 = require("./AppPricePointV3RelationshipsTerritory");
const InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2_1 = require("./InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2");
const InAppPurchasePriceScheduleRelationshipsManualPrices_1 = require("./InAppPurchasePriceScheduleRelationshipsManualPrices");
/**
 * Check if a given object implements the InAppPurchasePriceScheduleRelationships interface.
 */
function instanceOfInAppPurchasePriceScheduleRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInAppPurchasePriceScheduleRelationships = instanceOfInAppPurchasePriceScheduleRelationships;
function InAppPurchasePriceScheduleRelationshipsFromJSON(json) {
    return InAppPurchasePriceScheduleRelationshipsFromJSONTyped(json, false);
}
exports.InAppPurchasePriceScheduleRelationshipsFromJSON = InAppPurchasePriceScheduleRelationshipsFromJSON;
function InAppPurchasePriceScheduleRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'inAppPurchase': !(0, runtime_1.exists)(json, 'inAppPurchase') ? undefined : (0, InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2_1.InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON)(json['inAppPurchase']),
        'baseTerritory': !(0, runtime_1.exists)(json, 'baseTerritory') ? undefined : (0, AppPricePointV3RelationshipsTerritory_1.AppPricePointV3RelationshipsTerritoryFromJSON)(json['baseTerritory']),
        'manualPrices': !(0, runtime_1.exists)(json, 'manualPrices') ? undefined : (0, InAppPurchasePriceScheduleRelationshipsManualPrices_1.InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON)(json['manualPrices']),
        'automaticPrices': !(0, runtime_1.exists)(json, 'automaticPrices') ? undefined : (0, InAppPurchasePriceScheduleRelationshipsManualPrices_1.InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON)(json['automaticPrices']),
    };
}
exports.InAppPurchasePriceScheduleRelationshipsFromJSONTyped = InAppPurchasePriceScheduleRelationshipsFromJSONTyped;
function InAppPurchasePriceScheduleRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'inAppPurchase': (0, InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2_1.InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON)(value.inAppPurchase),
        'baseTerritory': (0, AppPricePointV3RelationshipsTerritory_1.AppPricePointV3RelationshipsTerritoryToJSON)(value.baseTerritory),
        'manualPrices': (0, InAppPurchasePriceScheduleRelationshipsManualPrices_1.InAppPurchasePriceScheduleRelationshipsManualPricesToJSON)(value.manualPrices),
        'automaticPrices': (0, InAppPurchasePriceScheduleRelationshipsManualPrices_1.InAppPurchasePriceScheduleRelationshipsManualPricesToJSON)(value.automaticPrices),
    };
}
exports.InAppPurchasePriceScheduleRelationshipsToJSON = InAppPurchasePriceScheduleRelationshipsToJSON;
//# sourceMappingURL=InAppPurchasePriceScheduleRelationships.js.map