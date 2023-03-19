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
import type { AppStoreVersionExperimentUpdateRequestDataAttributes } from './AppStoreVersionExperimentUpdateRequestDataAttributes';
/**
 *
 * @export
 * @interface AppStoreVersionExperimentUpdateRequestData
 */
export interface AppStoreVersionExperimentUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentUpdateRequestData
     */
    type: AppStoreVersionExperimentUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionExperimentUpdateRequestDataAttributes}
     * @memberof AppStoreVersionExperimentUpdateRequestData
     */
    attributes?: AppStoreVersionExperimentUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppStoreVersionExperimentUpdateRequestDataTypeEnum: {
    readonly AppStoreVersionExperiments: "appStoreVersionExperiments";
};
export type AppStoreVersionExperimentUpdateRequestDataTypeEnum = typeof AppStoreVersionExperimentUpdateRequestDataTypeEnum[keyof typeof AppStoreVersionExperimentUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionExperimentUpdateRequestData interface.
 */
export declare function instanceOfAppStoreVersionExperimentUpdateRequestData(value: object): boolean;
export declare function AppStoreVersionExperimentUpdateRequestDataFromJSON(json: any): AppStoreVersionExperimentUpdateRequestData;
export declare function AppStoreVersionExperimentUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentUpdateRequestData;
export declare function AppStoreVersionExperimentUpdateRequestDataToJSON(value?: AppStoreVersionExperimentUpdateRequestData | null): any;
