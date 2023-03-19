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
exports.SubscriptionGroupToJSON = exports.SubscriptionGroupFromJSONTyped = exports.SubscriptionGroupFromJSON = exports.instanceOfSubscriptionGroup = exports.SubscriptionGroupTypeEnum = void 0;
const runtime_1 = require("../runtime");
const ResourceLinks_1 = require("./ResourceLinks");
const SubscriptionGroupAttributes_1 = require("./SubscriptionGroupAttributes");
const SubscriptionGroupRelationships_1 = require("./SubscriptionGroupRelationships");
/**
 * @export
 */
exports.SubscriptionGroupTypeEnum = {
    SubscriptionGroups: 'subscriptionGroups'
};
/**
 * Check if a given object implements the SubscriptionGroup interface.
 */
function instanceOfSubscriptionGroup(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfSubscriptionGroup = instanceOfSubscriptionGroup;
function SubscriptionGroupFromJSON(json) {
    return SubscriptionGroupFromJSONTyped(json, false);
}
exports.SubscriptionGroupFromJSON = SubscriptionGroupFromJSON;
function SubscriptionGroupFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, SubscriptionGroupAttributes_1.SubscriptionGroupAttributesFromJSON)(json['attributes']),
        'relationships': !(0, runtime_1.exists)(json, 'relationships') ? undefined : (0, SubscriptionGroupRelationships_1.SubscriptionGroupRelationshipsFromJSON)(json['relationships']),
        'links': (0, ResourceLinks_1.ResourceLinksFromJSON)(json['links']),
    };
}
exports.SubscriptionGroupFromJSONTyped = SubscriptionGroupFromJSONTyped;
function SubscriptionGroupToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, SubscriptionGroupAttributes_1.SubscriptionGroupAttributesToJSON)(value.attributes),
        'relationships': (0, SubscriptionGroupRelationships_1.SubscriptionGroupRelationshipsToJSON)(value.relationships),
        'links': (0, ResourceLinks_1.ResourceLinksToJSON)(value.links),
    };
}
exports.SubscriptionGroupToJSON = SubscriptionGroupToJSON;
//# sourceMappingURL=SubscriptionGroup.js.map