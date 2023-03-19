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
import type { UserRole } from './UserRole';
/**
 *
 * @export
 * @interface UserInvitationCreateRequestDataAttributes
 */
export interface UserInvitationCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof UserInvitationCreateRequestDataAttributes
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof UserInvitationCreateRequestDataAttributes
     */
    firstName: string;
    /**
     *
     * @type {string}
     * @memberof UserInvitationCreateRequestDataAttributes
     */
    lastName: string;
    /**
     *
     * @type {Array<UserRole>}
     * @memberof UserInvitationCreateRequestDataAttributes
     */
    roles: Array<UserRole>;
    /**
     *
     * @type {boolean}
     * @memberof UserInvitationCreateRequestDataAttributes
     */
    allAppsVisible?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserInvitationCreateRequestDataAttributes
     */
    provisioningAllowed?: boolean;
}
/**
 * Check if a given object implements the UserInvitationCreateRequestDataAttributes interface.
 */
export declare function instanceOfUserInvitationCreateRequestDataAttributes(value: object): boolean;
export declare function UserInvitationCreateRequestDataAttributesFromJSON(json: any): UserInvitationCreateRequestDataAttributes;
export declare function UserInvitationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitationCreateRequestDataAttributes;
export declare function UserInvitationCreateRequestDataAttributesToJSON(value?: UserInvitationCreateRequestDataAttributes | null): any;
