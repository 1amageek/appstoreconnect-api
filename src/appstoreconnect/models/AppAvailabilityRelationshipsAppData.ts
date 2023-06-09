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
 * @interface AppAvailabilityRelationshipsAppData
 */
export interface AppAvailabilityRelationshipsAppData {
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAppData
     */
    type: AppAvailabilityRelationshipsAppDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAppData
     */
    id: string;
}


/**
 * @export
 */
export const AppAvailabilityRelationshipsAppDataTypeEnum = {
    Apps: 'apps'
} as const;
export type AppAvailabilityRelationshipsAppDataTypeEnum = typeof AppAvailabilityRelationshipsAppDataTypeEnum[keyof typeof AppAvailabilityRelationshipsAppDataTypeEnum];


/**
 * Check if a given object implements the AppAvailabilityRelationshipsAppData interface.
 */
export function instanceOfAppAvailabilityRelationshipsAppData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppAvailabilityRelationshipsAppDataFromJSON(json: any): AppAvailabilityRelationshipsAppData {
    return AppAvailabilityRelationshipsAppDataFromJSONTyped(json, false);
}

export function AppAvailabilityRelationshipsAppDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityRelationshipsAppData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppAvailabilityRelationshipsAppDataToJSON(value?: AppAvailabilityRelationshipsAppData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

