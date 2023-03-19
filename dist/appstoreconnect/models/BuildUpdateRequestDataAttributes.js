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
exports.BuildUpdateRequestDataAttributesToJSON = exports.BuildUpdateRequestDataAttributesFromJSONTyped = exports.BuildUpdateRequestDataAttributesFromJSON = exports.instanceOfBuildUpdateRequestDataAttributes = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BuildUpdateRequestDataAttributes interface.
 */
function instanceOfBuildUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBuildUpdateRequestDataAttributes = instanceOfBuildUpdateRequestDataAttributes;
function BuildUpdateRequestDataAttributesFromJSON(json) {
    return BuildUpdateRequestDataAttributesFromJSONTyped(json, false);
}
exports.BuildUpdateRequestDataAttributesFromJSON = BuildUpdateRequestDataAttributesFromJSON;
function BuildUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'expired': !(0, runtime_1.exists)(json, 'expired') ? undefined : json['expired'],
        'usesNonExemptEncryption': !(0, runtime_1.exists)(json, 'usesNonExemptEncryption') ? undefined : json['usesNonExemptEncryption'],
    };
}
exports.BuildUpdateRequestDataAttributesFromJSONTyped = BuildUpdateRequestDataAttributesFromJSONTyped;
function BuildUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'expired': value.expired,
        'usesNonExemptEncryption': value.usesNonExemptEncryption,
    };
}
exports.BuildUpdateRequestDataAttributesToJSON = BuildUpdateRequestDataAttributesToJSON;
//# sourceMappingURL=BuildUpdateRequestDataAttributes.js.map