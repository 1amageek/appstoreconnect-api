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
import { AppCustomProductPageLocalizationInlineCreate } from './AppCustomProductPageLocalizationInlineCreate';
import { AppCustomProductPageVersionInlineCreate } from './AppCustomProductPageVersionInlineCreate';
/**
 * @type AppCustomProductPageCreateRequestIncludedInner
 *
 * @export
 */
export type AppCustomProductPageCreateRequestIncludedInner = AppCustomProductPageLocalizationInlineCreate | AppCustomProductPageVersionInlineCreate;
export declare function AppCustomProductPageCreateRequestIncludedInnerFromJSON(json: any): AppCustomProductPageCreateRequestIncludedInner;
export declare function AppCustomProductPageCreateRequestIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestIncludedInner;
export declare function AppCustomProductPageCreateRequestIncludedInnerToJSON(value?: AppCustomProductPageCreateRequestIncludedInner | null): any;
