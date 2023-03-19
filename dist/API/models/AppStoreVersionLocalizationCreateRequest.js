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
exports.AppStoreVersionLocalizationCreateRequestToJSON = exports.AppStoreVersionLocalizationCreateRequestFromJSONTyped = exports.AppStoreVersionLocalizationCreateRequestFromJSON = exports.instanceOfAppStoreVersionLocalizationCreateRequest = void 0;
const AppStoreVersionLocalizationCreateRequestData_1 = require("./AppStoreVersionLocalizationCreateRequestData");
/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequest interface.
 */
function instanceOfAppStoreVersionLocalizationCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersionLocalizationCreateRequest = instanceOfAppStoreVersionLocalizationCreateRequest;
function AppStoreVersionLocalizationCreateRequestFromJSON(json) {
    return AppStoreVersionLocalizationCreateRequestFromJSONTyped(json, false);
}
exports.AppStoreVersionLocalizationCreateRequestFromJSON = AppStoreVersionLocalizationCreateRequestFromJSON;
function AppStoreVersionLocalizationCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppStoreVersionLocalizationCreateRequestData_1.AppStoreVersionLocalizationCreateRequestDataFromJSON)(json['data']),
    };
}
exports.AppStoreVersionLocalizationCreateRequestFromJSONTyped = AppStoreVersionLocalizationCreateRequestFromJSONTyped;
function AppStoreVersionLocalizationCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppStoreVersionLocalizationCreateRequestData_1.AppStoreVersionLocalizationCreateRequestDataToJSON)(value.data),
    };
}
exports.AppStoreVersionLocalizationCreateRequestToJSON = AppStoreVersionLocalizationCreateRequestToJSON;
//# sourceMappingURL=AppStoreVersionLocalizationCreateRequest.js.map