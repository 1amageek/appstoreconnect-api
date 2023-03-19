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
exports.AppScreenshotsResponseToJSON = exports.AppScreenshotsResponseFromJSONTyped = exports.AppScreenshotsResponseFromJSON = exports.instanceOfAppScreenshotsResponse = void 0;
const runtime_1 = require("../runtime");
const AppScreenshot_1 = require("./AppScreenshot");
const AppScreenshotSet_1 = require("./AppScreenshotSet");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppScreenshotsResponse interface.
 */
function instanceOfAppScreenshotsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppScreenshotsResponse = instanceOfAppScreenshotsResponse;
function AppScreenshotsResponseFromJSON(json) {
    return AppScreenshotsResponseFromJSONTyped(json, false);
}
exports.AppScreenshotsResponseFromJSON = AppScreenshotsResponseFromJSON;
function AppScreenshotsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppScreenshot_1.AppScreenshotFromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(AppScreenshotSet_1.AppScreenshotSetFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.AppScreenshotsResponseFromJSONTyped = AppScreenshotsResponseFromJSONTyped;
function AppScreenshotsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppScreenshot_1.AppScreenshotToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(AppScreenshotSet_1.AppScreenshotSetToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.AppScreenshotsResponseToJSON = AppScreenshotsResponseToJSON;
//# sourceMappingURL=AppScreenshotsResponse.js.map