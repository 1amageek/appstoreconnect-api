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
import type { AppStoreVersionExperimentTreatmentLocalizationAttributes } from './AppStoreVersionExperimentTreatmentLocalizationAttributes';
import type { AppStoreVersionExperimentTreatmentLocalizationRelationships } from './AppStoreVersionExperimentTreatmentLocalizationRelationships';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface AppStoreVersionExperimentTreatmentLocalization
 */
export interface AppStoreVersionExperimentTreatmentLocalization {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentLocalization
     */
    type: AppStoreVersionExperimentTreatmentLocalizationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentLocalization
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionExperimentTreatmentLocalizationAttributes}
     * @memberof AppStoreVersionExperimentTreatmentLocalization
     */
    attributes?: AppStoreVersionExperimentTreatmentLocalizationAttributes;
    /**
     *
     * @type {AppStoreVersionExperimentTreatmentLocalizationRelationships}
     * @memberof AppStoreVersionExperimentTreatmentLocalization
     */
    relationships?: AppStoreVersionExperimentTreatmentLocalizationRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppStoreVersionExperimentTreatmentLocalization
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentLocalizationTypeEnum: {
    readonly AppStoreVersionExperimentTreatmentLocalizations: "appStoreVersionExperimentTreatmentLocalizations";
};
export type AppStoreVersionExperimentTreatmentLocalizationTypeEnum = typeof AppStoreVersionExperimentTreatmentLocalizationTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalization interface.
 */
export declare function instanceOfAppStoreVersionExperimentTreatmentLocalization(value: object): boolean;
export declare function AppStoreVersionExperimentTreatmentLocalizationFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalization;
export declare function AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalization;
export declare function AppStoreVersionExperimentTreatmentLocalizationToJSON(value?: AppStoreVersionExperimentTreatmentLocalization | null): any;
