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
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON = exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped = exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON = exports.instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner interface.
 */
function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner = instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner;
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON(json) {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped(json, false);
}
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSON;
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'goalKey': !(0, runtime_1.exists)(json, 'goalKey') ? undefined : json['goalKey'],
        'lowerBound': !(0, runtime_1.exists)(json, 'lowerBound') ? undefined : json['lowerBound'],
        'upperBound': !(0, runtime_1.exists)(json, 'upperBound') ? undefined : json['upperBound'],
    };
}
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerFromJSONTyped;
function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'goalKey': value.goalKey,
        'lowerBound': value.lowerBound,
        'upperBound': value.upperBound,
    };
}
exports.XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON = XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInnerToJSON;
//# sourceMappingURL=XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner.js.map