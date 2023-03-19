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
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import type { AppStoreReviewAttachmentCreateRequestDataRelationships } from './AppStoreReviewAttachmentCreateRequestDataRelationships';
import {
    AppStoreReviewAttachmentCreateRequestDataRelationshipsFromJSON,
    AppStoreReviewAttachmentCreateRequestDataRelationshipsFromJSONTyped,
    AppStoreReviewAttachmentCreateRequestDataRelationshipsToJSON,
} from './AppStoreReviewAttachmentCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentCreateRequestData
 */
export interface AppStoreReviewAttachmentCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    type: AppStoreReviewAttachmentCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {AppStoreReviewAttachmentCreateRequestDataRelationships}
     * @memberof AppStoreReviewAttachmentCreateRequestData
     */
    relationships: AppStoreReviewAttachmentCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreReviewAttachmentCreateRequestDataTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewAttachmentCreateRequestDataTypeEnum = typeof AppStoreReviewAttachmentCreateRequestDataTypeEnum[keyof typeof AppStoreReviewAttachmentCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewAttachmentCreateRequestData interface.
 */
export function instanceOfAppStoreReviewAttachmentCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AppStoreReviewAttachmentCreateRequestDataFromJSON(json: any): AppStoreReviewAttachmentCreateRequestData {
    return AppStoreReviewAttachmentCreateRequestDataFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppStoreReviewAttachmentCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreReviewAttachmentCreateRequestDataToJSON(value?: AppStoreReviewAttachmentCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppStoreReviewAttachmentCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}
