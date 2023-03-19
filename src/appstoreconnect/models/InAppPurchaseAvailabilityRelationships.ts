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
import type { AppAvailabilityRelationshipsAvailableTerritories } from './AppAvailabilityRelationshipsAvailableTerritories';
import {
    AppAvailabilityRelationshipsAvailableTerritoriesFromJSON,
    AppAvailabilityRelationshipsAvailableTerritoriesFromJSONTyped,
    AppAvailabilityRelationshipsAvailableTerritoriesToJSON,
} from './AppAvailabilityRelationshipsAvailableTerritories';

/**
 * 
 * @export
 * @interface InAppPurchaseAvailabilityRelationships
 */
export interface InAppPurchaseAvailabilityRelationships {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAvailableTerritories}
     * @memberof InAppPurchaseAvailabilityRelationships
     */
    availableTerritories?: AppAvailabilityRelationshipsAvailableTerritories;
}

/**
 * Check if a given object implements the InAppPurchaseAvailabilityRelationships interface.
 */
export function instanceOfInAppPurchaseAvailabilityRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseAvailabilityRelationshipsFromJSON(json: any): InAppPurchaseAvailabilityRelationships {
    return InAppPurchaseAvailabilityRelationshipsFromJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailabilityRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableTerritories': !exists(json, 'availableTerritories') ? undefined : AppAvailabilityRelationshipsAvailableTerritoriesFromJSON(json['availableTerritories']),
    };
}

export function InAppPurchaseAvailabilityRelationshipsToJSON(value?: InAppPurchaseAvailabilityRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableTerritories': AppAvailabilityRelationshipsAvailableTerritoriesToJSON(value.availableTerritories),
    };
}
