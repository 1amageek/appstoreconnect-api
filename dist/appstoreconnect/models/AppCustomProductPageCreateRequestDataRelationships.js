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
exports.AppCustomProductPageCreateRequestDataRelationshipsToJSON = exports.AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped = exports.AppCustomProductPageCreateRequestDataRelationshipsFromJSON = exports.instanceOfAppCustomProductPageCreateRequestDataRelationships = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityCreateRequestDataRelationshipsApp_1 = require("./AppAvailabilityCreateRequestDataRelationshipsApp");
const AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion_1 = require("./AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion");
const AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions_1 = require("./AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions");
const AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPage_1 = require("./AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPage");
/**
 * Check if a given object implements the AppCustomProductPageCreateRequestDataRelationships interface.
 */
function instanceOfAppCustomProductPageCreateRequestDataRelationships(value) {
    let isInstance = true;
    isInstance = isInstance && "app" in value;
    return isInstance;
}
exports.instanceOfAppCustomProductPageCreateRequestDataRelationships = instanceOfAppCustomProductPageCreateRequestDataRelationships;
function AppCustomProductPageCreateRequestDataRelationshipsFromJSON(json) {
    return AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
exports.AppCustomProductPageCreateRequestDataRelationshipsFromJSON = AppCustomProductPageCreateRequestDataRelationshipsFromJSON;
function AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'app': (0, AppAvailabilityCreateRequestDataRelationshipsApp_1.AppAvailabilityCreateRequestDataRelationshipsAppFromJSON)(json['app']),
        'appCustomProductPageVersions': !(0, runtime_1.exists)(json, 'appCustomProductPageVersions') ? undefined : (0, AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions_1.AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsFromJSON)(json['appCustomProductPageVersions']),
        'appStoreVersionTemplate': !(0, runtime_1.exists)(json, 'appStoreVersionTemplate') ? undefined : (0, AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion_1.AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON)(json['appStoreVersionTemplate']),
        'customProductPageTemplate': !(0, runtime_1.exists)(json, 'customProductPageTemplate') ? undefined : (0, AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPage_1.AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageFromJSON)(json['customProductPageTemplate']),
    };
}
exports.AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped = AppCustomProductPageCreateRequestDataRelationshipsFromJSONTyped;
function AppCustomProductPageCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'app': (0, AppAvailabilityCreateRequestDataRelationshipsApp_1.AppAvailabilityCreateRequestDataRelationshipsAppToJSON)(value.app),
        'appCustomProductPageVersions': (0, AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersions_1.AppCustomProductPageCreateRequestDataRelationshipsAppCustomProductPageVersionsToJSON)(value.appCustomProductPageVersions),
        'appStoreVersionTemplate': (0, AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion_1.AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON)(value.appStoreVersionTemplate),
        'customProductPageTemplate': (0, AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPage_1.AppCustomProductPageVersionInlineCreateRelationshipsAppCustomProductPageToJSON)(value.customProductPageTemplate),
    };
}
exports.AppCustomProductPageCreateRequestDataRelationshipsToJSON = AppCustomProductPageCreateRequestDataRelationshipsToJSON;
//# sourceMappingURL=AppCustomProductPageCreateRequestDataRelationships.js.map