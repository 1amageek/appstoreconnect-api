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
 * @interface CiMacOsVersionAttributes
 */
export interface CiMacOsVersionAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiMacOsVersionAttributes
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof CiMacOsVersionAttributes
     */
    name?: string;
}

/**
 * Check if a given object implements the CiMacOsVersionAttributes interface.
 */
export function instanceOfCiMacOsVersionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiMacOsVersionAttributesFromJSON(json: any): CiMacOsVersionAttributes {
    return CiMacOsVersionAttributesFromJSONTyped(json, false);
}

export function CiMacOsVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': !exists(json, 'version') ? undefined : json['version'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CiMacOsVersionAttributesToJSON(value?: CiMacOsVersionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'name': value.name,
    };
}

