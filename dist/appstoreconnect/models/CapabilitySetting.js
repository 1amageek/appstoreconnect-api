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
exports.CapabilitySettingToJSON = exports.CapabilitySettingFromJSONTyped = exports.CapabilitySettingFromJSON = exports.instanceOfCapabilitySetting = exports.CapabilitySettingAllowedInstancesEnum = exports.CapabilitySettingKeyEnum = void 0;
const runtime_1 = require("../runtime");
const CapabilityOption_1 = require("./CapabilityOption");
/**
 * @export
 */
exports.CapabilitySettingKeyEnum = {
    IcloudVersion: 'ICLOUD_VERSION',
    DataProtectionPermissionLevel: 'DATA_PROTECTION_PERMISSION_LEVEL',
    AppleIdAuthAppConsent: 'APPLE_ID_AUTH_APP_CONSENT'
};
/**
 * @export
 */
exports.CapabilitySettingAllowedInstancesEnum = {
    Entry: 'ENTRY',
    Single: 'SINGLE',
    Multiple: 'MULTIPLE'
};
/**
 * Check if a given object implements the CapabilitySetting interface.
 */
function instanceOfCapabilitySetting(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCapabilitySetting = instanceOfCapabilitySetting;
function CapabilitySettingFromJSON(json) {
    return CapabilitySettingFromJSONTyped(json, false);
}
exports.CapabilitySettingFromJSON = CapabilitySettingFromJSON;
function CapabilitySettingFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'key': !(0, runtime_1.exists)(json, 'key') ? undefined : json['key'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'enabledByDefault': !(0, runtime_1.exists)(json, 'enabledByDefault') ? undefined : json['enabledByDefault'],
        'visible': !(0, runtime_1.exists)(json, 'visible') ? undefined : json['visible'],
        'allowedInstances': !(0, runtime_1.exists)(json, 'allowedInstances') ? undefined : json['allowedInstances'],
        'minInstances': !(0, runtime_1.exists)(json, 'minInstances') ? undefined : json['minInstances'],
        'options': !(0, runtime_1.exists)(json, 'options') ? undefined : (json['options'].map(CapabilityOption_1.CapabilityOptionFromJSON)),
    };
}
exports.CapabilitySettingFromJSONTyped = CapabilitySettingFromJSONTyped;
function CapabilitySettingToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'key': value.key,
        'name': value.name,
        'description': value.description,
        'enabledByDefault': value.enabledByDefault,
        'visible': value.visible,
        'allowedInstances': value.allowedInstances,
        'minInstances': value.minInstances,
        'options': value.options === undefined ? undefined : (value.options.map(CapabilityOption_1.CapabilityOptionToJSON)),
    };
}
exports.CapabilitySettingToJSON = CapabilitySettingToJSON;
//# sourceMappingURL=CapabilitySetting.js.map