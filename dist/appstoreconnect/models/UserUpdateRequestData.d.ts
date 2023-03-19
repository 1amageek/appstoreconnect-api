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
import type { UserInvitationCreateRequestDataRelationships } from './UserInvitationCreateRequestDataRelationships';
import type { UserUpdateRequestDataAttributes } from './UserUpdateRequestDataAttributes';
/**
 *
 * @export
 * @interface UserUpdateRequestData
 */
export interface UserUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof UserUpdateRequestData
     */
    type: UserUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof UserUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {UserUpdateRequestDataAttributes}
     * @memberof UserUpdateRequestData
     */
    attributes?: UserUpdateRequestDataAttributes;
    /**
     *
     * @type {UserInvitationCreateRequestDataRelationships}
     * @memberof UserUpdateRequestData
     */
    relationships?: UserInvitationCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const UserUpdateRequestDataTypeEnum: {
    readonly Users: "users";
};
export type UserUpdateRequestDataTypeEnum = typeof UserUpdateRequestDataTypeEnum[keyof typeof UserUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the UserUpdateRequestData interface.
 */
export declare function instanceOfUserUpdateRequestData(value: object): boolean;
export declare function UserUpdateRequestDataFromJSON(json: any): UserUpdateRequestData;
export declare function UserUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUpdateRequestData;
export declare function UserUpdateRequestDataToJSON(value?: UserUpdateRequestData | null): any;
