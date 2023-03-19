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
exports.HttpHeaderToJSON = exports.HttpHeaderFromJSONTyped = exports.HttpHeaderFromJSON = exports.instanceOfHttpHeader = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HttpHeader interface.
 */
function instanceOfHttpHeader(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHttpHeader = instanceOfHttpHeader;
function HttpHeaderFromJSON(json) {
    return HttpHeaderFromJSONTyped(json, false);
}
exports.HttpHeaderFromJSON = HttpHeaderFromJSON;
function HttpHeaderFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : json['value'],
    };
}
exports.HttpHeaderFromJSONTyped = HttpHeaderFromJSONTyped;
function HttpHeaderToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'value': value.value,
    };
}
exports.HttpHeaderToJSON = HttpHeaderToJSON;
//# sourceMappingURL=HttpHeader.js.map