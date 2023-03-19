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
exports.BetaAppClipInvocationsResponseToJSON = exports.BetaAppClipInvocationsResponseFromJSONTyped = exports.BetaAppClipInvocationsResponseFromJSON = exports.instanceOfBetaAppClipInvocationsResponse = void 0;
const runtime_1 = require("../runtime");
const BetaAppClipInvocation_1 = require("./BetaAppClipInvocation");
const BetaAppClipInvocationLocalization_1 = require("./BetaAppClipInvocationLocalization");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the BetaAppClipInvocationsResponse interface.
 */
function instanceOfBetaAppClipInvocationsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfBetaAppClipInvocationsResponse = instanceOfBetaAppClipInvocationsResponse;
function BetaAppClipInvocationsResponseFromJSON(json) {
    return BetaAppClipInvocationsResponseFromJSONTyped(json, false);
}
exports.BetaAppClipInvocationsResponseFromJSON = BetaAppClipInvocationsResponseFromJSON;
function BetaAppClipInvocationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(BetaAppClipInvocation_1.BetaAppClipInvocationFromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(BetaAppClipInvocationLocalization_1.BetaAppClipInvocationLocalizationFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.BetaAppClipInvocationsResponseFromJSONTyped = BetaAppClipInvocationsResponseFromJSONTyped;
function BetaAppClipInvocationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(BetaAppClipInvocation_1.BetaAppClipInvocationToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(BetaAppClipInvocationLocalization_1.BetaAppClipInvocationLocalizationToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.BetaAppClipInvocationsResponseToJSON = BetaAppClipInvocationsResponseToJSON;
//# sourceMappingURL=BetaAppClipInvocationsResponse.js.map