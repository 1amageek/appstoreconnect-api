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
 * @interface DeviceUpdateRequestDataAttributes
 */
export interface DeviceUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DeviceUpdateRequestDataAttributes
     */
    status?: DeviceUpdateRequestDataAttributesStatusEnum;
}


/**
 * @export
 */
export const DeviceUpdateRequestDataAttributesStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;
export type DeviceUpdateRequestDataAttributesStatusEnum = typeof DeviceUpdateRequestDataAttributesStatusEnum[keyof typeof DeviceUpdateRequestDataAttributesStatusEnum];


/**
 * Check if a given object implements the DeviceUpdateRequestDataAttributes interface.
 */
export function instanceOfDeviceUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeviceUpdateRequestDataAttributesFromJSON(json: any): DeviceUpdateRequestDataAttributes {
    return DeviceUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function DeviceUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function DeviceUpdateRequestDataAttributesToJSON(value?: DeviceUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'status': value.status,
    };
}
