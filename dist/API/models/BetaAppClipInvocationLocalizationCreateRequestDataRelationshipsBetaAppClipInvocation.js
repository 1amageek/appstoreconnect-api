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
exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON = exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped = exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON = exports.instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation = void 0;
const BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData_1 = require("./BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData");
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation interface.
 */
function instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation = instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation;
function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON(json) {
    return BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped(json, false);
}
exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON = BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON;
function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData_1.BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON)(json['data']),
    };
}
exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped = BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped;
function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData_1.BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON)(value.data),
    };
}
exports.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON = BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON;
//# sourceMappingURL=BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation.js.map