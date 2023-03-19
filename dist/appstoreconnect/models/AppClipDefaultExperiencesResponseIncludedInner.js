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
exports.AppClipDefaultExperiencesResponseIncludedInnerToJSON = exports.AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped = exports.AppClipDefaultExperiencesResponseIncludedInnerFromJSON = void 0;
const AppClip_1 = require("./AppClip");
const AppClipAppStoreReviewDetail_1 = require("./AppClipAppStoreReviewDetail");
const AppClipDefaultExperienceLocalization_1 = require("./AppClipDefaultExperienceLocalization");
const AppStoreVersion_1 = require("./AppStoreVersion");
function AppClipDefaultExperiencesResponseIncludedInnerFromJSON(json) {
    return AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppClipDefaultExperiencesResponseIncludedInnerFromJSON = AppClipDefaultExperiencesResponseIncludedInnerFromJSON;
function AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, AppClip_1.AppClipFromJSONTyped)(json, true)), (0, AppClipAppStoreReviewDetail_1.AppClipAppStoreReviewDetailFromJSONTyped)(json, true)), (0, AppClipDefaultExperienceLocalization_1.AppClipDefaultExperienceLocalizationFromJSONTyped)(json, true)), (0, AppStoreVersion_1.AppStoreVersionFromJSONTyped)(json, true));
}
exports.AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped = AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped;
function AppClipDefaultExperiencesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppClip_1.instanceOfAppClip)(value)) {
        return (0, AppClip_1.AppClipToJSON)(value);
    }
    if ((0, AppClipAppStoreReviewDetail_1.instanceOfAppClipAppStoreReviewDetail)(value)) {
        return (0, AppClipAppStoreReviewDetail_1.AppClipAppStoreReviewDetailToJSON)(value);
    }
    if ((0, AppClipDefaultExperienceLocalization_1.instanceOfAppClipDefaultExperienceLocalization)(value)) {
        return (0, AppClipDefaultExperienceLocalization_1.AppClipDefaultExperienceLocalizationToJSON)(value);
    }
    if ((0, AppStoreVersion_1.instanceOfAppStoreVersion)(value)) {
        return (0, AppStoreVersion_1.AppStoreVersionToJSON)(value);
    }
    return {};
}
exports.AppClipDefaultExperiencesResponseIncludedInnerToJSON = AppClipDefaultExperiencesResponseIncludedInnerToJSON;
//# sourceMappingURL=AppClipDefaultExperiencesResponseIncludedInner.js.map