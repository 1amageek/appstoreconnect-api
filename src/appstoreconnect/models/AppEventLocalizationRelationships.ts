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
import type { AppEventLocalizationRelationshipsAppEvent } from './AppEventLocalizationRelationshipsAppEvent';
import {
    AppEventLocalizationRelationshipsAppEventFromJSON,
    AppEventLocalizationRelationshipsAppEventFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventToJSON,
} from './AppEventLocalizationRelationshipsAppEvent';
import type { AppEventLocalizationRelationshipsAppEventScreenshots } from './AppEventLocalizationRelationshipsAppEventScreenshots';
import {
    AppEventLocalizationRelationshipsAppEventScreenshotsFromJSON,
    AppEventLocalizationRelationshipsAppEventScreenshotsFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventScreenshotsToJSON,
} from './AppEventLocalizationRelationshipsAppEventScreenshots';
import type { AppEventLocalizationRelationshipsAppEventVideoClips } from './AppEventLocalizationRelationshipsAppEventVideoClips';
import {
    AppEventLocalizationRelationshipsAppEventVideoClipsFromJSON,
    AppEventLocalizationRelationshipsAppEventVideoClipsFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventVideoClipsToJSON,
} from './AppEventLocalizationRelationshipsAppEventVideoClips';

/**
 * 
 * @export
 * @interface AppEventLocalizationRelationships
 */
export interface AppEventLocalizationRelationships {
    /**
     * 
     * @type {AppEventLocalizationRelationshipsAppEvent}
     * @memberof AppEventLocalizationRelationships
     */
    appEvent?: AppEventLocalizationRelationshipsAppEvent;
    /**
     * 
     * @type {AppEventLocalizationRelationshipsAppEventScreenshots}
     * @memberof AppEventLocalizationRelationships
     */
    appEventScreenshots?: AppEventLocalizationRelationshipsAppEventScreenshots;
    /**
     * 
     * @type {AppEventLocalizationRelationshipsAppEventVideoClips}
     * @memberof AppEventLocalizationRelationships
     */
    appEventVideoClips?: AppEventLocalizationRelationshipsAppEventVideoClips;
}

/**
 * Check if a given object implements the AppEventLocalizationRelationships interface.
 */
export function instanceOfAppEventLocalizationRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEventLocalizationRelationshipsFromJSON(json: any): AppEventLocalizationRelationships {
    return AppEventLocalizationRelationshipsFromJSONTyped(json, false);
}

export function AppEventLocalizationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appEvent': !exists(json, 'appEvent') ? undefined : AppEventLocalizationRelationshipsAppEventFromJSON(json['appEvent']),
        'appEventScreenshots': !exists(json, 'appEventScreenshots') ? undefined : AppEventLocalizationRelationshipsAppEventScreenshotsFromJSON(json['appEventScreenshots']),
        'appEventVideoClips': !exists(json, 'appEventVideoClips') ? undefined : AppEventLocalizationRelationshipsAppEventVideoClipsFromJSON(json['appEventVideoClips']),
    };
}

export function AppEventLocalizationRelationshipsToJSON(value?: AppEventLocalizationRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appEvent': AppEventLocalizationRelationshipsAppEventToJSON(value.appEvent),
        'appEventScreenshots': AppEventLocalizationRelationshipsAppEventScreenshotsToJSON(value.appEventScreenshots),
        'appEventVideoClips': AppEventLocalizationRelationshipsAppEventVideoClipsToJSON(value.appEventVideoClips),
    };
}

