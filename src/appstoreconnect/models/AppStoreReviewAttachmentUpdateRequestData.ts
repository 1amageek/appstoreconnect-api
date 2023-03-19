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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON,
} from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentUpdateRequestData
 */
export interface AppStoreReviewAttachmentUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    type: AppStoreReviewAttachmentUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof AppStoreReviewAttachmentUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppStoreReviewAttachmentUpdateRequestDataTypeEnum = {
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewAttachmentUpdateRequestDataTypeEnum = typeof AppStoreReviewAttachmentUpdateRequestDataTypeEnum[keyof typeof AppStoreReviewAttachmentUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreReviewAttachmentUpdateRequestData interface.
 */
export function instanceOfAppStoreReviewAttachmentUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreReviewAttachmentUpdateRequestDataFromJSON(json: any): AppStoreReviewAttachmentUpdateRequestData {
    return AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppStoreReviewAttachmentUpdateRequestDataToJSON(value?: AppStoreReviewAttachmentUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value.attributes),
    };
}
