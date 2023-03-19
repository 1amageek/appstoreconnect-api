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
exports.CiProductRelationshipsBundleIdToJSON = exports.CiProductRelationshipsBundleIdFromJSONTyped = exports.CiProductRelationshipsBundleIdFromJSON = exports.instanceOfCiProductRelationshipsBundleId = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData_1 = require("./BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData");
/**
 * Check if a given object implements the CiProductRelationshipsBundleId interface.
 */
function instanceOfCiProductRelationshipsBundleId(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCiProductRelationshipsBundleId = instanceOfCiProductRelationshipsBundleId;
function CiProductRelationshipsBundleIdFromJSON(json) {
    return CiProductRelationshipsBundleIdFromJSONTyped(json, false);
}
exports.CiProductRelationshipsBundleIdFromJSON = CiProductRelationshipsBundleIdFromJSON;
function CiProductRelationshipsBundleIdFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData_1.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON)(json['data']),
    };
}
exports.CiProductRelationshipsBundleIdFromJSONTyped = CiProductRelationshipsBundleIdFromJSONTyped;
function CiProductRelationshipsBundleIdToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData_1.BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON)(value.data),
    };
}
exports.CiProductRelationshipsBundleIdToJSON = CiProductRelationshipsBundleIdToJSON;
//# sourceMappingURL=CiProductRelationshipsBundleId.js.map