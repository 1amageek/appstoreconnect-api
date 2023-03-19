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
import type { AppStoreVersionExperimentCreateRequestDataAttributes } from './AppStoreVersionExperimentCreateRequestDataAttributes';
/**
 *
 * @export
 * @interface AppStoreVersionExperimentCreateRequestData
 */
export interface AppStoreVersionExperimentCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentCreateRequestData
     */
    type: AppStoreVersionExperimentCreateRequestDataTypeEnum;
    /**
     *
     * @type {AppStoreVersionExperimentCreateRequestDataAttributes}
     * @memberof AppStoreVersionExperimentCreateRequestData
     */
    attributes: AppStoreVersionExperimentCreateRequestDataAttributes;
    /**
     *
     * @type {AppStoreReviewDetailCreateRequestDataRelationships}
     * @memberof AppStoreVersionExperimentCreateRequestData
     */
    relationships: AppStoreReviewDetailCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AppStoreVersionExperimentCreateRequestDataTypeEnum: {
    readonly AppStoreVersionExperiments: "appStoreVersionExperiments";
};
export type AppStoreVersionExperimentCreateRequestDataTypeEnum = typeof AppStoreVersionExperimentCreateRequestDataTypeEnum[keyof typeof AppStoreVersionExperimentCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionExperimentCreateRequestData interface.
 */
export declare function instanceOfAppStoreVersionExperimentCreateRequestData(value: object): boolean;
export declare function AppStoreVersionExperimentCreateRequestDataFromJSON(json: any): AppStoreVersionExperimentCreateRequestData;
export declare function AppStoreVersionExperimentCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentCreateRequestData;
export declare function AppStoreVersionExperimentCreateRequestDataToJSON(value?: AppStoreVersionExperimentCreateRequestData | null): any;
