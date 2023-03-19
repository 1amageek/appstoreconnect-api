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
import type { BetaAppClipInvocationLocalizationCreateRequestData } from './BetaAppClipInvocationLocalizationCreateRequestData';
/**
 *
 * @export
 * @interface BetaAppClipInvocationLocalizationCreateRequest
 */
export interface BetaAppClipInvocationLocalizationCreateRequest {
    /**
     *
     * @type {BetaAppClipInvocationLocalizationCreateRequestData}
     * @memberof BetaAppClipInvocationLocalizationCreateRequest
     */
    data: BetaAppClipInvocationLocalizationCreateRequestData;
}
/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequest interface.
 */
export declare function instanceOfBetaAppClipInvocationLocalizationCreateRequest(value: object): boolean;
export declare function BetaAppClipInvocationLocalizationCreateRequestFromJSON(json: any): BetaAppClipInvocationLocalizationCreateRequest;
export declare function BetaAppClipInvocationLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationCreateRequest;
export declare function BetaAppClipInvocationLocalizationCreateRequestToJSON(value?: BetaAppClipInvocationLocalizationCreateRequest | null): any;
