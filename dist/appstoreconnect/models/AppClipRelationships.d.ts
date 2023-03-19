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
import type { AppClipRelationshipsAppClipDefaultExperiences } from './AppClipRelationshipsAppClipDefaultExperiences';
/**
 *
 * @export
 * @interface AppClipRelationships
 */
export interface AppClipRelationships {
    /**
     *
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof AppClipRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
    /**
     *
     * @type {AppClipRelationshipsAppClipDefaultExperiences}
     * @memberof AppClipRelationships
     */
    appClipDefaultExperiences?: AppClipRelationshipsAppClipDefaultExperiences;
}
/**
 * Check if a given object implements the AppClipRelationships interface.
 */
export declare function instanceOfAppClipRelationships(value: object): boolean;
export declare function AppClipRelationshipsFromJSON(json: any): AppClipRelationships;
export declare function AppClipRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipRelationships;
export declare function AppClipRelationshipsToJSON(value?: AppClipRelationships | null): any;
