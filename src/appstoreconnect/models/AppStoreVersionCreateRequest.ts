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
import type { AppStoreVersionCreateRequestData } from './AppStoreVersionCreateRequestData';
import {
    AppStoreVersionCreateRequestDataFromJSON,
    AppStoreVersionCreateRequestDataFromJSONTyped,
    AppStoreVersionCreateRequestDataToJSON,
} from './AppStoreVersionCreateRequestData';

/**
 * 
 * @export
 * @interface AppStoreVersionCreateRequest
 */
export interface AppStoreVersionCreateRequest {
    /**
     * 
     * @type {AppStoreVersionCreateRequestData}
     * @memberof AppStoreVersionCreateRequest
     */
    data: AppStoreVersionCreateRequestData;
}

/**
 * Check if a given object implements the AppStoreVersionCreateRequest interface.
 */
export function instanceOfAppStoreVersionCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionCreateRequestFromJSON(json: any): AppStoreVersionCreateRequest {
    return AppStoreVersionCreateRequestFromJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionCreateRequestDataFromJSON(json['data']),
    };
}

export function AppStoreVersionCreateRequestToJSON(value?: AppStoreVersionCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionCreateRequestDataToJSON(value.data),
    };
}

