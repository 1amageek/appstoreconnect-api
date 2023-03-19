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
import type { InAppPurchasePriceScheduleCreateRequestDataRelationships } from './InAppPurchasePriceScheduleCreateRequestDataRelationships';
/**
 *
 * @export
 * @interface InAppPurchasePriceScheduleCreateRequestData
 */
export interface InAppPurchasePriceScheduleCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchasePriceScheduleCreateRequestData
     */
    type: InAppPurchasePriceScheduleCreateRequestDataTypeEnum;
    /**
     *
     * @type {InAppPurchasePriceScheduleCreateRequestDataRelationships}
     * @memberof InAppPurchasePriceScheduleCreateRequestData
     */
    relationships: InAppPurchasePriceScheduleCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const InAppPurchasePriceScheduleCreateRequestDataTypeEnum: {
    readonly InAppPurchasePriceSchedules: "inAppPurchasePriceSchedules";
};
export type InAppPurchasePriceScheduleCreateRequestDataTypeEnum = typeof InAppPurchasePriceScheduleCreateRequestDataTypeEnum[keyof typeof InAppPurchasePriceScheduleCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the InAppPurchasePriceScheduleCreateRequestData interface.
 */
export declare function instanceOfInAppPurchasePriceScheduleCreateRequestData(value: object): boolean;
export declare function InAppPurchasePriceScheduleCreateRequestDataFromJSON(json: any): InAppPurchasePriceScheduleCreateRequestData;
export declare function InAppPurchasePriceScheduleCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequestData;
export declare function InAppPurchasePriceScheduleCreateRequestDataToJSON(value?: InAppPurchasePriceScheduleCreateRequestData | null): any;
