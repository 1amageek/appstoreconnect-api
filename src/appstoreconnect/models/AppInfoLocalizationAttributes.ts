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
 * @interface AppInfoLocalizationAttributes
 */
export interface AppInfoLocalizationAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    subtitle?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyPolicyUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyChoicesUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalizationAttributes
     */
    privacyPolicyText?: string;
}

/**
 * Check if a given object implements the AppInfoLocalizationAttributes interface.
 */
export function instanceOfAppInfoLocalizationAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoLocalizationAttributesFromJSON(json: any): AppInfoLocalizationAttributes {
    return AppInfoLocalizationAttributesFromJSONTyped(json, false);
}

export function AppInfoLocalizationAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalizationAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
        'privacyPolicyUrl': !exists(json, 'privacyPolicyUrl') ? undefined : json['privacyPolicyUrl'],
        'privacyChoicesUrl': !exists(json, 'privacyChoicesUrl') ? undefined : json['privacyChoicesUrl'],
        'privacyPolicyText': !exists(json, 'privacyPolicyText') ? undefined : json['privacyPolicyText'],
    };
}

export function AppInfoLocalizationAttributesToJSON(value?: AppInfoLocalizationAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale': value.locale,
        'name': value.name,
        'subtitle': value.subtitle,
        'privacyPolicyUrl': value.privacyPolicyUrl,
        'privacyChoicesUrl': value.privacyChoicesUrl,
        'privacyPolicyText': value.privacyPolicyText,
    };
}

