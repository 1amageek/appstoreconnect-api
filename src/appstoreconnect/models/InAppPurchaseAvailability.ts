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
import type { AppAvailabilityAttributes } from './AppAvailabilityAttributes';
import {
    AppAvailabilityAttributesFromJSON,
    AppAvailabilityAttributesFromJSONTyped,
    AppAvailabilityAttributesToJSON,
} from './AppAvailabilityAttributes';
import type { InAppPurchaseAvailabilityRelationships } from './InAppPurchaseAvailabilityRelationships';
import {
    InAppPurchaseAvailabilityRelationshipsFromJSON,
    InAppPurchaseAvailabilityRelationshipsFromJSONTyped,
    InAppPurchaseAvailabilityRelationshipsToJSON,
} from './InAppPurchaseAvailabilityRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface InAppPurchaseAvailability
 */
export interface InAppPurchaseAvailability {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAvailability
     */
    type: InAppPurchaseAvailabilityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAvailability
     */
    id: string;
    /**
     * 
     * @type {AppAvailabilityAttributes}
     * @memberof InAppPurchaseAvailability
     */
    attributes?: AppAvailabilityAttributes;
    /**
     * 
     * @type {InAppPurchaseAvailabilityRelationships}
     * @memberof InAppPurchaseAvailability
     */
    relationships?: InAppPurchaseAvailabilityRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseAvailability
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseAvailabilityTypeEnum = {
    InAppPurchaseAvailabilities: 'inAppPurchaseAvailabilities'
} as const;
export type InAppPurchaseAvailabilityTypeEnum = typeof InAppPurchaseAvailabilityTypeEnum[keyof typeof InAppPurchaseAvailabilityTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAvailability interface.
 */
export function instanceOfInAppPurchaseAvailability(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function InAppPurchaseAvailabilityFromJSON(json: any): InAppPurchaseAvailability {
    return InAppPurchaseAvailabilityFromJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailability {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppAvailabilityAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchaseAvailabilityRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseAvailabilityToJSON(value?: InAppPurchaseAvailability | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppAvailabilityAttributesToJSON(value.attributes),
        'relationships': InAppPurchaseAvailabilityRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
