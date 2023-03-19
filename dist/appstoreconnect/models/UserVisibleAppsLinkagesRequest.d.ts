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
import type { AppAvailabilityRelationshipsAppData } from './AppAvailabilityRelationshipsAppData';
/**
 *
 * @export
 * @interface UserVisibleAppsLinkagesRequest
 */
export interface UserVisibleAppsLinkagesRequest {
    /**
     *
     * @type {Array<AppAvailabilityRelationshipsAppData>}
     * @memberof UserVisibleAppsLinkagesRequest
     */
    data: Array<AppAvailabilityRelationshipsAppData>;
}
/**
 * Check if a given object implements the UserVisibleAppsLinkagesRequest interface.
 */
export declare function instanceOfUserVisibleAppsLinkagesRequest(value: object): boolean;
export declare function UserVisibleAppsLinkagesRequestFromJSON(json: any): UserVisibleAppsLinkagesRequest;
export declare function UserVisibleAppsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserVisibleAppsLinkagesRequest;
export declare function UserVisibleAppsLinkagesRequestToJSON(value?: UserVisibleAppsLinkagesRequest | null): any;
