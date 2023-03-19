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
exports.InAppPurchaseLocalizationAttributesToJSON = exports.InAppPurchaseLocalizationAttributesFromJSONTyped = exports.InAppPurchaseLocalizationAttributesFromJSON = exports.instanceOfInAppPurchaseLocalizationAttributes = exports.InAppPurchaseLocalizationAttributesStateEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.InAppPurchaseLocalizationAttributesStateEnum = {
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    Approved: 'APPROVED',
    Rejected: 'REJECTED'
};
/**
 * Check if a given object implements the InAppPurchaseLocalizationAttributes interface.
 */
function instanceOfInAppPurchaseLocalizationAttributes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInAppPurchaseLocalizationAttributes = instanceOfInAppPurchaseLocalizationAttributes;
function InAppPurchaseLocalizationAttributesFromJSON(json) {
    return InAppPurchaseLocalizationAttributesFromJSONTyped(json, false);
}
exports.InAppPurchaseLocalizationAttributesFromJSON = InAppPurchaseLocalizationAttributesFromJSON;
function InAppPurchaseLocalizationAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'locale': !(0, runtime_1.exists)(json, 'locale') ? undefined : json['locale'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
    };
}
exports.InAppPurchaseLocalizationAttributesFromJSONTyped = InAppPurchaseLocalizationAttributesFromJSONTyped;
function InAppPurchaseLocalizationAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'locale': value.locale,
        'description': value.description,
        'state': value.state,
    };
}
exports.InAppPurchaseLocalizationAttributesToJSON = InAppPurchaseLocalizationAttributesToJSON;
//# sourceMappingURL=InAppPurchaseLocalizationAttributes.js.map