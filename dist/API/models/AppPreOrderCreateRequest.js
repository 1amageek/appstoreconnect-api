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
exports.AppPreOrderCreateRequestToJSON = exports.AppPreOrderCreateRequestFromJSONTyped = exports.AppPreOrderCreateRequestFromJSON = exports.instanceOfAppPreOrderCreateRequest = void 0;
const AppPreOrderCreateRequestData_1 = require("./AppPreOrderCreateRequestData");
/**
 * Check if a given object implements the AppPreOrderCreateRequest interface.
 */
function instanceOfAppPreOrderCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppPreOrderCreateRequest = instanceOfAppPreOrderCreateRequest;
function AppPreOrderCreateRequestFromJSON(json) {
    return AppPreOrderCreateRequestFromJSONTyped(json, false);
}
exports.AppPreOrderCreateRequestFromJSON = AppPreOrderCreateRequestFromJSON;
function AppPreOrderCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppPreOrderCreateRequestData_1.AppPreOrderCreateRequestDataFromJSON)(json['data']),
    };
}
exports.AppPreOrderCreateRequestFromJSONTyped = AppPreOrderCreateRequestFromJSONTyped;
function AppPreOrderCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppPreOrderCreateRequestData_1.AppPreOrderCreateRequestDataToJSON)(value.data),
    };
}
exports.AppPreOrderCreateRequestToJSON = AppPreOrderCreateRequestToJSON;
//# sourceMappingURL=AppPreOrderCreateRequest.js.map