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
 * @interface BundleIdUpdateRequestDataAttributes
 */
export interface BundleIdUpdateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof BundleIdUpdateRequestDataAttributes
     */
    name?: string;
}
/**
 * Check if a given object implements the BundleIdUpdateRequestDataAttributes interface.
 */
export declare function instanceOfBundleIdUpdateRequestDataAttributes(value: object): boolean;
export declare function BundleIdUpdateRequestDataAttributesFromJSON(json: any): BundleIdUpdateRequestDataAttributes;
export declare function BundleIdUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdUpdateRequestDataAttributes;
export declare function BundleIdUpdateRequestDataAttributesToJSON(value?: BundleIdUpdateRequestDataAttributes | null): any;
