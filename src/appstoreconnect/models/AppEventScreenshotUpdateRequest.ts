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
import type { AppEventScreenshotUpdateRequestData } from './AppEventScreenshotUpdateRequestData';
import {
    AppEventScreenshotUpdateRequestDataFromJSON,
    AppEventScreenshotUpdateRequestDataFromJSONTyped,
    AppEventScreenshotUpdateRequestDataToJSON,
} from './AppEventScreenshotUpdateRequestData';

/**
 * 
 * @export
 * @interface AppEventScreenshotUpdateRequest
 */
export interface AppEventScreenshotUpdateRequest {
    /**
     * 
     * @type {AppEventScreenshotUpdateRequestData}
     * @memberof AppEventScreenshotUpdateRequest
     */
    data: AppEventScreenshotUpdateRequestData;
}

/**
 * Check if a given object implements the AppEventScreenshotUpdateRequest interface.
 */
export function instanceOfAppEventScreenshotUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEventScreenshotUpdateRequestFromJSON(json: any): AppEventScreenshotUpdateRequest {
    return AppEventScreenshotUpdateRequestFromJSONTyped(json, false);
}

export function AppEventScreenshotUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventScreenshotUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppEventScreenshotUpdateRequestToJSON(value?: AppEventScreenshotUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventScreenshotUpdateRequestDataToJSON(value.data),
    };
}
