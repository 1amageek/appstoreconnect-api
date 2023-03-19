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
exports.AppClipDefaultExperienceLocalizationCreateRequestDataToJSON = exports.AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped = exports.AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON = exports.instanceOfAppClipDefaultExperienceLocalizationCreateRequestData = exports.AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum = void 0;
const AppClipAppStoreReviewDetailCreateRequestDataRelationships_1 = require("./AppClipAppStoreReviewDetailCreateRequestDataRelationships");
const AppClipDefaultExperienceLocalizationCreateRequestDataAttributes_1 = require("./AppClipDefaultExperienceLocalizationCreateRequestDataAttributes");
/**
 * @export
 */
exports.AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum = {
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations'
};
/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationCreateRequestData interface.
 */
function instanceOfAppClipDefaultExperienceLocalizationCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfAppClipDefaultExperienceLocalizationCreateRequestData = instanceOfAppClipDefaultExperienceLocalizationCreateRequestData;
function AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON(json) {
    return AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped(json, false);
}
exports.AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON = AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON;
function AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, AppClipDefaultExperienceLocalizationCreateRequestDataAttributes_1.AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSON)(json['attributes']),
        'relationships': (0, AppClipAppStoreReviewDetailCreateRequestDataRelationships_1.AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped = AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped;
function AppClipDefaultExperienceLocalizationCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, AppClipDefaultExperienceLocalizationCreateRequestDataAttributes_1.AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSON)(value.attributes),
        'relationships': (0, AppClipAppStoreReviewDetailCreateRequestDataRelationships_1.AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.AppClipDefaultExperienceLocalizationCreateRequestDataToJSON = AppClipDefaultExperienceLocalizationCreateRequestDataToJSON;
//# sourceMappingURL=AppClipDefaultExperienceLocalizationCreateRequestData.js.map