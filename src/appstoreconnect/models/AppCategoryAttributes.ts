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
 * @interface AppCategoryAttributes
 */
export interface AppCategoryAttributes {
    /**
     * 
     * @type {Array<Platform>}
     * @memberof AppCategoryAttributes
     */
    platforms?: Array<Platform>;
}

/**
 * Check if a given object implements the AppCategoryAttributes interface.
 */
export function instanceOfAppCategoryAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCategoryAttributesFromJSON(json: any): AppCategoryAttributes {
    return AppCategoryAttributesFromJSONTyped(json, false);
}

export function AppCategoryAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platforms': !exists(json, 'platforms') ? undefined : ((json['platforms'] as Array<any>).map(PlatformFromJSON)),
    };
}

export function AppCategoryAttributesToJSON(value?: AppCategoryAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platforms': value.platforms === undefined ? undefined : ((value.platforms as Array<any>).map(PlatformToJSON)),
    };
}

