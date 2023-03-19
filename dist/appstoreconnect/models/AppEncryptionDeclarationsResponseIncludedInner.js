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
exports.AppEncryptionDeclarationsResponseIncludedInnerToJSON = exports.AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped = exports.AppEncryptionDeclarationsResponseIncludedInnerFromJSON = void 0;
const App_1 = require("./App");
const AppEncryptionDeclarationDocument_1 = require("./AppEncryptionDeclarationDocument");
const Build_1 = require("./Build");
function AppEncryptionDeclarationsResponseIncludedInnerFromJSON(json) {
    return AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped(json, false);
}
exports.AppEncryptionDeclarationsResponseIncludedInnerFromJSON = AppEncryptionDeclarationsResponseIncludedInnerFromJSON;
function AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return Object.assign(Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, AppEncryptionDeclarationDocument_1.AppEncryptionDeclarationDocumentFromJSONTyped)(json, true)), (0, Build_1.BuildFromJSONTyped)(json, true));
}
exports.AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped = AppEncryptionDeclarationsResponseIncludedInnerFromJSONTyped;
function AppEncryptionDeclarationsResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, AppEncryptionDeclarationDocument_1.instanceOfAppEncryptionDeclarationDocument)(value)) {
        return (0, AppEncryptionDeclarationDocument_1.AppEncryptionDeclarationDocumentToJSON)(value);
    }
    if ((0, Build_1.instanceOfBuild)(value)) {
        return (0, Build_1.BuildToJSON)(value);
    }
    return {};
}
exports.AppEncryptionDeclarationsResponseIncludedInnerToJSON = AppEncryptionDeclarationsResponseIncludedInnerToJSON;
//# sourceMappingURL=AppEncryptionDeclarationsResponseIncludedInner.js.map