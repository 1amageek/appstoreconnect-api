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
import type { AppInfoUpdateRequestDataRelationships } from './AppInfoUpdateRequestDataRelationships';
import {
    AppInfoUpdateRequestDataRelationshipsFromJSON,
    AppInfoUpdateRequestDataRelationshipsFromJSONTyped,
    AppInfoUpdateRequestDataRelationshipsToJSON,
} from './AppInfoUpdateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppInfoUpdateRequestData
 */
export interface AppInfoUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppInfoUpdateRequestData
     */
    type: AppInfoUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppInfoUpdateRequestDataRelationships}
     * @memberof AppInfoUpdateRequestData
     */
    relationships?: AppInfoUpdateRequestDataRelationships;
}


/**
 * @export
 */
export const AppInfoUpdateRequestDataTypeEnum = {
    AppInfos: 'appInfos'
} as const;
export type AppInfoUpdateRequestDataTypeEnum = typeof AppInfoUpdateRequestDataTypeEnum[keyof typeof AppInfoUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppInfoUpdateRequestData interface.
 */
export function instanceOfAppInfoUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppInfoUpdateRequestDataFromJSON(json: any): AppInfoUpdateRequestData {
    return AppInfoUpdateRequestDataFromJSONTyped(json, false);
}

export function AppInfoUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : AppInfoUpdateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppInfoUpdateRequestDataToJSON(value?: AppInfoUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'relationships': AppInfoUpdateRequestDataRelationshipsToJSON(value.relationships),
    };
}
