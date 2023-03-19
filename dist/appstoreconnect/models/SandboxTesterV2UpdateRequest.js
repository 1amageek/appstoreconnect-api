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
exports.SandboxTesterV2UpdateRequestToJSON = exports.SandboxTesterV2UpdateRequestFromJSONTyped = exports.SandboxTesterV2UpdateRequestFromJSON = exports.instanceOfSandboxTesterV2UpdateRequest = void 0;
const SandboxTesterV2UpdateRequestData_1 = require("./SandboxTesterV2UpdateRequestData");
/**
 * Check if a given object implements the SandboxTesterV2UpdateRequest interface.
 */
function instanceOfSandboxTesterV2UpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfSandboxTesterV2UpdateRequest = instanceOfSandboxTesterV2UpdateRequest;
function SandboxTesterV2UpdateRequestFromJSON(json) {
    return SandboxTesterV2UpdateRequestFromJSONTyped(json, false);
}
exports.SandboxTesterV2UpdateRequestFromJSON = SandboxTesterV2UpdateRequestFromJSON;
function SandboxTesterV2UpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, SandboxTesterV2UpdateRequestData_1.SandboxTesterV2UpdateRequestDataFromJSON)(json['data']),
    };
}
exports.SandboxTesterV2UpdateRequestFromJSONTyped = SandboxTesterV2UpdateRequestFromJSONTyped;
function SandboxTesterV2UpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, SandboxTesterV2UpdateRequestData_1.SandboxTesterV2UpdateRequestDataToJSON)(value.data),
    };
}
exports.SandboxTesterV2UpdateRequestToJSON = SandboxTesterV2UpdateRequestToJSON;
//# sourceMappingURL=SandboxTesterV2UpdateRequest.js.map