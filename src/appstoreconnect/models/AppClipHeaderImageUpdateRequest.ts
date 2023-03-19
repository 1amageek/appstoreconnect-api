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
import type { AppClipHeaderImageUpdateRequestData } from './AppClipHeaderImageUpdateRequestData';
import {
    AppClipHeaderImageUpdateRequestDataFromJSON,
    AppClipHeaderImageUpdateRequestDataFromJSONTyped,
    AppClipHeaderImageUpdateRequestDataToJSON,
} from './AppClipHeaderImageUpdateRequestData';

/**
 * 
 * @export
 * @interface AppClipHeaderImageUpdateRequest
 */
export interface AppClipHeaderImageUpdateRequest {
    /**
     * 
     * @type {AppClipHeaderImageUpdateRequestData}
     * @memberof AppClipHeaderImageUpdateRequest
     */
    data: AppClipHeaderImageUpdateRequestData;
}

/**
 * Check if a given object implements the AppClipHeaderImageUpdateRequest interface.
 */
export function instanceOfAppClipHeaderImageUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipHeaderImageUpdateRequestFromJSON(json: any): AppClipHeaderImageUpdateRequest {
    return AppClipHeaderImageUpdateRequestFromJSONTyped(json, false);
}

export function AppClipHeaderImageUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipHeaderImageUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipHeaderImageUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppClipHeaderImageUpdateRequestToJSON(value?: AppClipHeaderImageUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipHeaderImageUpdateRequestDataToJSON(value.data),
    };
}
