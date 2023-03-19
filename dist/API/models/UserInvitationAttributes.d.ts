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
 * @interface UserInvitationAttributes
 */
export interface UserInvitationAttributes {
    /**
     *
     * @type {string}
     * @memberof UserInvitationAttributes
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof UserInvitationAttributes
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof UserInvitationAttributes
     */
    lastName?: string;
    /**
     *
     * @type {Date}
     * @memberof UserInvitationAttributes
     */
    expirationDate?: Date;
    /**
     *
     * @type {Array<UserRole>}
     * @memberof UserInvitationAttributes
     */
    roles?: Array<UserRole>;
    /**
     *
     * @type {boolean}
     * @memberof UserInvitationAttributes
     */
    allAppsVisible?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserInvitationAttributes
     */
    provisioningAllowed?: boolean;
}
/**
 * Check if a given object implements the UserInvitationAttributes interface.
 */
export declare function instanceOfUserInvitationAttributes(value: object): boolean;
export declare function UserInvitationAttributesFromJSON(json: any): UserInvitationAttributes;
export declare function UserInvitationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitationAttributes;
export declare function UserInvitationAttributesToJSON(value?: UserInvitationAttributes | null): any;
