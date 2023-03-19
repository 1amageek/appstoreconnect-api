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
exports.BundleIdRelationshipsToJSON = exports.BundleIdRelationshipsFromJSONTyped = exports.BundleIdRelationshipsFromJSON = exports.instanceOfBundleIdRelationships = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsApp_1 = require("./AppAvailabilityRelationshipsApp");
const BundleIdRelationshipsBundleIdCapabilities_1 = require("./BundleIdRelationshipsBundleIdCapabilities");
const BundleIdRelationshipsProfiles_1 = require("./BundleIdRelationshipsProfiles");
/**
 * Check if a given object implements the BundleIdRelationships interface.
 */
function instanceOfBundleIdRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBundleIdRelationships = instanceOfBundleIdRelationships;
function BundleIdRelationshipsFromJSON(json) {
    return BundleIdRelationshipsFromJSONTyped(json, false);
}
exports.BundleIdRelationshipsFromJSON = BundleIdRelationshipsFromJSON;
function BundleIdRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'profiles': !(0, runtime_1.exists)(json, 'profiles') ? undefined : (0, BundleIdRelationshipsProfiles_1.BundleIdRelationshipsProfilesFromJSON)(json['profiles']),
        'bundleIdCapabilities': !(0, runtime_1.exists)(json, 'bundleIdCapabilities') ? undefined : (0, BundleIdRelationshipsBundleIdCapabilities_1.BundleIdRelationshipsBundleIdCapabilitiesFromJSON)(json['bundleIdCapabilities']),
        'app': !(0, runtime_1.exists)(json, 'app') ? undefined : (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppFromJSON)(json['app']),
    };
}
exports.BundleIdRelationshipsFromJSONTyped = BundleIdRelationshipsFromJSONTyped;
function BundleIdRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'profiles': (0, BundleIdRelationshipsProfiles_1.BundleIdRelationshipsProfilesToJSON)(value.profiles),
        'bundleIdCapabilities': (0, BundleIdRelationshipsBundleIdCapabilities_1.BundleIdRelationshipsBundleIdCapabilitiesToJSON)(value.bundleIdCapabilities),
        'app': (0, AppAvailabilityRelationshipsApp_1.AppAvailabilityRelationshipsAppToJSON)(value.app),
    };
}
exports.BundleIdRelationshipsToJSON = BundleIdRelationshipsToJSON;
//# sourceMappingURL=BundleIdRelationships.js.map