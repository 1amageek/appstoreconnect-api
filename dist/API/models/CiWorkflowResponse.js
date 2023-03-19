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
exports.CiWorkflowResponseToJSON = exports.CiWorkflowResponseFromJSONTyped = exports.CiWorkflowResponseFromJSON = exports.instanceOfCiWorkflowResponse = void 0;
const runtime_1 = require("../runtime");
const CiWorkflow_1 = require("./CiWorkflow");
const CiWorkflowsResponseIncludedInner_1 = require("./CiWorkflowsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the CiWorkflowResponse interface.
 */
function instanceOfCiWorkflowResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfCiWorkflowResponse = instanceOfCiWorkflowResponse;
function CiWorkflowResponseFromJSON(json) {
    return CiWorkflowResponseFromJSONTyped(json, false);
}
exports.CiWorkflowResponseFromJSON = CiWorkflowResponseFromJSON;
function CiWorkflowResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, CiWorkflow_1.CiWorkflowFromJSON)(json['data']),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(CiWorkflowsResponseIncludedInner_1.CiWorkflowsResponseIncludedInnerFromJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.CiWorkflowResponseFromJSONTyped = CiWorkflowResponseFromJSONTyped;
function CiWorkflowResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, CiWorkflow_1.CiWorkflowToJSON)(value.data),
        'included': value.included === undefined ? undefined : (value.included.map(CiWorkflowsResponseIncludedInner_1.CiWorkflowsResponseIncludedInnerToJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.CiWorkflowResponseToJSON = CiWorkflowResponseToJSON;
//# sourceMappingURL=CiWorkflowResponse.js.map