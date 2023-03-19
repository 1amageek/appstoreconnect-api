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
import type { AppStoreVersionExperimentAttributes } from './AppStoreVersionExperimentAttributes';
import {
    AppStoreVersionExperimentAttributesFromJSON,
    AppStoreVersionExperimentAttributesFromJSONTyped,
    AppStoreVersionExperimentAttributesToJSON,
} from './AppStoreVersionExperimentAttributes';
import type { AppStoreVersionExperimentRelationships } from './AppStoreVersionExperimentRelationships';
import {
    AppStoreVersionExperimentRelationshipsFromJSON,
    AppStoreVersionExperimentRelationshipsFromJSONTyped,
    AppStoreVersionExperimentRelationshipsToJSON,
} from './AppStoreVersionExperimentRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionExperiment
 */
export interface AppStoreVersionExperiment {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperiment
     */
    type: AppStoreVersionExperimentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperiment
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionExperimentAttributes}
     * @memberof AppStoreVersionExperiment
     */
    attributes?: AppStoreVersionExperimentAttributes;
    /**
     * 
     * @type {AppStoreVersionExperimentRelationships}
     * @memberof AppStoreVersionExperiment
     */
    relationships?: AppStoreVersionExperimentRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersionExperiment
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionExperimentTypeEnum = {
    AppStoreVersionExperiments: 'appStoreVersionExperiments'
} as const;
export type AppStoreVersionExperimentTypeEnum = typeof AppStoreVersionExperimentTypeEnum[keyof typeof AppStoreVersionExperimentTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperiment interface.
 */
export function instanceOfAppStoreVersionExperiment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionExperimentFromJSON(json: any): AppStoreVersionExperiment {
    return AppStoreVersionExperimentFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperiment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreVersionExperimentAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppStoreVersionExperimentRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionExperimentToJSON(value?: AppStoreVersionExperiment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreVersionExperimentAttributesToJSON(value.attributes),
        'relationships': AppStoreVersionExperimentRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

