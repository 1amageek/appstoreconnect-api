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
exports.BetaTesterToJSON = exports.BetaTesterFromJSONTyped = exports.BetaTesterFromJSON = exports.instanceOfBetaTester = exports.BetaTesterTypeEnum = void 0;
const runtime_1 = require("../runtime");
const BetaTesterAttributes_1 = require("./BetaTesterAttributes");
const BetaTesterRelationships_1 = require("./BetaTesterRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.BetaTesterTypeEnum = {
    BetaTesters: 'betaTesters'
};
/**
 * Check if a given object implements the BetaTester interface.
 */
function instanceOfBetaTester(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfBetaTester = instanceOfBetaTester;
function BetaTesterFromJSON(json) {
    return BetaTesterFromJSONTyped(json, false);
}
exports.BetaTesterFromJSON = BetaTesterFromJSON;
function BetaTesterFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, BetaTesterAttributes_1.BetaTesterAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, BetaTesterRelationships_1.BetaTesterRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.BetaTesterFromJSONTyped = BetaTesterFromJSONTyped;
function BetaTesterToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, BetaTesterAttributes_1.BetaTesterAttributesToJSON)(value.attributes),
        'relationships': (0, BetaTesterRelationships_1.BetaTesterRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.BetaTesterToJSON = BetaTesterToJSON;
//# sourceMappingURL=BetaTester.js.map