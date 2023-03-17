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

export class AppEventVideoClipCreateRequestDataAttributes {
    'fileSize': number;
    'fileName': string;
    'previewFrameTimeCode'?: string;
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
            "name": "previewFrameTimeCode",
            "baseName": "previewFrameTimeCode",
            "type": "string"
        },
        {
            "name": "appEventAssetType",
            "baseName": "appEventAssetType",
            "type": "AppEventAssetType"
        }    ];

    static getAttributeTypeMap() {
        return AppEventVideoClipCreateRequestDataAttributes.attributeTypeMap;
    }
}

export namespace AppEventVideoClipCreateRequestDataAttributes {
}
