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
import type { AppClipAdvancedExperienceRelationshipsAppClipData } from './AppClipAdvancedExperienceRelationshipsAppClipData';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface AppRelationshipsAppClips
 */
export interface AppRelationshipsAppClips {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppRelationshipsAppClips
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsAppClips
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppClipAdvancedExperienceRelationshipsAppClipData>}
     * @memberof AppRelationshipsAppClips
     */
    data?: Array<AppClipAdvancedExperienceRelationshipsAppClipData>;
}
/**
 * Check if a given object implements the AppRelationshipsAppClips interface.
 */
export declare function instanceOfAppRelationshipsAppClips(value: object): boolean;
export declare function AppRelationshipsAppClipsFromJSON(json: any): AppRelationshipsAppClips;
export declare function AppRelationshipsAppClipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsAppClips;
export declare function AppRelationshipsAppClipsToJSON(value?: AppRelationshipsAppClips | null): any;
