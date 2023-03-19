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
exports.AppEventScreenshotToJSON = exports.AppEventScreenshotFromJSONTyped = exports.AppEventScreenshotFromJSON = exports.instanceOfAppEventScreenshot = exports.AppEventScreenshotTypeEnum = void 0;
const runtime_1 = require("../runtime");
const AppEventScreenshotAttributes_1 = require("./AppEventScreenshotAttributes");
const AppEventScreenshotRelationships_1 = require("./AppEventScreenshotRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.AppEventScreenshotTypeEnum = {
    AppEventScreenshots: 'appEventScreenshots'
};
/**
 * Check if a given object implements the AppEventScreenshot interface.
 */
function instanceOfAppEventScreenshot(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppEventScreenshot = instanceOfAppEventScreenshot;
function AppEventScreenshotFromJSON(json) {
    return AppEventScreenshotFromJSONTyped(json, false);
}
exports.AppEventScreenshotFromJSON = AppEventScreenshotFromJSON;
function AppEventScreenshotFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, AppEventScreenshotAttributes_1.AppEventScreenshotAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, AppEventScreenshotRelationships_1.AppEventScreenshotRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.AppEventScreenshotFromJSONTyped = AppEventScreenshotFromJSONTyped;
function AppEventScreenshotToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, AppEventScreenshotAttributes_1.AppEventScreenshotAttributesToJSON)(value.attributes),
        'relationships': (0, AppEventScreenshotRelationships_1.AppEventScreenshotRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.AppEventScreenshotToJSON = AppEventScreenshotToJSON;
//# sourceMappingURL=AppEventScreenshot.js.map