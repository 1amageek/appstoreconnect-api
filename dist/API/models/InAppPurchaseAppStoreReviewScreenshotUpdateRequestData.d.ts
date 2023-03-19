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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
/**
 *
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
 */
export interface InAppPurchaseAppStoreReviewScreenshotUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    type: InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof InAppPurchaseAppStoreReviewScreenshotUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum: {
    readonly InAppPurchaseAppStoreReviewScreenshots: "inAppPurchaseAppStoreReviewScreenshots";
};
export type InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum = typeof InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum[keyof typeof InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotUpdateRequestData interface.
 */
export declare function instanceOfInAppPurchaseAppStoreReviewScreenshotUpdateRequestData(value: object): boolean;
export declare function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotUpdateRequestData;
export declare function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotUpdateRequestData;
export declare function InAppPurchaseAppStoreReviewScreenshotUpdateRequestDataToJSON(value?: InAppPurchaseAppStoreReviewScreenshotUpdateRequestData | null): any;
