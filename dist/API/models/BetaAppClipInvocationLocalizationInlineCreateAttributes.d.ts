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
 * @interface BetaAppClipInvocationLocalizationInlineCreateAttributes
 */
export interface BetaAppClipInvocationLocalizationInlineCreateAttributes {
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationInlineCreateAttributes
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationInlineCreateAttributes
     */
    locale: string;
}
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationInlineCreateAttributes interface.
 */
export declare function instanceOfBetaAppClipInvocationLocalizationInlineCreateAttributes(value: object): boolean;
export declare function BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSON(json: any): BetaAppClipInvocationLocalizationInlineCreateAttributes;
export declare function BetaAppClipInvocationLocalizationInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationInlineCreateAttributes;
export declare function BetaAppClipInvocationLocalizationInlineCreateAttributesToJSON(value?: BetaAppClipInvocationLocalizationInlineCreateAttributes | null): any;
