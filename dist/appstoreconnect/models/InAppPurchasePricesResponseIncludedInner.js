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
exports.InAppPurchasePricesResponseIncludedInnerToJSON = exports.InAppPurchasePricesResponseIncludedInnerFromJSONTyped = exports.InAppPurchasePricesResponseIncludedInnerFromJSON = void 0;
const InAppPurchasePricePoint_1 = require("./InAppPurchasePricePoint");
const Territory_1 = require("./Territory");
function InAppPurchasePricesResponseIncludedInnerFromJSON(json) {
    return InAppPurchasePricesResponseIncludedInnerFromJSONTyped(json, false);
}
exports.InAppPurchasePricesResponseIncludedInnerFromJSON = InAppPurchasePricesResponseIncludedInnerFromJSON;
function InAppPurchasePricesResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return Object.assign(Object.assign({}, (0, InAppPurchasePricePoint_1.InAppPurchasePricePointFromJSONTyped)(json, true)), (0, Territory_1.TerritoryFromJSONTyped)(json, true));
}
exports.InAppPurchasePricesResponseIncludedInnerFromJSONTyped = InAppPurchasePricesResponseIncludedInnerFromJSONTyped;
function InAppPurchasePricesResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, InAppPurchasePricePoint_1.instanceOfInAppPurchasePricePoint)(value)) {
        return (0, InAppPurchasePricePoint_1.InAppPurchasePricePointToJSON)(value);
    }
    if ((0, Territory_1.instanceOfTerritory)(value)) {
        return (0, Territory_1.TerritoryToJSON)(value);
    }
    return {};
}
exports.InAppPurchasePricesResponseIncludedInnerToJSON = InAppPurchasePricesResponseIncludedInnerToJSON;
//# sourceMappingURL=InAppPurchasePricesResponseIncludedInner.js.map