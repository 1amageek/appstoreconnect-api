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
import type { AppAvailabilityCreateRequestDataRelationshipsApp } from './AppAvailabilityCreateRequestDataRelationshipsApp';
import type { BetaGroupCreateRequestDataRelationshipsBetaTesters } from './BetaGroupCreateRequestDataRelationshipsBetaTesters';
import type { BetaGroupCreateRequestDataRelationshipsBuilds } from './BetaGroupCreateRequestDataRelationshipsBuilds';
/**
 *
 * @export
 * @interface BetaGroupCreateRequestDataRelationships
 */
export interface BetaGroupCreateRequestDataRelationships {
    /**
     *
     * @type {AppAvailabilityCreateRequestDataRelationshipsApp}
     * @memberof BetaGroupCreateRequestDataRelationships
     */
    app: AppAvailabilityCreateRequestDataRelationshipsApp;
    /**
     *
     * @type {BetaGroupCreateRequestDataRelationshipsBuilds}
     * @memberof BetaGroupCreateRequestDataRelationships
     */
    builds?: BetaGroupCreateRequestDataRelationshipsBuilds;
    /**
     *
     * @type {BetaGroupCreateRequestDataRelationshipsBetaTesters}
     * @memberof BetaGroupCreateRequestDataRelationships
     */
    betaTesters?: BetaGroupCreateRequestDataRelationshipsBetaTesters;
}
/**
 * Check if a given object implements the BetaGroupCreateRequestDataRelationships interface.
 */
export declare function instanceOfBetaGroupCreateRequestDataRelationships(value: object): boolean;
export declare function BetaGroupCreateRequestDataRelationshipsFromJSON(json: any): BetaGroupCreateRequestDataRelationships;
export declare function BetaGroupCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestDataRelationships;
export declare function BetaGroupCreateRequestDataRelationshipsToJSON(value?: BetaGroupCreateRequestDataRelationships | null): any;
