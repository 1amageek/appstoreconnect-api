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
exports.AppCustomProductPageAttributesToJSON = exports.AppCustomProductPageAttributesFromJSONTyped = exports.AppCustomProductPageAttributesFromJSON = exports.instanceOfAppCustomProductPageAttributes = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppCustomProductPageAttributes interface.
 */
function instanceOfAppCustomProductPageAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppCustomProductPageAttributes = instanceOfAppCustomProductPageAttributes;
function AppCustomProductPageAttributesFromJSON(json) {
    return AppCustomProductPageAttributesFromJSONTyped(json, false);
}
exports.AppCustomProductPageAttributesFromJSON = AppCustomProductPageAttributesFromJSON;
function AppCustomProductPageAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
        'visible': !(0, runtime_1.exists)(json, 'visible') ? undefined : json['visible'],
    };
}
exports.AppCustomProductPageAttributesFromJSONTyped = AppCustomProductPageAttributesFromJSONTyped;
function AppCustomProductPageAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'url': value.url,
        'visible': value.visible,
    };
}
exports.AppCustomProductPageAttributesToJSON = AppCustomProductPageAttributesToJSON;
//# sourceMappingURL=AppCustomProductPageAttributes.js.map