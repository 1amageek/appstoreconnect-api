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
 * @interface AppCustomProductPageCreateRequestDataAttributes
 */
export interface AppCustomProductPageCreateRequestDataAttributes {
    /**
     *
     * @type {string}
     * @memberof AppCustomProductPageCreateRequestDataAttributes
     */
    name: string;
}
/**
 * Check if a given object implements the AppCustomProductPageCreateRequestDataAttributes interface.
 */
export declare function instanceOfAppCustomProductPageCreateRequestDataAttributes(value: object): boolean;
export declare function AppCustomProductPageCreateRequestDataAttributesFromJSON(json: any): AppCustomProductPageCreateRequestDataAttributes;
export declare function AppCustomProductPageCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestDataAttributes;
export declare function AppCustomProductPageCreateRequestDataAttributesToJSON(value?: AppCustomProductPageCreateRequestDataAttributes | null): any;
