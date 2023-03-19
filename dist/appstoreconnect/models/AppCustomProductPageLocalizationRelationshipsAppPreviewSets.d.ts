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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner } from './AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface AppCustomProductPageLocalizationRelationshipsAppPreviewSets
 */
export interface AppCustomProductPageLocalizationRelationshipsAppPreviewSets {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppPreviewSets
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppPreviewSets
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner>}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppPreviewSets
     */
    data?: Array<AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner>;
}
/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppPreviewSets interface.
 */
export declare function instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSets(value: object): boolean;
export declare function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppPreviewSets;
export declare function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationRelationshipsAppPreviewSets;
export declare function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON(value?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets | null): any;
