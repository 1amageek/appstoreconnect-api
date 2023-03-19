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
import type { PromotedPurchaseImageAttributes } from './PromotedPurchaseImageAttributes';
import {
    PromotedPurchaseImageAttributesFromJSON,
    PromotedPurchaseImageAttributesFromJSONTyped,
    PromotedPurchaseImageAttributesToJSON,
} from './PromotedPurchaseImageAttributes';
import type { PromotedPurchaseImageRelationships } from './PromotedPurchaseImageRelationships';
import {
    PromotedPurchaseImageRelationshipsFromJSON,
    PromotedPurchaseImageRelationshipsFromJSONTyped,
    PromotedPurchaseImageRelationshipsToJSON,
} from './PromotedPurchaseImageRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface PromotedPurchaseImage
 */
export interface PromotedPurchaseImage {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImage
     */
    type: PromotedPurchaseImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImage
     */
    id: string;
    /**
     * 
     * @type {PromotedPurchaseImageAttributes}
     * @memberof PromotedPurchaseImage
     */
    attributes?: PromotedPurchaseImageAttributes;
    /**
     * 
     * @type {PromotedPurchaseImageRelationships}
     * @memberof PromotedPurchaseImage
     */
    relationships?: PromotedPurchaseImageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof PromotedPurchaseImage
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const PromotedPurchaseImageTypeEnum = {
    PromotedPurchaseImages: 'promotedPurchaseImages'
} as const;
export type PromotedPurchaseImageTypeEnum = typeof PromotedPurchaseImageTypeEnum[keyof typeof PromotedPurchaseImageTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseImage interface.
 */
export function instanceOfPromotedPurchaseImage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function PromotedPurchaseImageFromJSON(json: any): PromotedPurchaseImage {
    return PromotedPurchaseImageFromJSONTyped(json, false);
}

export function PromotedPurchaseImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : PromotedPurchaseImageAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : PromotedPurchaseImageRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function PromotedPurchaseImageToJSON(value?: PromotedPurchaseImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': PromotedPurchaseImageAttributesToJSON(value.attributes),
        'relationships': PromotedPurchaseImageRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

