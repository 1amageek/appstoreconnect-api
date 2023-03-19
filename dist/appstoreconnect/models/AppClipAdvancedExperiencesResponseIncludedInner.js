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
exports.AppClipAdvancedExperiencesResponseIncludedInnerToJSON = exports.AppClipAdvancedExperiencesResponseIncludedInnerFromJSONTyped = exports.AppClipAdvancedExperiencesResponseIncludedInnerFromJSON = void 0;
const AppClip_1 = require("./AppClip");
const AppClipAdvancedExperienceImage_1 = require("./AppClipAdvancedExperienceImage");
const AppClipAdvancedExperienceLocalization_1 = require("./AppClipAdvancedExperienceLocalization");
function AppClipAdvancedExperiencesResponseIncludedInnerFromJSON(json) {
    return AppClipAdvancedExperiencesResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppClipAdvancedExperiencesResponseIncludedInnerFromJSON = AppClipAdvancedExperiencesResponseIncludedInnerFromJSON;
function AppClipAdvancedExperiencesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return Object.assign(Object.assign(Object.assign({}, (0, AppClip_1.AppClipFromJSONTyped)(json, true)), (0, AppClipAdvancedExperienceImage_1.AppClipAdvancedExperienceImageFromJSONTyped)(json, true)), (0, AppClipAdvancedExperienceLocalization_1.AppClipAdvancedExperienceLocalizationFromJSONTyped)(json, true));
}
exports.AppClipAdvancedExperiencesResponseIncludedInnerFromJSONTyped = AppClipAdvancedExperiencesResponseIncludedInnerFromJSONTyped;
function AppClipAdvancedExperiencesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppClip_1.instanceOfAppClip)(value)) {
        return (0, AppClip_1.AppClipToJSON)(value);
    }
    if ((0, AppClipAdvancedExperienceImage_1.instanceOfAppClipAdvancedExperienceImage)(value)) {
        return (0, AppClipAdvancedExperienceImage_1.AppClipAdvancedExperienceImageToJSON)(value);
    }
    if ((0, AppClipAdvancedExperienceLocalization_1.instanceOfAppClipAdvancedExperienceLocalization)(value)) {
        return (0, AppClipAdvancedExperienceLocalization_1.AppClipAdvancedExperienceLocalizationToJSON)(value);
    }
    return {};
}
exports.AppClipAdvancedExperiencesResponseIncludedInnerToJSON = AppClipAdvancedExperiencesResponseIncludedInnerToJSON;
//# sourceMappingURL=AppClipAdvancedExperiencesResponseIncludedInner.js.map