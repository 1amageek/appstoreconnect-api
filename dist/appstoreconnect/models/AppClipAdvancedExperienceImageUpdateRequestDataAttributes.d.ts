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
/**
 *
 * @export
 * @interface AppClipAdvancedExperienceImageUpdateRequestDataAttributes
 */
export interface AppClipAdvancedExperienceImageUpdateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof AppClipAdvancedExperienceImageUpdateRequestDataAttributes
     */
    sourceFileChecksum?: string;
    /**
     *
     * @type {boolean}
     * @memberof AppClipAdvancedExperienceImageUpdateRequestDataAttributes
     */
    uploaded?: boolean;
}
/**
 * Check if a given object implements the AppClipAdvancedExperienceImageUpdateRequestDataAttributes interface.
 */
export declare function instanceOfAppClipAdvancedExperienceImageUpdateRequestDataAttributes(value: object): boolean;
export declare function AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json: any): AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
export declare function AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
export declare function AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes | null): any;
