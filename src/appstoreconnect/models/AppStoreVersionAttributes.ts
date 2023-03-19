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
import type { AppStoreVersionState } from './AppStoreVersionState';
import {
    AppStoreVersionStateFromJSON,
    AppStoreVersionStateFromJSONTyped,
    AppStoreVersionStateToJSON,
} from './AppStoreVersionState';
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface AppStoreVersionAttributes
 */
export interface AppStoreVersionAttributes {
    /**
     * 
     * @type {Platform}
     * @memberof AppStoreVersionAttributes
     */
    platform?: Platform;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionAttributes
     */
    versionString?: string;
    /**
     * 
     * @type {AppStoreVersionState}
     * @memberof AppStoreVersionAttributes
     */
    appStoreState?: AppStoreVersionState;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionAttributes
     */
    copyright?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionAttributes
     */
    releaseType?: AppStoreVersionAttributesReleaseTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof AppStoreVersionAttributes
     */
    earliestReleaseDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof AppStoreVersionAttributes
     */
    downloadable?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof AppStoreVersionAttributes
     */
    createdDate?: Date;
}


/**
 * @export
 */
export const AppStoreVersionAttributesReleaseTypeEnum = {
    Manual: 'MANUAL',
    AfterApproval: 'AFTER_APPROVAL',
    Scheduled: 'SCHEDULED'
} as const;
export type AppStoreVersionAttributesReleaseTypeEnum = typeof AppStoreVersionAttributesReleaseTypeEnum[keyof typeof AppStoreVersionAttributesReleaseTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionAttributes interface.
 */
export function instanceOfAppStoreVersionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppStoreVersionAttributesFromJSON(json: any): AppStoreVersionAttributes {
    return AppStoreVersionAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platform': !exists(json, 'platform') ? undefined : PlatformFromJSON(json['platform']),
        'versionString': !exists(json, 'versionString') ? undefined : json['versionString'],
        'appStoreState': !exists(json, 'appStoreState') ? undefined : AppStoreVersionStateFromJSON(json['appStoreState']),
        'copyright': !exists(json, 'copyright') ? undefined : json['copyright'],
        'releaseType': !exists(json, 'releaseType') ? undefined : json['releaseType'],
        'earliestReleaseDate': !exists(json, 'earliestReleaseDate') ? undefined : (new Date(json['earliestReleaseDate'])),
        'downloadable': !exists(json, 'downloadable') ? undefined : json['downloadable'],
        'createdDate': !exists(json, 'createdDate') ? undefined : (new Date(json['createdDate'])),
    };
}

export function AppStoreVersionAttributesToJSON(value?: AppStoreVersionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platform': PlatformToJSON(value.platform),
        'versionString': value.versionString,
        'appStoreState': AppStoreVersionStateToJSON(value.appStoreState),
        'copyright': value.copyright,
        'releaseType': value.releaseType,
        'earliestReleaseDate': value.earliestReleaseDate === undefined ? undefined : (value.earliestReleaseDate.toISOString()),
        'downloadable': value.downloadable,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate.toISOString()),
    };
}

