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
import type { InAppPurchaseAppStoreReviewScreenshotCreateRequestData } from './InAppPurchaseAppStoreReviewScreenshotCreateRequestData';
/**
 *
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotCreateRequest
 */
export interface InAppPurchaseAppStoreReviewScreenshotCreateRequest {
    /**
     *
     * @type {InAppPurchaseAppStoreReviewScreenshotCreateRequestData}
     * @memberof InAppPurchaseAppStoreReviewScreenshotCreateRequest
     */
    data: InAppPurchaseAppStoreReviewScreenshotCreateRequestData;
}
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotCreateRequest interface.
 */
export declare function instanceOfInAppPurchaseAppStoreReviewScreenshotCreateRequest(value: object): boolean;
export declare function InAppPurchaseAppStoreReviewScreenshotCreateRequestFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotCreateRequest;
export declare function InAppPurchaseAppStoreReviewScreenshotCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotCreateRequest;
export declare function InAppPurchaseAppStoreReviewScreenshotCreateRequestToJSON(value?: InAppPurchaseAppStoreReviewScreenshotCreateRequest | null): any;
