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
exports.AppPreviewSetsResponseIncludedInnerToJSON = exports.AppPreviewSetsResponseIncludedInnerFromJSONTyped = exports.AppPreviewSetsResponseIncludedInnerFromJSON = void 0;
const AppCustomProductPageLocalization_1 = require("./AppCustomProductPageLocalization");
const AppPreview_1 = require("./AppPreview");
const AppStoreVersionExperimentTreatmentLocalization_1 = require("./AppStoreVersionExperimentTreatmentLocalization");
const AppStoreVersionLocalization_1 = require("./AppStoreVersionLocalization");
function AppPreviewSetsResponseIncludedInnerFromJSON(json) {
    return AppPreviewSetsResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppPreviewSetsResponseIncludedInnerFromJSON = AppPreviewSetsResponseIncludedInnerFromJSON;
function AppPreviewSetsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, (0, AppCustomProductPageLocalization_1.AppCustomProductPageLocalizationFromJSONTyped)(json, true)), (0, AppPreview_1.AppPreviewFromJSONTyped)(json, true)), (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped)(json, true)), (0, AppStoreVersionLocalization_1.AppStoreVersionLocalizationFromJSONTyped)(json, true));
}
exports.AppPreviewSetsResponseIncludedInnerFromJSONTyped = AppPreviewSetsResponseIncludedInnerFromJSONTyped;
function AppPreviewSetsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppCustomProductPageLocalization_1.instanceOfAppCustomProductPageLocalization)(value)) {
        return (0, AppCustomProductPageLocalization_1.AppCustomProductPageLocalizationToJSON)(value);
    }
    if ((0, AppPreview_1.instanceOfAppPreview)(value)) {
        return (0, AppPreview_1.AppPreviewToJSON)(value);
    }
    if ((0, AppStoreVersionExperimentTreatmentLocalization_1.instanceOfAppStoreVersionExperimentTreatmentLocalization)(value)) {
        return (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationToJSON)(value);
    }
    if ((0, AppStoreVersionLocalization_1.instanceOfAppStoreVersionLocalization)(value)) {
        return (0, AppStoreVersionLocalization_1.AppStoreVersionLocalizationToJSON)(value);
    }
    return {};
}
exports.AppPreviewSetsResponseIncludedInnerToJSON = AppPreviewSetsResponseIncludedInnerToJSON;
//# sourceMappingURL=AppPreviewSetsResponseIncludedInner.js.map