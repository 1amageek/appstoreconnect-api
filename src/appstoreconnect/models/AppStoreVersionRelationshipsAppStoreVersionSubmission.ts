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
import type { AppStoreVersionRelationshipsAppStoreVersionSubmissionData } from './AppStoreVersionRelationshipsAppStoreVersionSubmissionData';
import {
    AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionDataToJSON,
} from './AppStoreVersionRelationshipsAppStoreVersionSubmissionData';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsAppStoreVersionSubmission
 */
export interface AppStoreVersionRelationshipsAppStoreVersionSubmission {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionSubmission
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionSubmissionData}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionSubmission
     */
    data?: AppStoreVersionRelationshipsAppStoreVersionSubmissionData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionSubmission interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreVersionSubmission(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionSubmission {
    return AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreVersionSubmission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppStoreVersionRelationshipsAppStoreVersionSubmissionDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsAppStoreVersionSubmissionToJSON(value?: AppStoreVersionRelationshipsAppStoreVersionSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppStoreVersionRelationshipsAppStoreVersionSubmissionDataToJSON(value.data),
    };
}

