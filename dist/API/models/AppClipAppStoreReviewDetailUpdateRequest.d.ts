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
import type { AppClipAppStoreReviewDetailUpdateRequestData } from './AppClipAppStoreReviewDetailUpdateRequestData';
/**
 *
 * @export
 * @interface AppClipAppStoreReviewDetailUpdateRequest
 */
export interface AppClipAppStoreReviewDetailUpdateRequest {
    /**
     *
     * @type {AppClipAppStoreReviewDetailUpdateRequestData}
     * @memberof AppClipAppStoreReviewDetailUpdateRequest
     */
    data: AppClipAppStoreReviewDetailUpdateRequestData;
}
/**
 * Check if a given object implements the AppClipAppStoreReviewDetailUpdateRequest interface.
 */
export declare function instanceOfAppClipAppStoreReviewDetailUpdateRequest(value: object): boolean;
export declare function AppClipAppStoreReviewDetailUpdateRequestFromJSON(json: any): AppClipAppStoreReviewDetailUpdateRequest;
export declare function AppClipAppStoreReviewDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailUpdateRequest;
export declare function AppClipAppStoreReviewDetailUpdateRequestToJSON(value?: AppClipAppStoreReviewDetailUpdateRequest | null): any;
