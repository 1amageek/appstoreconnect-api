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
exports.AppStoreVersionCreateRequestDataRelationshipsBuildToJSON = exports.AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped = exports.AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON = exports.instanceOfAppStoreVersionCreateRequestDataRelationshipsBuild = void 0;
const runtime_1 = require("../runtime");
const AppEncryptionDeclarationRelationshipsBuildsDataInner_1 = require("./AppEncryptionDeclarationRelationshipsBuildsDataInner");
/**
 * Check if a given object implements the AppStoreVersionCreateRequestDataRelationshipsBuild interface.
 */
function instanceOfAppStoreVersionCreateRequestDataRelationshipsBuild(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppStoreVersionCreateRequestDataRelationshipsBuild = instanceOfAppStoreVersionCreateRequestDataRelationshipsBuild;
function AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON(json) {
    return AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped(json, false);
}
exports.AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON = AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON;
function AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, AppEncryptionDeclarationRelationshipsBuildsDataInner_1.AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)(json['data']),
    };
}
exports.AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped = AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped;
function AppStoreVersionCreateRequestDataRelationshipsBuildToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppEncryptionDeclarationRelationshipsBuildsDataInner_1.AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)(value.data),
    };
}
exports.AppStoreVersionCreateRequestDataRelationshipsBuildToJSON = AppStoreVersionCreateRequestDataRelationshipsBuildToJSON;
//# sourceMappingURL=AppStoreVersionCreateRequestDataRelationshipsBuild.js.map