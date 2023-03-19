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
 * @interface BetaTesterCreateRequestDataAttributes
 */
export interface BetaTesterCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaTesterCreateRequestDataAttributes
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaTesterCreateRequestDataAttributes
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof BetaTesterCreateRequestDataAttributes
     */
    email: string;
}

/**
 * Check if a given object implements the BetaTesterCreateRequestDataAttributes interface.
 */
export function instanceOfBetaTesterCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function BetaTesterCreateRequestDataAttributesFromJSON(json: any): BetaTesterCreateRequestDataAttributes {
    return BetaTesterCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaTesterCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': json['email'],
    };
}

export function BetaTesterCreateRequestDataAttributesToJSON(value?: BetaTesterCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
    };
}

