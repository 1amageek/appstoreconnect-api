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
import type { InAppPurchaseAppStoreReviewScreenshotUpdateRequestData } from './InAppPurchaseAppStoreReviewScreenshotUpdateRequestData';
/**
 *
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotUpdateRequest
 */
export interface InAppPurchaseAppStoreReviewScreenshotUpdateRequest {
    /**
     *
     * @type {InAppPurchaseAppStoreReviewScreenshotUpdateRequestData}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequest
     */
    data: InAppPurchaseAppStoreReviewScreenshotUpdateRequestData;
}
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotUpdateRequest interface.
 */
export declare function instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequest(value: object): boolean;
export declare function InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotUpdateRequest;
export declare function InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotUpdateRequest;
export declare function InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON(value?: InAppPurchaseAppStoreReviewScreenshotUpdateRequest | null): any;
