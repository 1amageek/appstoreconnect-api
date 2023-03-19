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
exports.BundleIdsResponseIncludedInnerToJSON = exports.BundleIdsResponseIncludedInnerFromJSONTyped = exports.BundleIdsResponseIncludedInnerFromJSON = void 0;
const App_1 = require("./App");
const BundleIdCapability_1 = require("./BundleIdCapability");
const Profile_1 = require("./Profile");
function BundleIdsResponseIncludedInnerFromJSON(json) {
    return BundleIdsResponseIncludedInnerFromJSONTyped(json, false);
}
exports.BundleIdsResponseIncludedInnerFromJSON = BundleIdsResponseIncludedInnerFromJSON;
function BundleIdsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return Object.assign(Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, BundleIdCapability_1.BundleIdCapabilityFromJSONTyped)(json, true)), (0, Profile_1.ProfileFromJSONTyped)(json, true));
}
exports.BundleIdsResponseIncludedInnerFromJSONTyped = BundleIdsResponseIncludedInnerFromJSONTyped;
function BundleIdsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, BundleIdCapability_1.instanceOfBundleIdCapability)(value)) {
        return (0, BundleIdCapability_1.BundleIdCapabilityToJSON)(value);
    }
    if ((0, Profile_1.instanceOfProfile)(value)) {
        return (0, Profile_1.ProfileToJSON)(value);
    }
    return {};
}
exports.BundleIdsResponseIncludedInnerToJSON = BundleIdsResponseIncludedInnerToJSON;
//# sourceMappingURL=BundleIdsResponseIncludedInner.js.map