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
exports.CustomerReviewToJSON = exports.CustomerReviewFromJSONTyped = exports.CustomerReviewFromJSON = exports.instanceOfCustomerReview = exports.CustomerReviewTypeEnum = void 0;
const runtime_1 = require("../runtime");
const CustomerReviewAttributes_1 = require("./CustomerReviewAttributes");
const CustomerReviewRelationships_1 = require("./CustomerReviewRelationships");
const ResourceLinks_1 = require("./ResourceLinks");
/**
 * @export
 */
exports.CustomerReviewTypeEnum = {
    CustomerReviews: 'customerReviews'
};
/**
 * Check if a given object implements the CustomerReview interface.
 */
function instanceOfCustomerReview(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfCustomerReview = instanceOfCustomerReview;
function CustomerReviewFromJSON(json) {
    return CustomerReviewFromJSONTyped(json, false);
}
exports.CustomerReviewFromJSON = CustomerReviewFromJSON;
function CustomerReviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, CustomerReviewAttributes_1.CustomerReviewAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, CustomerReviewRelationships_1.CustomerReviewRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.CustomerReviewFromJSONTyped = CustomerReviewFromJSONTyped;
function CustomerReviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, CustomerReviewAttributes_1.CustomerReviewAttributesToJSON)(value.attributes),
        'relationships': (0, CustomerReviewRelationships_1.CustomerReviewRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.CustomerReviewToJSON = CustomerReviewToJSON;
//# sourceMappingURL=CustomerReview.js.map