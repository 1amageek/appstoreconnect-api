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
exports.AppCategoriesResponseIncludedInnerToJSON = exports.AppCategoriesResponseIncludedInnerFromJSONTyped = exports.AppCategoriesResponseIncludedInnerFromJSON = void 0;
const AppCategory_1 = require("./AppCategory");
function AppCategoriesResponseIncludedInnerFromJSON(json) {
    return AppCategoriesResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppCategoriesResponseIncludedInnerFromJSON = AppCategoriesResponseIncludedInnerFromJSON;
function AppCategoriesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign({}, (0, AppCategory_1.AppCategoryFromJSONTyped)(json, true));
}
exports.AppCategoriesResponseIncludedInnerFromJSONTyped = AppCategoriesResponseIncludedInnerFromJSONTyped;
function AppCategoriesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, AppCategory_1.instanceOfAppCategory)(value)) {
        return (0, AppCategory_1.AppCategoryToJSON)(value);
    }
    return {};
}
exports.AppCategoriesResponseIncludedInnerToJSON = AppCategoriesResponseIncludedInnerToJSON;
//# sourceMappingURL=AppCategoriesResponseIncludedInner.js.map