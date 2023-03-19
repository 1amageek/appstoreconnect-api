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
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON = exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSONTyped = exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON = exports.instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPage = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const AppCustomProductPageVersionRelationshipsAppCustomProductPageData_1 = require("./AppCustomProductPageVersionRelationshipsAppCustomProductPageData");
/**
 * Check if a given object implements the AppCustomProductPageVersionRelationshipsAppCustomProductPage interface.
 */
function instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPage(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPage = instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPage;
function AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON(json) {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSONTyped(json, false);
}
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON = AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSON;
function AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, AppCustomProductPageVersionRelationshipsAppCustomProductPageData_1.AppCustomProductPageVersionRelationshipsAppCustomProductPageDataFromJSON)(json['data']),
    };
}
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSONTyped = AppCustomProductPageVersionRelationshipsAppCustomProductPageFromJSONTyped;
function AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, AppCustomProductPageVersionRelationshipsAppCustomProductPageData_1.AppCustomProductPageVersionRelationshipsAppCustomProductPageDataToJSON)(value.data),
    };
}
exports.AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON = AppCustomProductPageVersionRelationshipsAppCustomProductPageToJSON;
//# sourceMappingURL=AppCustomProductPageVersionRelationshipsAppCustomProductPage.js.map