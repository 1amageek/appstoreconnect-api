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
import type { IconAssetType } from './IconAssetType';
import {
    IconAssetTypeFromJSON,
    IconAssetTypeFromJSONTyped,
    IconAssetTypeToJSON,
} from './IconAssetType';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
} from './ImageAsset';

/**
 * 
 * @export
 * @interface BuildIconAttributes
 */
export interface BuildIconAttributes {
    /**
     * 
     * @type {string}
     * @memberof BuildIconAttributes
     */
    name?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof BuildIconAttributes
     */
    iconAsset?: ImageAsset;
    /**
     * 
     * @type {IconAssetType}
     * @memberof BuildIconAttributes
     */
    iconType?: IconAssetType;
}

/**
 * Check if a given object implements the BuildIconAttributes interface.
 */
export function instanceOfBuildIconAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildIconAttributesFromJSON(json: any): BuildIconAttributes {
    return BuildIconAttributesFromJSONTyped(json, false);
}

export function BuildIconAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIconAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'iconAsset': !exists(json, 'iconAsset') ? undefined : ImageAssetFromJSON(json['iconAsset']),
        'iconType': !exists(json, 'iconType') ? undefined : IconAssetTypeFromJSON(json['iconType']),
    };
}

export function BuildIconAttributesToJSON(value?: BuildIconAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'iconAsset': ImageAssetToJSON(value.iconAsset),
        'iconType': IconAssetTypeToJSON(value.iconType),
    };
}

