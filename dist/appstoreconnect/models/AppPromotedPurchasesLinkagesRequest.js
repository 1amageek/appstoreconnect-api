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
exports.AppPromotedPurchasesLinkagesRequestToJSON = exports.AppPromotedPurchasesLinkagesRequestFromJSONTyped = exports.AppPromotedPurchasesLinkagesRequestFromJSON = exports.instanceOfAppPromotedPurchasesLinkagesRequest = void 0;
const AppRelationshipsPromotedPurchasesDataInner_1 = require("./AppRelationshipsPromotedPurchasesDataInner");
/**
 * Check if a given object implements the AppPromotedPurchasesLinkagesRequest interface.
 */
function instanceOfAppPromotedPurchasesLinkagesRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfAppPromotedPurchasesLinkagesRequest = instanceOfAppPromotedPurchasesLinkagesRequest;
function AppPromotedPurchasesLinkagesRequestFromJSON(json) {
    return AppPromotedPurchasesLinkagesRequestFromJSONTyped(json, false);
}
exports.AppPromotedPurchasesLinkagesRequestFromJSON = AppPromotedPurchasesLinkagesRequestFromJSON;
function AppPromotedPurchasesLinkagesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(AppRelationshipsPromotedPurchasesDataInner_1.AppRelationshipsPromotedPurchasesDataInnerFromJSON)),
    };
}
exports.AppPromotedPurchasesLinkagesRequestFromJSONTyped = AppPromotedPurchasesLinkagesRequestFromJSONTyped;
function AppPromotedPurchasesLinkagesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(AppRelationshipsPromotedPurchasesDataInner_1.AppRelationshipsPromotedPurchasesDataInnerToJSON)),
    };
}
exports.AppPromotedPurchasesLinkagesRequestToJSON = AppPromotedPurchasesLinkagesRequestToJSON;
//# sourceMappingURL=AppPromotedPurchasesLinkagesRequest.js.map