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
 * @interface BetaAppLocalizationCreateRequestDataAttributes
 */
export interface BetaAppLocalizationCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    feedbackEmail?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    marketingUrl?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    privacyPolicyUrl?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    tvOsPrivacyPolicy?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalizationCreateRequestDataAttributes
     */
    locale: string;
}
/**
 * Check if a given object implements the BetaAppLocalizationCreateRequestDataAttributes interface.
 */
export declare function instanceOfBetaAppLocalizationCreateRequestDataAttributes(value: object): boolean;
export declare function BetaAppLocalizationCreateRequestDataAttributesFromJSON(json: any): BetaAppLocalizationCreateRequestDataAttributes;
export declare function BetaAppLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationCreateRequestDataAttributes;
export declare function BetaAppLocalizationCreateRequestDataAttributesToJSON(value?: BetaAppLocalizationCreateRequestDataAttributes | null): any;
