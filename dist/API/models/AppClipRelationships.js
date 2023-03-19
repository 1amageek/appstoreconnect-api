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
exports.AppClipRelationshipsToJSON = exports.AppClipRelationshipsFromJSONTyped = exports.AppClipRelationshipsFromJSON = exports.instanceOfAppClipRelationships = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsApp_1 = require("./AppAvailabilityRelationshipsApp");
const AppClipRelationshipsAppClipDefaultExperiences_1 = require("./AppClipRelationshipsAppClipDefaultExperiences");
/**
 * Check if a given object implements the AppClipRelationships interface.
 */
function instanceOfAppClipRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppClipRelationships = instanceOfAppClipRelationships;
function AppClipRelationshipsFromJSON(json) {
    return AppClipRelationshipsFromJSONTyped(json, false);
}
exports.AppClipRelationshipsFromJSON = AppClipRelationshipsFromJSON;
function AppClipRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'app': !(0, runtime_1.exists)(json, 'app') ? undefined : (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppFromJSON)(json['app']),
        'appClipDefaultExperiences': !(0, runtime_1.exists)(json, 'appClipDefaultExperiences') ? undefined : (0, AppClipRelationshipsAppClipDefaultExperiences_1.AppClipRelationshipsAppClipDefaultExperiencesFromJSON)(json['appClipDefaultExperiences']),
    };
}
exports.AppClipRelationshipsFromJSONTyped = AppClipRelationshipsFromJSONTyped;
function AppClipRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'app': (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppToJSON)(value.app),
        'appClipDefaultExperiences': (0, AppClipRelationshipsAppClipDefaultExperiences_1.AppClipRelationshipsAppClipDefaultExperiencesToJSON)(value.appClipDefaultExperiences),
    };
}
exports.AppClipRelationshipsToJSON = AppClipRelationshipsToJSON;
//# sourceMappingURL=AppClipRelationships.js.map