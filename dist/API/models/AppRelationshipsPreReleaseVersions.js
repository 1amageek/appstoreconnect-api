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
exports.AppRelationshipsPreReleaseVersionsToJSON = exports.AppRelationshipsPreReleaseVersionsFromJSONTyped = exports.AppRelationshipsPreReleaseVersionsFromJSON = exports.instanceOfAppRelationshipsPreReleaseVersions = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const AppRelationshipsPreReleaseVersionsDataInner_1 = require("./AppRelationshipsPreReleaseVersionsDataInner");
const PagingInformation_1 = require("./PagingInformation");
/**
 * Check if a given object implements the AppRelationshipsPreReleaseVersions interface.
 */
function instanceOfAppRelationshipsPreReleaseVersions(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppRelationshipsPreReleaseVersions = instanceOfAppRelationshipsPreReleaseVersions;
function AppRelationshipsPreReleaseVersionsFromJSON(json) {
    return AppRelationshipsPreReleaseVersionsFromJSONTyped(json, false);
}
exports.AppRelationshipsPreReleaseVersionsFromJSON = AppRelationshipsPreReleaseVersionsFromJSON;
function AppRelationshipsPreReleaseVersionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(AppRelationshipsPreReleaseVersionsDataInner_1.AppRelationshipsPreReleaseVersionsDataInnerFromJSON)),
    };
}
exports.AppRelationshipsPreReleaseVersionsFromJSONTyped = AppRelationshipsPreReleaseVersionsFromJSONTyped;
function AppRelationshipsPreReleaseVersionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
        'data': value.data === undefined ? undefined : (value.data.map(AppRelationshipsPreReleaseVersionsDataInner_1.AppRelationshipsPreReleaseVersionsDataInnerToJSON)),
    };
}
exports.AppRelationshipsPreReleaseVersionsToJSON = AppRelationshipsPreReleaseVersionsToJSON;
//# sourceMappingURL=AppRelationshipsPreReleaseVersions.js.map