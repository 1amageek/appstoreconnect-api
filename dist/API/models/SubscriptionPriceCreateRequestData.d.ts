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
import type { SubscriptionPriceCreateRequestDataRelationships } from './SubscriptionPriceCreateRequestDataRelationships';
import type { SubscriptionPriceInlineCreateAttributes } from './SubscriptionPriceInlineCreateAttributes';
/**
 *
 * @export
 * @interface SubscriptionPriceCreateRequestData
 */
export interface SubscriptionPriceCreateRequestData {
    /**
     *
     * @type {string}
     * @memberof SubscriptionPriceCreateRequestData
     */
    type: SubscriptionPriceCreateRequestDataTypeEnum;
    /**
     *
     * @type {SubscriptionPriceInlineCreateAttributes}
     * @memberof SubscriptionPriceCreateRequestData
     */
    attributes?: SubscriptionPriceInlineCreateAttributes;
    /**
     *
     * @type {SubscriptionPriceCreateRequestDataRelationships}
     * @memberof SubscriptionPriceCreateRequestData
     */
    relationships: SubscriptionPriceCreateRequestDataRelationships;
}
/**
 * @export
 */
export declare const SubscriptionPriceCreateRequestDataTypeEnum: {
    readonly SubscriptionPrices: "subscriptionPrices";
};
export type SubscriptionPriceCreateRequestDataTypeEnum = typeof SubscriptionPriceCreateRequestDataTypeEnum[keyof typeof SubscriptionPriceCreateRequestDataTypeEnum];
/**
 * Check if a given object implements the SubscriptionPriceCreateRequestData interface.
 */
export declare function instanceOfSubscriptionPriceCreateRequestData(value: object): boolean;
export declare function SubscriptionPriceCreateRequestDataFromJSON(json: any): SubscriptionPriceCreateRequestData;
export declare function SubscriptionPriceCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPriceCreateRequestData;
export declare function SubscriptionPriceCreateRequestDataToJSON(value?: SubscriptionPriceCreateRequestData | null): any;
