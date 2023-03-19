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
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON = exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped = exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON = exports.instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePointData = exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataTypeEnum = void 0;
/**
 * @export
 */
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataTypeEnum = {
    InAppPurchasePricePoints: 'inAppPurchasePricePoints'
};
/**
 * Check if a given object implements the InAppPurchasePriceRelationshipsInAppPurchasePricePointData interface.
 */
function instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePointData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePointData = instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePointData;
function InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON(json) {
    return InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped(json, false);
}
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON = InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON;
function InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped = InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped;
function InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON(value) {
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
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON = InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON;
//# sourceMappingURL=InAppPurchasePriceRelationshipsInAppPurchasePricePointData.js.map