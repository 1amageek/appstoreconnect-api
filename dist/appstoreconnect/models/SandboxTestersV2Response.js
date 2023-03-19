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
exports.SandboxTestersV2ResponseToJSON = exports.SandboxTestersV2ResponseFromJSONTyped = exports.SandboxTestersV2ResponseFromJSON = exports.instanceOfSandboxTestersV2Response = void 0;
const runtime_1 = require("../runtime");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
const SandboxTesterV2_1 = require("./SandboxTesterV2");
/**
 * Check if a given object implements the SandboxTestersV2Response interface.
 */
function instanceOfSandboxTestersV2Response(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfSandboxTestersV2Response = instanceOfSandboxTestersV2Response;
function SandboxTestersV2ResponseFromJSON(json) {
    return SandboxTestersV2ResponseFromJSONTyped(json, false);
}
exports.SandboxTestersV2ResponseFromJSON = SandboxTestersV2ResponseFromJSON;
function SandboxTestersV2ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(SandboxTesterV2_1.SandboxTesterV2FromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.SandboxTestersV2ResponseFromJSONTyped = SandboxTestersV2ResponseFromJSONTyped;
function SandboxTestersV2ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(SandboxTesterV2_1.SandboxTesterV2ToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.SandboxTestersV2ResponseToJSON = SandboxTestersV2ResponseToJSON;
//# sourceMappingURL=SandboxTestersV2Response.js.map