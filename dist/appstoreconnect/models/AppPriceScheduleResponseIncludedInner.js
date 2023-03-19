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
exports.AppPriceScheduleResponseIncludedInnerToJSON = exports.AppPriceScheduleResponseIncludedInnerFromJSONTyped = exports.AppPriceScheduleResponseIncludedInnerFromJSON = void 0;
const App_1 = require("./App");
const AppPriceV2_1 = require("./AppPriceV2");
const Territory_1 = require("./Territory");
function AppPriceScheduleResponseIncludedInnerFromJSON(json) {
    return AppPriceScheduleResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppPriceScheduleResponseIncludedInnerFromJSON = AppPriceScheduleResponseIncludedInnerFromJSON;
function AppPriceScheduleResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return Object.assign(Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, AppPriceV2_1.AppPriceV2FromJSONTyped)(json, true)), (0, Territory_1.TerritoryFromJSONTyped)(json, true));
}
exports.AppPriceScheduleResponseIncludedInnerFromJSONTyped = AppPriceScheduleResponseIncludedInnerFromJSONTyped;
function AppPriceScheduleResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, AppPriceV2_1.instanceOfAppPriceV2)(value)) {
        return (0, AppPriceV2_1.AppPriceV2ToJSON)(value);
    }
    if ((0, Territory_1.instanceOfTerritory)(value)) {
        return (0, Territory_1.TerritoryToJSON)(value);
    }
    return {};
}
exports.AppPriceScheduleResponseIncludedInnerToJSON = AppPriceScheduleResponseIncludedInnerToJSON;
//# sourceMappingURL=AppPriceScheduleResponseIncludedInner.js.map