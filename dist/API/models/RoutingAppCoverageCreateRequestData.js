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
exports.RoutingAppCoverageCreateRequestDataToJSON = exports.RoutingAppCoverageCreateRequestDataFromJSONTyped = exports.RoutingAppCoverageCreateRequestDataFromJSON = exports.instanceOfRoutingAppCoverageCreateRequestData = exports.RoutingAppCoverageCreateRequestDataTypeEnum = void 0;
const AppClipAdvancedExperienceImageCreateRequestDataAttributes_1 = require("./AppClipAdvancedExperienceImageCreateRequestDataAttributes");
const AppStoreReviewDetailCreateRequestDataRelationships_1 = require("./AppStoreReviewDetailCreateRequestDataRelationships");
/**
 * @export
 */
exports.RoutingAppCoverageCreateRequestDataTypeEnum = {
    RoutingAppCoverages: 'routingAppCoverages'
};
/**
 * Check if a given object implements the RoutingAppCoverageCreateRequestData interface.
 */
function instanceOfRoutingAppCoverageCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfRoutingAppCoverageCreateRequestData = instanceOfRoutingAppCoverageCreateRequestData;
function RoutingAppCoverageCreateRequestDataFromJSON(json) {
    return RoutingAppCoverageCreateRequestDataFromJSONTyped(json, false);
}
exports.RoutingAppCoverageCreateRequestDataFromJSON = RoutingAppCoverageCreateRequestDataFromJSON;
function RoutingAppCoverageCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, AppClipAdvancedExperienceImageCreateRequestDataAttributes_1.AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON)(json['attributes']),
        'relationships': (0, AppStoreReviewDetailCreateRequestDataRelationships_1.AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.RoutingAppCoverageCreateRequestDataFromJSONTyped = RoutingAppCoverageCreateRequestDataFromJSONTyped;
function RoutingAppCoverageCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, AppClipAdvancedExperienceImageCreateRequestDataAttributes_1.AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON)(value.attributes),
        'relationships': (0, AppStoreReviewDetailCreateRequestDataRelationships_1.AppStoreReviewDetailCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.RoutingAppCoverageCreateRequestDataToJSON = RoutingAppCoverageCreateRequestDataToJSON;
//# sourceMappingURL=RoutingAppCoverageCreateRequestData.js.map