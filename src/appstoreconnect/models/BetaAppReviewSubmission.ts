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
import type { BetaAppReviewSubmissionAttributes } from './BetaAppReviewSubmissionAttributes';
import {
    BetaAppReviewSubmissionAttributesFromJSON,
    BetaAppReviewSubmissionAttributesFromJSONTyped,
    BetaAppReviewSubmissionAttributesToJSON,
} from './BetaAppReviewSubmissionAttributes';
import type { BetaAppReviewSubmissionRelationships } from './BetaAppReviewSubmissionRelationships';
import {
    BetaAppReviewSubmissionRelationshipsFromJSON,
    BetaAppReviewSubmissionRelationshipsFromJSONTyped,
    BetaAppReviewSubmissionRelationshipsToJSON,
} from './BetaAppReviewSubmissionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaAppReviewSubmission
 */
export interface BetaAppReviewSubmission {
    /**
     * 
     * @type {string}
     * @memberof BetaAppReviewSubmission
     */
    type: BetaAppReviewSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppReviewSubmission
     */
    id: string;
    /**
     * 
     * @type {BetaAppReviewSubmissionAttributes}
     * @memberof BetaAppReviewSubmission
     */
    attributes?: BetaAppReviewSubmissionAttributes;
    /**
     * 
     * @type {BetaAppReviewSubmissionRelationships}
     * @memberof BetaAppReviewSubmission
     */
    relationships?: BetaAppReviewSubmissionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaAppReviewSubmission
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const BetaAppReviewSubmissionTypeEnum = {
    BetaAppReviewSubmissions: 'betaAppReviewSubmissions'
} as const;
export type BetaAppReviewSubmissionTypeEnum = typeof BetaAppReviewSubmissionTypeEnum[keyof typeof BetaAppReviewSubmissionTypeEnum];


/**
 * Check if a given object implements the BetaAppReviewSubmission interface.
 */
export function instanceOfBetaAppReviewSubmission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaAppReviewSubmissionFromJSON(json: any): BetaAppReviewSubmission {
    return BetaAppReviewSubmissionFromJSONTyped(json, false);
}

export function BetaAppReviewSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewSubmission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaAppReviewSubmissionAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : BetaAppReviewSubmissionRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function BetaAppReviewSubmissionToJSON(value?: BetaAppReviewSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaAppReviewSubmissionAttributesToJSON(value.attributes),
        'relationships': BetaAppReviewSubmissionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
