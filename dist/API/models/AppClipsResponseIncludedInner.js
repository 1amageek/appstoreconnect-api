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
exports.AppClipsResponseIncludedInnerToJSON = exports.AppClipsResponseIncludedInnerFromJSONTyped = exports.AppClipsResponseIncludedInnerFromJSON = void 0;
const App_1 = require("./App");
const AppClipDefaultExperience_1 = require("./AppClipDefaultExperience");
function AppClipsResponseIncludedInnerFromJSON(json) {
    return AppClipsResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppClipsResponseIncludedInnerFromJSON = AppClipsResponseIncludedInnerFromJSON;
function AppClipsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, AppClipDefaultExperience_1.AppClipDefaultExperienceFromJSONTyped)(json, true));
}
exports.AppClipsResponseIncludedInnerFromJSONTyped = AppClipsResponseIncludedInnerFromJSONTyped;
function AppClipsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, AppClipDefaultExperience_1.instanceOfAppClipDefaultExperience)(value)) {
        return (0, AppClipDefaultExperience_1.AppClipDefaultExperienceToJSON)(value);
    }
    return {};
}
exports.AppClipsResponseIncludedInnerToJSON = AppClipsResponseIncludedInnerToJSON;
//# sourceMappingURL=AppClipsResponseIncludedInner.js.map