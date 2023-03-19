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
exports.AppStoreVersionLocalizationsResponseToJSON = exports.AppStoreVersionLocalizationsResponseFromJSONTyped = exports.AppStoreVersionLocalizationsResponseFromJSON = exports.instanceOfAppStoreVersionLocalizationsResponse = void 0;
const runtime_1 = require("../runtime");
const AppStoreVersionLocalization_1 = require("./AppStoreVersionLocalization");
const AppStoreVersionLocalizationsResponseIncludedInner_1 = require("./AppStoreVersionLocalizationsResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppStoreVersionLocalizationsResponse interface.
 */
function instanceOfAppStoreVersionLocalizationsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersionLocalizationsResponse = instanceOfAppStoreVersionLocalizationsResponse;
function AppStoreVersionLocalizationsResponseFromJSON(json) {
    return AppStoreVersionLocalizationsResponseFromJSONTyped(json, false);
}
exports.AppStoreVersionLocalizationsResponseFromJSON = AppStoreVersionLocalizationsResponseFromJSON;
function AppStoreVersionLocalizationsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppStoreVersionLocalization_1.AppStoreVersionLocalizationFromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(AppStoreVersionLocalizationsResponseIncludedInner_1.AppStoreVersionLocalizationsResponseIncludedInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.AppStoreVersionLocalizationsResponseFromJSONTyped = AppStoreVersionLocalizationsResponseFromJSONTyped;
function AppStoreVersionLocalizationsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppStoreVersionLocalization_1.AppStoreVersionLocalizationToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(AppStoreVersionLocalizationsResponseIncludedInner_1.AppStoreVersionLocalizationsResponseIncludedInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.AppStoreVersionLocalizationsResponseToJSON = AppStoreVersionLocalizationsResponseToJSON;
//# sourceMappingURL=AppStoreVersionLocalizationsResponse.js.map