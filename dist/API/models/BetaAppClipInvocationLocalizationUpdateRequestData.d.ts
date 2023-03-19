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
import type { BetaAppClipInvocationLocalizationUpdateRequestDataAttributes } from './BetaAppClipInvocationLocalizationUpdateRequestDataAttributes';
/**
 *
 * @export
 * @interface BetaAppClipInvocationLocalizationUpdateRequestData
 */
export interface BetaAppClipInvocationLocalizationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    type: BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {BetaAppClipInvocationLocalizationUpdateRequestDataAttributes}
     * @memberof BetaAppClipInvocationLocalizationUpdateRequestData
     */
    attributes?: BetaAppClipInvocationLocalizationUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum: {
    readonly BetaAppClipInvocationLocalizations: "betaAppClipInvocationLocalizations";
};
export type BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum = typeof BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum[keyof typeof BetaAppClipInvocationLocalizationUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationUpdateRequestData interface.
 */
export declare function instanceOfBetaAppClipInvocationLocalizationUpdateRequestData(value: object): boolean;
export declare function BetaAppClipInvocationLocalizationUpdateRequestDataFromJSON(json: any): BetaAppClipInvocationLocalizationUpdateRequestData;
export declare function BetaAppClipInvocationLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationUpdateRequestData;
export declare function BetaAppClipInvocationLocalizationUpdateRequestDataToJSON(value?: BetaAppClipInvocationLocalizationUpdateRequestData | null): any;
