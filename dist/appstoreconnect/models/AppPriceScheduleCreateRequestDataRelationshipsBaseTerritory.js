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
exports.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON = exports.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped = exports.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON = exports.instanceOfAppPriceScheduleCreateRequestDataRelationshipsBaseTerritory = void 0;
const AppAvailabilityRelationshipsAvailableTerritoriesDataInner_1 = require("./AppAvailabilityRelationshipsAvailableTerritoriesDataInner");
/**
 * Check if a given object implements the AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory interface.
 */
function instanceOfAppPriceScheduleCreateRequestDataRelationshipsBaseTerritory(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppPriceScheduleCreateRequestDataRelationshipsBaseTerritory = instanceOfAppPriceScheduleCreateRequestDataRelationshipsBaseTerritory;
function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json) {
    return AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped(json, false);
}
exports.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON = AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON;
function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppAvailabilityRelationshipsAvailableTerritoriesDataInner_1.AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON)(json['data']),
    };
}
exports.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped = AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped;
function AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppAvailabilityRelationshipsAvailableTerritoriesDataInner_1.AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON)(value.data),
    };
}
exports.AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON = AppPriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON;
//# sourceMappingURL=AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory.js.map