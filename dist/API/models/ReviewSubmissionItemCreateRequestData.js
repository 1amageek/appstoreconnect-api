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
exports.ReviewSubmissionItemCreateRequestDataToJSON = exports.ReviewSubmissionItemCreateRequestDataFromJSONTyped = exports.ReviewSubmissionItemCreateRequestDataFromJSON = exports.instanceOfReviewSubmissionItemCreateRequestData = exports.ReviewSubmissionItemCreateRequestDataTypeEnum = void 0;
const ReviewSubmissionItemCreateRequestDataRelationships_1 = require("./ReviewSubmissionItemCreateRequestDataRelationships");
/**
 * @export
 */
exports.ReviewSubmissionItemCreateRequestDataTypeEnum = {
    ReviewSubmissionItems: 'reviewSubmissionItems'
};
/**
 * Check if a given object implements the ReviewSubmissionItemCreateRequestData interface.
 */
function instanceOfReviewSubmissionItemCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfReviewSubmissionItemCreateRequestData = instanceOfReviewSubmissionItemCreateRequestData;
function ReviewSubmissionItemCreateRequestDataFromJSON(json) {
    return ReviewSubmissionItemCreateRequestDataFromJSONTyped(json, false);
}
exports.ReviewSubmissionItemCreateRequestDataFromJSON = ReviewSubmissionItemCreateRequestDataFromJSON;
function ReviewSubmissionItemCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'relationships': (0, ReviewSubmissionItemCreateRequestDataRelationships_1.ReviewSubmissionItemCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.ReviewSubmissionItemCreateRequestDataFromJSONTyped = ReviewSubmissionItemCreateRequestDataFromJSONTyped;
function ReviewSubmissionItemCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'relationships': (0, ReviewSubmissionItemCreateRequestDataRelationships_1.ReviewSubmissionItemCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.ReviewSubmissionItemCreateRequestDataToJSON = ReviewSubmissionItemCreateRequestDataToJSON;
//# sourceMappingURL=ReviewSubmissionItemCreateRequestData.js.map