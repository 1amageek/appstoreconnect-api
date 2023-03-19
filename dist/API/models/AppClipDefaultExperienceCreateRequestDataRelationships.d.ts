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
import type { AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip } from './AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip';
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate } from './AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate';
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
/**
 *
 * @export
 * @interface AppClipDefaultExperienceCreateRequestDataRelationships
 */
export interface AppClipDefaultExperienceCreateRequestDataRelationships {
    /**
     *
     * @type {AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip}
     * @memberof AppClipDefaultExperienceCreateRequestDataRelationships
     */
    appClip: AppClipAdvancedExperienceCreateRequestDataRelationshipsAppClip;
    /**
     *
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion}
     * @memberof AppClipDefaultExperienceCreateRequestDataRelationships
     */
    releaseWithAppStoreVersion?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    /**
     *
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate}
     * @memberof AppClipDefaultExperienceCreateRequestDataRelationships
     */
    appClipDefaultExperienceTemplate?: AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate;
}
/**
 * Check if a given object implements the AppClipDefaultExperienceCreateRequestDataRelationships interface.
 */
export declare function instanceOfAppClipDefaultExperienceCreateRequestDataRelationships(value: object): boolean;
export declare function AppClipDefaultExperienceCreateRequestDataRelationshipsFromJSON(json: any): AppClipDefaultExperienceCreateRequestDataRelationships;
export declare function AppClipDefaultExperienceCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceCreateRequestDataRelationships;
export declare function AppClipDefaultExperienceCreateRequestDataRelationshipsToJSON(value?: AppClipDefaultExperienceCreateRequestDataRelationships | null): any;
