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
import type { AppInfoAttributes } from './AppInfoAttributes';
import {
    AppInfoAttributesFromJSON,
    AppInfoAttributesFromJSONTyped,
    AppInfoAttributesToJSON,
} from './AppInfoAttributes';
import type { AppInfoRelationships } from './AppInfoRelationships';
import {
    AppInfoRelationshipsFromJSON,
    AppInfoRelationshipsFromJSONTyped,
    AppInfoRelationshipsToJSON,
} from './AppInfoRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppInfo
 */
export interface AppInfo {
    /**
     * 
     * @type {string}
     * @memberof AppInfo
     */
    type: AppInfoTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfo
     */
    id: string;
    /**
     * 
     * @type {AppInfoAttributes}
     * @memberof AppInfo
     */
    attributes?: AppInfoAttributes;
    /**
     * 
     * @type {AppInfoRelationships}
     * @memberof AppInfo
     */
    relationships?: AppInfoRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppInfo
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppInfoTypeEnum = {
    AppInfos: 'appInfos'
} as const;
export type AppInfoTypeEnum = typeof AppInfoTypeEnum[keyof typeof AppInfoTypeEnum];


/**
 * Check if a given object implements the AppInfo interface.
 */
export function instanceOfAppInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppInfoFromJSON(json: any): AppInfo {
    return AppInfoFromJSONTyped(json, false);
}

export function AppInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppInfoAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppInfoRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppInfoToJSON(value?: AppInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppInfoAttributesToJSON(value.attributes),
        'relationships': AppInfoRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

