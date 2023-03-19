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
import type { UserUpdateRequestData } from './UserUpdateRequestData';
/**
 *
 * @export
 * @interface UserUpdateRequest
 */
export interface UserUpdateRequest {
    /**
     *
     * @type {UserUpdateRequestData}
     * @memberof UserUpdateRequest
     */
    data: UserUpdateRequestData;
}
/**
 * Check if a given object implements the UserUpdateRequest interface.
 */
export declare function instanceOfUserUpdateRequest(value: object): boolean;
export declare function UserUpdateRequestFromJSON(json: any): UserUpdateRequest;
export declare function UserUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateRequest;
export declare function UserUpdateRequestToJSON(value?: UserUpdateRequest | null): any;
