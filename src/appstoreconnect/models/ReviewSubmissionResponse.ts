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

import { exists, mapValues } from '../runtime';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { ReviewSubmission } from './ReviewSubmission';
import {
    ReviewSubmissionFromJSON,
    ReviewSubmissionFromJSONTyped,
    ReviewSubmissionToJSON,
} from './ReviewSubmission';
import type { ReviewSubmissionsResponseIncludedInner } from './ReviewSubmissionsResponseIncludedInner';
import {
    ReviewSubmissionsResponseIncludedInnerFromJSON,
    ReviewSubmissionsResponseIncludedInnerFromJSONTyped,
    ReviewSubmissionsResponseIncludedInnerToJSON,
} from './ReviewSubmissionsResponseIncludedInner';

/**
 * 
 * @export
 * @interface ReviewSubmissionResponse
 */
export interface ReviewSubmissionResponse {
    /**
     * 
     * @type {ReviewSubmission}
     * @memberof ReviewSubmissionResponse
     */
    data: ReviewSubmission;
    /**
     * 
     * @type {Array<ReviewSubmissionsResponseIncludedInner>}
     * @memberof ReviewSubmissionResponse
     */
    included?: Array<ReviewSubmissionsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof ReviewSubmissionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the ReviewSubmissionResponse interface.
 */
export function instanceOfReviewSubmissionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ReviewSubmissionResponseFromJSON(json: any): ReviewSubmissionResponse {
    return ReviewSubmissionResponseFromJSONTyped(json, false);
}

export function ReviewSubmissionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ReviewSubmissionFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(ReviewSubmissionsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function ReviewSubmissionResponseToJSON(value?: ReviewSubmissionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ReviewSubmissionToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(ReviewSubmissionsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

