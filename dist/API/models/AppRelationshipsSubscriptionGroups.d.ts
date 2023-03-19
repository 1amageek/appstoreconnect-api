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
import type { AppRelationshipsSubscriptionGroupsDataInner } from './AppRelationshipsSubscriptionGroupsDataInner';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface AppRelationshipsSubscriptionGroups
 */
export interface AppRelationshipsSubscriptionGroups {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppRelationshipsSubscriptionGroups
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppRelationshipsSubscriptionGroups
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppRelationshipsSubscriptionGroupsDataInner>}
     * @memberof AppRelationshipsSubscriptionGroups
     */
    data?: Array<AppRelationshipsSubscriptionGroupsDataInner>;
}
/**
 * Check if a given object implements the AppRelationshipsSubscriptionGroups interface.
 */
export declare function instanceOfAppRelationshipsSubscriptionGroups(value: object): boolean;
export declare function AppRelationshipsSubscriptionGroupsFromJSON(json: any): AppRelationshipsSubscriptionGroups;
export declare function AppRelationshipsSubscriptionGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsSubscriptionGroups;
export declare function AppRelationshipsSubscriptionGroupsToJSON(value?: AppRelationshipsSubscriptionGroups | null): any;
