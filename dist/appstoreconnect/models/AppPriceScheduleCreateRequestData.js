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
exports.AppPriceScheduleCreateRequestDataToJSON = exports.AppPriceScheduleCreateRequestDataFromJSONTyped = exports.AppPriceScheduleCreateRequestDataFromJSON = exports.instanceOfAppPriceScheduleCreateRequestData = exports.AppPriceScheduleCreateRequestDataTypeEnum = void 0;
const AppPriceScheduleCreateRequestDataRelationships_1 = require("./AppPriceScheduleCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppPriceScheduleCreateRequestDataTypeEnum = {
    AppPriceSchedules: 'appPriceSchedules'
};
/**
 * Check if a given object implements the AppPriceScheduleCreateRequestData interface.
 */
function instanceOfAppPriceScheduleCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfAppPriceScheduleCreateRequestData = instanceOfAppPriceScheduleCreateRequestData;
function AppPriceScheduleCreateRequestDataFromJSON(json) {
    return AppPriceScheduleCreateRequestDataFromJSONTyped(json, false);
}
exports.AppPriceScheduleCreateRequestDataFromJSON = AppPriceScheduleCreateRequestDataFromJSON;
function AppPriceScheduleCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'relationships': (0, AppPriceScheduleCreateRequestDataRelationships_1.AppPriceScheduleCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.AppPriceScheduleCreateRequestDataFromJSONTyped = AppPriceScheduleCreateRequestDataFromJSONTyped;
function AppPriceScheduleCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'relationships': (0, AppPriceScheduleCreateRequestDataRelationships_1.AppPriceScheduleCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.AppPriceScheduleCreateRequestDataToJSON = AppPriceScheduleCreateRequestDataToJSON;
//# sourceMappingURL=AppPriceScheduleCreateRequestData.js.map