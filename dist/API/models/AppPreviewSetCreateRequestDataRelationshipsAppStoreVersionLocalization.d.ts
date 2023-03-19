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
import type { AppPreviewSetRelationshipsAppStoreVersionLocalizationData } from './AppPreviewSetRelationshipsAppStoreVersionLocalizationData';
/**
 *
 * @export
 * @interface AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization
 */
export interface AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization {
    /**
     *
     * @type {AppPreviewSetRelationshipsAppStoreVersionLocalizationData}
     * @memberof AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization
     */
    data?: AppPreviewSetRelationshipsAppStoreVersionLocalizationData;
}
/**
 * Check if a given object implements the AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization interface.
 */
export declare function instanceOfAppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization(value: object): boolean;
export declare function AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFromJSON(json: any): AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization;
export declare function AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization;
export declare function AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalizationToJSON(value?: AppPreviewSetCreateRequestDataRelationshipsAppStoreVersionLocalization | null): any;
