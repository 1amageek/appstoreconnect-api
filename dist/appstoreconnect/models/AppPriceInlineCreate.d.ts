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
 * @interface AppPriceInlineCreate
 */
export interface AppPriceInlineCreate {
    /**
     *
     * @type {string}
     * @memberof AppPriceInlineCreate
     */
    type: AppPriceInlineCreateTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPriceInlineCreate
     */
    id?: string;
}
/**
 * @export
 */
export declare const AppPriceInlineCreateTypeEnum: {
    readonly AppPrices: "appPrices";
};
export type AppPriceInlineCreateTypeEnum = typeof AppPriceInlineCreateTypeEnum[keyof typeof AppPriceInlineCreateTypeEnum];
/**
 * Check if a given object implements the AppPriceInlineCreate interface.
 */
export declare function instanceOfAppPriceInlineCreate(value: object): boolean;
export declare function AppPriceInlineCreateFromJSON(json: any): AppPriceInlineCreate;
export declare function AppPriceInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceInlineCreate;
export declare function AppPriceInlineCreateToJSON(value?: AppPriceInlineCreate | null): any;
