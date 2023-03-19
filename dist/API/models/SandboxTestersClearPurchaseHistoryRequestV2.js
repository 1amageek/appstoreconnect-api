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
exports.SandboxTestersClearPurchaseHistoryRequestV2ToJSON = exports.SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped = exports.SandboxTestersClearPurchaseHistoryRequestV2FromJSON = exports.instanceOfSandboxTestersClearPurchaseHistoryRequestV2 = exports.SandboxTestersClearPurchaseHistoryRequestV2TypeEnum = void 0;
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.SandboxTestersClearPurchaseHistoryRequestV2TypeEnum = {
    SandboxTestersClearPurchaseHistoryRequest: 'sandboxTestersClearPurchaseHistoryRequest'
};
/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2 interface.
 */
function instanceOfSandboxTestersClearPurchaseHistoryRequestV2(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfSandboxTestersClearPurchaseHistoryRequestV2 = instanceOfSandboxTestersClearPurchaseHistoryRequestV2;
function SandboxTestersClearPurchaseHistoryRequestV2FromJSON(json) {
    return SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped(json, false);
}
exports.SandboxTestersClearPurchaseHistoryRequestV2FromJSON = SandboxTestersClearPurchaseHistoryRequestV2FromJSON;
function SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped = SandboxTestersClearPurchaseHistoryRequestV2FromJSONTyped;
function SandboxTestersClearPurchaseHistoryRequestV2ToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.SandboxTestersClearPurchaseHistoryRequestV2ToJSON = SandboxTestersClearPurchaseHistoryRequestV2ToJSON;
//# sourceMappingURL=SandboxTestersClearPurchaseHistoryRequestV2.js.map