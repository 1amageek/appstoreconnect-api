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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import {
    AppAvailabilityRelationshipsAppLinksFromJSON,
    AppAvailabilityRelationshipsAppLinksFromJSONTyped,
    AppAvailabilityRelationshipsAppLinksToJSON,
} from './AppAvailabilityRelationshipsAppLinks';
import type { CustomerReviewResponseV1RelationshipsReviewData } from './CustomerReviewResponseV1RelationshipsReviewData';
import {
    CustomerReviewResponseV1RelationshipsReviewDataFromJSON,
    CustomerReviewResponseV1RelationshipsReviewDataFromJSONTyped,
    CustomerReviewResponseV1RelationshipsReviewDataToJSON,
} from './CustomerReviewResponseV1RelationshipsReviewData';

/**
 * 
 * @export
 * @interface CustomerReviewResponseV1RelationshipsReview
 */
export interface CustomerReviewResponseV1RelationshipsReview {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof CustomerReviewResponseV1RelationshipsReview
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {CustomerReviewResponseV1RelationshipsReviewData}
     * @memberof CustomerReviewResponseV1RelationshipsReview
     */
    data?: CustomerReviewResponseV1RelationshipsReviewData;
}

/**
 * Check if a given object implements the CustomerReviewResponseV1RelationshipsReview interface.
 */
export function instanceOfCustomerReviewResponseV1RelationshipsReview(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerReviewResponseV1RelationshipsReviewFromJSON(json: any): CustomerReviewResponseV1RelationshipsReview {
    return CustomerReviewResponseV1RelationshipsReviewFromJSONTyped(json, false);
}

export function CustomerReviewResponseV1RelationshipsReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerReviewResponseV1RelationshipsReview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : CustomerReviewResponseV1RelationshipsReviewDataFromJSON(json['data']),
    };
}

export function CustomerReviewResponseV1RelationshipsReviewToJSON(value?: CustomerReviewResponseV1RelationshipsReview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': CustomerReviewResponseV1RelationshipsReviewDataToJSON(value.data),
    };
}
