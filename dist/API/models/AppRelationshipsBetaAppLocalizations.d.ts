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
import type { AppRelationshipsBetaAppLocalizationsDataInner } from './AppRelationshipsBetaAppLocalizationsDataInner';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface AppRelationshipsBetaAppLocalizations
 */
export interface AppRelationshipsBetaAppLocalizations {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppRelationshipsBetaAppLocalizations
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsBetaAppLocalizations
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsBetaAppLocalizationsDataInner>}
     * @memberof AppRelationshipsBetaAppLocalizations
     */
    data?: Array<AppRelationshipsBetaAppLocalizationsDataInner>;
}
/**
 * Check if a given object implements the AppRelationshipsBetaAppLocalizations interface.
 */
export declare function instanceOfAppRelationshipsBetaAppLocalizations(value: object): boolean;
export declare function AppRelationshipsBetaAppLocalizationsFromJSON(json: any): AppRelationshipsBetaAppLocalizations;
export declare function AppRelationshipsBetaAppLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaAppLocalizations;
export declare function AppRelationshipsBetaAppLocalizationsToJSON(value?: AppRelationshipsBetaAppLocalizations | null): any;
