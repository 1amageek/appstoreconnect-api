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
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner } from './AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner';
/**
 *
 * @export
 * @interface AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization
 */
export interface AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization {
    /**
     *
     * @type {AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner}
     * @memberof AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization
     */
    data?: AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner;
}
/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization interface.
 */
export declare function instanceOfAppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization(value: object): boolean;
export declare function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSON(json: any): AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization;
export declare function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization;
export declare function AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalizationToJSON(value?: AppPreviewSetCreateRequestDataRelationshipsAppCustomProductPageLocalization | null): any;
