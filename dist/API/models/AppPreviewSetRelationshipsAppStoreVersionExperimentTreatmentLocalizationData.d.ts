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
 * @interface AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData
 */
export interface AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData {
    /**
     *
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData
     */
    type: AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData
     */
    id: string;
}
/**
 * @export
 */
export declare const AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum: {
    readonly AppStoreVersionExperimentTreatmentLocalizations: "appStoreVersionExperimentTreatmentLocalizations";
};
export type AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum = typeof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum[keyof typeof AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataTypeEnum];
/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData interface.
 */
export declare function instanceOfAppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData(value: object): boolean;
export declare function AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataFromJSON(json: any): AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData;
export declare function AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData;
export declare function AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationDataToJSON(value?: AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalizationData | null): any;
