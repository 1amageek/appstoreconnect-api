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
exports.CiWorkflowUpdateRequestToJSON = exports.CiWorkflowUpdateRequestFromJSONTyped = exports.CiWorkflowUpdateRequestFromJSON = exports.instanceOfCiWorkflowUpdateRequest = void 0;
const CiWorkflowUpdateRequestData_1 = require("./CiWorkflowUpdateRequestData");
/**
 * Check if a given object implements the CiWorkflowUpdateRequest interface.
 */
function instanceOfCiWorkflowUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfCiWorkflowUpdateRequest = instanceOfCiWorkflowUpdateRequest;
function CiWorkflowUpdateRequestFromJSON(json) {
    return CiWorkflowUpdateRequestFromJSONTyped(json, false);
}
exports.CiWorkflowUpdateRequestFromJSON = CiWorkflowUpdateRequestFromJSON;
function CiWorkflowUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, CiWorkflowUpdateRequestData_1.CiWorkflowUpdateRequestDataFromJSON)(json['data']),
    };
}
exports.CiWorkflowUpdateRequestFromJSONTyped = CiWorkflowUpdateRequestFromJSONTyped;
function CiWorkflowUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, CiWorkflowUpdateRequestData_1.CiWorkflowUpdateRequestDataToJSON)(value.data),
    };
}
exports.CiWorkflowUpdateRequestToJSON = CiWorkflowUpdateRequestToJSON;
//# sourceMappingURL=CiWorkflowUpdateRequest.js.map