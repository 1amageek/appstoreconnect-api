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
import type { AppClipAdvancedExperienceRelationshipsAppClip } from './AppClipAdvancedExperienceRelationshipsAppClip';
import {
    AppClipAdvancedExperienceRelationshipsAppClipFromJSON,
    AppClipAdvancedExperienceRelationshipsAppClipFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsAppClipToJSON,
} from './AppClipAdvancedExperienceRelationshipsAppClip';
import type { AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetail } from './AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetail';
import {
    AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailFromJSON,
    AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailFromJSONTyped,
    AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailToJSON,
} from './AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetail';
import type { AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations } from './AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations';
import {
    AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsFromJSON,
    AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsFromJSONTyped,
    AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsToJSON,
} from './AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations';
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON,
} from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceRelationships
 */
export interface AppClipDefaultExperienceRelationships {
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsAppClip}
     * @memberof AppClipDefaultExperienceRelationships
     */
    appClip?: AppClipAdvancedExperienceRelationshipsAppClip;
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppClipDefaultExperienceRelationships
     */
    releaseWithAppStoreVersion?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations}
     * @memberof AppClipDefaultExperienceRelationships
     */
    appClipDefaultExperienceLocalizations?: AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations;
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetail}
     * @memberof AppClipDefaultExperienceRelationships
     */
    appClipAppStoreReviewDetail?: AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetail;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceRelationships interface.
 */
export function instanceOfAppClipDefaultExperienceRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceRelationshipsFromJSON(json: any): AppClipDefaultExperienceRelationships {
    return AppClipDefaultExperienceRelationshipsFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appClip': !exists(json, 'appClip') ? undefined : AppClipAdvancedExperienceRelationshipsAppClipFromJSON(json['appClip']),
        'releaseWithAppStoreVersion': !exists(json, 'releaseWithAppStoreVersion') ? undefined : AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON(json['releaseWithAppStoreVersion']),
        'appClipDefaultExperienceLocalizations': !exists(json, 'appClipDefaultExperienceLocalizations') ? undefined : AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsFromJSON(json['appClipDefaultExperienceLocalizations']),
        'appClipAppStoreReviewDetail': !exists(json, 'appClipAppStoreReviewDetail') ? undefined : AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailFromJSON(json['appClipAppStoreReviewDetail']),
    };
}

export function AppClipDefaultExperienceRelationshipsToJSON(value?: AppClipDefaultExperienceRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appClip': AppClipAdvancedExperienceRelationshipsAppClipToJSON(value.appClip),
        'releaseWithAppStoreVersion': AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON(value.releaseWithAppStoreVersion),
        'appClipDefaultExperienceLocalizations': AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsToJSON(value.appClipDefaultExperienceLocalizations),
        'appClipAppStoreReviewDetail': AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailToJSON(value.appClipAppStoreReviewDetail),
    };
}

