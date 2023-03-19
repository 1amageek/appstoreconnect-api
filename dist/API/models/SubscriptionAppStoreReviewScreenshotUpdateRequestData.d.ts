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
 * @interface SubscriptionAppStoreReviewScreenshotUpdateRequestData
 */
export interface SubscriptionAppStoreReviewScreenshotUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof SubscriptionAppStoreReviewScreenshotUpdateRequestData
     */
    type: SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionAppStoreReviewScreenshotUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof SubscriptionAppStoreReviewScreenshotUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum: {
    readonly SubscriptionAppStoreReviewScreenshots: "subscriptionAppStoreReviewScreenshots";
};
export type SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum = typeof SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum[keyof typeof SubscriptionAppStoreReviewScreenshotUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the SubscriptionAppStoreReviewScreenshotUpdateRequestData interface.
 */
export declare function instanceOfSubscriptionAppStoreReviewScreenshotUpdateRequestData(value: object): boolean;
export declare function SubscriptionAppStoreReviewScreenshotUpdateRequestDataFromJSON(json: any): SubscriptionAppStoreReviewScreenshotUpdateRequestData;
export declare function SubscriptionAppStoreReviewScreenshotUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAppStoreReviewScreenshotUpdateRequestData;
export declare function SubscriptionAppStoreReviewScreenshotUpdateRequestDataToJSON(value?: SubscriptionAppStoreReviewScreenshotUpdateRequestData | null): any;
