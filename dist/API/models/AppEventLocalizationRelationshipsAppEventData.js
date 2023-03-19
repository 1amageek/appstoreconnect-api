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
exports.AppEventLocalizationRelationshipsAppEventDataToJSON = exports.AppEventLocalizationRelationshipsAppEventDataFromJSONTyped = exports.AppEventLocalizationRelationshipsAppEventDataFromJSON = exports.instanceOfAppEventLocalizationRelationshipsAppEventData = exports.AppEventLocalizationRelationshipsAppEventDataTypeEnum = void 0;
/**
 * @export
 */
exports.AppEventLocalizationRelationshipsAppEventDataTypeEnum = {
    AppEvents: 'appEvents'
};
/**
 * Check if a given object implements the AppEventLocalizationRelationshipsAppEventData interface.
 */
function instanceOfAppEventLocalizationRelationshipsAppEventData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppEventLocalizationRelationshipsAppEventData = instanceOfAppEventLocalizationRelationshipsAppEventData;
function AppEventLocalizationRelationshipsAppEventDataFromJSON(json) {
    return AppEventLocalizationRelationshipsAppEventDataFromJSONTyped(json, false);
}
exports.AppEventLocalizationRelationshipsAppEventDataFromJSON = AppEventLocalizationRelationshipsAppEventDataFromJSON;
function AppEventLocalizationRelationshipsAppEventDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.AppEventLocalizationRelationshipsAppEventDataFromJSONTyped = AppEventLocalizationRelationshipsAppEventDataFromJSONTyped;
function AppEventLocalizationRelationshipsAppEventDataToJSON(value) {
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
exports.AppEventLocalizationRelationshipsAppEventDataToJSON = AppEventLocalizationRelationshipsAppEventDataToJSON;
//# sourceMappingURL=AppEventLocalizationRelationshipsAppEventData.js.map