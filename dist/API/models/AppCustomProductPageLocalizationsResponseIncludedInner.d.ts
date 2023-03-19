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
import { AppCustomProductPageVersion } from './AppCustomProductPageVersion';
import { AppPreviewSet } from './AppPreviewSet';
import { AppScreenshotSet } from './AppScreenshotSet';
/**
 * @type AppCustomProductPageLocalizationsResponseIncludedInner
 *
 * @export
 */
export type AppCustomProductPageLocalizationsResponseIncludedInner = AppCustomProductPageVersion | AppPreviewSet | AppScreenshotSet;
export declare function AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON(json: any): AppCustomProductPageLocalizationsResponseIncludedInner;
export declare function AppCustomProductPageLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationsResponseIncludedInner;
export declare function AppCustomProductPageLocalizationsResponseIncludedInnerToJSON(value?: AppCustomProductPageLocalizationsResponseIncludedInner | null): any;
