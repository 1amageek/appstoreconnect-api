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
exports.InAppPurchaseAppStoreReviewScreenshotToJSON = exports.InAppPurchaseAppStoreReviewScreenshotFromJSONTyped = exports.InAppPurchaseAppStoreReviewScreenshotFromJSON = exports.instanceOfInAppPurchaseAppStoreReviewScreenshot = exports.InAppPurchaseAppStoreReviewScreenshotTypeEnum = void 0;
const runtime_1 = require("../runtime");
const AppScreenshotAttributes_1 = require("./AppScreenshotAttributes");
const InAppPurchaseAppStoreReviewScreenshotRelationships_1 = require("./InAppPurchaseAppStoreReviewScreenshotRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.InAppPurchaseAppStoreReviewScreenshotTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: 'inAppPurchaseAppStoreReviewScreenshots'
};
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshot interface.
 */
function instanceOfInAppPurchaseAppStoreReviewScreenshot(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfInAppPurchaseAppStoreReviewScreenshot = instanceOfInAppPurchaseAppStoreReviewScreenshot;
function InAppPurchaseAppStoreReviewScreenshotFromJSON(json) {
    return InAppPurchaseAppStoreReviewScreenshotFromJSONTyped(json, false);
}
exports.InAppPurchaseAppStoreReviewScreenshotFromJSON = InAppPurchaseAppStoreReviewScreenshotFromJSON;
function InAppPurchaseAppStoreReviewScreenshotFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, AppScreenshotAttributes_1.AppScreenshotAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, InAppPurchaseAppStoreReviewScreenshotRelationships_1.InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.InAppPurchaseAppStoreReviewScreenshotFromJSONTyped = InAppPurchaseAppStoreReviewScreenshotFromJSONTyped;
function InAppPurchaseAppStoreReviewScreenshotToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, AppScreenshotAttributes_1.AppScreenshotAttributesToJSON)(value.attributes),
        'relationships': (0, InAppPurchaseAppStoreReviewScreenshotRelationships_1.InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.InAppPurchaseAppStoreReviewScreenshotToJSON = InAppPurchaseAppStoreReviewScreenshotToJSON;
//# sourceMappingURL=InAppPurchaseAppStoreReviewScreenshot.js.map