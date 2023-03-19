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
import type { AppEncryptionDeclarationRelationshipsBuilds } from './AppEncryptionDeclarationRelationshipsBuilds';
/**
 *
 * @export
 * @interface PrereleaseVersionRelationships
 */
export interface PrereleaseVersionRelationships {
    /**
     *
     * @type {AppEncryptionDeclarationRelationshipsBuilds}
     * @memberof PrereleaseVersionRelationships
     */
    builds?: AppEncryptionDeclarationRelationshipsBuilds;
    /**
     *
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof PrereleaseVersionRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
}
/**
 * Check if a given object implements the PrereleaseVersionRelationships interface.
 */
export declare function instanceOfPrereleaseVersionRelationships(value: object): boolean;
export declare function PrereleaseVersionRelationshipsFromJSON(json: any): PrereleaseVersionRelationships;
export declare function PrereleaseVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrereleaseVersionRelationships;
export declare function PrereleaseVersionRelationshipsToJSON(value?: PrereleaseVersionRelationships | null): any;
