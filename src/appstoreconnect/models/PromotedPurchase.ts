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
import type { PromotedPurchaseAttributes } from './PromotedPurchaseAttributes';
import {
    PromotedPurchaseAttributesFromJSON,
    PromotedPurchaseAttributesFromJSONTyped,
    PromotedPurchaseAttributesToJSON,
} from './PromotedPurchaseAttributes';
import type { PromotedPurchaseRelationships } from './PromotedPurchaseRelationships';
import {
    PromotedPurchaseRelationshipsFromJSON,
    PromotedPurchaseRelationshipsFromJSONTyped,
    PromotedPurchaseRelationshipsToJSON,
} from './PromotedPurchaseRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface PromotedPurchase
 */
export interface PromotedPurchase {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchase
     */
    type: PromotedPurchaseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchase
     */
    id: string;
    /**
     * 
     * @type {PromotedPurchaseAttributes}
     * @memberof PromotedPurchase
     */
    attributes?: PromotedPurchaseAttributes;
    /**
     * 
     * @type {PromotedPurchaseRelationships}
     * @memberof PromotedPurchase
     */
    relationships?: PromotedPurchaseRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof PromotedPurchase
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const PromotedPurchaseTypeEnum = {
    PromotedPurchases: 'promotedPurchases'
} as const;
export type PromotedPurchaseTypeEnum = typeof PromotedPurchaseTypeEnum[keyof typeof PromotedPurchaseTypeEnum];


/**
 * Check if a given object implements the PromotedPurchase interface.
 */
export function instanceOfPromotedPurchase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function PromotedPurchaseFromJSON(json: any): PromotedPurchase {
    return PromotedPurchaseFromJSONTyped(json, false);
}

export function PromotedPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : PromotedPurchaseAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : PromotedPurchaseRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function PromotedPurchaseToJSON(value?: PromotedPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': PromotedPurchaseAttributesToJSON(value.attributes),
        'relationships': PromotedPurchaseRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

