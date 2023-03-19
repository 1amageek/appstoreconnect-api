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
import type { AppPriceScheduleCreateRequestData } from './AppPriceScheduleCreateRequestData';
import {
    AppPriceScheduleCreateRequestDataFromJSON,
    AppPriceScheduleCreateRequestDataFromJSONTyped,
    AppPriceScheduleCreateRequestDataToJSON,
} from './AppPriceScheduleCreateRequestData';
import type { AppPriceScheduleCreateRequestIncludedInner } from './AppPriceScheduleCreateRequestIncludedInner';
import {
    AppPriceScheduleCreateRequestIncludedInnerFromJSON,
    AppPriceScheduleCreateRequestIncludedInnerFromJSONTyped,
    AppPriceScheduleCreateRequestIncludedInnerToJSON,
} from './AppPriceScheduleCreateRequestIncludedInner';

/**
 * 
 * @export
 * @interface AppPriceScheduleCreateRequest
 */
export interface AppPriceScheduleCreateRequest {
    /**
     * 
     * @type {AppPriceScheduleCreateRequestData}
     * @memberof AppPriceScheduleCreateRequest
     */
    data: AppPriceScheduleCreateRequestData;
    /**
     * 
     * @type {Array<AppPriceScheduleCreateRequestIncludedInner>}
     * @memberof AppPriceScheduleCreateRequest
     */
    included?: Array<AppPriceScheduleCreateRequestIncludedInner>;
}

/**
 * Check if a given object implements the AppPriceScheduleCreateRequest interface.
 */
export function instanceOfAppPriceScheduleCreateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppPriceScheduleCreateRequestFromJSON(json: any): AppPriceScheduleCreateRequest {
    return AppPriceScheduleCreateRequestFromJSONTyped(json, false);
}

export function AppPriceScheduleCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceScheduleCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPriceScheduleCreateRequestDataFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppPriceScheduleCreateRequestIncludedInnerFromJSON)),
    };
}

export function AppPriceScheduleCreateRequestToJSON(value?: AppPriceScheduleCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPriceScheduleCreateRequestDataToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppPriceScheduleCreateRequestIncludedInnerToJSON)),
    };
}
