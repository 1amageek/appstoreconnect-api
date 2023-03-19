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
exports.SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSON = exports.SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped = exports.SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSON = exports.instanceOfSubscriptionUpdateRequestDataRelationshipsPromotionalOffers = void 0;
const runtime_1 = require("../runtime");
const SubscriptionRelationshipsPromotionalOffersDataInner_1 = require("./SubscriptionRelationshipsPromotionalOffersDataInner");
/**
 * Check if a given object implements the SubscriptionUpdateRequestDataRelationshipsPromotionalOffers interface.
 */
function instanceOfSubscriptionUpdateRequestDataRelationshipsPromotionalOffers(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSubscriptionUpdateRequestDataRelationshipsPromotionalOffers = instanceOfSubscriptionUpdateRequestDataRelationshipsPromotionalOffers;
function SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSON(json) {
    return SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped(json, false);
}
exports.SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSON = SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSON;
function SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(SubscriptionRelationshipsPromotionalOffersDataInner_1.SubscriptionRelationshipsPromotionalOffersDataInnerFromJSON)),
    };
}
exports.SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped = SubscriptionUpdateRequestDataRelationshipsPromotionalOffersFromJSONTyped;
function SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(SubscriptionRelationshipsPromotionalOffersDataInner_1.SubscriptionRelationshipsPromotionalOffersDataInnerToJSON)),
    };
}
exports.SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSON = SubscriptionUpdateRequestDataRelationshipsPromotionalOffersToJSON;
//# sourceMappingURL=SubscriptionUpdateRequestDataRelationshipsPromotionalOffers.js.map