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
exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON = exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped = exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON = exports.instanceOfAppPreviewSetRelationshipsAppStoreVersionLocalizationData = exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataTypeEnum = void 0;
/**
 * @export
 */
exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataTypeEnum = {
    AppStoreVersionLocalizations: 'appStoreVersionLocalizations'
};
/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppStoreVersionLocalizationData interface.
 */
function instanceOfAppPreviewSetRelationshipsAppStoreVersionLocalizationData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppPreviewSetRelationshipsAppStoreVersionLocalizationData = instanceOfAppPreviewSetRelationshipsAppStoreVersionLocalizationData;
function AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON(json) {
    return AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped(json, false);
}
exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON = AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSON;
function AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped = AppPreviewSetRelationshipsAppStoreVersionLocalizationDataFromJSONTyped;
function AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON(value) {
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
exports.AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON = AppPreviewSetRelationshipsAppStoreVersionLocalizationDataToJSON;
//# sourceMappingURL=AppPreviewSetRelationshipsAppStoreVersionLocalizationData.js.map