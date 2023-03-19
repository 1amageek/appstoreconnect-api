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
exports.AppStoreVersionExperimentTreatmentsResponseToJSON = exports.AppStoreVersionExperimentTreatmentsResponseFromJSONTyped = exports.AppStoreVersionExperimentTreatmentsResponseFromJSON = exports.instanceOfAppStoreVersionExperimentTreatmentsResponse = void 0;
const runtime_1 = require("../runtime");
const AppStoreVersionExperimentTreatment_1 = require("./AppStoreVersionExperimentTreatment");
const AppStoreVersionExperimentTreatmentsResponseIncludedInner_1 = require("./AppStoreVersionExperimentTreatmentsResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentsResponse interface.
 */
function instanceOfAppStoreVersionExperimentTreatmentsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersionExperimentTreatmentsResponse = instanceOfAppStoreVersionExperimentTreatmentsResponse;
function AppStoreVersionExperimentTreatmentsResponseFromJSON(json) {
    return AppStoreVersionExperimentTreatmentsResponseFromJSONTyped(json, false);
}
exports.AppStoreVersionExperimentTreatmentsResponseFromJSON = AppStoreVersionExperimentTreatmentsResponseFromJSON;
function AppStoreVersionExperimentTreatmentsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppStoreVersionExperimentTreatment_1.AppStoreVersionExperimentTreatmentFromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(AppStoreVersionExperimentTreatmentsResponseIncludedInner_1.AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.AppStoreVersionExperimentTreatmentsResponseFromJSONTyped = AppStoreVersionExperimentTreatmentsResponseFromJSONTyped;
function AppStoreVersionExperimentTreatmentsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppStoreVersionExperimentTreatment_1.AppStoreVersionExperimentTreatmentToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(AppStoreVersionExperimentTreatmentsResponseIncludedInner_1.AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.AppStoreVersionExperimentTreatmentsResponseToJSON = AppStoreVersionExperimentTreatmentsResponseToJSON;
//# sourceMappingURL=AppStoreVersionExperimentTreatmentsResponse.js.map