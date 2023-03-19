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
exports.SubscriptionIntroductoryOfferInlineCreateAttributesToJSON = exports.SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped = exports.SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON = exports.instanceOfSubscriptionIntroductoryOfferInlineCreateAttributes = void 0;
const runtime_1 = require("../runtime");
const SubscriptionOfferDuration_1 = require("./SubscriptionOfferDuration");
const SubscriptionOfferMode_1 = require("./SubscriptionOfferMode");
/**
 * Check if a given object implements the SubscriptionIntroductoryOfferInlineCreateAttributes interface.
 */
function instanceOfSubscriptionIntroductoryOfferInlineCreateAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "duration" in value;
    isInstance = isInstance && "offerMode" in value;
    isInstance = isInstance && "numberOfPeriods" in value;
    return isInstance;
}
exports.instanceOfSubscriptionIntroductoryOfferInlineCreateAttributes = instanceOfSubscriptionIntroductoryOfferInlineCreateAttributes;
function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON(json) {
    return SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped(json, false);
}
exports.SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON = SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON;
function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : (new Date(json['startDate'])),
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'duration': (0, SubscriptionOfferDuration_1.SubscriptionOfferDurationFromJSON)(json['duration']),
        'offerMode': (0, SubscriptionOfferMode_1.SubscriptionOfferModeFromJSON)(json['offerMode']),
        'numberOfPeriods': json['numberOfPeriods'],
    };
}
exports.SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped = SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped;
function SubscriptionIntroductoryOfferInlineCreateAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0, 10)),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0, 10)),
        'duration': (0, SubscriptionOfferDuration_1.SubscriptionOfferDurationToJSON)(value.duration),
        'offerMode': (0, SubscriptionOfferMode_1.SubscriptionOfferModeToJSON)(value.offerMode),
        'numberOfPeriods': value.numberOfPeriods,
    };
}
exports.SubscriptionIntroductoryOfferInlineCreateAttributesToJSON = SubscriptionIntroductoryOfferInlineCreateAttributesToJSON;
//# sourceMappingURL=SubscriptionIntroductoryOfferInlineCreateAttributes.js.map