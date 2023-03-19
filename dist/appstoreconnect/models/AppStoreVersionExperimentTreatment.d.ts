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
import type { AppStoreVersionExperimentTreatmentAttributes } from './AppStoreVersionExperimentTreatmentAttributes';
import type { AppStoreVersionExperimentTreatmentRelationships } from './AppStoreVersionExperimentTreatmentRelationships';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface AppStoreVersionExperimentTreatment
 */
export interface AppStoreVersionExperimentTreatment {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatment
     */
    type: AppStoreVersionExperimentTreatmentTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatment
     */
    id: string;
    /**
     *
     * @type {AppStoreVersionExperimentTreatmentAttributes}
     * @memberof AppStoreVersionExperimentTreatment
     */
    attributes?: AppStoreVersionExperimentTreatmentAttributes;
    /**
     *
     * @type {AppStoreVersionExperimentTreatmentRelationships}
     * @memberof AppStoreVersionExperimentTreatment
     */
    relationships?: AppStoreVersionExperimentTreatmentRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppStoreVersionExperimentTreatment
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const AppStoreVersionExperimentTreatmentTypeEnum: {
    readonly AppStoreVersionExperimentTreatments: "appStoreVersionExperimentTreatments";
};
export type AppStoreVersionExperimentTreatmentTypeEnum = typeof AppStoreVersionExperimentTreatmentTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionExperimentTreatment interface.
 */
export declare function instanceOfAppStoreVersionExperimentTreatment(value: object): boolean;
export declare function AppStoreVersionExperimentTreatmentFromJSON(json: any): AppStoreVersionExperimentTreatment;
export declare function AppStoreVersionExperimentTreatmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatment;
export declare function AppStoreVersionExperimentTreatmentToJSON(value?: AppStoreVersionExperimentTreatment | null): any;
