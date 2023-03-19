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
exports.AppClipAdvancedExperienceImageCreateRequestToJSON = exports.AppClipAdvancedExperienceImageCreateRequestFromJSONTyped = exports.AppClipAdvancedExperienceImageCreateRequestFromJSON = exports.instanceOfAppClipAdvancedExperienceImageCreateRequest = void 0;
const AppClipAdvancedExperienceImageCreateRequestData_1 = require("./AppClipAdvancedExperienceImageCreateRequestData");
/**
 * Check if a given object implements the AppClipAdvancedExperienceImageCreateRequest interface.
 */
function instanceOfAppClipAdvancedExperienceImageCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppClipAdvancedExperienceImageCreateRequest = instanceOfAppClipAdvancedExperienceImageCreateRequest;
function AppClipAdvancedExperienceImageCreateRequestFromJSON(json) {
    return AppClipAdvancedExperienceImageCreateRequestFromJSONTyped(json, false);
}
exports.AppClipAdvancedExperienceImageCreateRequestFromJSON = AppClipAdvancedExperienceImageCreateRequestFromJSON;
function AppClipAdvancedExperienceImageCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppClipAdvancedExperienceImageCreateRequestData_1.AppClipAdvancedExperienceImageCreateRequestDataFromJSON)(json['data']),
    };
}
exports.AppClipAdvancedExperienceImageCreateRequestFromJSONTyped = AppClipAdvancedExperienceImageCreateRequestFromJSONTyped;
function AppClipAdvancedExperienceImageCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppClipAdvancedExperienceImageCreateRequestData_1.AppClipAdvancedExperienceImageCreateRequestDataToJSON)(value.data),
    };
}
exports.AppClipAdvancedExperienceImageCreateRequestToJSON = AppClipAdvancedExperienceImageCreateRequestToJSON;
//# sourceMappingURL=AppClipAdvancedExperienceImageCreateRequest.js.map