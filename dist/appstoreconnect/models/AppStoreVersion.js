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
exports.AppStoreVersionToJSON = exports.AppStoreVersionFromJSONTyped = exports.AppStoreVersionFromJSON = exports.instanceOfAppStoreVersion = exports.AppStoreVersionTypeEnum = void 0;
const runtime_1 = require("../runtime");
const AppStoreVersionAttributes_1 = require("./AppStoreVersionAttributes");
const AppStoreVersionRelationships_1 = require("./AppStoreVersionRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppStoreVersionTypeEnum = {
    AppStoreVersions: 'appStoreVersions'
};
/**
 * Check if a given object implements the AppStoreVersion interface.
 */
function instanceOfAppStoreVersion(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersion = instanceOfAppStoreVersion;
function AppStoreVersionFromJSON(json) {
    return AppStoreVersionFromJSONTyped(json, false);
}
exports.AppStoreVersionFromJSON = AppStoreVersionFromJSON;
function AppStoreVersionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, AppStoreVersionAttributes_1.AppStoreVersionAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, AppStoreVersionRelationships_1.AppStoreVersionRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.AppStoreVersionFromJSONTyped = AppStoreVersionFromJSONTyped;
function AppStoreVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, AppStoreVersionAttributes_1.AppStoreVersionAttributesToJSON)(value.attributes),
        'relationships': (0, AppStoreVersionRelationships_1.AppStoreVersionRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.AppStoreVersionToJSON = AppStoreVersionToJSON;
//# sourceMappingURL=AppStoreVersion.js.map