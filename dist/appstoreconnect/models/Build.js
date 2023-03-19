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
exports.BuildToJSON = exports.BuildFromJSONTyped = exports.BuildFromJSON = exports.instanceOfBuild = exports.BuildTypeEnum = void 0;
const runtime_1 = require("../runtime");
const BuildAttributes_1 = require("./BuildAttributes");
const BuildRelationships_1 = require("./BuildRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.BuildTypeEnum = {
    Builds: 'builds'
};
/**
 * Check if a given object implements the Build interface.
 */
function instanceOfBuild(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfBuild = instanceOfBuild;
function BuildFromJSON(json) {
    return BuildFromJSONTyped(json, false);
}
exports.BuildFromJSON = BuildFromJSON;
function BuildFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, BuildAttributes_1.BuildAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, BuildRelationships_1.BuildRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.BuildFromJSONTyped = BuildFromJSONTyped;
function BuildToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, BuildAttributes_1.BuildAttributesToJSON)(value.attributes),
        'relationships': (0, BuildRelationships_1.BuildRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.BuildToJSON = BuildToJSON;
//# sourceMappingURL=Build.js.map