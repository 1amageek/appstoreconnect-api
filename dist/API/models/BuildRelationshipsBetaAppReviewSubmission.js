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
exports.BuildRelationshipsBetaAppReviewSubmissionToJSON = exports.BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped = exports.BuildRelationshipsBetaAppReviewSubmissionFromJSON = exports.instanceOfBuildRelationshipsBetaAppReviewSubmission = void 0;
const runtime_1 = require("../runtime");
const AppAvailabilityRelationshipsAppLinks_1 = require("./AppAvailabilityRelationshipsAppLinks");
const BuildRelationshipsBetaAppReviewSubmissionData_1 = require("./BuildRelationshipsBetaAppReviewSubmissionData");
/**
 * Check if a given object implements the BuildRelationshipsBetaAppReviewSubmission interface.
 */
function instanceOfBuildRelationshipsBetaAppReviewSubmission(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBuildRelationshipsBetaAppReviewSubmission = instanceOfBuildRelationshipsBetaAppReviewSubmission;
function BuildRelationshipsBetaAppReviewSubmissionFromJSON(json) {
    return BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json, false);
}
exports.BuildRelationshipsBetaAppReviewSubmissionFromJSON = BuildRelationshipsBetaAppReviewSubmissionFromJSON;
function BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksFromJSON)(json['links']),
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (0, BuildRelationshipsBetaAppReviewSubmissionData_1.BuildRelationshipsBetaAppReviewSubmissionDataFromJSON)(json['data']),
    };
}
exports.BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped = BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped;
function BuildRelationshipsBetaAppReviewSubmissionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, AppAvailabilityRelationshipsAppLinks_1.AppAvailabilityRelationshipsAppLinksToJSON)(value.links),
        'data': (0, BuildRelationshipsBetaAppReviewSubmissionData_1.BuildRelationshipsBetaAppReviewSubmissionDataToJSON)(value.data),
    };
}
exports.BuildRelationshipsBetaAppReviewSubmissionToJSON = BuildRelationshipsBetaAppReviewSubmissionToJSON;
//# sourceMappingURL=BuildRelationshipsBetaAppReviewSubmission.js.map