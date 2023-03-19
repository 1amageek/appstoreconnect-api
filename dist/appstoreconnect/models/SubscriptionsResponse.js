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
exports.SubscriptionsResponseToJSON = exports.SubscriptionsResponseFromJSONTyped = exports.SubscriptionsResponseFromJSON = exports.instanceOfSubscriptionsResponse = void 0;
const runtime_1 = require("../runtime");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
const Subscription_1 = require("./Subscription");
const SubscriptionsResponseIncludedInner_1 = require("./SubscriptionsResponseIncludedInner");
/**
 * Check if a given object implements the SubscriptionsResponse interface.
 */
function instanceOfSubscriptionsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfSubscriptionsResponse = instanceOfSubscriptionsResponse;
function SubscriptionsResponseFromJSON(json) {
    return SubscriptionsResponseFromJSONTyped(json, false);
}
exports.SubscriptionsResponseFromJSON = SubscriptionsResponseFromJSON;
function SubscriptionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(Subscription_1.SubscriptionFromJSON)),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(SubscriptionsResponseIncludedInner_1.SubscriptionsResponseIncludedInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.SubscriptionsResponseFromJSONTyped = SubscriptionsResponseFromJSONTyped;
function SubscriptionsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(Subscription_1.SubscriptionToJSON)),
        'included': value.included === undefined ? undefined : (value.included.map(SubscriptionsResponseIncludedInner_1.SubscriptionsResponseIncludedInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.SubscriptionsResponseToJSON = SubscriptionsResponseToJSON;
//# sourceMappingURL=SubscriptionsResponse.js.map