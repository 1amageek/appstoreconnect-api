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
exports.AppPriceScheduleCreateRequestIncludedInnerToJSON = exports.AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped = exports.AppPriceScheduleCreateRequestIncludedInnerFromJSON = void 0;
const AppPriceV2InlineCreate_1 = require("./AppPriceV2InlineCreate");
const TerritoryInlineCreate_1 = require("./TerritoryInlineCreate");
function AppPriceScheduleCreateRequestIncludedInnerFromJSON(json) {
    return AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped(json, false);
}
exports.AppPriceScheduleCreateRequestIncludedInnerFromJSON = AppPriceScheduleCreateRequestIncludedInnerFromJSON;
function AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, AppPriceV2InlineCreate_1.AppPriceV2InlineCreateFromJSONTyped)(json, true)), (0, TerritoryInlineCreate_1.TerritoryInlineCreateFromJSONTyped)(json, true));
}
exports.AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped = AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped;
function AppPriceScheduleCreateRequestIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppPriceV2InlineCreate_1.instanceOfAppPriceV2InlineCreate)(value)) {
        return (0, AppPriceV2InlineCreate_1.AppPriceV2InlineCreateToJSON)(value);
    }
    if ((0, TerritoryInlineCreate_1.instanceOfTerritoryInlineCreate)(value)) {
        return (0, TerritoryInlineCreate_1.TerritoryInlineCreateToJSON)(value);
    }
    return {};
}
exports.AppPriceScheduleCreateRequestIncludedInnerToJSON = AppPriceScheduleCreateRequestIncludedInnerToJSON;
//# sourceMappingURL=AppPriceScheduleCreateRequestIncludedInner.js.map