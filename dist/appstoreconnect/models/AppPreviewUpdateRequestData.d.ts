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
import type { AppPreviewUpdateRequestDataAttributes } from './AppPreviewUpdateRequestDataAttributes';
/**
 *
 * @export
 * @interface AppPreviewUpdateRequestData
 */
export interface AppPreviewUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppPreviewUpdateRequestData
     */
    type: AppPreviewUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPreviewUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {AppPreviewUpdateRequestDataAttributes}
     * @memberof AppPreviewUpdateRequestData
     */
    attributes?: AppPreviewUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const AppPreviewUpdateRequestDataTypeEnum: {
    readonly AppPreviews: "appPreviews";
};
export type AppPreviewUpdateRequestDataTypeEnum = typeof AppPreviewUpdateRequestDataTypeEnum[keyof typeof AppPreviewUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppPreviewUpdateRequestData interface.
 */
export declare function instanceOfAppPreviewUpdateRequestData(value: object): boolean;
export declare function AppPreviewUpdateRequestDataFromJSON(json: any): AppPreviewUpdateRequestData;
export declare function AppPreviewUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewUpdateRequestData;
export declare function AppPreviewUpdateRequestDataToJSON(value?: AppPreviewUpdateRequestData | null): any;
