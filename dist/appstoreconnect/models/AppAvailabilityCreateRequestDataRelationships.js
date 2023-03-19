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
exports.AppAvailabilityCreateRequestDataRelationshipsToJSON = exports.AppAvailabilityCreateRequestDataRelationshipsFromJSONTyped = exports.AppAvailabilityCreateRequestDataRelationshipsFromJSON = exports.instanceOfAppAvailabilityCreateRequestDataRelationships = void 0;
const AppAvailabilityCreateRequestDataRelationshipsApp_1 = require("./AppAvailabilityCreateRequestDataRelationshipsApp");
const AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories_1 = require("./AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories");
/**
 * Check if a given object implements the AppAvailabilityCreateRequestDataRelationships interface.
 */
function instanceOfAppAvailabilityCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    isInstance = isInstance && "availableTerritories" in value;
    return isInstance;
}
exports.instanceOfAppAvailabilityCreateRequestDataRelationships = instanceOfAppAvailabilityCreateRequestDataRelationships;
function AppAvailabilityCreateRequestDataRelationshipsFromJSON(json) {
    return AppAvailabilityCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
exports.AppAvailabilityCreateRequestDataRelationshipsFromJSON = AppAvailabilityCreateRequestDataRelationshipsFromJSON;
function AppAvailabilityCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'app': (0, AppAvailabilityCreateRequestDataRelationshipsApp_1.AppAvailabilityCreateRequestDataRelationshipsAppFromJSON)(json['app']),
        'availableTerritories': (0, AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories_1.AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesFromJSON)(json['availableTerritories']),
    };
}
exports.AppAvailabilityCreateRequestDataRelationshipsFromJSONTyped = AppAvailabilityCreateRequestDataRelationshipsFromJSONTyped;
function AppAvailabilityCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'app': (0, AppAvailabilityCreateRequestDataRelationshipsApp_1.AppAvailabilityCreateRequestDataRelationshipsAppToJSON)(value.app),
        'availableTerritories': (0, AppAvailabilityCreateRequestDataRelationshipsAvailableTerritories_1.AppAvailabilityCreateRequestDataRelationshipsAvailableTerritoriesToJSON)(value.availableTerritories),
    };
}
exports.AppAvailabilityCreateRequestDataRelationshipsToJSON = AppAvailabilityCreateRequestDataRelationshipsToJSON;
//# sourceMappingURL=AppAvailabilityCreateRequestDataRelationships.js.map