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
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON = exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped = exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON = exports.instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters = void 0;
const SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner_1 = require("./SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner");
/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters interface.
 */
function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters = instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters;
function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON(json) {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped(json, false);
}
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON = SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON;
function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner_1.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerFromJSON)),
    };
}
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped = SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped;
function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInner_1.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersDataInnerToJSON)),
    };
}
exports.SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON = SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON;
//# sourceMappingURL=SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters.js.map