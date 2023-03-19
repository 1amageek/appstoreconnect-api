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
exports.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSON = exports.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped = exports.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSON = exports.instanceOfInAppPurchaseV2RelationshipsAppStoreReviewScreenshot = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData_1 = require("./InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData");
/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsAppStoreReviewScreenshot interface.
 */
function instanceOfInAppPurchaseV2RelationshipsAppStoreReviewScreenshot(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInAppPurchaseV2RelationshipsAppStoreReviewScreenshot = instanceOfInAppPurchaseV2RelationshipsAppStoreReviewScreenshot;
function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSON(json) {
    return InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped(json, false);
}
exports.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSON = InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSON;
function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData_1.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataFromJSON)(json['data']),
    };
}
exports.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped = InAppPurchaseV2RelationshipsAppStoreReviewScreenshotFromJSONTyped;
function InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, InAppPurchaseV2RelationshipsAppStoreReviewScreenshotData_1.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotDataToJSON)(value.data),
    };
}
exports.InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSON = InAppPurchaseV2RelationshipsAppStoreReviewScreenshotToJSON;
//# sourceMappingURL=InAppPurchaseV2RelationshipsAppStoreReviewScreenshot.js.map