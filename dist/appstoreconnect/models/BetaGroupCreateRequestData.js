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
exports.BetaGroupCreateRequestDataToJSON = exports.BetaGroupCreateRequestDataFromJSONTyped = exports.BetaGroupCreateRequestDataFromJSON = exports.instanceOfBetaGroupCreateRequestData = exports.BetaGroupCreateRequestDataTypeEnum = void 0;
const BetaGroupCreateRequestDataAttributes_1 = require("./BetaGroupCreateRequestDataAttributes");
const BetaGroupCreateRequestDataRelationships_1 = require("./BetaGroupCreateRequestDataRelationships");
/**
 * @export
 */
exports.BetaGroupCreateRequestDataTypeEnum = {
    BetaGroups: 'betaGroups'
};
/**
 * Check if a given object implements the BetaGroupCreateRequestData interface.
 */
function instanceOfBetaGroupCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfBetaGroupCreateRequestData = instanceOfBetaGroupCreateRequestData;
function BetaGroupCreateRequestDataFromJSON(json) {
    return BetaGroupCreateRequestDataFromJSONTyped(json, false);
}
exports.BetaGroupCreateRequestDataFromJSON = BetaGroupCreateRequestDataFromJSON;
function BetaGroupCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, BetaGroupCreateRequestDataAttributes_1.BetaGroupCreateRequestDataAttributesFromJSON)(json['attributes']),
        'relationships': (0, BetaGroupCreateRequestDataRelationships_1.BetaGroupCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.BetaGroupCreateRequestDataFromJSONTyped = BetaGroupCreateRequestDataFromJSONTyped;
function BetaGroupCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, BetaGroupCreateRequestDataAttributes_1.BetaGroupCreateRequestDataAttributesToJSON)(value.attributes),
        'relationships': (0, BetaGroupCreateRequestDataRelationships_1.BetaGroupCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.BetaGroupCreateRequestDataToJSON = BetaGroupCreateRequestDataToJSON;
//# sourceMappingURL=BetaGroupCreateRequestData.js.map