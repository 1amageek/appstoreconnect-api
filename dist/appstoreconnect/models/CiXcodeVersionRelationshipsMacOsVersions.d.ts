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
import type { CiWorkflowRelationshipsMacOsVersionData } from './CiWorkflowRelationshipsMacOsVersionData';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface CiXcodeVersionRelationshipsMacOsVersions
 */
export interface CiXcodeVersionRelationshipsMacOsVersions {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof CiXcodeVersionRelationshipsMacOsVersions
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof CiXcodeVersionRelationshipsMacOsVersions
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<CiWorkflowRelationshipsMacOsVersionData>}
     * @memberof CiXcodeVersionRelationshipsMacOsVersions
     */
    data?: Array<CiWorkflowRelationshipsMacOsVersionData>;
}
/**
 * Check if a given object implements the CiXcodeVersionRelationshipsMacOsVersions interface.
 */
export declare function instanceOfCiXcodeVersionRelationshipsMacOsVersions(value: object): boolean;
export declare function CiXcodeVersionRelationshipsMacOsVersionsFromJSON(json: any): CiXcodeVersionRelationshipsMacOsVersions;
export declare function CiXcodeVersionRelationshipsMacOsVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersionRelationshipsMacOsVersions;
export declare function CiXcodeVersionRelationshipsMacOsVersionsToJSON(value?: CiXcodeVersionRelationshipsMacOsVersions | null): any;
