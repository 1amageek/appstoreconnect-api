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
exports.AppScreenshotToJSON = exports.AppScreenshotFromJSONTyped = exports.AppScreenshotFromJSON = exports.instanceOfAppScreenshot = exports.AppScreenshotTypeEnum = void 0;
const runtime_1 = require("../runtime");
const AppScreenshotAttributes_1 = require("./AppScreenshotAttributes");
const AppScreenshotRelationships_1 = require("./AppScreenshotRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppScreenshotTypeEnum = {
    AppScreenshots: 'appScreenshots'
};
/**
 * Check if a given object implements the AppScreenshot interface.
 */
function instanceOfAppScreenshot(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppScreenshot = instanceOfAppScreenshot;
function AppScreenshotFromJSON(json) {
    return AppScreenshotFromJSONTyped(json, false);
}
exports.AppScreenshotFromJSON = AppScreenshotFromJSON;
function AppScreenshotFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, AppScreenshotAttributes_1.AppScreenshotAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, AppScreenshotRelationships_1.AppScreenshotRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.AppScreenshotFromJSONTyped = AppScreenshotFromJSONTyped;
function AppScreenshotToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, AppScreenshotAttributes_1.AppScreenshotAttributesToJSON)(value.attributes),
        'relationships': (0, AppScreenshotRelationships_1.AppScreenshotRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.AppScreenshotToJSON = AppScreenshotToJSON;
//# sourceMappingURL=AppScreenshot.js.map