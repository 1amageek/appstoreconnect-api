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
exports.BetaAppClipInvocationLocalizationCreateRequestDataToJSON = exports.BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped = exports.BetaAppClipInvocationLocalizationCreateRequestDataFromJSON = exports.instanceOfBetaAppClipInvocationLocalizationCreateRequestData = exports.BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum = void 0;
const BetaAppClipInvocationLocalizationCreateRequestDataRelationships_1 = require("./BetaAppClipInvocationLocalizationCreateRequestDataRelationships");
const BetaAppClipInvocationLocalizationInlineCreateAttributes_1 = require("./BetaAppClipInvocationLocalizationInlineCreateAttributes");
/**
 * @export
 */
exports.BetaAppClipInvocationLocalizationCreateRequestDataTypeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
};
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequestData interface.
 */
function instanceOfBetaAppClipInvocationLocalizationCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfBetaAppClipInvocationLocalizationCreateRequestData = instanceOfBetaAppClipInvocationLocalizationCreateRequestData;
function BetaAppClipInvocationLocalizationCreateRequestDataFromJSON(json) {
    return BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped(json, false);
}
exports.BetaAppClipInvocationLocalizationCreateRequestDataFromJSON = BetaAppClipInvocationLocalizationCreateRequestDataFromJSON;
function BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, BetaAppClipInvocationLocalizationInlineCreateAttributes_1.BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSON)(json['attributes']),
        'relationships': (0, BetaAppClipInvocationLocalizationCreateRequestDataRelationships_1.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped = BetaAppClipInvocationLocalizationCreateRequestDataFromJSONTyped;
function BetaAppClipInvocationLocalizationCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, BetaAppClipInvocationLocalizationInlineCreateAttributes_1.BetaAppClipInvocationLocalizationInlineCreateAttributesToJSON)(value.attributes),
        'relationships': (0, BetaAppClipInvocationLocalizationCreateRequestDataRelationships_1.BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.BetaAppClipInvocationLocalizationCreateRequestDataToJSON = BetaAppClipInvocationLocalizationCreateRequestDataToJSON;
//# sourceMappingURL=BetaAppClipInvocationLocalizationCreateRequestData.js.map