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
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON = exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped = exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON = exports.instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePoint = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const InAppPurchasePriceRelationshipsInAppPurchasePricePointData_1 = require("./InAppPurchasePriceRelationshipsInAppPurchasePricePointData");
/**
 * Check if a given object implements the InAppPurchasePriceRelationshipsInAppPurchasePricePoint interface.
 */
function instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePoint(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePoint = instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePoint;
function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON(json) {
    return InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped(json, false);
}
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON = InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON;
function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, InAppPurchasePriceRelationshipsInAppPurchasePricePointData_1.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON)(json['data']),
    };
}
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped = InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped;
function InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, InAppPurchasePriceRelationshipsInAppPurchasePricePointData_1.InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON)(value.data),
    };
}
exports.InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON = InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON;
//# sourceMappingURL=InAppPurchasePriceRelationshipsInAppPurchasePricePoint.js.map