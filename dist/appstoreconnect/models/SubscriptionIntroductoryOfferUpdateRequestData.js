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
exports.SubscriptionIntroductoryOfferUpdateRequestDataToJSON = exports.SubscriptionIntroductoryOfferUpdateRequestDataFromJSONTyped = exports.SubscriptionIntroductoryOfferUpdateRequestDataFromJSON = exports.instanceOfSubscriptionIntroductoryOfferUpdateRequestData = exports.SubscriptionIntroductoryOfferUpdateRequestDataTypeEnum = void 0;
const runtime_1 = require("../runtime");
const SubscriptionIntroductoryOfferUpdateRequestDataAttributes_1 = require("./SubscriptionIntroductoryOfferUpdateRequestDataAttributes");
/**
 * @export
 */
exports.SubscriptionIntroductoryOfferUpdateRequestDataTypeEnum = {
    SubscriptionIntroductoryOffers: 'subscriptionIntroductoryOffers'
};
/**
 * Check if a given object implements the SubscriptionIntroductoryOfferUpdateRequestData interface.
 */
function instanceOfSubscriptionIntroductoryOfferUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfSubscriptionIntroductoryOfferUpdateRequestData = instanceOfSubscriptionIntroductoryOfferUpdateRequestData;
function SubscriptionIntroductoryOfferUpdateRequestDataFromJSON(json) {
    return SubscriptionIntroductoryOfferUpdateRequestDataFromJSONTyped(json, false);
}
exports.SubscriptionIntroductoryOfferUpdateRequestDataFromJSON = SubscriptionIntroductoryOfferUpdateRequestDataFromJSON;
function SubscriptionIntroductoryOfferUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, SubscriptionIntroductoryOfferUpdateRequestDataAttributes_1.SubscriptionIntroductoryOfferUpdateRequestDataAttributesFromJSON)(json['attributes']),
    };
}
exports.SubscriptionIntroductoryOfferUpdateRequestDataFromJSONTyped = SubscriptionIntroductoryOfferUpdateRequestDataFromJSONTyped;
function SubscriptionIntroductoryOfferUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, SubscriptionIntroductoryOfferUpdateRequestDataAttributes_1.SubscriptionIntroductoryOfferUpdateRequestDataAttributesToJSON)(value.attributes),
    };
}
exports.SubscriptionIntroductoryOfferUpdateRequestDataToJSON = SubscriptionIntroductoryOfferUpdateRequestDataToJSON;
//# sourceMappingURL=SubscriptionIntroductoryOfferUpdateRequestData.js.map