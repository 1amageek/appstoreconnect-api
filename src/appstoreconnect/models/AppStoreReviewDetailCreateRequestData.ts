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
import type { AppStoreReviewDetailAttributes } from './AppStoreReviewDetailAttributes';
import {
    AppStoreReviewDetailAttributesFromJSON,
    AppStoreReviewDetailAttributesFromJSONTyped,
    AppStoreReviewDetailAttributesToJSON,
} from './AppStoreReviewDetailAttributes';
import type { AppStoreReviewDetailCreateRequestDataRelationships } from './AppStoreReviewDetailCreateRequestDataRelationships';
import {
    AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON,
    AppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped,
    AppStoreReviewDetailCreateRequestDataRelationshipsToJSON,
} from './AppStoreReviewDetailCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppStoreReviewDetailCreateRequestData
 */
export interface AppStoreReviewDetailCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewDetailCreateRequestData
     */
    type: AppStoreReviewDetailCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppStoreReviewDetailAttributes}
     * @memberof AppStoreReviewDetailCreateRequestData
     */
    attributes?: AppStoreReviewDetailAttributes;
    /**
     * 
     * @type {AppStoreReviewDetailCreateRequestDataRelationships}
     * @memberof AppStoreReviewDetailCreateRequestData
     */
    relationships: AppStoreReviewDetailCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreReviewDetailCreateRequestDataTypeEnum = {
    AppStoreReviewDetails: 'appStoreReviewDetails'
} as const;
export type AppStoreReviewDetailCreateRequestDataTypeEnum = typeof AppStoreReviewDetailCreateRequestDataTypeEnum[keyof typeof AppStoreReviewDetailCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewDetailCreateRequestData interface.
 */
export function instanceOfAppStoreReviewDetailCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreReviewDetailCreateRequestDataFromJSON(json: any): AppStoreReviewDetailCreateRequestData {
    return AppStoreReviewDetailCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreReviewDetailCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreReviewDetailAttributesFromJSON(json['attributes']),
        'relationships': AppStoreReviewDetailCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreReviewDetailCreateRequestDataToJSON(value?: AppStoreReviewDetailCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppStoreReviewDetailAttributesToJSON(value.attributes),
        'relationships': AppStoreReviewDetailCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

