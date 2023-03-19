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
import type { ProfileCreateRequestDataAttributes } from './ProfileCreateRequestDataAttributes';
import type { ProfileCreateRequestDataRelationships } from './ProfileCreateRequestDataRelationships';
/**
 *
 * @export
 * @interface ProfileCreateRequestData
 */
export interface ProfileCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof ProfileCreateRequestData
     */
    type: ProfileCreateRequestDataTypeEnum;
    /**
     *
     * @type {ProfileCreateRequestDataAttributes}
     * @memberof ProfileCreateRequestData
     */
    attributes: ProfileCreateRequestDataAttributes;
    /**
     *
     * @type {ProfileCreateRequestDataRelationships}
     * @memberof ProfileCreateRequestData
     */
    relationships: ProfileCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const ProfileCreateRequestDataTypeEnum: {
    readonly Profiles: "profiles";
};
export type ProfileCreateRequestDataTypeEnum = typeof ProfileCreateRequestDataTypeEnum[keyof typeof ProfileCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the ProfileCreateRequestData interface.
 */
export declare function instanceOfProfileCreateRequestData(value: object): boolean;
export declare function ProfileCreateRequestDataFromJSON(json: any): ProfileCreateRequestData;
export declare function ProfileCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCreateRequestData;
export declare function ProfileCreateRequestDataToJSON(value?: ProfileCreateRequestData | null): any;
