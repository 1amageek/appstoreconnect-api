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
exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerToJSON = exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSONTyped = exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSON = exports.instanceOfAppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner = exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerTypeEnum = void 0;
/**
 * @export
 */
exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerTypeEnum = {
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations'
};
/**
 * Check if a given object implements the AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner interface.
 */
function instanceOfAppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner = instanceOfAppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner;
function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSON(json) {
    return AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSONTyped(json, false);
}
exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSON = AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSON;
function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSONTyped = AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSONTyped;
function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerToJSON(value) {
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
exports.AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerToJSON = AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerToJSON;
//# sourceMappingURL=AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner.js.map