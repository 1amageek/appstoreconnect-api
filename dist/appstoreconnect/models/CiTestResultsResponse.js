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
exports.CiTestResultsResponseToJSON = exports.CiTestResultsResponseFromJSONTyped = exports.CiTestResultsResponseFromJSON = exports.instanceOfCiTestResultsResponse = void 0;
const runtime_1 = require("../runtime");
const CiTestResult_1 = require("./CiTestResult");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the CiTestResultsResponse interface.
 */
function instanceOfCiTestResultsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfCiTestResultsResponse = instanceOfCiTestResultsResponse;
function CiTestResultsResponseFromJSON(json) {
    return CiTestResultsResponseFromJSONTyped(json, false);
}
exports.CiTestResultsResponseFromJSON = CiTestResultsResponseFromJSON;
function CiTestResultsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(CiTestResult_1.CiTestResultFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.CiTestResultsResponseFromJSONTyped = CiTestResultsResponseFromJSONTyped;
function CiTestResultsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(CiTestResult_1.CiTestResultToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.CiTestResultsResponseToJSON = CiTestResultsResponseToJSON;
//# sourceMappingURL=CiTestResultsResponse.js.map