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
exports.SubscriptionLocalizationResponseToJSON = exports.SubscriptionLocalizationResponseFromJSONTyped = exports.SubscriptionLocalizationResponseFromJSON = exports.instanceOfSubscriptionLocalizationResponse = void 0;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const Subscription_1 = require("./Subscription");
const SubscriptionLocalization_1 = require("./SubscriptionLocalization");
/**
 * Check if a given object implements the SubscriptionLocalizationResponse interface.
 */
function instanceOfSubscriptionLocalizationResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfSubscriptionLocalizationResponse = instanceOfSubscriptionLocalizationResponse;
function SubscriptionLocalizationResponseFromJSON(json) {
    return SubscriptionLocalizationResponseFromJSONTyped(json, false);
}
exports.SubscriptionLocalizationResponseFromJSON = SubscriptionLocalizationResponseFromJSON;
function SubscriptionLocalizationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, SubscriptionLocalization_1.SubscriptionLocalizationFromJSON)(json['data']),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(Subscription_1.SubscriptionFromJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.SubscriptionLocalizationResponseFromJSONTyped = SubscriptionLocalizationResponseFromJSONTyped;
function SubscriptionLocalizationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, SubscriptionLocalization_1.SubscriptionLocalizationToJSON)(value.data),
        'included': value.included === undefined ? undefined : (value.included.map(Subscription_1.SubscriptionToJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.SubscriptionLocalizationResponseToJSON = SubscriptionLocalizationResponseToJSON;
//# sourceMappingURL=SubscriptionLocalizationResponse.js.map