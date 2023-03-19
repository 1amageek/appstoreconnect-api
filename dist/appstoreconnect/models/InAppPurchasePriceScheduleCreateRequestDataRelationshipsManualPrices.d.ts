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
import type { InAppPurchasePriceScheduleRelationshipsManualPricesDataInner } from './InAppPurchasePriceScheduleRelationshipsManualPricesDataInner';
/**
 *
 * @export
 * @interface InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices
 */
export interface InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices {
    /**
     *
     * @type {Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>}
     * @memberof InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices
     */
    data: Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>;
}
/**
 * Check if a given object implements the InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices interface.
 */
export declare function instanceOfInAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices(value: object): boolean;
export declare function InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSON(json: any): InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices;
export declare function InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices;
export declare function InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPricesToJSON(value?: InAppPurchasePriceScheduleCreateRequestDataRelationshipsManualPrices | null): any;
