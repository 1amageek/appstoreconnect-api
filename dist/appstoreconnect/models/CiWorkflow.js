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
exports.CiWorkflowToJSON = exports.CiWorkflowFromJSONTyped = exports.CiWorkflowFromJSON = exports.instanceOfCiWorkflow = exports.CiWorkflowTypeEnum = void 0;
const runtime_1 = require("../runtime");
const CiWorkflowAttributes_1 = require("./CiWorkflowAttributes");
const CiWorkflowRelationships_1 = require("./CiWorkflowRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.CiWorkflowTypeEnum = {
    CiWorkflows: 'ciWorkflows'
};
/**
 * Check if a given object implements the CiWorkflow interface.
 */
function instanceOfCiWorkflow(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfCiWorkflow = instanceOfCiWorkflow;
function CiWorkflowFromJSON(json) {
    return CiWorkflowFromJSONTyped(json, false);
}
exports.CiWorkflowFromJSON = CiWorkflowFromJSON;
function CiWorkflowFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, CiWorkflowAttributes_1.CiWorkflowAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, CiWorkflowRelationships_1.CiWorkflowRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.CiWorkflowFromJSONTyped = CiWorkflowFromJSONTyped;
function CiWorkflowToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, CiWorkflowAttributes_1.CiWorkflowAttributesToJSON)(value.attributes),
        'relationships': (0, CiWorkflowRelationships_1.CiWorkflowRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.CiWorkflowToJSON = CiWorkflowToJSON;
//# sourceMappingURL=CiWorkflow.js.map