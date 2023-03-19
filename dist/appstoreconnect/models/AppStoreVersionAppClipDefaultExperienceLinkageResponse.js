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
exports.AppStoreVersionAppClipDefaultExperienceLinkageResponseToJSON = exports.AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSONTyped = exports.AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSON = exports.instanceOfAppStoreVersionAppClipDefaultExperienceLinkageResponse = void 0;
const AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1 = require("./AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppStoreVersionAppClipDefaultExperienceLinkageResponse interface.
 */
function instanceOfAppStoreVersionAppClipDefaultExperienceLinkageResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersionAppClipDefaultExperienceLinkageResponse = instanceOfAppStoreVersionAppClipDefaultExperienceLinkageResponse;
function AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSON(json) {
    return AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSONTyped(json, false);
}
exports.AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSON = AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSON;
function AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON)(json['data']),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSONTyped = AppStoreVersionAppClipDefaultExperienceLinkageResponseFromJSONTyped;
function AppStoreVersionAppClipDefaultExperienceLinkageResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON)(value.data),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.AppStoreVersionAppClipDefaultExperienceLinkageResponseToJSON = AppStoreVersionAppClipDefaultExperienceLinkageResponseToJSON;
//# sourceMappingURL=AppStoreVersionAppClipDefaultExperienceLinkageResponse.js.map