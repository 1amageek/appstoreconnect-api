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
exports.SubscriptionAvailabilityResponseIncludedInnerToJSON = exports.SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped = exports.SubscriptionAvailabilityResponseIncludedInnerFromJSON = void 0;
const Subscription_1 = require("./Subscription");
const Territory_1 = require("./Territory");
function SubscriptionAvailabilityResponseIncludedInnerFromJSON(json) {
    return SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped(json, false);
}
exports.SubscriptionAvailabilityResponseIncludedInnerFromJSON = SubscriptionAvailabilityResponseIncludedInnerFromJSON;
function SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, (0, Subscription_1.SubscriptionFromJSONTyped)(json, true)), (0, Territory_1.TerritoryFromJSONTyped)(json, true));
}
exports.SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped = SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped;
function SubscriptionAvailabilityResponseIncludedInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if ((0, Subscription_1.instanceOfSubscription)(value)) {
        return (0, Subscription_1.SubscriptionToJSON)(value);
    }
    if ((0, Territory_1.instanceOfTerritory)(value)) {
        return (0, Territory_1.TerritoryToJSON)(value);
    }
    return {};
}
exports.SubscriptionAvailabilityResponseIncludedInnerToJSON = SubscriptionAvailabilityResponseIncludedInnerToJSON;
//# sourceMappingURL=SubscriptionAvailabilityResponseIncludedInner.js.map