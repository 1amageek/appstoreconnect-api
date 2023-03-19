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
exports.SubscriptionIntroductoryOffersLinkagesResponseToJSON = exports.SubscriptionIntroductoryOffersLinkagesResponseFromJSONTyped = exports.SubscriptionIntroductoryOffersLinkagesResponseFromJSON = exports.instanceOfSubscriptionIntroductoryOffersLinkagesResponse = void 0;
const runtime_1 = require("../runtime");
const PagedDocumentLinks_1 = require("./PagedDocumentLinks");
const PagingInformation_1 = require("./PagingInformation");
const SubscriptionRelationshipsIntroductoryOffersDataInner_1 = require("./SubscriptionRelationshipsIntroductoryOffersDataInner");
/**
 * Check if a given object implements the SubscriptionIntroductoryOffersLinkagesResponse interface.
 */
function instanceOfSubscriptionIntroductoryOffersLinkagesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfSubscriptionIntroductoryOffersLinkagesResponse = instanceOfSubscriptionIntroductoryOffersLinkagesResponse;
function SubscriptionIntroductoryOffersLinkagesResponseFromJSON(json) {
    return SubscriptionIntroductoryOffersLinkagesResponseFromJSONTyped(json, false);
}
exports.SubscriptionIntroductoryOffersLinkagesResponseFromJSON = SubscriptionIntroductoryOffersLinkagesResponseFromJSON;
function SubscriptionIntroductoryOffersLinkagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(SubscriptionRelationshipsIntroductoryOffersDataInner_1.SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
    };
}
exports.SubscriptionIntroductoryOffersLinkagesResponseFromJSONTyped = SubscriptionIntroductoryOffersLinkagesResponseFromJSONTyped;
function SubscriptionIntroductoryOffersLinkagesResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(SubscriptionRelationshipsIntroductoryOffersDataInner_1.SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON)),
        'links': (0, PagedDocumentLinks_1.PagedDocumentLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
    };
}
exports.SubscriptionIntroductoryOffersLinkagesResponseToJSON = SubscriptionIntroductoryOffersLinkagesResponseToJSON;
//# sourceMappingURL=SubscriptionIntroductoryOffersLinkagesResponse.js.map