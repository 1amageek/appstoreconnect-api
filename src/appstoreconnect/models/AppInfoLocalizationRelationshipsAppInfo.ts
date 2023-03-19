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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import {
    AppAvailabilityRelationshipsAppLinksFromJSON,
    AppAvailabilityRelationshipsAppLinksFromJSONTyped,
    AppAvailabilityRelationshipsAppLinksToJSON,
} from './AppAvailabilityRelationshipsAppLinks';
import type { AppInfoLocalizationRelationshipsAppInfoData } from './AppInfoLocalizationRelationshipsAppInfoData';
import {
    AppInfoLocalizationRelationshipsAppInfoDataFromJSON,
    AppInfoLocalizationRelationshipsAppInfoDataFromJSONTyped,
    AppInfoLocalizationRelationshipsAppInfoDataToJSON,
} from './AppInfoLocalizationRelationshipsAppInfoData';

/**
 * 
 * @export
 * @interface AppInfoLocalizationRelationshipsAppInfo
 */
export interface AppInfoLocalizationRelationshipsAppInfo {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppInfoLocalizationRelationshipsAppInfo
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppInfoLocalizationRelationshipsAppInfoData}
     * @memberof AppInfoLocalizationRelationshipsAppInfo
     */
    data?: AppInfoLocalizationRelationshipsAppInfoData;
}

/**
 * Check if a given object implements the AppInfoLocalizationRelationshipsAppInfo interface.
 */
export function instanceOfAppInfoLocalizationRelationshipsAppInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoLocalizationRelationshipsAppInfoFromJSON(json: any): AppInfoLocalizationRelationshipsAppInfo {
    return AppInfoLocalizationRelationshipsAppInfoFromJSONTyped(json, false);
}

export function AppInfoLocalizationRelationshipsAppInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationRelationshipsAppInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppInfoLocalizationRelationshipsAppInfoDataFromJSON(json['data']),
    };
}

export function AppInfoLocalizationRelationshipsAppInfoToJSON(value?: AppInfoLocalizationRelationshipsAppInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppInfoLocalizationRelationshipsAppInfoDataToJSON(value.data),
    };
}
