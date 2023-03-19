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
exports.BetaTestersResponseIncludedInnerToJSON = exports.BetaTestersResponseIncludedInnerFromJSONTyped = exports.BetaTestersResponseIncludedInnerFromJSON = void 0;
const App_1 = require("./App");
const BetaGroup_1 = require("./BetaGroup");
const Build_1 = require("./Build");
function BetaTestersResponseIncludedInnerFromJSON(json) {
    return BetaTestersResponseIncludedInnerFromJSONTyped(json, false);
}
exports.BetaTestersResponseIncludedInnerFromJSON = BetaTestersResponseIncludedInnerFromJSON;
function BetaTestersResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, (0, App_1.AppFromJSONTyped)(json, true)), (0, BetaGroup_1.BetaGroupFromJSONTyped)(json, true)), (0, Build_1.BuildFromJSONTyped)(json, true));
}
exports.BetaTestersResponseIncludedInnerFromJSONTyped = BetaTestersResponseIncludedInnerFromJSONTyped;
function BetaTestersResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, App_1.instanceOfApp)(value)) {
        return (0, App_1.AppToJSON)(value);
    }
    if ((0, BetaGroup_1.instanceOfBetaGroup)(value)) {
        return (0, BetaGroup_1.BetaGroupToJSON)(value);
    }
    if ((0, Build_1.instanceOfBuild)(value)) {
        return (0, Build_1.BuildToJSON)(value);
    }
    return {};
}
exports.BetaTestersResponseIncludedInnerToJSON = BetaTestersResponseIncludedInnerToJSON;
//# sourceMappingURL=BetaTestersResponseIncludedInner.js.map