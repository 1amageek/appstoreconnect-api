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
exports.AppResponseToJSON = exports.AppResponseFromJSONTyped = exports.AppResponseFromJSON = exports.instanceOfAppResponse = void 0;
const runtime_1 = require("../runtime");
const App_1 = require("./App");
const AppsResponseIncludedInner_1 = require("./AppsResponseIncludedInner");
const DocumentLinks_1 = require("./DocumentLinks");
/**
 * Check if a given object implements the AppResponse interface.
 */
function instanceOfAppResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfAppResponse = instanceOfAppResponse;
function AppResponseFromJSON(json) {
    return AppResponseFromJSONTyped(json, false);
}
exports.AppResponseFromJSON = AppResponseFromJSON;
function AppResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, App_1.AppFromJSON)(json['data']),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(AppsResponseIncludedInner_1.AppsResponseIncludedInnerFromJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.AppResponseFromJSONTyped = AppResponseFromJSONTyped;
function AppResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, App_1.AppToJSON)(value.data),
        'included': value.included === undefined ? undefined : (value.included.map(AppsResponseIncludedInner_1.AppsResponseIncludedInnerToJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.AppResponseToJSON = AppResponseToJSON;
//# sourceMappingURL=AppResponse.js.map