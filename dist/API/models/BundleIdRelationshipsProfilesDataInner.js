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
exports.BundleIdRelationshipsProfilesDataInnerToJSON = exports.BundleIdRelationshipsProfilesDataInnerFromJSONTyped = exports.BundleIdRelationshipsProfilesDataInnerFromJSON = exports.instanceOfBundleIdRelationshipsProfilesDataInner = exports.BundleIdRelationshipsProfilesDataInnerTypeEnum = void 0;
/**
 * @export
 */
exports.BundleIdRelationshipsProfilesDataInnerTypeEnum = {
    Profiles: 'profiles'
};
/**
 * Check if a given object implements the BundleIdRelationshipsProfilesDataInner interface.
 */
function instanceOfBundleIdRelationshipsProfilesDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBundleIdRelationshipsProfilesDataInner = instanceOfBundleIdRelationshipsProfilesDataInner;
function BundleIdRelationshipsProfilesDataInnerFromJSON(json) {
    return BundleIdRelationshipsProfilesDataInnerFromJSONTyped(json, false);
}
exports.BundleIdRelationshipsProfilesDataInnerFromJSON = BundleIdRelationshipsProfilesDataInnerFromJSON;
function BundleIdRelationshipsProfilesDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.BundleIdRelationshipsProfilesDataInnerFromJSONTyped = BundleIdRelationshipsProfilesDataInnerFromJSONTyped;
function BundleIdRelationshipsProfilesDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
    };
}
exports.BundleIdRelationshipsProfilesDataInnerToJSON = BundleIdRelationshipsProfilesDataInnerToJSON;
//# sourceMappingURL=BundleIdRelationshipsProfilesDataInner.js.map