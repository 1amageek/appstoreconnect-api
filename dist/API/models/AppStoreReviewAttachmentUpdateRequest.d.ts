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
import type { AppStoreReviewAttachmentUpdateRequestData } from './AppStoreReviewAttachmentUpdateRequestData';
/**
 *
 * @export
 * @interface AppStoreReviewAttachmentUpdateRequest
 */
export interface AppStoreReviewAttachmentUpdateRequest {
    /**
     *
     * @type {AppStoreReviewAttachmentUpdateRequestData}
     * @memberof AppStoreReviewAttachmentUpdateRequest
     */
    data: AppStoreReviewAttachmentUpdateRequestData;
}
/**
 * Check if a given object implements the AppStoreReviewAttachmentUpdateRequest interface.
 */
export declare function instanceOfAppStoreReviewAttachmentUpdateRequest(value: object): boolean;
export declare function AppStoreReviewAttachmentUpdateRequestFromJSON(json: any): AppStoreReviewAttachmentUpdateRequest;
export declare function AppStoreReviewAttachmentUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentUpdateRequest;
export declare function AppStoreReviewAttachmentUpdateRequestToJSON(value?: AppStoreReviewAttachmentUpdateRequest | null): any;
