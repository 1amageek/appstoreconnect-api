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
exports.PromotedPurchaseCreateRequestToJSON = exports.PromotedPurchaseCreateRequestFromJSONTyped = exports.PromotedPurchaseCreateRequestFromJSON = exports.instanceOfPromotedPurchaseCreateRequest = void 0;
const PromotedPurchaseCreateRequestData_1 = require("./PromotedPurchaseCreateRequestData");
/**
 * Check if a given object implements the PromotedPurchaseCreateRequest interface.
 */
function instanceOfPromotedPurchaseCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfPromotedPurchaseCreateRequest = instanceOfPromotedPurchaseCreateRequest;
function PromotedPurchaseCreateRequestFromJSON(json) {
    return PromotedPurchaseCreateRequestFromJSONTyped(json, false);
}
exports.PromotedPurchaseCreateRequestFromJSON = PromotedPurchaseCreateRequestFromJSON;
function PromotedPurchaseCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, PromotedPurchaseCreateRequestData_1.PromotedPurchaseCreateRequestDataFromJSON)(json['data']),
    };
}
exports.PromotedPurchaseCreateRequestFromJSONTyped = PromotedPurchaseCreateRequestFromJSONTyped;
function PromotedPurchaseCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, PromotedPurchaseCreateRequestData_1.PromotedPurchaseCreateRequestDataToJSON)(value.data),
    };
}
exports.PromotedPurchaseCreateRequestToJSON = PromotedPurchaseCreateRequestToJSON;
//# sourceMappingURL=PromotedPurchaseCreateRequest.js.map