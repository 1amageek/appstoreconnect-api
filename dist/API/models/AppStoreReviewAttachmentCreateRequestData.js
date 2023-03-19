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
exports.AppStoreReviewAttachmentCreateRequestDataToJSON = exports.AppStoreReviewAttachmentCreateRequestDataFromJSONTyped = exports.AppStoreReviewAttachmentCreateRequestDataFromJSON = exports.instanceOfAppStoreReviewAttachmentCreateRequestData = exports.AppStoreReviewAttachmentCreateRequestDataTypeEnum = void 0;
const AppClipAdvancedExperienceImageCreateRequestDataAttributes_1 = require("./AppClipAdvancedExperienceImageCreateRequestDataAttributes");
const AppStoreReviewAttachmentCreateRequestDataRelationships_1 = require("./AppStoreReviewAttachmentCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppStoreReviewAttachmentCreateRequestDataTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
};
/**
 * Check if a given object implements the AppStoreReviewAttachmentCreateRequestData interface.
 */
function instanceOfAppStoreReviewAttachmentCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfAppStoreReviewAttachmentCreateRequestData = instanceOfAppStoreReviewAttachmentCreateRequestData;
function AppStoreReviewAttachmentCreateRequestDataFromJSON(json) {
    return AppStoreReviewAttachmentCreateRequestDataFromJSONTyped(json, false);
}
exports.AppStoreReviewAttachmentCreateRequestDataFromJSON = AppStoreReviewAttachmentCreateRequestDataFromJSON;
function AppStoreReviewAttachmentCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, AppClipAdvancedExperienceImageCreateRequestDataAttributes_1.AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON)(json['attributes']),
        'relationships': (0, AppStoreReviewAttachmentCreateRequestDataRelationships_1.AppStoreReviewAttachmentCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.AppStoreReviewAttachmentCreateRequestDataFromJSONTyped = AppStoreReviewAttachmentCreateRequestDataFromJSONTyped;
function AppStoreReviewAttachmentCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, AppClipAdvancedExperienceImageCreateRequestDataAttributes_1.AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON)(value.attributes),
        'relationships': (0, AppStoreReviewAttachmentCreateRequestDataRelationships_1.AppStoreReviewAttachmentCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.AppStoreReviewAttachmentCreateRequestDataToJSON = AppStoreReviewAttachmentCreateRequestDataToJSON;
//# sourceMappingURL=AppStoreReviewAttachmentCreateRequestData.js.map