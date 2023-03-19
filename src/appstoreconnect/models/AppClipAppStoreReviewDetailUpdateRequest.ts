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
import type { AppClipAppStoreReviewDetailUpdateRequestData } from './AppClipAppStoreReviewDetailUpdateRequestData';
import {
    AppClipAppStoreReviewDetailUpdateRequestDataFromJSON,
    AppClipAppStoreReviewDetailUpdateRequestDataFromJSONTyped,
    AppClipAppStoreReviewDetailUpdateRequestDataToJSON,
} from './AppClipAppStoreReviewDetailUpdateRequestData';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailUpdateRequest
 */
export interface AppClipAppStoreReviewDetailUpdateRequest {
    /**
     * 
     * @type {AppClipAppStoreReviewDetailUpdateRequestData}
     * @memberof AppClipAppStoreReviewDetailUpdateRequest
     */
    data: AppClipAppStoreReviewDetailUpdateRequestData;
}

/**
 * Check if a given object implements the AppClipAppStoreReviewDetailUpdateRequest interface.
 */
export function instanceOfAppClipAppStoreReviewDetailUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppClipAppStoreReviewDetailUpdateRequestFromJSON(json: any): AppClipAppStoreReviewDetailUpdateRequest {
    return AppClipAppStoreReviewDetailUpdateRequestFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppClipAppStoreReviewDetailUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppClipAppStoreReviewDetailUpdateRequestToJSON(value?: AppClipAppStoreReviewDetailUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipAppStoreReviewDetailUpdateRequestDataToJSON(value.data),
    };
}

