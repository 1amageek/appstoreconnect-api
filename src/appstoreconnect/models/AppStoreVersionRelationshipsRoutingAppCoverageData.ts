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
 * @interface AppStoreVersionRelationshipsRoutingAppCoverageData
 */
export interface AppStoreVersionRelationshipsRoutingAppCoverageData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionRelationshipsRoutingAppCoverageData
     */
    type: AppStoreVersionRelationshipsRoutingAppCoverageDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionRelationshipsRoutingAppCoverageData
     */
    id: string;
}


/**
 * @export
 */
export const AppStoreVersionRelationshipsRoutingAppCoverageDataTypeEnum = {
    RoutingAppCoverages: 'routingAppCoverages'
} as const;
export type AppStoreVersionRelationshipsRoutingAppCoverageDataTypeEnum = typeof AppStoreVersionRelationshipsRoutingAppCoverageDataTypeEnum[keyof typeof AppStoreVersionRelationshipsRoutingAppCoverageDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionRelationshipsRoutingAppCoverageData interface.
 */
export function instanceOfAppStoreVersionRelationshipsRoutingAppCoverageData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionRelationshipsRoutingAppCoverageDataFromJSON(json: any): AppStoreVersionRelationshipsRoutingAppCoverageData {
    return AppStoreVersionRelationshipsRoutingAppCoverageDataFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsRoutingAppCoverageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsRoutingAppCoverageData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppStoreVersionRelationshipsRoutingAppCoverageDataToJSON(value?: AppStoreVersionRelationshipsRoutingAppCoverageData | null): any {
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

