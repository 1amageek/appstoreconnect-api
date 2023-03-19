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
import type { AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner } from './AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner';
/**
 *
 * @export
 * @interface AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization
 */
export interface AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner}
     * @memberof AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization
     */
    data?: AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner;
}
/**
 * Check if a given object implements the AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization interface.
 */
export declare function instanceOfAppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization(value: object): boolean;
export declare function AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationFromJSON(json: any): AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization;
export declare function AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization;
export declare function AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalizationToJSON(value?: AppClipHeaderImageRelationshipsAppClipDefaultExperienceLocalization | null): any;
