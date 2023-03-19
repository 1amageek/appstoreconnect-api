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
/**
 *
 * @export
 * @interface AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData
 */
export interface AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData {
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData
     */
    type: AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum: {
    readonly AppClipAppStoreReviewDetails: "appClipAppStoreReviewDetails";
};
export type AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum = typeof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum[keyof typeof AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataTypeEnum];
/**
 * Check if a given object implements the AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData interface.
 */
export declare function instanceOfAppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData(value: object): boolean;
export declare function AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataFromJSON(json: any): AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData;
export declare function AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData;
export declare function AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailDataToJSON(value?: AppClipDefaultExperienceRelationshipsAppClipAppStoreReviewDetailData | null): any;
