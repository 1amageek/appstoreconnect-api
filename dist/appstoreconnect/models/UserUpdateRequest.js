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
exports.UserUpdateRequestToJSON = exports.UserUpdateRequestFromJSONTyped = exports.UserUpdateRequestFromJSON = exports.instanceOfUserUpdateRequest = void 0;
const UserUpdateRequestData_1 = require("./UserUpdateRequestData");
/**
 * Check if a given object implements the UserUpdateRequest interface.
 */
function instanceOfUserUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfUserUpdateRequest = instanceOfUserUpdateRequest;
function UserUpdateRequestFromJSON(json) {
    return UserUpdateRequestFromJSONTyped(json, false);
}
exports.UserUpdateRequestFromJSON = UserUpdateRequestFromJSON;
function UserUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, UserUpdateRequestData_1.UserUpdateRequestDataFromJSON)(json['data']),
    };
}
exports.UserUpdateRequestFromJSONTyped = UserUpdateRequestFromJSONTyped;
function UserUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, UserUpdateRequestData_1.UserUpdateRequestDataToJSON)(value.data),
    };
}
exports.UserUpdateRequestToJSON = UserUpdateRequestToJSON;
//# sourceMappingURL=UserUpdateRequest.js.map