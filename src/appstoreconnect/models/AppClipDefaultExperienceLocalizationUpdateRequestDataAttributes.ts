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
 * @interface AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes
 */
export interface AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes
     */
    subtitle?: string;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    return AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subtitle': !exists(json, 'subtitle') ? undefined : json['subtitle'],
    };
}

export function AppClipDefaultExperienceLocalizationUpdateRequestDataAttributesToJSON(value?: AppClipDefaultExperienceLocalizationUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subtitle': value.subtitle,
    };
}

