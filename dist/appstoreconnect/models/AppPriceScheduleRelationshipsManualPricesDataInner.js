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
exports.AppPriceScheduleRelationshipsManualPricesDataInnerToJSON = exports.AppPriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped = exports.AppPriceScheduleRelationshipsManualPricesDataInnerFromJSON = exports.instanceOfAppPriceScheduleRelationshipsManualPricesDataInner = exports.AppPriceScheduleRelationshipsManualPricesDataInnerTypeEnum = void 0;
/**
 * @export
 */
exports.AppPriceScheduleRelationshipsManualPricesDataInnerTypeEnum = {
    AppPrices: 'appPrices'
};
/**
 * Check if a given object implements the AppPriceScheduleRelationshipsManualPricesDataInner interface.
 */
function instanceOfAppPriceScheduleRelationshipsManualPricesDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppPriceScheduleRelationshipsManualPricesDataInner = instanceOfAppPriceScheduleRelationshipsManualPricesDataInner;
function AppPriceScheduleRelationshipsManualPricesDataInnerFromJSON(json) {
    return AppPriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped(json, false);
}
exports.AppPriceScheduleRelationshipsManualPricesDataInnerFromJSON = AppPriceScheduleRelationshipsManualPricesDataInnerFromJSON;
function AppPriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.AppPriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped = AppPriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped;
function AppPriceScheduleRelationshipsManualPricesDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
    };
}
exports.AppPriceScheduleRelationshipsManualPricesDataInnerToJSON = AppPriceScheduleRelationshipsManualPricesDataInnerToJSON;
//# sourceMappingURL=AppPriceScheduleRelationshipsManualPricesDataInner.js.map