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
exports.AppStoreVersionPhasedReleaseCreateRequestToJSON = exports.AppStoreVersionPhasedReleaseCreateRequestFromJSONTyped = exports.AppStoreVersionPhasedReleaseCreateRequestFromJSON = exports.instanceOfAppStoreVersionPhasedReleaseCreateRequest = void 0;
const AppStoreVersionPhasedReleaseCreateRequestData_1 = require("./AppStoreVersionPhasedReleaseCreateRequestData");
/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseCreateRequest interface.
 */
function instanceOfAppStoreVersionPhasedReleaseCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersionPhasedReleaseCreateRequest = instanceOfAppStoreVersionPhasedReleaseCreateRequest;
function AppStoreVersionPhasedReleaseCreateRequestFromJSON(json) {
    return AppStoreVersionPhasedReleaseCreateRequestFromJSONTyped(json, false);
}
exports.AppStoreVersionPhasedReleaseCreateRequestFromJSON = AppStoreVersionPhasedReleaseCreateRequestFromJSON;
function AppStoreVersionPhasedReleaseCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppStoreVersionPhasedReleaseCreateRequestData_1.AppStoreVersionPhasedReleaseCreateRequestDataFromJSON)(json['data']),
    };
}
exports.AppStoreVersionPhasedReleaseCreateRequestFromJSONTyped = AppStoreVersionPhasedReleaseCreateRequestFromJSONTyped;
function AppStoreVersionPhasedReleaseCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppStoreVersionPhasedReleaseCreateRequestData_1.AppStoreVersionPhasedReleaseCreateRequestDataToJSON)(value.data),
    };
}
exports.AppStoreVersionPhasedReleaseCreateRequestToJSON = AppStoreVersionPhasedReleaseCreateRequestToJSON;
//# sourceMappingURL=AppStoreVersionPhasedReleaseCreateRequest.js.map