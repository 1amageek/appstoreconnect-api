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
exports.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON = exports.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped = exports.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON = exports.instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData_1 = require("./AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData");
/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage interface.
 */
function instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage = instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage;
function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON(json) {
    return AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped(json, false);
}
exports.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON = AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON;
function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData_1.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSON)(json['data']),
    };
}
exports.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped = AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped;
function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData_1.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataToJSON)(value.data),
    };
}
exports.AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON = AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON;
//# sourceMappingURL=AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage.js.map