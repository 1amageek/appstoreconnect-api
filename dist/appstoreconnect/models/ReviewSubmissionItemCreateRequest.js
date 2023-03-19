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
exports.ReviewSubmissionItemCreateRequestToJSON = exports.ReviewSubmissionItemCreateRequestFromJSONTyped = exports.ReviewSubmissionItemCreateRequestFromJSON = exports.instanceOfReviewSubmissionItemCreateRequest = void 0;
const ReviewSubmissionItemCreateRequestData_1 = require("./ReviewSubmissionItemCreateRequestData");
/**
 * Check if a given object implements the ReviewSubmissionItemCreateRequest interface.
 */
function instanceOfReviewSubmissionItemCreateRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    return isInstance;
}
exports.instanceOfReviewSubmissionItemCreateRequest = instanceOfReviewSubmissionItemCreateRequest;
function ReviewSubmissionItemCreateRequestFromJSON(json) {
    return ReviewSubmissionItemCreateRequestFromJSONTyped(json, false);
}
exports.ReviewSubmissionItemCreateRequestFromJSON = ReviewSubmissionItemCreateRequestFromJSON;
function ReviewSubmissionItemCreateRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (0, ReviewSubmissionItemCreateRequestData_1.ReviewSubmissionItemCreateRequestDataFromJSON)(json['data']),
    };
}
exports.ReviewSubmissionItemCreateRequestFromJSONTyped = ReviewSubmissionItemCreateRequestFromJSONTyped;
function ReviewSubmissionItemCreateRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (0, ReviewSubmissionItemCreateRequestData_1.ReviewSubmissionItemCreateRequestDataToJSON)(value.data),
    };
}
exports.ReviewSubmissionItemCreateRequestToJSON = ReviewSubmissionItemCreateRequestToJSON;
//# sourceMappingURL=ReviewSubmissionItemCreateRequest.js.map