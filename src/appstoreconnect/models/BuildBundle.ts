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
import type { BuildBundleAttributes } from './BuildBundleAttributes';
import {
    BuildBundleAttributesFromJSON,
    BuildBundleAttributesFromJSONTyped,
    BuildBundleAttributesToJSON,
} from './BuildBundleAttributes';
import type { BuildBundleRelationships } from './BuildBundleRelationships';
import {
    BuildBundleRelationshipsFromJSON,
    BuildBundleRelationshipsFromJSONTyped,
    BuildBundleRelationshipsToJSON,
} from './BuildBundleRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BuildBundle
 */
export interface BuildBundle {
    /**
     * 
     * @type {string}
     * @memberof BuildBundle
     */
    type: BuildBundleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildBundle
     */
    id: string;
    /**
     * 
     * @type {BuildBundleAttributes}
     * @memberof BuildBundle
     */
    attributes?: BuildBundleAttributes;
    /**
     * 
     * @type {BuildBundleRelationships}
     * @memberof BuildBundle
     */
    relationships?: BuildBundleRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BuildBundle
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const BuildBundleTypeEnum = {
    BuildBundles: 'buildBundles'
} as const;
export type BuildBundleTypeEnum = typeof BuildBundleTypeEnum[keyof typeof BuildBundleTypeEnum];


/**
 * Check if a given object implements the BuildBundle interface.
 */
export function instanceOfBuildBundle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BuildBundleFromJSON(json: any): BuildBundle {
    return BuildBundleFromJSONTyped(json, false);
}

export function BuildBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BuildBundleAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : BuildBundleRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function BuildBundleToJSON(value?: BuildBundle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BuildBundleAttributesToJSON(value.attributes),
        'relationships': BuildBundleRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

