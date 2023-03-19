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
exports.AppStoreReviewAttachmentAttributesToJSON = exports.AppStoreReviewAttachmentAttributesFromJSONTyped = exports.AppStoreReviewAttachmentAttributesFromJSON = exports.instanceOfAppStoreReviewAttachmentAttributes = void 0;
const runtime_1 = require("../runtime");
const AppMediaAssetState_1 = require("./AppMediaAssetState");
const UploadOperation_1 = require("./UploadOperation");
/**
 * Check if a given object implements the AppStoreReviewAttachmentAttributes interface.
 */
function instanceOfAppStoreReviewAttachmentAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppStoreReviewAttachmentAttributes = instanceOfAppStoreReviewAttachmentAttributes;
function AppStoreReviewAttachmentAttributesFromJSON(json) {
    return AppStoreReviewAttachmentAttributesFromJSONTyped(json, false);
}
exports.AppStoreReviewAttachmentAttributesFromJSON = AppStoreReviewAttachmentAttributesFromJSON;
function AppStoreReviewAttachmentAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fileSize': !(0, runtime_1.exists)(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !(0, runtime_1.exists)(json, 'fileName') ? undefined : json['fileName'],
        'sourceFileChecksum': !(0, runtime_1.exists)(json, 'sourceFileChecksum') ? undefined : json['sourceFileChecksum'],
        'uploadOperations': !(0, runtime_1.exists)(json, 'uploadOperations') ? undefined : (json['uploadOperations'].map(UploadOperation_1.UploadOperationFromJSON)),
        'assetDeliveryState': !(0, runtime_1.exists)(json, 'assetDeliveryState') ? undefined : (0, AppMediaAssetState_1.AppMediaAssetStateFromJSON)(json['assetDeliveryState']),
    };
}
exports.AppStoreReviewAttachmentAttributesFromJSONTyped = AppStoreReviewAttachmentAttributesFromJSONTyped;
function AppStoreReviewAttachmentAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'sourceFileChecksum': value.sourceFileChecksum,
        'uploadOperations': value.uploadOperations === undefined ? undefined : (value.uploadOperations.map(UploadOperation_1.UploadOperationToJSON)),
        'assetDeliveryState': (0, AppMediaAssetState_1.AppMediaAssetStateToJSON)(value.assetDeliveryState),
    };
}
exports.AppStoreReviewAttachmentAttributesToJSON = AppStoreReviewAttachmentAttributesToJSON;
//# sourceMappingURL=AppStoreReviewAttachmentAttributes.js.map