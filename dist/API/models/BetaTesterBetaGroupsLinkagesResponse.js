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
exports.BetaTesterBetaGroupsLinkagesResponseToJSON = exports.BetaTesterBetaGroupsLinkagesResponseFromJSONTyped = exports.BetaTesterBetaGroupsLinkagesResponseFromJSON = exports.instanceOfBetaTesterBetaGroupsLinkagesResponse = void 0;
const runtime_1 = require("../runtime");
const AppRelationshipsBetaGroupsDataInner_1 = require("./AppRelationshipsBetaGroupsDataInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the BetaTesterBetaGroupsLinkagesResponse interface.
 */
function instanceOfBetaTesterBetaGroupsLinkagesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfBetaTesterBetaGroupsLinkagesResponse = instanceOfBetaTesterBetaGroupsLinkagesResponse;
function BetaTesterBetaGroupsLinkagesResponseFromJSON(json) {
    return BetaTesterBetaGroupsLinkagesResponseFromJSONTyped(json, false);
}
exports.BetaTesterBetaGroupsLinkagesResponseFromJSON = BetaTesterBetaGroupsLinkagesResponseFromJSON;
function BetaTesterBetaGroupsLinkagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppRelationshipsBetaGroupsDataInner_1.AppRelationshipsBetaGroupsDataInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.BetaTesterBetaGroupsLinkagesResponseFromJSONTyped = BetaTesterBetaGroupsLinkagesResponseFromJSONTyped;
function BetaTesterBetaGroupsLinkagesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppRelationshipsBetaGroupsDataInner_1.AppRelationshipsBetaGroupsDataInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.BetaTesterBetaGroupsLinkagesResponseToJSON = BetaTesterBetaGroupsLinkagesResponseToJSON;
//# sourceMappingURL=BetaTesterBetaGroupsLinkagesResponse.js.map