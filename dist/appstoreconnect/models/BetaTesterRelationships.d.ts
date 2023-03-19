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
import type { AppEncryptionDeclarationRelationshipsBuilds } from './AppEncryptionDeclarationRelationshipsBuilds';
import type { AppRelationshipsBetaGroups } from './AppRelationshipsBetaGroups';
import type { BetaTesterRelationshipsApps } from './BetaTesterRelationshipsApps';
/**
 *
 * @export
 * @interface BetaTesterRelationships
 */
export interface BetaTesterRelationships {
    /**
     *
     * @type {BetaTesterRelationshipsApps}
     * @memberof BetaTesterRelationships
     */
    apps?: BetaTesterRelationshipsApps;
    /**
     *
     * @type {AppRelationshipsBetaGroups}
     * @memberof BetaTesterRelationships
     */
    betaGroups?: AppRelationshipsBetaGroups;
    /**
     *
     * @type {AppEncryptionDeclarationRelationshipsBuilds}
     * @memberof BetaTesterRelationships
     */
    builds?: AppEncryptionDeclarationRelationshipsBuilds;
}
/**
 * Check if a given object implements the BetaTesterRelationships interface.
 */
export declare function instanceOfBetaTesterRelationships(value: object): boolean;
export declare function BetaTesterRelationshipsFromJSON(json: any): BetaTesterRelationships;
export declare function BetaTesterRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterRelationships;
export declare function BetaTesterRelationshipsToJSON(value?: BetaTesterRelationships | null): any;
