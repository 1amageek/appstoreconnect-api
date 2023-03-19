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
exports.BundleIdCapabilitiesResponseToJSON = exports.BundleIdCapabilitiesResponseFromJSONTyped = exports.BundleIdCapabilitiesResponseFromJSON = exports.instanceOfBundleIdCapabilitiesResponse = void 0;
const runtime_1 = require("../runtime");
const BundleIdCapability_1 = require("./BundleIdCapability");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the BundleIdCapabilitiesResponse interface.
 */
function instanceOfBundleIdCapabilitiesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfBundleIdCapabilitiesResponse = instanceOfBundleIdCapabilitiesResponse;
function BundleIdCapabilitiesResponseFromJSON(json) {
    return BundleIdCapabilitiesResponseFromJSONTyped(json, false);
}
exports.BundleIdCapabilitiesResponseFromJSON = BundleIdCapabilitiesResponseFromJSON;
function BundleIdCapabilitiesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(BundleIdCapability_1.BundleIdCapabilityFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.BundleIdCapabilitiesResponseFromJSONTyped = BundleIdCapabilitiesResponseFromJSONTyped;
function BundleIdCapabilitiesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(BundleIdCapability_1.BundleIdCapabilityToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.BundleIdCapabilitiesResponseToJSON = BundleIdCapabilitiesResponseToJSON;
//# sourceMappingURL=BundleIdCapabilitiesResponse.js.map