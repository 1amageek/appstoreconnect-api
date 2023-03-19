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
import type { AppStoreReviewDetailCreateRequestDataRelationships } from './AppStoreReviewDetailCreateRequestDataRelationships';
import type { AppStoreVersionLocalizationCreateRequestDataAttributes } from './AppStoreVersionLocalizationCreateRequestDataAttributes';
/**
 *
 * @export
 * @interface AppStoreVersionLocalizationCreateRequestData
 */
export interface AppStoreVersionLocalizationCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    type: AppStoreVersionLocalizationCreateRequestDataTypeEnum;
    /**
     *
     * @type {AppStoreVersionLocalizationCreateRequestDataAttributes}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    attributes: AppStoreVersionLocalizationCreateRequestDataAttributes;
    /**
     *
     * @type {AppStoreReviewDetailCreateRequestDataRelationships}
     * @memberof AppStoreVersionLocalizationCreateRequestData
     */
    relationships: AppStoreReviewDetailCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AppStoreVersionLocalizationCreateRequestDataTypeEnum: {
    readonly AppStoreVersionLocalizations: "appStoreVersionLocalizations";
};
export type AppStoreVersionLocalizationCreateRequestDataTypeEnum = typeof AppStoreVersionLocalizationCreateRequestDataTypeEnum[keyof typeof AppStoreVersionLocalizationCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionLocalizationCreateRequestData interface.
 */
export declare function instanceOfAppStoreVersionLocalizationCreateRequestData(value: object): boolean;
export declare function AppStoreVersionLocalizationCreateRequestDataFromJSON(json: any): AppStoreVersionLocalizationCreateRequestData;
export declare function AppStoreVersionLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationCreateRequestData;
export declare function AppStoreVersionLocalizationCreateRequestDataToJSON(value?: AppStoreVersionLocalizationCreateRequestData | null): any;
