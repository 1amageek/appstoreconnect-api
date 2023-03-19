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
exports.BuildRelationshipsIconsDataInnerToJSON = exports.BuildRelationshipsIconsDataInnerFromJSONTyped = exports.BuildRelationshipsIconsDataInnerFromJSON = exports.instanceOfBuildRelationshipsIconsDataInner = exports.BuildRelationshipsIconsDataInnerTypeEnum = void 0;
/**
 * @export
 */
exports.BuildRelationshipsIconsDataInnerTypeEnum = {
    BuildIcons: 'buildIcons'
};
/**
 * Check if a given object implements the BuildRelationshipsIconsDataInner interface.
 */
function instanceOfBuildRelationshipsIconsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBuildRelationshipsIconsDataInner = instanceOfBuildRelationshipsIconsDataInner;
function BuildRelationshipsIconsDataInnerFromJSON(json) {
    return BuildRelationshipsIconsDataInnerFromJSONTyped(json, false);
}
exports.BuildRelationshipsIconsDataInnerFromJSON = BuildRelationshipsIconsDataInnerFromJSON;
function BuildRelationshipsIconsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.BuildRelationshipsIconsDataInnerFromJSONTyped = BuildRelationshipsIconsDataInnerFromJSONTyped;
function BuildRelationshipsIconsDataInnerToJSON(value) {
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
exports.BuildRelationshipsIconsDataInnerToJSON = BuildRelationshipsIconsDataInnerToJSON;
//# sourceMappingURL=BuildRelationshipsIconsDataInner.js.map