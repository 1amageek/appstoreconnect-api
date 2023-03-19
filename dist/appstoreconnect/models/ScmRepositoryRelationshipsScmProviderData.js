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
exports.ScmRepositoryRelationshipsScmProviderDataToJSON = exports.ScmRepositoryRelationshipsScmProviderDataFromJSONTyped = exports.ScmRepositoryRelationshipsScmProviderDataFromJSON = exports.instanceOfScmRepositoryRelationshipsScmProviderData = exports.ScmRepositoryRelationshipsScmProviderDataTypeEnum = void 0;
/**
 * @export
 */
exports.ScmRepositoryRelationshipsScmProviderDataTypeEnum = {
    ScmProviders: 'scmProviders'
};
/**
 * Check if a given object implements the ScmRepositoryRelationshipsScmProviderData interface.
 */
function instanceOfScmRepositoryRelationshipsScmProviderData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfScmRepositoryRelationshipsScmProviderData = instanceOfScmRepositoryRelationshipsScmProviderData;
function ScmRepositoryRelationshipsScmProviderDataFromJSON(json) {
    return ScmRepositoryRelationshipsScmProviderDataFromJSONTyped(json, false);
}
exports.ScmRepositoryRelationshipsScmProviderDataFromJSON = ScmRepositoryRelationshipsScmProviderDataFromJSON;
function ScmRepositoryRelationshipsScmProviderDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.ScmRepositoryRelationshipsScmProviderDataFromJSONTyped = ScmRepositoryRelationshipsScmProviderDataFromJSONTyped;
function ScmRepositoryRelationshipsScmProviderDataToJSON(value) {
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
exports.ScmRepositoryRelationshipsScmProviderDataToJSON = ScmRepositoryRelationshipsScmProviderDataToJSON;
//# sourceMappingURL=ScmRepositoryRelationshipsScmProviderData.js.map