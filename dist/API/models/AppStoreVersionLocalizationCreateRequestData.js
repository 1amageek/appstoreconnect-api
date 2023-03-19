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
exports.AppStoreVersionLocalizationCreateRequestDataToJSON = exports.AppStoreVersionLocalizationCreateRequestDataFromJSONTyped = exports.AppStoreVersionLocalizationCreateRequestDataFromJSON = exports.instanceOfAppStoreVersionLocalizationCreateRequestData = exports.AppStoreVersionLocalizationCreateRequestDataTypeEnum = void 0;
const AppStoreReviewDetailCreateRequestDataRelationships_1 = require("./AppStoreReviewDetailCreateRequestDataRelationships");
const AppStoreVersionLocalizationCreateRequestDataAttributes_1 = require("./AppStoreVersionLocalizationCreateRequestDataAttributes");
/**
 * @export
 */
exports.AppStoreVersionLocalizationCreateRequestDataTypeEnum = {
    AppStoreVersionLocalizations: 'appStoreVersionLocalizations'
};
/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequestData interface.
 */
function instanceOfAppStoreVersionLocalizationCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersionLocalizationCreateRequestData = instanceOfAppStoreVersionLocalizationCreateRequestData;
function AppStoreVersionLocalizationCreateRequestDataFromJSON(json) {
    return AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json, false);
}
exports.AppStoreVersionLocalizationCreateRequestDataFromJSON = AppStoreVersionLocalizationCreateRequestDataFromJSON;
function AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, AppStoreVersionLocalizationCreateRequestDataAttributes_1.AppStoreVersionLocalizationCreateRequestDataAttributesFromJSON)(json['attributes']),
        'relationships': (0, AppStoreReviewDetailCreateRequestDataRelationships_1.AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.AppStoreVersionLocalizationCreateRequestDataFromJSONTyped = AppStoreVersionLocalizationCreateRequestDataFromJSONTyped;
function AppStoreVersionLocalizationCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, AppStoreVersionLocalizationCreateRequestDataAttributes_1.AppStoreVersionLocalizationCreateRequestDataAttributesToJSON)(value.attributes),
        'relationships': (0, AppStoreReviewDetailCreateRequestDataRelationships_1.AppStoreReviewDetailCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.AppStoreVersionLocalizationCreateRequestDataToJSON = AppStoreVersionLocalizationCreateRequestDataToJSON;
//# sourceMappingURL=AppStoreVersionLocalizationCreateRequestData.js.map