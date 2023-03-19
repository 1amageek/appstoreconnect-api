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
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface AppRelationshipsAppStoreVersions
 */
export interface AppRelationshipsAppStoreVersions {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppRelationshipsAppStoreVersions
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsAppStoreVersions
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData>}
     * @memberof AppRelationshipsAppStoreVersions
     */
    data?: Array<AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData>;
}
/**
 * Check if a given object implements the AppRelationshipsAppStoreVersions interface.
 */
export declare function instanceOfAppRelationshipsAppStoreVersions(value: object): boolean;
export declare function AppRelationshipsAppStoreVersionsFromJSON(json: any): AppRelationshipsAppStoreVersions;
export declare function AppRelationshipsAppStoreVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsAppStoreVersions;
export declare function AppRelationshipsAppStoreVersionsToJSON(value?: AppRelationshipsAppStoreVersions | null): any;
