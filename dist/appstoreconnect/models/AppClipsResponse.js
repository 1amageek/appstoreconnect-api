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
exports.AppClipsResponseToJSON = exports.AppClipsResponseFromJSONTyped = exports.AppClipsResponseFromJSON = exports.instanceOfAppClipsResponse = void 0;
const runtime_1 = require("../runtime");
const AppClip_1 = require("./AppClip");
const AppClipsResponseIncludedInner_1 = require("./AppClipsResponseIncludedInner");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppClipsResponse interface.
 */
function instanceOfAppClipsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppClipsResponse = instanceOfAppClipsResponse;
function AppClipsResponseFromJSON(json) {
    return AppClipsResponseFromJSONTyped(json, false);
}
exports.AppClipsResponseFromJSON = AppClipsResponseFromJSON;
function AppClipsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppClip_1.AppClipFromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(AppClipsResponseIncludedInner_1.AppClipsResponseIncludedInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.AppClipsResponseFromJSONTyped = AppClipsResponseFromJSONTyped;
function AppClipsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppClip_1.AppClipToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(AppClipsResponseIncludedInner_1.AppClipsResponseIncludedInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.AppClipsResponseToJSON = AppClipsResponseToJSON;
//# sourceMappingURL=AppClipsResponse.js.map