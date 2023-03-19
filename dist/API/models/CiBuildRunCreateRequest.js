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
exports.CiBuildRunCreateRequestToJSON = exports.CiBuildRunCreateRequestFromJSONTyped = exports.CiBuildRunCreateRequestFromJSON = exports.instanceOfCiBuildRunCreateRequest = void 0;
const CiBuildRunCreateRequestData_1 = require("./CiBuildRunCreateRequestData");
/**
 * Check if a given object implements the CiBuildRunCreateRequest interface.
 */
function instanceOfCiBuildRunCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfCiBuildRunCreateRequest = instanceOfCiBuildRunCreateRequest;
function CiBuildRunCreateRequestFromJSON(json) {
    return CiBuildRunCreateRequestFromJSONTyped(json, false);
}
exports.CiBuildRunCreateRequestFromJSON = CiBuildRunCreateRequestFromJSON;
function CiBuildRunCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, CiBuildRunCreateRequestData_1.CiBuildRunCreateRequestDataFromJSON)(json['data']),
    };
}
exports.CiBuildRunCreateRequestFromJSONTyped = CiBuildRunCreateRequestFromJSONTyped;
function CiBuildRunCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, CiBuildRunCreateRequestData_1.CiBuildRunCreateRequestDataToJSON)(value.data),
    };
}
exports.CiBuildRunCreateRequestToJSON = CiBuildRunCreateRequestToJSON;
//# sourceMappingURL=CiBuildRunCreateRequest.js.map