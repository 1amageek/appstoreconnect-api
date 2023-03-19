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
exports.InAppPurchaseAppStoreReviewScreenshotResponseToJSON = exports.InAppPurchaseAppStoreReviewScreenshotResponseFromJSONTyped = exports.InAppPurchaseAppStoreReviewScreenshotResponseFromJSON = exports.instanceOfInAppPurchaseAppStoreReviewScreenshotResponse = void 0;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const InAppPurchaseAppStoreReviewScreenshot_1 = require("./InAppPurchaseAppStoreReviewScreenshot");
const InAppPurchaseV2_1 = require("./InAppPurchaseV2");
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotResponse interface.
 */
function instanceOfInAppPurchaseAppStoreReviewScreenshotResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfInAppPurchaseAppStoreReviewScreenshotResponse = instanceOfInAppPurchaseAppStoreReviewScreenshotResponse;
function InAppPurchaseAppStoreReviewScreenshotResponseFromJSON(json) {
    return InAppPurchaseAppStoreReviewScreenshotResponseFromJSONTyped(json, false);
}
exports.InAppPurchaseAppStoreReviewScreenshotResponseFromJSON = InAppPurchaseAppStoreReviewScreenshotResponseFromJSON;
function InAppPurchaseAppStoreReviewScreenshotResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, InAppPurchaseAppStoreReviewScreenshot_1.InAppPurchaseAppStoreReviewScreenshotFromJSON)(json['data']),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(InAppPurchaseV2_1.InAppPurchaseV2FromJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.InAppPurchaseAppStoreReviewScreenshotResponseFromJSONTyped = InAppPurchaseAppStoreReviewScreenshotResponseFromJSONTyped;
function InAppPurchaseAppStoreReviewScreenshotResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, InAppPurchaseAppStoreReviewScreenshot_1.InAppPurchaseAppStoreReviewScreenshotToJSON)(value.data),
        'included': value.included === undefined ? undefined : (value.included.map(InAppPurchaseV2_1.InAppPurchaseV2ToJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.InAppPurchaseAppStoreReviewScreenshotResponseToJSON = InAppPurchaseAppStoreReviewScreenshotResponseToJSON;
//# sourceMappingURL=InAppPurchaseAppStoreReviewScreenshotResponse.js.map