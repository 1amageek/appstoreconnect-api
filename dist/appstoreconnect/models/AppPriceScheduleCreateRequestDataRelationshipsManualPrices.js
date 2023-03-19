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
exports.AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON = exports.AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped = exports.AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON = exports.instanceOfAppPriceScheduleCreateRequestDataRelationshipsManualPrices = void 0;
const AppPriceScheduleRelationshipsManualPricesDataInner_1 = require("./AppPriceScheduleRelationshipsManualPricesDataInner");
/**
 * Check if a given object implements the AppPriceScheduleCreateRequestDataRelationshipsManualPrices interface.
 */
function instanceOfAppPriceScheduleCreateRequestDataRelationshipsManualPrices(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppPriceScheduleCreateRequestDataRelationshipsManualPrices = instanceOfAppPriceScheduleCreateRequestDataRelationshipsManualPrices;
function AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON(json) {
    return AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped(json, false);
}
exports.AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON = AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON;
function AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppPriceScheduleRelationshipsManualPricesDataInner_1.AppPriceScheduleRelationshipsManualPricesDataInnerFromJSON)),
    };
}
exports.AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped = AppPriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped;
function AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppPriceScheduleRelationshipsManualPricesDataInner_1.AppPriceScheduleRelationshipsManualPricesDataInnerToJSON)),
    };
}
exports.AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON = AppPriceScheduleCreateRequestDataRelationshipsManualPricesToJSON;
//# sourceMappingURL=AppPriceScheduleCreateRequestDataRelationshipsManualPrices.js.map