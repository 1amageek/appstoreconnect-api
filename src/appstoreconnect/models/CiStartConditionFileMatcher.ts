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
 * @interface CiStartConditionFileMatcher
 */
export interface CiStartConditionFileMatcher {
    /**
     * 
     * @type {string}
     * @memberof CiStartConditionFileMatcher
     */
    directory?: string;
    /**
     * 
     * @type {string}
     * @memberof CiStartConditionFileMatcher
     */
    fileExtension?: string;
    /**
     * 
     * @type {string}
     * @memberof CiStartConditionFileMatcher
     */
    fileName?: string;
}

/**
 * Check if a given object implements the CiStartConditionFileMatcher interface.
 */
export function instanceOfCiStartConditionFileMatcher(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiStartConditionFileMatcherFromJSON(json: any): CiStartConditionFileMatcher {
    return CiStartConditionFileMatcherFromJSONTyped(json, false);
}

export function CiStartConditionFileMatcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiStartConditionFileMatcher {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'directory': !exists(json, 'directory') ? undefined : json['directory'],
        'fileExtension': !exists(json, 'fileExtension') ? undefined : json['fileExtension'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
    };
}

export function CiStartConditionFileMatcherToJSON(value?: CiStartConditionFileMatcher | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'directory': value.directory,
        'fileExtension': value.fileExtension,
        'fileName': value.fileName,
    };
}

