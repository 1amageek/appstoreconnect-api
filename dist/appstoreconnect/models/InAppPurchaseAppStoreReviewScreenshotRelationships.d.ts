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
import type { InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 } from './InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2';
/**
 *
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotRelationships
 */
export interface InAppPurchaseAppStoreReviewScreenshotRelationships {
    /**
     *
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2}
     * @memberof InAppPurchaseAppStoreReviewScreenshotRelationships
     */
    inAppPurchaseV2?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2;
}
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotRelationships interface.
 */
export declare function instanceOfInAppPurchaseAppStoreReviewScreenshotRelationships(value: object): boolean;
export declare function InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotRelationships;
export declare function InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotRelationships;
export declare function InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON(value?: InAppPurchaseAppStoreReviewScreenshotRelationships | null): any;
