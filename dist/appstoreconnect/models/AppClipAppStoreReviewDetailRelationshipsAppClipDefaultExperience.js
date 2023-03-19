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
exports.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON = exports.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped = exports.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON = exports.instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1 = require("./AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData");
/**
 * Check if a given object implements the AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience interface.
 */
function instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience = instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience;
function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON(json) {
    return AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped(json, false);
}
exports.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON = AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON;
function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON)(json['data']),
    };
}
exports.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped = AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped;
function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData_1.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON)(value.data),
    };
}
exports.AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON = AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON;
//# sourceMappingURL=AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience.js.map