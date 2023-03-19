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
import type { CiBuildRunRelationshipsPullRequestData } from './CiBuildRunRelationshipsPullRequestData';
import {
    CiBuildRunRelationshipsPullRequestDataFromJSON,
    CiBuildRunRelationshipsPullRequestDataFromJSONTyped,
    CiBuildRunRelationshipsPullRequestDataToJSON,
} from './CiBuildRunRelationshipsPullRequestData';

/**
 * 
 * @export
 * @interface CiBuildRunRelationshipsPullRequest
 */
export interface CiBuildRunRelationshipsPullRequest {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof CiBuildRunRelationshipsPullRequest
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {CiBuildRunRelationshipsPullRequestData}
     * @memberof CiBuildRunRelationshipsPullRequest
     */
    data?: CiBuildRunRelationshipsPullRequestData;
}

/**
 * Check if a given object implements the CiBuildRunRelationshipsPullRequest interface.
 */
export function instanceOfCiBuildRunRelationshipsPullRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunRelationshipsPullRequestFromJSON(json: any): CiBuildRunRelationshipsPullRequest {
    return CiBuildRunRelationshipsPullRequestFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsPullRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsPullRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : CiBuildRunRelationshipsPullRequestDataFromJSON(json['data']),
    };
}

export function CiBuildRunRelationshipsPullRequestToJSON(value?: CiBuildRunRelationshipsPullRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': CiBuildRunRelationshipsPullRequestDataToJSON(value.data),
    };
}

