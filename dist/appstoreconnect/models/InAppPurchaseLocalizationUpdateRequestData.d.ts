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
import type { InAppPurchaseLocalizationUpdateRequestDataAttributes } from './InAppPurchaseLocalizationUpdateRequestDataAttributes';
/**
 *
 * @export
 * @interface InAppPurchaseLocalizationUpdateRequestData
 */
export interface InAppPurchaseLocalizationUpdateRequestData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseLocalizationUpdateRequestData
     */
    type: InAppPurchaseLocalizationUpdateRequestDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseLocalizationUpdateRequestData
     */
    id: string;
    /**
     *
     * @type {InAppPurchaseLocalizationUpdateRequestDataAttributes}
     * @memberof InAppPurchaseLocalizationUpdateRequestData
     */
    attributes?: InAppPurchaseLocalizationUpdateRequestDataAttributes;
}
/**
 * @export
 */
export declare const InAppPurchaseLocalizationUpdateRequestDataTypeEnum: {
    readonly InAppPurchaseLocalizations: "inAppPurchaseLocalizations";
};
export type InAppPurchaseLocalizationUpdateRequestDataTypeEnum = typeof InAppPurchaseLocalizationUpdateRequestDataTypeEnum[keyof typeof InAppPurchaseLocalizationUpdateRequestDataTypeEnum];
/**
 * Check if a given object implements the InAppPurchaseLocalizationUpdateRequestData interface.
 */
export declare function instanceOfInAppPurchaseLocalizationUpdateRequestData(value: object): boolean;
export declare function InAppPurchaseLocalizationUpdateRequestDataFromJSON(json: any): InAppPurchaseLocalizationUpdateRequestData;
export declare function InAppPurchaseLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationUpdateRequestData;
export declare function InAppPurchaseLocalizationUpdateRequestDataToJSON(value?: InAppPurchaseLocalizationUpdateRequestData | null): any;
