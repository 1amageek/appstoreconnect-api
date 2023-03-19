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
import type { InAppPurchaseLocalizationUpdateRequestDataAttributes } from './InAppPurchaseLocalizationUpdateRequestDataAttributes';
import {
    InAppPurchaseLocalizationUpdateRequestDataAttributesFromJSON,
    InAppPurchaseLocalizationUpdateRequestDataAttributesFromJSONTyped,
    InAppPurchaseLocalizationUpdateRequestDataAttributesToJSON,
} from './InAppPurchaseLocalizationUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface InAppPurchaseLocalizationUpdateRequestData
 */
export interface InAppPurchaseLocalizationUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationUpdateRequestData
     */
    type: InAppPurchaseLocalizationUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalizationUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseLocalizationUpdateRequestDataAttributes}
     * @memberof InAppPurchaseLocalizationUpdateRequestData
     */
    attributes?: InAppPurchaseLocalizationUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const InAppPurchaseLocalizationUpdateRequestDataTypeEnum = {
    InAppPurchaseLocalizations: 'inAppPurchaseLocalizations'
} as const;
export type InAppPurchaseLocalizationUpdateRequestDataTypeEnum = typeof InAppPurchaseLocalizationUpdateRequestDataTypeEnum[keyof typeof InAppPurchaseLocalizationUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseLocalizationUpdateRequestData interface.
 */
export function instanceOfInAppPurchaseLocalizationUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseLocalizationUpdateRequestDataFromJSON(json: any): InAppPurchaseLocalizationUpdateRequestData {
    return InAppPurchaseLocalizationUpdateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalizationUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : InAppPurchaseLocalizationUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function InAppPurchaseLocalizationUpdateRequestDataToJSON(value?: InAppPurchaseLocalizationUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': InAppPurchaseLocalizationUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

