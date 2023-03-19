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
exports.SubscriptionRelationshipsAppStoreReviewScreenshotToJSON = exports.SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped = exports.SubscriptionRelationshipsAppStoreReviewScreenshotFromJSON = exports.instanceOfSubscriptionRelationshipsAppStoreReviewScreenshot = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const SubscriptionRelationshipsAppStoreReviewScreenshotData_1 = require("./SubscriptionRelationshipsAppStoreReviewScreenshotData");
/**
 * Check if a given object implements the SubscriptionRelationshipsAppStoreReviewScreenshot interface.
 */
function instanceOfSubscriptionRelationshipsAppStoreReviewScreenshot(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSubscriptionRelationshipsAppStoreReviewScreenshot = instanceOfSubscriptionRelationshipsAppStoreReviewScreenshot;
function SubscriptionRelationshipsAppStoreReviewScreenshotFromJSON(json) {
    return SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped(json, false);
}
exports.SubscriptionRelationshipsAppStoreReviewScreenshotFromJSON = SubscriptionRelationshipsAppStoreReviewScreenshotFromJSON;
function SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, SubscriptionRelationshipsAppStoreReviewScreenshotData_1.SubscriptionRelationshipsAppStoreReviewScreenshotDataFromJSON)(json['data']),
    };
}
exports.SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped = SubscriptionRelationshipsAppStoreReviewScreenshotFromJSONTyped;
function SubscriptionRelationshipsAppStoreReviewScreenshotToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, SubscriptionRelationshipsAppStoreReviewScreenshotData_1.SubscriptionRelationshipsAppStoreReviewScreenshotDataToJSON)(value.data),
    };
}
exports.SubscriptionRelationshipsAppStoreReviewScreenshotToJSON = SubscriptionRelationshipsAppStoreReviewScreenshotToJSON;
//# sourceMappingURL=SubscriptionRelationshipsAppStoreReviewScreenshot.js.map