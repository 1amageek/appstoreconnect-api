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
 * @interface ResourceLinks
 */
export interface ResourceLinks {
    /**
     * 
     * @type {string}
     * @memberof ResourceLinks
     */
    self: string;
}

/**
 * Check if a given object implements the ResourceLinks interface.
 */
export function instanceOfResourceLinks(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "self" in value;

    return isInstance;
}

export function ResourceLinksFromJSON(json: any): ResourceLinks {
    return ResourceLinksFromJSONTyped(json, false);
}

export function ResourceLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': json['self'],
    };
}

export function ResourceLinksToJSON(value?: ResourceLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': value.self,
    };
}

