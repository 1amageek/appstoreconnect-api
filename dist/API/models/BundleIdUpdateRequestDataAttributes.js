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
exports.BundleIdUpdateRequestDataAttributesToJSON = exports.BundleIdUpdateRequestDataAttributesFromJSONTyped = exports.BundleIdUpdateRequestDataAttributesFromJSON = exports.instanceOfBundleIdUpdateRequestDataAttributes = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the BundleIdUpdateRequestDataAttributes interface.
 */
function instanceOfBundleIdUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBundleIdUpdateRequestDataAttributes = instanceOfBundleIdUpdateRequestDataAttributes;
function BundleIdUpdateRequestDataAttributesFromJSON(json) {
    return BundleIdUpdateRequestDataAttributesFromJSONTyped(json, false);
}
exports.BundleIdUpdateRequestDataAttributesFromJSON = BundleIdUpdateRequestDataAttributesFromJSON;
function BundleIdUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.BundleIdUpdateRequestDataAttributesFromJSONTyped = BundleIdUpdateRequestDataAttributesFromJSONTyped;
function BundleIdUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.BundleIdUpdateRequestDataAttributesToJSON = BundleIdUpdateRequestDataAttributesToJSON;
//# sourceMappingURL=BundleIdUpdateRequestDataAttributes.js.map