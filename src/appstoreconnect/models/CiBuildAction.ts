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
import type { CiBuildActionAttributes } from './CiBuildActionAttributes';
import {
    CiBuildActionAttributesFromJSON,
    CiBuildActionAttributesFromJSONTyped,
    CiBuildActionAttributesToJSON,
} from './CiBuildActionAttributes';
import type { CiBuildActionRelationships } from './CiBuildActionRelationships';
import {
    CiBuildActionRelationshipsFromJSON,
    CiBuildActionRelationshipsFromJSONTyped,
    CiBuildActionRelationshipsToJSON,
} from './CiBuildActionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface CiBuildAction
 */
export interface CiBuildAction {
    /**
     * 
     * @type {string}
     * @memberof CiBuildAction
     */
    type: CiBuildActionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiBuildAction
     */
    id: string;
    /**
     * 
     * @type {CiBuildActionAttributes}
     * @memberof CiBuildAction
     */
    attributes?: CiBuildActionAttributes;
    /**
     * 
     * @type {CiBuildActionRelationships}
     * @memberof CiBuildAction
     */
    relationships?: CiBuildActionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof CiBuildAction
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const CiBuildActionTypeEnum = {
    CiBuildActions: 'ciBuildActions'
} as const;
export type CiBuildActionTypeEnum = typeof CiBuildActionTypeEnum[keyof typeof CiBuildActionTypeEnum];


/**
 * Check if a given object implements the CiBuildAction interface.
 */
export function instanceOfCiBuildAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiBuildActionFromJSON(json: any): CiBuildAction {
    return CiBuildActionFromJSONTyped(json, false);
}

export function CiBuildActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : CiBuildActionAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : CiBuildActionRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function CiBuildActionToJSON(value?: CiBuildAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CiBuildActionAttributesToJSON(value.attributes),
        'relationships': CiBuildActionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
