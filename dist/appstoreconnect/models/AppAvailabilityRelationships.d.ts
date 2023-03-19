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
import type { AppAvailabilityRelationshipsApp } from './AppAvailabilityRelationshipsApp';
import type { AppAvailabilityRelationshipsAvailableTerritories } from './AppAvailabilityRelationshipsAvailableTerritories';
/**
 *
 * @export
 * @interface AppAvailabilityRelationships
 */
export interface AppAvailabilityRelationships {
    /**
     *
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof AppAvailabilityRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
    /**
     *
     * @type {AppAvailabilityRelationshipsAvailableTerritories}
     * @memberof AppAvailabilityRelationships
     */
    availableTerritories?: AppAvailabilityRelationshipsAvailableTerritories;
}
/**
 * Check if a given object implements the AppAvailabilityRelationships interface.
 */
export declare function instanceOfAppAvailabilityRelationships(value: object): boolean;
export declare function AppAvailabilityRelationshipsFromJSON(json: any): AppAvailabilityRelationships;
export declare function AppAvailabilityRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityRelationships;
export declare function AppAvailabilityRelationshipsToJSON(value?: AppAvailabilityRelationships | null): any;
