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
import type { AppEventLocalization } from './AppEventLocalization';
import type { AppEventLocalizationsResponseIncludedInner } from './AppEventLocalizationsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface AppEventLocalizationResponse
 */
export interface AppEventLocalizationResponse {
    /**
     *
     * @type {AppEventLocalization}
     * @memberof AppEventLocalizationResponse
     */
    data: AppEventLocalization;
    /**
     *
     * @type {Array<AppEventLocalizationsResponseIncludedInner>}
     * @memberof AppEventLocalizationResponse
     */
    included?: Array<AppEventLocalizationsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppEventLocalizationResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppEventLocalizationResponse interface.
 */
export declare function instanceOfAppEventLocalizationResponse(value: object): boolean;
export declare function AppEventLocalizationResponseFromJSON(json: any): AppEventLocalizationResponse;
export declare function AppEventLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationResponse;
export declare function AppEventLocalizationResponseToJSON(value?: AppEventLocalizationResponse | null): any;
