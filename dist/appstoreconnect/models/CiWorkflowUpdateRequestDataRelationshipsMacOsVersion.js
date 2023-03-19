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
exports.CiWorkflowUpdateRequestDataRelationshipsMacOsVersionToJSON = exports.CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped = exports.CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSON = exports.instanceOfCiWorkflowUpdateRequestDataRelationshipsMacOsVersion = void 0;
const runtime_1 = require("../runtime");
const CiWorkflowRelationshipsMacOsVersionData_1 = require("./CiWorkflowRelationshipsMacOsVersionData");
/**
 * Check if a given object implements the CiWorkflowUpdateRequestDataRelationshipsMacOsVersion interface.
 */
function instanceOfCiWorkflowUpdateRequestDataRelationshipsMacOsVersion(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCiWorkflowUpdateRequestDataRelationshipsMacOsVersion = instanceOfCiWorkflowUpdateRequestDataRelationshipsMacOsVersion;
function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSON(json) {
    return CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped(json, false);
}
exports.CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSON = CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSON;
function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, CiWorkflowRelationshipsMacOsVersionData_1.CiWorkflowRelationshipsMacOsVersionDataFromJSON)(json['data']),
    };
}
exports.CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped = CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped;
function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, CiWorkflowRelationshipsMacOsVersionData_1.CiWorkflowRelationshipsMacOsVersionDataToJSON)(value.data),
    };
}
exports.CiWorkflowUpdateRequestDataRelationshipsMacOsVersionToJSON = CiWorkflowUpdateRequestDataRelationshipsMacOsVersionToJSON;
//# sourceMappingURL=CiWorkflowUpdateRequestDataRelationshipsMacOsVersion.js.map