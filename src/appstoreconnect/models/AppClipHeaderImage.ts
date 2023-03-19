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
import type { AppClipAdvancedExperienceImageAttributes } from './AppClipAdvancedExperienceImageAttributes';
import {
    AppClipAdvancedExperienceImageAttributesFromJSON,
    AppClipAdvancedExperienceImageAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageAttributesToJSON,
} from './AppClipAdvancedExperienceImageAttributes';
import type { AppClipHeaderImageRelationships } from './AppClipHeaderImageRelationships';
import {
    AppClipHeaderImageRelationshipsFromJSON,
    AppClipHeaderImageRelationshipsFromJSONTyped,
    AppClipHeaderImageRelationshipsToJSON,
} from './AppClipHeaderImageRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppClipHeaderImage
 */
export interface AppClipHeaderImage {
    /**
     * 
     * @type {string}
     * @memberof AppClipHeaderImage
     */
    type: AppClipHeaderImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipHeaderImage
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageAttributes}
     * @memberof AppClipHeaderImage
     */
    attributes?: AppClipAdvancedExperienceImageAttributes;
    /**
     * 
     * @type {AppClipHeaderImageRelationships}
     * @memberof AppClipHeaderImage
     */
    relationships?: AppClipHeaderImageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipHeaderImage
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppClipHeaderImageTypeEnum = {
    AppClipHeaderImages: 'appClipHeaderImages'
} as const;
export type AppClipHeaderImageTypeEnum = typeof AppClipHeaderImageTypeEnum[keyof typeof AppClipHeaderImageTypeEnum];


/**
 * Check if a given object implements the AppClipHeaderImage interface.
 */
export function instanceOfAppClipHeaderImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppClipHeaderImageFromJSON(json: any): AppClipHeaderImage {
    return AppClipHeaderImageFromJSONTyped(json, false);
}

export function AppClipHeaderImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppClipHeaderImageRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipHeaderImageToJSON(value?: AppClipHeaderImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAdvancedExperienceImageAttributesToJSON(value.attributes),
        'relationships': AppClipHeaderImageRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

