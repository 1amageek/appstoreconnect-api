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
import type { BetaAppClipInvocationAttributes } from './BetaAppClipInvocationAttributes';
/**
 *
 * @export
 * @interface BetaAppClipInvocationUpdateRequestData
 */
export interface BetaAppClipInvocationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationUpdateRequestData
     */
    type: BetaAppClipInvocationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {BetaAppClipInvocationAttributes}
     * @memberof BetaAppClipInvocationUpdateRequestData
     */
    attributes?: BetaAppClipInvocationAttributes;
}
/**
 * @export
 */
export declare const BetaAppClipInvocationUpdateRequestDataTypeEnum: {
    readonly BetaAppClipInvocations: "betaAppClipInvocations";
};
export type BetaAppClipInvocationUpdateRequestDataTypeEnum = typeof BetaAppClipInvocationUpdateRequestDataTypeEnum[keyof typeof BetaAppClipInvocationUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the BetaAppClipInvocationUpdateRequestData interface.
 */
export declare function instanceOfBetaAppClipInvocationUpdateRequestData(value: object): boolean;
export declare function BetaAppClipInvocationUpdateRequestDataFromJSON(json: any): BetaAppClipInvocationUpdateRequestData;
export declare function BetaAppClipInvocationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationUpdateRequestData;
export declare function BetaAppClipInvocationUpdateRequestDataToJSON(value?: BetaAppClipInvocationUpdateRequestData | null): any;
