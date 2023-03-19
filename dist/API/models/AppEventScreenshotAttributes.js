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
exports.AppEventScreenshotAttributesToJSON = exports.AppEventScreenshotAttributesFromJSONTyped = exports.AppEventScreenshotAttributesFromJSON = exports.instanceOfAppEventScreenshotAttributes = void 0;
const runtime_1 = require("../runtime");
const AppEventAssetType_1 = require("./AppEventAssetType");
const AppMediaAssetState_1 = require("./AppMediaAssetState");
const ImageAsset_1 = require("./ImageAsset");
const UploadOperation_1 = require("./UploadOperation");
/**
 * Check if a given object implements the AppEventScreenshotAttributes interface.
 */
function instanceOfAppEventScreenshotAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppEventScreenshotAttributes = instanceOfAppEventScreenshotAttributes;
function AppEventScreenshotAttributesFromJSON(json) {
    return AppEventScreenshotAttributesFromJSONTyped(json, false);
}
exports.AppEventScreenshotAttributesFromJSON = AppEventScreenshotAttributesFromJSON;
function AppEventScreenshotAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fileSize': !(0, runtime_1.exists)(json, 'fileSize') ? undefined : json['fileSize'],
        'fileName': !(0, runtime_1.exists)(json, 'fileName') ? undefined : json['fileName'],
        'imageAsset': !(0, runtime_1.exists)(json, 'imageAsset') ? undefined : (0, ImageAsset_1.ImageAssetFromJSON)(json['imageAsset']),
        'assetToken': !(0, runtime_1.exists)(json, 'assetToken') ? undefined : json['assetToken'],
        'uploadOperations': !(0, runtime_1.exists)(json, 'uploadOperations') ? undefined : (json['uploadOperations'].map(UploadOperation_1.UploadOperationFromJSON)),
        'assetDeliveryState': !(0, runtime_1.exists)(json, 'assetDeliveryState') ? undefined : (0, AppMediaAssetState_1.AppMediaAssetStateFromJSON)(json['assetDeliveryState']),
        'appEventAssetType': !(0, runtime_1.exists)(json, 'appEventAssetType') ? undefined : (0, AppEventAssetType_1.AppEventAssetTypeFromJSON)(json['appEventAssetType']),
    };
}
exports.AppEventScreenshotAttributesFromJSONTyped = AppEventScreenshotAttributesFromJSONTyped;
function AppEventScreenshotAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fileSize': value.fileSize,
        'fileName': value.fileName,
        'imageAsset': (0, ImageAsset_1.ImageAssetToJSON)(value.imageAsset),
        'assetToken': value.assetToken,
        'uploadOperations': value.uploadOperations === undefined ? undefined : (value.uploadOperations.map(UploadOperation_1.UploadOperationToJSON)),
        'assetDeliveryState': (0, AppMediaAssetState_1.AppMediaAssetStateToJSON)(value.assetDeliveryState),
        'appEventAssetType': (0, AppEventAssetType_1.AppEventAssetTypeToJSON)(value.appEventAssetType),
    };
}
exports.AppEventScreenshotAttributesToJSON = AppEventScreenshotAttributesToJSON;
//# sourceMappingURL=AppEventScreenshotAttributes.js.map