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
exports.SubscriptionOfferCodePriceInlineCreateRelationshipsToJSON = exports.SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSONTyped = exports.SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSON = exports.instanceOfSubscriptionOfferCodePriceInlineCreateRelationships = void 0;
const runtime_1 = require("../runtime");
const InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory_1 = require("./InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory");
const SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint_1 = require("./SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint");
/**
 * Check if a given object implements the SubscriptionOfferCodePriceInlineCreateRelationships interface.
 */
function instanceOfSubscriptionOfferCodePriceInlineCreateRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSubscriptionOfferCodePriceInlineCreateRelationships = instanceOfSubscriptionOfferCodePriceInlineCreateRelationships;
function SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSON(json) {
    return SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSONTyped(json, false);
}
exports.SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSON = SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSON;
function SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'territory': !(0, runtime_1.exists)(json, 'territory') ? undefined : (0, InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory_1.InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON)(json['territory']),
        'subscriptionPricePoint': !(0, runtime_1.exists)(json, 'subscriptionPricePoint') ? undefined : (0, SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint_1.SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointFromJSON)(json['subscriptionPricePoint']),
    };
}
exports.SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSONTyped = SubscriptionOfferCodePriceInlineCreateRelationshipsFromJSONTyped;
function SubscriptionOfferCodePriceInlineCreateRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'territory': (0, InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory_1.InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON)(value.territory),
        'subscriptionPricePoint': (0, SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePoint_1.SubscriptionIntroductoryOfferInlineCreateRelationshipsSubscriptionPricePointToJSON)(value.subscriptionPricePoint),
    };
}
exports.SubscriptionOfferCodePriceInlineCreateRelationshipsToJSON = SubscriptionOfferCodePriceInlineCreateRelationshipsToJSON;
//# sourceMappingURL=SubscriptionOfferCodePriceInlineCreateRelationships.js.map