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
import type { AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData } from './AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData';
import {
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataToJSON,
} from './AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsAppStoreVersionPhasedRelease
 */
export interface AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionPhasedRelease
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionPhasedRelease
     */
    data?: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionPhasedRelease interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreVersionPhasedRelease(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    return AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSON(value?: AppStoreVersionRelationshipsAppStoreVersionPhasedRelease | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataToJSON(value.data),
    };
}

