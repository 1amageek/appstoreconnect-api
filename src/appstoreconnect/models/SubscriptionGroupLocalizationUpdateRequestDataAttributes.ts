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
 * @interface SubscriptionGroupLocalizationUpdateRequestDataAttributes
 */
export interface SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalizationUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupLocalizationUpdateRequestDataAttributes
     */
    customAppName?: string;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionGroupLocalizationUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionGroupLocalizationUpdateRequestDataAttributesFromJSON(json: any): SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    return SubscriptionGroupLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'customAppName': !exists(json, 'customAppName') ? undefined : json['customAppName'],
    };
}

export function SubscriptionGroupLocalizationUpdateRequestDataAttributesToJSON(value?: SubscriptionGroupLocalizationUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'customAppName': value.customAppName,
    };
}

