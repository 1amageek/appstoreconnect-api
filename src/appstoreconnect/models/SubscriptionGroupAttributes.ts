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
 * @interface SubscriptionGroupAttributes
 */
export interface SubscriptionGroupAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupAttributes
     */
    referenceName?: string;
}

/**
 * Check if a given object implements the SubscriptionGroupAttributes interface.
 */
export function instanceOfSubscriptionGroupAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionGroupAttributesFromJSON(json: any): SubscriptionGroupAttributes {
    return SubscriptionGroupAttributesFromJSONTyped(json, false);
}

export function SubscriptionGroupAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
    };
}

export function SubscriptionGroupAttributesToJSON(value?: SubscriptionGroupAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceName': value.referenceName,
    };
}

