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
import type { AppEventCreateRequestDataRelationships } from './AppEventCreateRequestDataRelationships';
import type { InAppPurchaseV2CreateRequestDataAttributes } from './InAppPurchaseV2CreateRequestDataAttributes';
/**
 *
 * @export
 * @interface InAppPurchaseV2CreateRequestData
 */
export interface InAppPurchaseV2CreateRequestData {
    /**
     *
     * @type {string}
     * @memberof InAppPurchaseV2CreateRequestData
     */
    type: InAppPurchaseV2CreateRequestDataTypeEnum;
    /**
     *
     * @type {InAppPurchaseV2CreateRequestDataAttributes}
     * @memberof InAppPurchaseV2CreateRequestData
     */
    attributes: InAppPurchaseV2CreateRequestDataAttributes;
    /**
     *
     * @type {AppEventCreateRequestDataRelationships}
     * @memberof InAppPurchaseV2CreateRequestData
     */
    relationships: AppEventCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const InAppPurchaseV2CreateRequestDataTypeEnum: {
    readonly InAppPurchases: "inAppPurchases";
};
export type InAppPurchaseV2CreateRequestDataTypeEnum = typeof InAppPurchaseV2CreateRequestDataTypeEnum[keyof typeof InAppPurchaseV2CreateRequestDataTypeEnum];
/**
 * Check if a given object implements the InAppPurchaseV2CreateRequestData interface.
 */
export declare function instanceOfInAppPurchaseV2CreateRequestData(value: object): boolean;
export declare function InAppPurchaseV2CreateRequestDataFromJSON(json: any): InAppPurchaseV2CreateRequestData;
export declare function InAppPurchaseV2CreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2CreateRequestData;
export declare function InAppPurchaseV2CreateRequestDataToJSON(value?: InAppPurchaseV2CreateRequestData | null): any;
