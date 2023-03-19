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
exports.AppEventLocalizationUpdateRequestDataAttributesToJSON = exports.AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped = exports.AppEventLocalizationUpdateRequestDataAttributesFromJSON = exports.instanceOfAppEventLocalizationUpdateRequestDataAttributes = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the AppEventLocalizationUpdateRequestDataAttributes interface.
 */
function instanceOfAppEventLocalizationUpdateRequestDataAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppEventLocalizationUpdateRequestDataAttributes = instanceOfAppEventLocalizationUpdateRequestDataAttributes;
function AppEventLocalizationUpdateRequestDataAttributesFromJSON(json) {
    return AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}
exports.AppEventLocalizationUpdateRequestDataAttributesFromJSON = AppEventLocalizationUpdateRequestDataAttributesFromJSON;
function AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
        'longDescription': !(0, runtime_1.exists)(json, 'longDescription') ? undefined : json['longDescription'],
    };
}
exports.AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped = AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped;
function AppEventLocalizationUpdateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'shortDescription': value.shortDescription,
        'longDescription': value.longDescription,
    };
}
exports.AppEventLocalizationUpdateRequestDataAttributesToJSON = AppEventLocalizationUpdateRequestDataAttributesToJSON;
//# sourceMappingURL=AppEventLocalizationUpdateRequestDataAttributes.js.map