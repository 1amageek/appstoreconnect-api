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
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON = exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped = exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSON = exports.instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequest = void 0;
const InAppPurchaseAppStoreReviewScreenshotUpdateRequestData_1 = require("./InAppPurchaseAppStoreReviewScreenshotUpdateRequestData");
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotUpdateRequest interface.
 */
function instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequest = instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequest;
function InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSON(json) {
    return InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped(json, false);
}
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSON = InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSON;
function InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, InAppPurchaseAppStoreReviewScreenshotUpdateRequestData_1.InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON)(json['data']),
    };
}
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped = InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped;
function InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, InAppPurchaseAppStoreReviewScreenshotUpdateRequestData_1.InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON)(value.data),
    };
}
exports.InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON = InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON;
//# sourceMappingURL=InAppPurchaseAppStoreReviewScreenshotUpdateRequest.js.map