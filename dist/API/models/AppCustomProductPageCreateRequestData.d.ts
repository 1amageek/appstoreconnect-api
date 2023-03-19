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
import type { AppCustomProductPageCreateRequestDataAttributes } from './AppCustomProductPageCreateRequestDataAttributes';
import type { AppCustomProductPageCreateRequestDataRelationships } from './AppCustomProductPageCreateRequestDataRelationships';
/**
 *
 * @export
 * @interface AppCustomProductPageCreateRequestData
 */
export interface AppCustomProductPageCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageCreateRequestData
     */
    type: AppCustomProductPageCreateRequestDataTypeEnum;
    /**
     *
     * @type {AppCustomProductPageCreateRequestDataAttributes}
     * @memberof AppCustomProductPageCreateRequestData
     */
    attributes: AppCustomProductPageCreateRequestDataAttributes;
    /**
     *
     * @type {AppCustomProductPageCreateRequestDataRelationships}
     * @memberof AppCustomProductPageCreateRequestData
     */
    relationships: AppCustomProductPageCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const AppCustomProductPageCreateRequestDataTypeEnum: {
    readonly AppCustomProductPages: "appCustomProductPages";
};
export type AppCustomProductPageCreateRequestDataTypeEnum = typeof AppCustomProductPageCreateRequestDataTypeEnum[keyof typeof AppCustomProductPageCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the AppCustomProductPageCreateRequestData interface.
 */
export declare function instanceOfAppCustomProductPageCreateRequestData(value: object): boolean;
export declare function AppCustomProductPageCreateRequestDataFromJSON(json: any): AppCustomProductPageCreateRequestData;
export declare function AppCustomProductPageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestData;
export declare function AppCustomProductPageCreateRequestDataToJSON(value?: AppCustomProductPageCreateRequestData | null): any;
