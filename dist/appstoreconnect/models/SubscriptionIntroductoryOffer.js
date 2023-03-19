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
exports.SubscriptionIntroductoryOfferToJSON = exports.SubscriptionIntroductoryOfferFromJSONTyped = exports.SubscriptionIntroductoryOfferFromJSON = exports.instanceOfSubscriptionIntroductoryOffer = exports.SubscriptionIntroductoryOfferTypeEnum = void 0;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SubscriptionIntroductoryOfferAttributes_1 = require("./SubscriptionIntroductoryOfferAttributes");
const SubscriptionIntroductoryOfferRelationships_1 = require("./SubscriptionIntroductoryOfferRelationships");
/**
 * @export
 */
exports.SubscriptionIntroductoryOfferTypeEnum = {
    SubscriptionIntroductoryOffers: 'subscriptionIntroductoryOffers'
};
/**
 * Check if a given object implements the SubscriptionIntroductoryOffer interface.
 */
function instanceOfSubscriptionIntroductoryOffer(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfSubscriptionIntroductoryOffer = instanceOfSubscriptionIntroductoryOffer;
function SubscriptionIntroductoryOfferFromJSON(json) {
    return SubscriptionIntroductoryOfferFromJSONTyped(json, false);
}
exports.SubscriptionIntroductoryOfferFromJSON = SubscriptionIntroductoryOfferFromJSON;
function SubscriptionIntroductoryOfferFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, SubscriptionIntroductoryOfferAttributes_1.SubscriptionIntroductoryOfferAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, SubscriptionIntroductoryOfferRelationships_1.SubscriptionIntroductoryOfferRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.SubscriptionIntroductoryOfferFromJSONTyped = SubscriptionIntroductoryOfferFromJSONTyped;
function SubscriptionIntroductoryOfferToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, SubscriptionIntroductoryOfferAttributes_1.SubscriptionIntroductoryOfferAttributesToJSON)(value.attributes),
        'relationships': (0, SubscriptionIntroductoryOfferRelationships_1.SubscriptionIntroductoryOfferRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.SubscriptionIntroductoryOfferToJSON = SubscriptionIntroductoryOfferToJSON;
//# sourceMappingURL=SubscriptionIntroductoryOffer.js.map