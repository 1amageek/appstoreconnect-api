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
exports.AppScreenshotSetCreateRequestToJSON = exports.AppScreenshotSetCreateRequestFromJSONTyped = exports.AppScreenshotSetCreateRequestFromJSON = exports.instanceOfAppScreenshotSetCreateRequest = void 0;
const AppScreenshotSetCreateRequestData_1 = require("./AppScreenshotSetCreateRequestData");
/**
 * Check if a given object implements the AppScreenshotSetCreateRequest interface.
 */
function instanceOfAppScreenshotSetCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppScreenshotSetCreateRequest = instanceOfAppScreenshotSetCreateRequest;
function AppScreenshotSetCreateRequestFromJSON(json) {
    return AppScreenshotSetCreateRequestFromJSONTyped(json, false);
}
exports.AppScreenshotSetCreateRequestFromJSON = AppScreenshotSetCreateRequestFromJSON;
function AppScreenshotSetCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppScreenshotSetCreateRequestData_1.AppScreenshotSetCreateRequestDataFromJSON)(json['data']),
    };
}
exports.AppScreenshotSetCreateRequestFromJSONTyped = AppScreenshotSetCreateRequestFromJSONTyped;
function AppScreenshotSetCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppScreenshotSetCreateRequestData_1.AppScreenshotSetCreateRequestDataToJSON)(value.data),
    };
}
exports.AppScreenshotSetCreateRequestToJSON = AppScreenshotSetCreateRequestToJSON;
//# sourceMappingURL=AppScreenshotSetCreateRequest.js.map