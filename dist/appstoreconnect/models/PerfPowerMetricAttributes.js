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
exports.PerfPowerMetricAttributesToJSON = exports.PerfPowerMetricAttributesFromJSONTyped = exports.PerfPowerMetricAttributesFromJSON = exports.instanceOfPerfPowerMetricAttributes = exports.PerfPowerMetricAttributesMetricTypeEnum = exports.PerfPowerMetricAttributesPlatformEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.PerfPowerMetricAttributesPlatformEnum = {
    Ios: 'IOS'
};
/**
 * @export
 */
exports.PerfPowerMetricAttributesMetricTypeEnum = {
    Disk: 'DISK',
    Hang: 'HANG',
    Battery: 'BATTERY',
    Launch: 'LAUNCH',
    Memory: 'MEMORY',
    Animation: 'ANIMATION',
    Termination: 'TERMINATION'
};
/**
 * Check if a given object implements the PerfPowerMetricAttributes interface.
 */
function instanceOfPerfPowerMetricAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPerfPowerMetricAttributes = instanceOfPerfPowerMetricAttributes;
function PerfPowerMetricAttributesFromJSON(json) {
    return PerfPowerMetricAttributesFromJSONTyped(json, false);
}
exports.PerfPowerMetricAttributesFromJSON = PerfPowerMetricAttributesFromJSON;
function PerfPowerMetricAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'platform': !(0, runtime_1.exists)(json, 'platform') ? undefined : json['platform'],
        'metricType': !(0, runtime_1.exists)(json, 'metricType') ? undefined : json['metricType'],
        'deviceType': !(0, runtime_1.exists)(json, 'deviceType') ? undefined : json['deviceType'],
    };
}
exports.PerfPowerMetricAttributesFromJSONTyped = PerfPowerMetricAttributesFromJSONTyped;
function PerfPowerMetricAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'platform': value.platform,
        'metricType': value.metricType,
        'deviceType': value.deviceType,
    };
}
exports.PerfPowerMetricAttributesToJSON = PerfPowerMetricAttributesToJSON;
//# sourceMappingURL=PerfPowerMetricAttributes.js.map