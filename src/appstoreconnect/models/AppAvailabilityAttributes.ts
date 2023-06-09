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
/**
 * 
 * @export
 * @interface AppAvailabilityAttributes
 */
export interface AppAvailabilityAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof AppAvailabilityAttributes
     */
    availableInNewTerritories?: boolean;
}

/**
 * Check if a given object implements the AppAvailabilityAttributes interface.
 */
export function instanceOfAppAvailabilityAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppAvailabilityAttributesFromJSON(json: any): AppAvailabilityAttributes {
    return AppAvailabilityAttributesFromJSONTyped(json, false);
}

export function AppAvailabilityAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableInNewTerritories': !exists(json, 'availableInNewTerritories') ? undefined : json['availableInNewTerritories'],
    };
}

export function AppAvailabilityAttributesToJSON(value?: AppAvailabilityAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availableInNewTerritories': value.availableInNewTerritories,
    };
}

