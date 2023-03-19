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
exports.AppRelationshipsReviewSubmissionsDataInnerToJSON = exports.AppRelationshipsReviewSubmissionsDataInnerFromJSONTyped = exports.AppRelationshipsReviewSubmissionsDataInnerFromJSON = exports.instanceOfAppRelationshipsReviewSubmissionsDataInner = exports.AppRelationshipsReviewSubmissionsDataInnerTypeEnum = void 0;
/**
 * @export
 */
exports.AppRelationshipsReviewSubmissionsDataInnerTypeEnum = {
    ReviewSubmissions: 'reviewSubmissions'
};
/**
 * Check if a given object implements the AppRelationshipsReviewSubmissionsDataInner interface.
 */
function instanceOfAppRelationshipsReviewSubmissionsDataInner(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppRelationshipsReviewSubmissionsDataInner = instanceOfAppRelationshipsReviewSubmissionsDataInner;
function AppRelationshipsReviewSubmissionsDataInnerFromJSON(json) {
    return AppRelationshipsReviewSubmissionsDataInnerFromJSONTyped(json, false);
}
exports.AppRelationshipsReviewSubmissionsDataInnerFromJSON = AppRelationshipsReviewSubmissionsDataInnerFromJSON;
function AppRelationshipsReviewSubmissionsDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
    };
}
exports.AppRelationshipsReviewSubmissionsDataInnerFromJSONTyped = AppRelationshipsReviewSubmissionsDataInnerFromJSONTyped;
function AppRelationshipsReviewSubmissionsDataInnerToJSON(value) {
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
exports.AppRelationshipsReviewSubmissionsDataInnerToJSON = AppRelationshipsReviewSubmissionsDataInnerToJSON;
//# sourceMappingURL=AppRelationshipsReviewSubmissionsDataInner.js.map