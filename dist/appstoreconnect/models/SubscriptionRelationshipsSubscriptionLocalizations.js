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
exports.SubscriptionRelationshipsSubscriptionLocalizationsToJSON = exports.SubscriptionRelationshipsSubscriptionLocalizationsFromJSONTyped = exports.SubscriptionRelationshipsSubscriptionLocalizationsFromJSON = exports.instanceOfSubscriptionRelationshipsSubscriptionLocalizations = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const PagingInformation_1 = require("./PagingInformation");
const SubscriptionRelationshipsSubscriptionLocalizationsDataInner_1 = require("./SubscriptionRelationshipsSubscriptionLocalizationsDataInner");
/**
 * Check if a given object implements the SubscriptionRelationshipsSubscriptionLocalizations interface.
 */
function instanceOfSubscriptionRelationshipsSubscriptionLocalizations(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSubscriptionRelationshipsSubscriptionLocalizations = instanceOfSubscriptionRelationshipsSubscriptionLocalizations;
function SubscriptionRelationshipsSubscriptionLocalizationsFromJSON(json) {
    return SubscriptionRelationshipsSubscriptionLocalizationsFromJSONTyped(json, false);
}
exports.SubscriptionRelationshipsSubscriptionLocalizationsFromJSON = SubscriptionRelationshipsSubscriptionLocalizationsFromJSON;
function SubscriptionRelationshipsSubscriptionLocalizationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'meta': !(0, runtime_1.exists)(json, 'meta') ? undefined : (0, PagingInformation_1.PagingInformationFromJSON)(json['meta']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(SubscriptionRelationshipsSubscriptionLocalizationsDataInner_1.SubscriptionRelationshipsSubscriptionLocalizationsDataInnerFromJSON)),
    };
}
exports.SubscriptionRelationshipsSubscriptionLocalizationsFromJSONTyped = SubscriptionRelationshipsSubscriptionLocalizationsFromJSONTyped;
function SubscriptionRelationshipsSubscriptionLocalizationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'meta': (0, PagingInformation_1.PagingInformationToJSON)(value.meta),
        'data': value.data === undefined ? undefined : (value.data.map(SubscriptionRelationshipsSubscriptionLocalizationsDataInner_1.SubscriptionRelationshipsSubscriptionLocalizationsDataInnerToJSON)),
    };
}
exports.SubscriptionRelationshipsSubscriptionLocalizationsToJSON = SubscriptionRelationshipsSubscriptionLocalizationsToJSON;
//# sourceMappingURL=SubscriptionRelationshipsSubscriptionLocalizations.js.map