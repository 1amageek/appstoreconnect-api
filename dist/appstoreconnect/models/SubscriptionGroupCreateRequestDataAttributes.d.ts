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
 * @interface SubscriptionGroupCreateRequestDataAttributes
 */
export interface SubscriptionGroupCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupCreateRequestDataAttributes
     */
    referenceName: string;
}
/**
 * Check if a given object implements the SubscriptionGroupCreateRequestDataAttributes interface.
 */
export declare function instanceOfSubscriptionGroupCreateRequestDataAttributes(value: object): boolean;
export declare function SubscriptionGroupCreateRequestDataAttributesFromJSON(json: any): SubscriptionGroupCreateRequestDataAttributes;
export declare function SubscriptionGroupCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupCreateRequestDataAttributes;
export declare function SubscriptionGroupCreateRequestDataAttributesToJSON(value?: SubscriptionGroupCreateRequestDataAttributes | null): any;
