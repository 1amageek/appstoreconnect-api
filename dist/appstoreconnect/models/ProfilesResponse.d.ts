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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import type { Profile } from './Profile';
import type { ProfilesResponseIncludedInner } from './ProfilesResponseIncludedInner';
/**
 *
 * @export
 * @interface ProfilesResponse
 */
export interface ProfilesResponse {
    /**
     *
     * @type {Array<Profile>}
     * @memberof ProfilesResponse
     */
    data: Array<Profile>;
    /**
     *
     * @type {Array<ProfilesResponseIncludedInner>}
     * @memberof ProfilesResponse
     */
    included?: Array<ProfilesResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof ProfilesResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof ProfilesResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the ProfilesResponse interface.
 */
export declare function instanceOfProfilesResponse(value: object): boolean;
export declare function ProfilesResponseFromJSON(json: any): ProfilesResponse;
export declare function ProfilesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfilesResponse;
export declare function ProfilesResponseToJSON(value?: ProfilesResponse | null): any;
