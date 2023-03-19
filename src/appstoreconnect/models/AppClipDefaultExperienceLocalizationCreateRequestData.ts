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
import type { AppClipAppStoreReviewDetailCreateRequestDataRelationships } from './AppClipAppStoreReviewDetailCreateRequestDataRelationships';
import {
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSON,
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSONTyped,
    AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSON,
} from './AppClipAppStoreReviewDetailCreateRequestDataRelationships';
import type { AppClipDefaultExperienceLocalizationCreateRequestDataAttributes } from './AppClipDefaultExperienceLocalizationCreateRequestDataAttributes';
import {
    AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSON,
    AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSONTyped,
    AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSON,
} from './AppClipDefaultExperienceLocalizationCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationCreateRequestData
 */
export interface AppClipDefaultExperienceLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestData
     */
    type: AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationCreateRequestDataAttributes}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestData
     */
    attributes: AppClipDefaultExperienceLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailCreateRequestDataRelationships}
     * @memberof AppClipDefaultExperienceLocalizationCreateRequestData
     */
    relationships: AppClipAppStoreReviewDetailCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum = {
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations'
} as const;
export type AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum = typeof AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum[keyof typeof AppClipDefaultExperienceLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationCreateRequestData interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataFromJSON(json: any): AppClipDefaultExperienceLocalizationCreateRequestData {
    return AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipDefaultExperienceLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppClipAppStoreReviewDetailCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppClipDefaultExperienceLocalizationCreateRequestDataToJSON(value?: AppClipDefaultExperienceLocalizationCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipDefaultExperienceLocalizationCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppClipAppStoreReviewDetailCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

