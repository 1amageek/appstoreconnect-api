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
exports.AppStoreReviewDetailCreateRequestDataRelationshipsToJSON = exports.AppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped = exports.AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON = exports.instanceOfAppStoreReviewDetailCreateRequestDataRelationships = void 0;
const AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion_1 = require("./AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion");
/**
 * Check if a given object implements the AppStoreReviewDetailCreateRequestDataRelationships interface.
 */
function instanceOfAppStoreReviewDetailCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "appStoreVersion" in value;
    return isInstance;
}
exports.instanceOfAppStoreReviewDetailCreateRequestDataRelationships = instanceOfAppStoreReviewDetailCreateRequestDataRelationships;
function AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON(json) {
    return AppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
exports.AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON = AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON;
function AppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appStoreVersion': (0, AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion_1.AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionFromJSON)(json['appStoreVersion']),
    };
}
exports.AppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped = AppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped;
function AppStoreReviewDetailCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appStoreVersion': (0, AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion_1.AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersionToJSON)(value.appStoreVersion),
    };
}
exports.AppStoreReviewDetailCreateRequestDataRelationshipsToJSON = AppStoreReviewDetailCreateRequestDataRelationshipsToJSON;
//# sourceMappingURL=AppStoreReviewDetailCreateRequestDataRelationships.js.map