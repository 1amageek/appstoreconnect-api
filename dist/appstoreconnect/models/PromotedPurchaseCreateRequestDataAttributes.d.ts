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
/**
 *
 * @export
 * @interface PromotedPurchaseCreateRequestDataAttributes
 */
export interface PromotedPurchaseCreateRequestDataAttributes {
    /**
     *
     * @type {boolean}
     * @memberof PromotedPurchaseCreateRequestDataAttributes
     */
    visibleForAllUsers: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PromotedPurchaseCreateRequestDataAttributes
     */
    enabled?: boolean;
}
/**
 * Check if a given object implements the PromotedPurchaseCreateRequestDataAttributes interface.
 */
export declare function instanceOfPromotedPurchaseCreateRequestDataAttributes(value: object): boolean;
export declare function PromotedPurchaseCreateRequestDataAttributesFromJSON(json: any): PromotedPurchaseCreateRequestDataAttributes;
export declare function PromotedPurchaseCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseCreateRequestDataAttributes;
export declare function PromotedPurchaseCreateRequestDataAttributesToJSON(value?: PromotedPurchaseCreateRequestDataAttributes | null): any;
