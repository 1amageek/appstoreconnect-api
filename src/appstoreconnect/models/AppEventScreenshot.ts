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
import type { AppEventScreenshotAttributes } from './AppEventScreenshotAttributes';
import {
    AppEventScreenshotAttributesFromJSON,
    AppEventScreenshotAttributesFromJSONTyped,
    AppEventScreenshotAttributesToJSON,
} from './AppEventScreenshotAttributes';
import type { AppEventScreenshotRelationships } from './AppEventScreenshotRelationships';
import {
    AppEventScreenshotRelationshipsFromJSON,
    AppEventScreenshotRelationshipsFromJSONTyped,
    AppEventScreenshotRelationshipsToJSON,
} from './AppEventScreenshotRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppEventScreenshot
 */
export interface AppEventScreenshot {
    /**
     * 
     * @type {string}
     * @memberof AppEventScreenshot
     */
    type: AppEventScreenshotTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventScreenshot
     */
    id: string;
    /**
     * 
     * @type {AppEventScreenshotAttributes}
     * @memberof AppEventScreenshot
     */
    attributes?: AppEventScreenshotAttributes;
    /**
     * 
     * @type {AppEventScreenshotRelationships}
     * @memberof AppEventScreenshot
     */
    relationships?: AppEventScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppEventScreenshot
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppEventScreenshotTypeEnum = {
    AppEventScreenshots: 'appEventScreenshots'
} as const;
export type AppEventScreenshotTypeEnum = typeof AppEventScreenshotTypeEnum[keyof typeof AppEventScreenshotTypeEnum];


/**
 * Check if a given object implements the AppEventScreenshot interface.
 */
export function instanceOfAppEventScreenshot(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEventScreenshotFromJSON(json: any): AppEventScreenshot {
    return AppEventScreenshotFromJSONTyped(json, false);
}

export function AppEventScreenshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshot {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppEventScreenshotAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppEventScreenshotRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppEventScreenshotToJSON(value?: AppEventScreenshot | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppEventScreenshotAttributesToJSON(value.attributes),
        'relationships': AppEventScreenshotRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
