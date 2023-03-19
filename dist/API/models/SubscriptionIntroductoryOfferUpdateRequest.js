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
exports.SubscriptionIntroductoryOfferUpdateRequestToJSON = exports.SubscriptionIntroductoryOfferUpdateRequestFromJSONTyped = exports.SubscriptionIntroductoryOfferUpdateRequestFromJSON = exports.instanceOfSubscriptionIntroductoryOfferUpdateRequest = void 0;
const SubscriptionIntroductoryOfferUpdateRequestData_1 = require("./SubscriptionIntroductoryOfferUpdateRequestData");
/**
 * Check if a given object implements the SubscriptionIntroductoryOfferUpdateRequest interface.
 */
function instanceOfSubscriptionIntroductoryOfferUpdateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfSubscriptionIntroductoryOfferUpdateRequest = instanceOfSubscriptionIntroductoryOfferUpdateRequest;
function SubscriptionIntroductoryOfferUpdateRequestFromJSON(json) {
    return SubscriptionIntroductoryOfferUpdateRequestFromJSONTyped(json, false);
}
exports.SubscriptionIntroductoryOfferUpdateRequestFromJSON = SubscriptionIntroductoryOfferUpdateRequestFromJSON;
function SubscriptionIntroductoryOfferUpdateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, SubscriptionIntroductoryOfferUpdateRequestData_1.SubscriptionIntroductoryOfferUpdateRequestDataFromJSON)(json['data']),
    };
}
exports.SubscriptionIntroductoryOfferUpdateRequestFromJSONTyped = SubscriptionIntroductoryOfferUpdateRequestFromJSONTyped;
function SubscriptionIntroductoryOfferUpdateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, SubscriptionIntroductoryOfferUpdateRequestData_1.SubscriptionIntroductoryOfferUpdateRequestDataToJSON)(value.data),
    };
}
exports.SubscriptionIntroductoryOfferUpdateRequestToJSON = SubscriptionIntroductoryOfferUpdateRequestToJSON;
//# sourceMappingURL=SubscriptionIntroductoryOfferUpdateRequest.js.map