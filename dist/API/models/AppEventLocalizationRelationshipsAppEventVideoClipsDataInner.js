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
exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON = exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped = exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON = exports.instanceOfAppEventLocalizationRelationshipsAppEventVideoClipsDataInner = exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum = void 0;
/**
 * @export
 */
exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerTypeEnum = {
    AppEventVideoClips: 'appEventVideoClips'
};
/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventVideoClipsDataInner interface.
 */
function instanceOfAppEventLocalizationRelationshipsAppEventVideoClipsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppEventLocalizationRelationshipsAppEventVideoClipsDataInner = instanceOfAppEventLocalizationRelationshipsAppEventVideoClipsDataInner;
function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON(json) {
    return AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped(json, false);
}
exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON = AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSON;
function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped = AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerFromJSONTyped;
function AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON(value) {
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
exports.AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON = AppEventLocalizationRelationshipsAppEventVideoClipsDataInnerToJSON;
//# sourceMappingURL=AppEventLocalizationRelationshipsAppEventVideoClipsDataInner.js.map