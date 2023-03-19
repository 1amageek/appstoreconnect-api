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
exports.BuildBundleFileSizeToJSON = exports.BuildBundleFileSizeFromJSONTyped = exports.BuildBundleFileSizeFromJSON = exports.instanceOfBuildBundleFileSize = exports.BuildBundleFileSizeTypeEnum = void 0;
const runtime_1 = require("../runtime");
const BuildBundleFileSizeAttributes_1 = require("./BuildBundleFileSizeAttributes");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.BuildBundleFileSizeTypeEnum = {
    BuildBundleFileSizes: 'buildBundleFileSizes'
};
/**
 * Check if a given object implements the BuildBundleFileSize interface.
 */
function instanceOfBuildBundleFileSize(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfBuildBundleFileSize = instanceOfBuildBundleFileSize;
function BuildBundleFileSizeFromJSON(json) {
    return BuildBundleFileSizeFromJSONTyped(json, false);
}
exports.BuildBundleFileSizeFromJSON = BuildBundleFileSizeFromJSON;
function BuildBundleFileSizeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, BuildBundleFileSizeAttributes_1.BuildBundleFileSizeAttributesFromJSON)(json['attributes']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.BuildBundleFileSizeFromJSONTyped = BuildBundleFileSizeFromJSONTyped;
function BuildBundleFileSizeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, BuildBundleFileSizeAttributes_1.BuildBundleFileSizeAttributesToJSON)(value.attributes),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.BuildBundleFileSizeToJSON = BuildBundleFileSizeToJSON;
//# sourceMappingURL=BuildBundleFileSize.js.map