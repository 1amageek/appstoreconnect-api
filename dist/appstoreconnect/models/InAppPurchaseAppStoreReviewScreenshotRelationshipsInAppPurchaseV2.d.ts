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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import type { AppRelationshipsInAppPurchasesV2DataInner } from './AppRelationshipsInAppPurchasesV2DataInner';
/**
 *
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
 */
export interface InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {AppRelationshipsInAppPurchasesV2DataInner}
     * @memberof InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
     */
    data?: AppRelationshipsInAppPurchasesV2DataInner;
}
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 interface.
 */
export declare function instanceOfInAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2(value: object): boolean;
export declare function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2;
export declare function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2;
export declare function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON(value?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 | null): any;
