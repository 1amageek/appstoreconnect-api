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
/**
 * 
 * @export
 * @interface ImageAsset
 */
export interface ImageAsset {
    /**
     * 
     * @type {string}
     * @memberof ImageAsset
     */
    templateUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageAsset
     */
    width?: number;
    /**
     * 
     * @type {number}
     * @memberof ImageAsset
     */
    height?: number;
}

/**
 * Check if a given object implements the ImageAsset interface.
 */
export function instanceOfImageAsset(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImageAssetFromJSON(json: any): ImageAsset {
    return ImageAssetFromJSONTyped(json, false);
}

export function ImageAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'templateUrl': !exists(json, 'templateUrl') ? undefined : json['templateUrl'],
        'width': !exists(json, 'width') ? undefined : json['width'],
        'height': !exists(json, 'height') ? undefined : json['height'],
    };
}

export function ImageAssetToJSON(value?: ImageAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'templateUrl': value.templateUrl,
        'width': value.width,
        'height': value.height,
    };
}

