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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { ReviewSubmissionItemAttributes } from './ReviewSubmissionItemAttributes';
import {
    ReviewSubmissionItemAttributesFromJSON,
    ReviewSubmissionItemAttributesFromJSONTyped,
    ReviewSubmissionItemAttributesToJSON,
} from './ReviewSubmissionItemAttributes';
import type { ReviewSubmissionItemRelationships } from './ReviewSubmissionItemRelationships';
import {
    ReviewSubmissionItemRelationshipsFromJSON,
    ReviewSubmissionItemRelationshipsFromJSONTyped,
    ReviewSubmissionItemRelationshipsToJSON,
} from './ReviewSubmissionItemRelationships';

/**
 * 
 * @export
 * @interface ReviewSubmissionItem
 */
export interface ReviewSubmissionItem {
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionItem
     */
    type: ReviewSubmissionItemTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionItem
     */
    id: string;
    /**
     * 
     * @type {ReviewSubmissionItemAttributes}
     * @memberof ReviewSubmissionItem
     */
    attributes?: ReviewSubmissionItemAttributes;
    /**
     * 
     * @type {ReviewSubmissionItemRelationships}
     * @memberof ReviewSubmissionItem
     */
    relationships?: ReviewSubmissionItemRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof ReviewSubmissionItem
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const ReviewSubmissionItemTypeEnum = {
    ReviewSubmissionItems: 'reviewSubmissionItems'
} as const;
export type ReviewSubmissionItemTypeEnum = typeof ReviewSubmissionItemTypeEnum[keyof typeof ReviewSubmissionItemTypeEnum];


/**
 * Check if a given object implements the ReviewSubmissionItem interface.
 */
export function instanceOfReviewSubmissionItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ReviewSubmissionItemFromJSON(json: any): ReviewSubmissionItem {
    return ReviewSubmissionItemFromJSONTyped(json, false);
}

export function ReviewSubmissionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : ReviewSubmissionItemAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : ReviewSubmissionItemRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function ReviewSubmissionItemToJSON(value?: ReviewSubmissionItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': ReviewSubmissionItemAttributesToJSON(value.attributes),
        'relationships': ReviewSubmissionItemRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

