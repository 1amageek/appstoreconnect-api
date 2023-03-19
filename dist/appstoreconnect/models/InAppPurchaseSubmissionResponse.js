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
exports.InAppPurchaseSubmissionResponseToJSON = exports.InAppPurchaseSubmissionResponseFromJSONTyped = exports.InAppPurchaseSubmissionResponseFromJSON = exports.instanceOfInAppPurchaseSubmissionResponse = void 0;
const runtime_1 = require("../runtime");
const DocumentLinks_1 = require("./DocumentLinks");
const InAppPurchaseSubmission_1 = require("./InAppPurchaseSubmission");
const InAppPurchaseV2_1 = require("./InAppPurchaseV2");
/**
 * Check if a given object implements the InAppPurchaseSubmissionResponse interface.
 */
function instanceOfInAppPurchaseSubmissionResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfInAppPurchaseSubmissionResponse = instanceOfInAppPurchaseSubmissionResponse;
function InAppPurchaseSubmissionResponseFromJSON(json) {
    return InAppPurchaseSubmissionResponseFromJSONTyped(json, false);
}
exports.InAppPurchaseSubmissionResponseFromJSON = InAppPurchaseSubmissionResponseFromJSON;
function InAppPurchaseSubmissionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, InAppPurchaseSubmission_1.InAppPurchaseSubmissionFromJSON)(json['data']),
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : (json['included'].map(InAppPurchaseV2_1.InAppPurchaseV2FromJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksFromJSON)(json['links']),
    };
}
exports.InAppPurchaseSubmissionResponseFromJSONTyped = InAppPurchaseSubmissionResponseFromJSONTyped;
function InAppPurchaseSubmissionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, InAppPurchaseSubmission_1.InAppPurchaseSubmissionToJSON)(value.data),
        'included': value.included === undefined ? undefined : (value.included.map(InAppPurchaseV2_1.InAppPurchaseV2ToJSON)),
        'links': (0, DocumentLinks_1.DocumentLinksToJSON)(value.links),
    };
}
exports.InAppPurchaseSubmissionResponseToJSON = InAppPurchaseSubmissionResponseToJSON;
//# sourceMappingURL=InAppPurchaseSubmissionResponse.js.map