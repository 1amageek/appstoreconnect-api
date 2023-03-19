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
import type { BundleIdUpdateRequestDataAttributes } from './BundleIdUpdateRequestDataAttributes';
import {
    BundleIdUpdateRequestDataAttributesFromJSON,
    BundleIdUpdateRequestDataAttributesFromJSONTyped,
    BundleIdUpdateRequestDataAttributesToJSON,
} from './BundleIdUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BundleIdUpdateRequestData
 */
export interface BundleIdUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BundleIdUpdateRequestData
     */
    type: BundleIdUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BundleIdUpdateRequestDataAttributes}
     * @memberof BundleIdUpdateRequestData
     */
    attributes?: BundleIdUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const BundleIdUpdateRequestDataTypeEnum = {
    BundleIds: 'bundleIds'
} as const;
export type BundleIdUpdateRequestDataTypeEnum = typeof BundleIdUpdateRequestDataTypeEnum[keyof typeof BundleIdUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BundleIdUpdateRequestData interface.
 */
export function instanceOfBundleIdUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BundleIdUpdateRequestDataFromJSON(json: any): BundleIdUpdateRequestData {
    return BundleIdUpdateRequestDataFromJSONTyped(json, false);
}

export function BundleIdUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BundleIdUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function BundleIdUpdateRequestDataToJSON(value?: BundleIdUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BundleIdUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

