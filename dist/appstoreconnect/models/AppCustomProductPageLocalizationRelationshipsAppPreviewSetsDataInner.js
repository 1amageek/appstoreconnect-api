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
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON = exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped = exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON = exports.instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner = exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerTypeEnum = void 0;
/**
 * @export
 */
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerTypeEnum = {
    AppPreviewSets: 'appPreviewSets'
};
/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner interface.
 */
function instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner = instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner;
function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON(json) {
    return AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped(json, false);
}
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON = AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON;
function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped = AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped;
function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON(value) {
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
exports.AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON = AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON;
//# sourceMappingURL=AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner.js.map