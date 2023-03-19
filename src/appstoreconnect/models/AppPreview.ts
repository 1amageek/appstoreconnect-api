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
import type { AppPreviewAttributes } from './AppPreviewAttributes';
import {
    AppPreviewAttributesFromJSON,
    AppPreviewAttributesFromJSONTyped,
    AppPreviewAttributesToJSON,
} from './AppPreviewAttributes';
import type { AppPreviewRelationships } from './AppPreviewRelationships';
import {
    AppPreviewRelationshipsFromJSON,
    AppPreviewRelationshipsFromJSONTyped,
    AppPreviewRelationshipsToJSON,
} from './AppPreviewRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppPreview
 */
export interface AppPreview {
    /**
     * 
     * @type {string}
     * @memberof AppPreview
     */
    type: AppPreviewTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPreview
     */
    id: string;
    /**
     * 
     * @type {AppPreviewAttributes}
     * @memberof AppPreview
     */
    attributes?: AppPreviewAttributes;
    /**
     * 
     * @type {AppPreviewRelationships}
     * @memberof AppPreview
     */
    relationships?: AppPreviewRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppPreview
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppPreviewTypeEnum = {
    AppPreviews: 'appPreviews'
} as const;
export type AppPreviewTypeEnum = typeof AppPreviewTypeEnum[keyof typeof AppPreviewTypeEnum];


/**
 * Check if a given object implements the AppPreview interface.
 */
export function instanceOfAppPreview(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPreviewFromJSON(json: any): AppPreview {
    return AppPreviewFromJSONTyped(json, false);
}

export function AppPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppPreviewAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppPreviewRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppPreviewToJSON(value?: AppPreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppPreviewAttributesToJSON(value.attributes),
        'relationships': AppPreviewRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
