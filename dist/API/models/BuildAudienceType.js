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
exports.BuildAudienceTypeToJSON = exports.BuildAudienceTypeFromJSONTyped = exports.BuildAudienceTypeFromJSON = exports.BuildAudienceType = void 0;
/**
 *
 * @export
 */
exports.BuildAudienceType = {
    InternalOnly: 'INTERNAL_ONLY',
    AppStoreEligible: 'APP_STORE_ELIGIBLE'
};
function BuildAudienceTypeFromJSON(json) {
    return BuildAudienceTypeFromJSONTyped(json, false);
}
exports.BuildAudienceTypeFromJSON = BuildAudienceTypeFromJSON;
function BuildAudienceTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.BuildAudienceTypeFromJSONTyped = BuildAudienceTypeFromJSONTyped;
function BuildAudienceTypeToJSON(value) {
    return value;
}
exports.BuildAudienceTypeToJSON = BuildAudienceTypeToJSON;
//# sourceMappingURL=BuildAudienceType.js.map