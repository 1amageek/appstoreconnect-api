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
exports.AppClipHeaderImageRelationshipsToJSON = exports.AppClipHeaderImageRelationshipsFromJSONTyped = exports.AppClipHeaderImageRelationshipsFromJSON = exports.instanceOfAppClipHeaderImageRelationships = void 0;
const runtime_1 = require("../runtime");
const AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization_1 = require("./AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization");
/**
 * Check if a given object implements the AppClipHeaderImageRelationships interface.
 */
function instanceOfAppClipHeaderImageRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppClipHeaderImageRelationships = instanceOfAppClipHeaderImageRelationships;
function AppClipHeaderImageRelationshipsFromJSON(json) {
    return AppClipHeaderImageRelationshipsFromJSONTyped(json, false);
}
exports.AppClipHeaderImageRelationshipsFromJSON = AppClipHeaderImageRelationshipsFromJSON;
function AppClipHeaderImageRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appClipDefaultExperienceLocalization': !(0, runtime_1.exists)(json, 'appClipDefaultExperienceLocalization') ? undefined : (0, AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization_1.AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationFromJSON)(json['appClipDefaultExperienceLocalization']),
    };
}
exports.AppClipHeaderImageRelationshipsFromJSONTyped = AppClipHeaderImageRelationshipsFromJSONTyped;
function AppClipHeaderImageRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appClipDefaultExperienceLocalization': (0, AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization_1.AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationToJSON)(value.appClipDefaultExperienceLocalization),
    };
}
exports.AppClipHeaderImageRelationshipsToJSON = AppClipHeaderImageRelationshipsToJSON;
//# sourceMappingURL=AppClipHeaderImageRelationships.js.map