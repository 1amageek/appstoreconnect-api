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
import type { AppClipAdvancedExperienceImageCreateRequestData } from './AppClipAdvancedExperienceImageCreateRequestData';
import {
    AppClipAdvancedExperienceImageCreateRequestDataFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestData';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceImageCreateRequest
 */
export interface AppClipAdvancedExperienceImageCreateRequest {
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestData}
     * @memberof AppClipAdvancedExperienceImageCreateRequest
     */
    data: AppClipAdvancedExperienceImageCreateRequestData;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceImageCreateRequest interface.
 */
export function instanceOfAppClipAdvancedExperienceImageCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceImageCreateRequestFromJSON(json: any): AppClipAdvancedExperienceImageCreateRequest {
    return AppClipAdvancedExperienceImageCreateRequestFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceImageCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipAdvancedExperienceImageCreateRequestDataFromJSON(json['data']),
    };
}

export function AppClipAdvancedExperienceImageCreateRequestToJSON(value?: AppClipAdvancedExperienceImageCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipAdvancedExperienceImageCreateRequestDataToJSON(value.data),
    };
}

