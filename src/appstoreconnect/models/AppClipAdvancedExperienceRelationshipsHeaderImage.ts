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
import type { AppClipAdvancedExperienceRelationshipsHeaderImageData } from './AppClipAdvancedExperienceRelationshipsHeaderImageData';
import {
    AppClipAdvancedExperienceRelationshipsHeaderImageDataFromJSON,
    AppClipAdvancedExperienceRelationshipsHeaderImageDataFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsHeaderImageDataToJSON,
} from './AppClipAdvancedExperienceRelationshipsHeaderImageData';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceRelationshipsHeaderImage
 */
export interface AppClipAdvancedExperienceRelationshipsHeaderImage {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppClipAdvancedExperienceRelationshipsHeaderImage
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsHeaderImageData}
     * @memberof AppClipAdvancedExperienceRelationshipsHeaderImage
     */
    data?: AppClipAdvancedExperienceRelationshipsHeaderImageData;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsHeaderImage interface.
 */
export function instanceOfAppClipAdvancedExperienceRelationshipsHeaderImage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceRelationshipsHeaderImageFromJSON(json: any): AppClipAdvancedExperienceRelationshipsHeaderImage {
    return AppClipAdvancedExperienceRelationshipsHeaderImageFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsHeaderImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsHeaderImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppClipAdvancedExperienceRelationshipsHeaderImageDataFromJSON(json['data']),
    };
}

export function AppClipAdvancedExperienceRelationshipsHeaderImageToJSON(value?: AppClipAdvancedExperienceRelationshipsHeaderImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppClipAdvancedExperienceRelationshipsHeaderImageDataToJSON(value.data),
    };
}
