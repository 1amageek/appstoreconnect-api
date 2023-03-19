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
 * @interface PromotedPurchaseImageUpdateRequestData
 */
export interface PromotedPurchaseImageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    type: PromotedPurchaseImageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof PromotedPurchaseImageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const PromotedPurchaseImageUpdateRequestDataTypeEnum = {
    PromotedPurchaseImages: 'promotedPurchaseImages'
} as const;
export type PromotedPurchaseImageUpdateRequestDataTypeEnum = typeof PromotedPurchaseImageUpdateRequestDataTypeEnum[keyof typeof PromotedPurchaseImageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseImageUpdateRequestData interface.
 */
export function instanceOfPromotedPurchaseImageUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PromotedPurchaseImageUpdateRequestDataFromJSON(json: any): PromotedPurchaseImageUpdateRequestData {
    return PromotedPurchaseImageUpdateRequestDataFromJSONTyped(json, false);
}

export function PromotedPurchaseImageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function PromotedPurchaseImageUpdateRequestDataToJSON(value?: PromotedPurchaseImageUpdateRequestData | null): any {
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

