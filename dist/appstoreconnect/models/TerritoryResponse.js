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
exports.TerritoryResponseToJSON = exports.TerritoryResponseFromJSONTyped = exports.TerritoryResponseFromJSON = exports.instanceOfTerritoryResponse = void 0;
const DocumentLinks_1 = require("./DocumentLinks");
const Territory_1 = require("./Territory");
/**
 * Check if a given object implements the TerritoryResponse interface.
 */
function instanceOfTerritoryResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfTerritoryResponse = instanceOfTerritoryResponse;
function TerritoryResponseFromJSON(json) {
    return TerritoryResponseFromJSONTyped(json, false);
}
exports.TerritoryResponseFromJSON = TerritoryResponseFromJSON;
function TerritoryResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, Territory_1.TerritoryFromJSON)(json['data']),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.TerritoryResponseFromJSONTyped = TerritoryResponseFromJSONTyped;
function TerritoryResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, Territory_1.TerritoryToJSON)(value.data),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.TerritoryResponseToJSON = TerritoryResponseToJSON;
//# sourceMappingURL=TerritoryResponse.js.map