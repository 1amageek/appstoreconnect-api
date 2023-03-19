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
exports.PromotedPurchaseAttributesToJSON = exports.PromotedPurchaseAttributesFromJSONTyped = exports.PromotedPurchaseAttributesFromJSON = exports.instanceOfPromotedPurchaseAttributes = exports.PromotedPurchaseAttributesStateEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.PromotedPurchaseAttributesStateEnum = {
    Approved: 'APPROVED',
    InReview: 'IN_REVIEW',
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    Rejected: 'REJECTED'
};
/**
 * Check if a given object implements the PromotedPurchaseAttributes interface.
 */
function instanceOfPromotedPurchaseAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPromotedPurchaseAttributes = instanceOfPromotedPurchaseAttributes;
function PromotedPurchaseAttributesFromJSON(json) {
    return PromotedPurchaseAttributesFromJSONTyped(json, false);
}
exports.PromotedPurchaseAttributesFromJSON = PromotedPurchaseAttributesFromJSON;
function PromotedPurchaseAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'visibleForAllUsers': !(0, runtime_1.exists)(json, 'visibleForAllUsers') ? undefined : json['visibleForAllUsers'],
        'enabled': !(0, runtime_1.exists)(json, 'enabled') ? undefined : json['enabled'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
    };
}
exports.PromotedPurchaseAttributesFromJSONTyped = PromotedPurchaseAttributesFromJSONTyped;
function PromotedPurchaseAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'visibleForAllUsers': value.visibleForAllUsers,
        'enabled': value.enabled,
        'state': value.state,
    };
}
exports.PromotedPurchaseAttributesToJSON = PromotedPurchaseAttributesToJSON;
//# sourceMappingURL=PromotedPurchaseAttributes.js.map