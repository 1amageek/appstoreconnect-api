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
exports.AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSON = exports.AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSONTyped = exports.AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSON = void 0;
const AppStoreVersionExperiment_1 = require("./AppStoreVersionExperiment");
const AppStoreVersionExperimentTreatmentLocalization_1 = require("./AppStoreVersionExperimentTreatmentLocalization");
function AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSON(json) {
    return AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSON = AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSON;
function AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, AppStoreVersionExperiment_1.AppStoreVersionExperimentFromJSONTyped)(json, true)), (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped)(json, true));
}
exports.AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSONTyped = AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSONTyped;
function AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppStoreVersionExperiment_1.instanceOfAppStoreVersionExperiment)(value)) {
        return (0, AppStoreVersionExperiment_1.AppStoreVersionExperimentToJSON)(value);
    }
    if ((0, AppStoreVersionExperimentTreatmentLocalization_1.instanceOfAppStoreVersionExperimentTreatmentLocalization)(value)) {
        return (0, AppStoreVersionExperimentTreatmentLocalization_1.AppStoreVersionExperimentTreatmentLocalizationToJSON)(value);
    }
    return {};
}
exports.AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSON = AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSON;
//# sourceMappingURL=AppStoreVersionExperimentTreatmentsResponseIncludedInner.js.map