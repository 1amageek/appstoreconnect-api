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
exports.ProfileAttributesToJSON = exports.ProfileAttributesFromJSONTyped = exports.ProfileAttributesFromJSON = exports.instanceOfProfileAttributes = exports.ProfileAttributesProfileStateEnum = exports.ProfileAttributesProfileTypeEnum = void 0;
const runtime_1 = require("../runtime");
const BundleIdPlatform_1 = require("./BundleIdPlatform");
/**
 * @export
 */
exports.ProfileAttributesProfileTypeEnum = {
    IosAppDevelopment: 'IOS_APP_DEVELOPMENT',
    IosAppStore: 'IOS_APP_STORE',
    IosAppAdhoc: 'IOS_APP_ADHOC',
    IosAppInhouse: 'IOS_APP_INHOUSE',
    MacAppDevelopment: 'MAC_APP_DEVELOPMENT',
    MacAppStore: 'MAC_APP_STORE',
    MacAppDirect: 'MAC_APP_DIRECT',
    TvosAppDevelopment: 'TVOS_APP_DEVELOPMENT',
    TvosAppStore: 'TVOS_APP_STORE',
    TvosAppAdhoc: 'TVOS_APP_ADHOC',
    TvosAppInhouse: 'TVOS_APP_INHOUSE',
    MacCatalystAppDevelopment: 'MAC_CATALYST_APP_DEVELOPMENT',
    MacCatalystAppStore: 'MAC_CATALYST_APP_STORE',
    MacCatalystAppDirect: 'MAC_CATALYST_APP_DIRECT'
};
/**
 * @export
 */
exports.ProfileAttributesProfileStateEnum = {
    Active: 'ACTIVE',
    Invalid: 'INVALID'
};
/**
 * Check if a given object implements the ProfileAttributes interface.
 */
function instanceOfProfileAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileAttributes = instanceOfProfileAttributes;
function ProfileAttributesFromJSON(json) {
    return ProfileAttributesFromJSONTyped(json, false);
}
exports.ProfileAttributesFromJSON = ProfileAttributesFromJSON;
function ProfileAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'platform': !(0, runtime_1.exists)(json, 'platform') ? undefined : (0, BundleIdPlatform_1.BundleIdPlatformFromJSON)(json['platform']),
        'profileType': !(0, runtime_1.exists)(json, 'profileType') ? undefined : json['profileType'],
        'profileState': !(0, runtime_1.exists)(json, 'profileState') ? undefined : json['profileState'],
        'profileContent': !(0, runtime_1.exists)(json, 'profileContent') ? undefined : json['profileContent'],
        'uuid': !(0, runtime_1.exists)(json, 'uuid') ? undefined : json['uuid'],
        'createdDate': !(0, runtime_1.exists)(json, 'createdDate') ? undefined : (new Date(json['createdDate'])),
        'expirationDate': !(0, runtime_1.exists)(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
    };
}
exports.ProfileAttributesFromJSONTyped = ProfileAttributesFromJSONTyped;
function ProfileAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'platform': (0, BundleIdPlatform_1.BundleIdPlatformToJSON)(value.platform),
        'profileType': value.profileType,
        'profileState': value.profileState,
        'profileContent': value.profileContent,
        'uuid': value.uuid,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate.toISOString()),
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString()),
    };
}
exports.ProfileAttributesToJSON = ProfileAttributesToJSON;
//# sourceMappingURL=ProfileAttributes.js.map