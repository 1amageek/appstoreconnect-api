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
 * @interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData
 */
export interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData {
    /**
     *
     * @type {string}
     * @memberof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData
     */
    type: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum: {
    readonly AppClipDefaultExperiences: "appClipDefaultExperiences";
};
export type AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum = typeof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum[keyof typeof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataTypeEnum];
/**
 * Check if a given object implements the AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData interface.
 */
export declare function instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData(value: object): boolean;
export declare function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON(json: any): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData;
export declare function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData;
export declare function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON(value?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData | null): any;
