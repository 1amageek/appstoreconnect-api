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
exports.AppStoreReviewAttachmentUpdateRequestDataToJSON = exports.AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped = exports.AppStoreReviewAttachmentUpdateRequestDataFromJSON = exports.instanceOfAppStoreReviewAttachmentUpdateRequestData = exports.AppStoreReviewAttachmentUpdateRequestDataTypeEnum = void 0;
const runtime_1 = require("../runtime");
const AppClipAdvancedExperienceImageUpdateRequestDataAttributes_1 = require("./AppClipAdvancedExperienceImageUpdateRequestDataAttributes");
/**
 * @export
 */
exports.AppStoreReviewAttachmentUpdateRequestDataTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
};
/**
 * Check if a given object implements the AppStoreReviewAttachmentUpdateRequestData interface.
 */
function instanceOfAppStoreReviewAttachmentUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppStoreReviewAttachmentUpdateRequestData = instanceOfAppStoreReviewAttachmentUpdateRequestData;
function AppStoreReviewAttachmentUpdateRequestDataFromJSON(json) {
    return AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped(json, false);
}
exports.AppStoreReviewAttachmentUpdateRequestDataFromJSON = AppStoreReviewAttachmentUpdateRequestDataFromJSON;
function AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, AppClipAdvancedExperienceImageUpdateRequestDataAttributes_1.AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON)(json['attributes']),
    };
}
exports.AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped = AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped;
function AppStoreReviewAttachmentUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, AppClipAdvancedExperienceImageUpdateRequestDataAttributes_1.AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON)(value.attributes),
    };
}
exports.AppStoreReviewAttachmentUpdateRequestDataToJSON = AppStoreReviewAttachmentUpdateRequestDataToJSON;
//# sourceMappingURL=AppStoreReviewAttachmentUpdateRequestData.js.map