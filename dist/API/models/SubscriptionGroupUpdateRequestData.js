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
exports.SubscriptionGroupUpdateRequestDataToJSON = exports.SubscriptionGroupUpdateRequestDataFromJSONTyped = exports.SubscriptionGroupUpdateRequestDataFromJSON = exports.instanceOfSubscriptionGroupUpdateRequestData = exports.SubscriptionGroupUpdateRequestDataTypeEnum = void 0;
const runtime_1 = require("../runtime");
const SubscriptionGroupAttributes_1 = require("./SubscriptionGroupAttributes");
/**
 * @export
 */
exports.SubscriptionGroupUpdateRequestDataTypeEnum = {
    SubscriptionGroups: 'subscriptionGroups'
};
/**
 * Check if a given object implements the SubscriptionGroupUpdateRequestData interface.
 */
function instanceOfSubscriptionGroupUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfSubscriptionGroupUpdateRequestData = instanceOfSubscriptionGroupUpdateRequestData;
function SubscriptionGroupUpdateRequestDataFromJSON(json) {
    return SubscriptionGroupUpdateRequestDataFromJSONTyped(json, false);
}
exports.SubscriptionGroupUpdateRequestDataFromJSON = SubscriptionGroupUpdateRequestDataFromJSON;
function SubscriptionGroupUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, SubscriptionGroupAttributes_1.SubscriptionGroupAttributesFromJSON)(json['attributes']),
    };
}
exports.SubscriptionGroupUpdateRequestDataFromJSONTyped = SubscriptionGroupUpdateRequestDataFromJSONTyped;
function SubscriptionGroupUpdateRequestDataToJSON(value) {
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
    };
}
exports.SubscriptionGroupUpdateRequestDataToJSON = SubscriptionGroupUpdateRequestDataToJSON;
//# sourceMappingURL=SubscriptionGroupUpdateRequestData.js.map