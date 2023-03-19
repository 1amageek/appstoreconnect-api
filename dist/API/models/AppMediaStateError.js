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
exports.AppMediaStateErrorToJSON = exports.AppMediaStateErrorFromJSONTyped = exports.AppMediaStateErrorFromJSON = exports.instanceOfAppMediaStateError = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppMediaStateError interface.
 */
function instanceOfAppMediaStateError(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppMediaStateError = instanceOfAppMediaStateError;
function AppMediaStateErrorFromJSON(json) {
    return AppMediaStateErrorFromJSONTyped(json, false);
}
exports.AppMediaStateErrorFromJSON = AppMediaStateErrorFromJSON;
function AppMediaStateErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.AppMediaStateErrorFromJSONTyped = AppMediaStateErrorFromJSONTyped;
function AppMediaStateErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
    };
}
exports.AppMediaStateErrorToJSON = AppMediaStateErrorToJSON;
//# sourceMappingURL=AppMediaStateError.js.map