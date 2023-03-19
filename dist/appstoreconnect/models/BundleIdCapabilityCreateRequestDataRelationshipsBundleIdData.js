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
exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON = exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped = exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON = exports.instanceOfBundleIdCapabilityCreateRequestDataRelationshipsBundleIdData = exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataTypeEnum = void 0;
/**
 * @export
 */
exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataTypeEnum = {
    BundleIds: 'bundleIds'
};
/**
 * Check if a given object implements the BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData interface.
 */
function instanceOfBundleIdCapabilityCreateRequestDataRelationshipsBundleIdData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfBundleIdCapabilityCreateRequestDataRelationshipsBundleIdData = instanceOfBundleIdCapabilityCreateRequestDataRelationshipsBundleIdData;
function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON(json) {
    return BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped(json, false);
}
exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON = BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON;
function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped = BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped;
function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
    };
}
exports.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON = BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON;
//# sourceMappingURL=BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData.js.map