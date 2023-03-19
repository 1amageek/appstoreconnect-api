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
exports.CiWorkflowCreateRequestToJSON = exports.CiWorkflowCreateRequestFromJSONTyped = exports.CiWorkflowCreateRequestFromJSON = exports.instanceOfCiWorkflowCreateRequest = void 0;
const CiWorkflowCreateRequestData_1 = require("./CiWorkflowCreateRequestData");
/**
 * Check if a given object implements the CiWorkflowCreateRequest interface.
 */
function instanceOfCiWorkflowCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfCiWorkflowCreateRequest = instanceOfCiWorkflowCreateRequest;
function CiWorkflowCreateRequestFromJSON(json) {
    return CiWorkflowCreateRequestFromJSONTyped(json, false);
}
exports.CiWorkflowCreateRequestFromJSON = CiWorkflowCreateRequestFromJSON;
function CiWorkflowCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, CiWorkflowCreateRequestData_1.CiWorkflowCreateRequestDataFromJSON)(json['data']),
    };
}
exports.CiWorkflowCreateRequestFromJSONTyped = CiWorkflowCreateRequestFromJSONTyped;
function CiWorkflowCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, CiWorkflowCreateRequestData_1.CiWorkflowCreateRequestDataToJSON)(value.data),
    };
}
exports.CiWorkflowCreateRequestToJSON = CiWorkflowCreateRequestToJSON;
//# sourceMappingURL=CiWorkflowCreateRequest.js.map