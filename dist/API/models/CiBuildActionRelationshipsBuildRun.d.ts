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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import type { CiBuildActionRelationshipsBuildRunData } from './CiBuildActionRelationshipsBuildRunData';
/**
 *
 * @export
 * @interface CiBuildActionRelationshipsBuildRun
 */
export interface CiBuildActionRelationshipsBuildRun {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof CiBuildActionRelationshipsBuildRun
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {CiBuildActionRelationshipsBuildRunData}
     * @memberof CiBuildActionRelationshipsBuildRun
     */
    data?: CiBuildActionRelationshipsBuildRunData;
}
/**
 * Check if a given object implements the CiBuildActionRelationshipsBuildRun interface.
 */
export declare function instanceOfCiBuildActionRelationshipsBuildRun(value: object): boolean;
export declare function CiBuildActionRelationshipsBuildRunFromJSON(json: any): CiBuildActionRelationshipsBuildRun;
export declare function CiBuildActionRelationshipsBuildRunFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildActionRelationshipsBuildRun;
export declare function CiBuildActionRelationshipsBuildRunToJSON(value?: CiBuildActionRelationshipsBuildRun | null): any;
