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
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface AppStoreVersionCreateRequestDataAttributes
 */
export interface AppStoreVersionCreateRequestDataAttributes {
    /**
     * 
     * @type {Platform}
     * @memberof AppStoreVersionCreateRequestDataAttributes
     */
    platform: Platform;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionCreateRequestDataAttributes
     */
    versionString: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionCreateRequestDataAttributes
     */
    copyright?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionCreateRequestDataAttributes
     */
    releaseType?: AppStoreVersionCreateRequestDataAttributesReleaseTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof AppStoreVersionCreateRequestDataAttributes
     */
    earliestReleaseDate?: Date;
}


/**
 * @export
 */
export const AppStoreVersionCreateRequestDataAttributesReleaseTypeEnum = {
    Manual: 'MANUAL',
    AfterApproval: 'AFTER_APPROVAL',
    Scheduled: 'SCHEDULED'
} as const;
export type AppStoreVersionCreateRequestDataAttributesReleaseTypeEnum = typeof AppStoreVersionCreateRequestDataAttributesReleaseTypeEnum[keyof typeof AppStoreVersionCreateRequestDataAttributesReleaseTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionCreateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "platform" in value;
    isInstance = isInstance && "versionString" in value;

    return isInstance;
}

export function AppStoreVersionCreateRequestDataAttributesFromJSON(json: any): AppStoreVersionCreateRequestDataAttributes {
    return AppStoreVersionCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platform': PlatformFromJSON(json['platform']),
        'versionString': json['versionString'],
        'copyright': !exists(json, 'copyright') ? undefined : json['copyright'],
        'releaseType': !exists(json, 'releaseType') ? undefined : json['releaseType'],
        'earliestReleaseDate': !exists(json, 'earliestReleaseDate') ? undefined : (new Date(json['earliestReleaseDate'])),
    };
}

export function AppStoreVersionCreateRequestDataAttributesToJSON(value?: AppStoreVersionCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platform': PlatformToJSON(value.platform),
        'versionString': value.versionString,
        'copyright': value.copyright,
        'releaseType': value.releaseType,
        'earliestReleaseDate': value.earliestReleaseDate === undefined ? undefined : (value.earliestReleaseDate.toISOString()),
    };
}
