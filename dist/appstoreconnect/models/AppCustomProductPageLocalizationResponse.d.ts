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
import type { AppCustomProductPageLocalization } from './AppCustomProductPageLocalization';
import type { AppCustomProductPageLocalizationsResponseIncludedInner } from './AppCustomProductPageLocalizationsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface AppCustomProductPageLocalizationResponse
 */
export interface AppCustomProductPageLocalizationResponse {
    /**
     *
     * @type {AppCustomProductPageLocalization}
     * @memberof AppCustomProductPageLocalizationResponse
     */
    data: AppCustomProductPageLocalization;
    /**
     *
     * @type {Array<AppCustomProductPageLocalizationsResponseIncludedInner>}
     * @memberof AppCustomProductPageLocalizationResponse
     */
    included?: Array<AppCustomProductPageLocalizationsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppCustomProductPageLocalizationResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppCustomProductPageLocalizationResponse interface.
 */
export declare function instanceOfAppCustomProductPageLocalizationResponse(value: object): boolean;
export declare function AppCustomProductPageLocalizationResponseFromJSON(json: any): AppCustomProductPageLocalizationResponse;
export declare function AppCustomProductPageLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationResponse;
export declare function AppCustomProductPageLocalizationResponseToJSON(value?: AppCustomProductPageLocalizationResponse | null): any;
