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
import type { BetaAppClipInvocationCreateRequestData } from './BetaAppClipInvocationCreateRequestData';
import type { BetaAppClipInvocationLocalizationInlineCreate } from './BetaAppClipInvocationLocalizationInlineCreate';
/**
 *
 * @export
 * @interface BetaAppClipInvocationCreateRequest
 */
export interface BetaAppClipInvocationCreateRequest {
    /**
     *
     * @type {BetaAppClipInvocationCreateRequestData}
     * @memberof BetaAppClipInvocationCreateRequest
     */
    data: BetaAppClipInvocationCreateRequestData;
    /**
     *
     * @type {Array<BetaAppClipInvocationLocalizationInlineCreate>}
     * @memberof BetaAppClipInvocationCreateRequest
     */
    included?: Array<BetaAppClipInvocationLocalizationInlineCreate>;
}
/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequest interface.
 */
export declare function instanceOfBetaAppClipInvocationCreateRequest(value: object): boolean;
export declare function BetaAppClipInvocationCreateRequestFromJSON(json: any): BetaAppClipInvocationCreateRequest;
export declare function BetaAppClipInvocationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequest;
export declare function BetaAppClipInvocationCreateRequestToJSON(value?: BetaAppClipInvocationCreateRequest | null): any;
