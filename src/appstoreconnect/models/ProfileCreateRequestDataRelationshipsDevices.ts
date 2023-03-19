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
import type { ProfileRelationshipsDevicesDataInner } from './ProfileRelationshipsDevicesDataInner';
import {
    ProfileRelationshipsDevicesDataInnerFromJSON,
    ProfileRelationshipsDevicesDataInnerFromJSONTyped,
    ProfileRelationshipsDevicesDataInnerToJSON,
} from './ProfileRelationshipsDevicesDataInner';

/**
 * 
 * @export
 * @interface ProfileCreateRequestDataRelationshipsDevices
 */
export interface ProfileCreateRequestDataRelationshipsDevices {
    /**
     * 
     * @type {Array<ProfileRelationshipsDevicesDataInner>}
     * @memberof ProfileCreateRequestDataRelationshipsDevices
     */
    data?: Array<ProfileRelationshipsDevicesDataInner>;
}

/**
 * Check if a given object implements the ProfileCreateRequestDataRelationshipsDevices interface.
 */
export function instanceOfProfileCreateRequestDataRelationshipsDevices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileCreateRequestDataRelationshipsDevicesFromJSON(json: any): ProfileCreateRequestDataRelationshipsDevices {
    return ProfileCreateRequestDataRelationshipsDevicesFromJSONTyped(json, false);
}

export function ProfileCreateRequestDataRelationshipsDevicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileCreateRequestDataRelationshipsDevices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ProfileRelationshipsDevicesDataInnerFromJSON)),
    };
}

export function ProfileCreateRequestDataRelationshipsDevicesToJSON(value?: ProfileCreateRequestDataRelationshipsDevices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ProfileRelationshipsDevicesDataInnerToJSON)),
    };
}

