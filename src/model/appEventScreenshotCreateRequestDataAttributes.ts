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

import { RequestFile } from './models';
import { AppEventAssetType } from './appEventAssetType';

export class AppEventScreenshotCreateRequestDataAttributes {
    'fileSize': number;
    'fileName': string;
    'appEventAssetType': AppEventAssetType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileSize",
            "baseName": "fileSize",
            "type": "number"
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "appEventAssetType",
            "baseName": "appEventAssetType",
            "type": "AppEventAssetType"
        }    ];

    static getAttributeTypeMap() {
        return AppEventScreenshotCreateRequestDataAttributes.attributeTypeMap;
    }
}

export namespace AppEventScreenshotCreateRequestDataAttributes {
}
