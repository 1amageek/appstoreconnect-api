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
exports.InAppPurchaseV2RelationshipsPromotedPurchaseToJSON = exports.InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped = exports.InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON = exports.instanceOfInAppPurchaseV2RelationshipsPromotedPurchase = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const AppRelationshipsPromotedPurchasesDataInner_1 = require("./AppRelationshipsPromotedPurchasesDataInner");
/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsPromotedPurchase interface.
 */
function instanceOfInAppPurchaseV2RelationshipsPromotedPurchase(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInAppPurchaseV2RelationshipsPromotedPurchase = instanceOfInAppPurchaseV2RelationshipsPromotedPurchase;
function InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON(json) {
    return InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped(json, false);
}
exports.InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON = InAppPurchaseV2RelationshipsPromotedPurchaseFromJSON;
function InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, AppRelationshipsPromotedPurchasesDataInner_1.AppRelationshipsPromotedPurchasesDataInnerFromJSON)(json['data']),
    };
}
exports.InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped = InAppPurchaseV2RelationshipsPromotedPurchaseFromJSONTyped;
function InAppPurchaseV2RelationshipsPromotedPurchaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, AppRelationshipsPromotedPurchasesDataInner_1.AppRelationshipsPromotedPurchasesDataInnerToJSON)(value.data),
    };
}
exports.InAppPurchaseV2RelationshipsPromotedPurchaseToJSON = InAppPurchaseV2RelationshipsPromotedPurchaseToJSON;
//# sourceMappingURL=InAppPurchaseV2RelationshipsPromotedPurchase.js.map