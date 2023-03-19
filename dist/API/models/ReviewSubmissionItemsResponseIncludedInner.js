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
exports.ReviewSubmissionItemsResponseIncludedInnerToJSON = exports.ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped = exports.ReviewSubmissionItemsResponseIncludedInnerFromJSON = void 0;
const AppCustomProductPageVersion_1 = require("./AppCustomProductPageVersion");
const AppEvent_1 = require("./AppEvent");
const AppStoreVersion_1 = require("./AppStoreVersion");
const AppStoreVersionExperiment_1 = require("./AppStoreVersionExperiment");
function ReviewSubmissionItemsResponseIncludedInnerFromJSON(json) {
    return ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped(json, false);
}
exports.ReviewSubmissionItemsResponseIncludedInnerFromJSON = ReviewSubmissionItemsResponseIncludedInnerFromJSON;
function ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, AppCustomProductPageVersion_1.AppCustomProductPageVersionFromJSONTyped)(json, true)), (0, AppEvent_1.AppEventFromJSONTyped)(json, true)), (0, AppStoreVersion_1.AppStoreVersionFromJSONTyped)(json, true)), (0, AppStoreVersionExperiment_1.AppStoreVersionExperimentFromJSONTyped)(json, true));
}
exports.ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped = ReviewSubmissionItemsResponseIncludedInnerFromJSONTyped;
function ReviewSubmissionItemsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppCustomProductPageVersion_1.instanceOfAppCustomProductPageVersion)(value)) {
        return (0, AppCustomProductPageVersion_1.AppCustomProductPageVersionToJSON)(value);
    }
    if ((0, AppEvent_1.instanceOfAppEvent)(value)) {
        return (0, AppEvent_1.AppEventToJSON)(value);
    }
    if ((0, AppStoreVersion_1.instanceOfAppStoreVersion)(value)) {
        return (0, AppStoreVersion_1.AppStoreVersionToJSON)(value);
    }
    if ((0, AppStoreVersionExperiment_1.instanceOfAppStoreVersionExperiment)(value)) {
        return (0, AppStoreVersionExperiment_1.AppStoreVersionExperimentToJSON)(value);
    }
    return {};
}
exports.ReviewSubmissionItemsResponseIncludedInnerToJSON = ReviewSubmissionItemsResponseIncludedInnerToJSON;
//# sourceMappingURL=ReviewSubmissionItemsResponseIncludedInner.js.map