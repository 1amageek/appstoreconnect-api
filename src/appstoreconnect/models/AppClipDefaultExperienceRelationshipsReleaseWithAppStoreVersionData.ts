/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData
 */
export interface AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData
     */
    type: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData
     */
    id: string;
}


/**
 * @export
 */
export const AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataTypeEnum = {
    AppStoreVersions: 'appStoreVersions'
} as const;
export type AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataTypeEnum = typeof AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataTypeEnum[keyof typeof AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData interface.
 */
export function instanceOfAppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON(json: any): AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData {
    return AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON(value?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}
