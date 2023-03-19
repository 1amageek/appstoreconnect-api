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
exports.AppPricePointsV3ResponseToJSON = exports.AppPricePointsV3ResponseFromJSONTyped = exports.AppPricePointsV3ResponseFromJSON = exports.instanceOfAppPricePointsV3Response = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityResponseIncludedInner_1 = require("./AppAvailabilityResponseIncludedInner");
const AppPricePointV3_1 = require("./AppPricePointV3");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppPricePointsV3Response interface.
 */
function instanceOfAppPricePointsV3Response(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppPricePointsV3Response = instanceOfAppPricePointsV3Response;
function AppPricePointsV3ResponseFromJSON(json) {
    return AppPricePointsV3ResponseFromJSONTyped(json, false);
}
exports.AppPricePointsV3ResponseFromJSON = AppPricePointsV3ResponseFromJSON;
function AppPricePointsV3ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppPricePointV3_1.AppPricePointV3FromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(AppAvailabilityResponseIncludedInner_1.AppAvailabilityResponseIncludedInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.AppPricePointsV3ResponseFromJSONTyped = AppPricePointsV3ResponseFromJSONTyped;
function AppPricePointsV3ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppPricePointV3_1.AppPricePointV3ToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(AppAvailabilityResponseIncludedInner_1.AppAvailabilityResponseIncludedInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.AppPricePointsV3ResponseToJSON = AppPricePointsV3ResponseToJSON;
//# sourceMappingURL=AppPricePointsV3Response.js.map