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
exports.PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON = exports.PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped = exports.PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON = exports.instanceOfPromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase = void 0;
const AppRelationshipsPromotedPurchasesDataInner_1 = require("./AppRelationshipsPromotedPurchasesDataInner");
/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase interface.
 */
function instanceOfPromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfPromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase = instanceOfPromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase;
function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON(json) {
    return PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped(json, false);
}
exports.PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON = PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSON;
function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, AppRelationshipsPromotedPurchasesDataInner_1.AppRelationshipsPromotedPurchasesDataInnerFromJSON)(json['data']),
    };
}
exports.PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped = PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseFromJSONTyped;
function PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, AppRelationshipsPromotedPurchasesDataInner_1.AppRelationshipsPromotedPurchasesDataInnerToJSON)(value.data),
    };
}
exports.PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON = PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchaseToJSON;
//# sourceMappingURL=PromotedPurchaseImageCreateRequestDataRelationshipsPromotedPurchase.js.map