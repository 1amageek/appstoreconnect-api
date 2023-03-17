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

export class AppEventLocalizationUpdateRequestDataAttributes {
    'name'?: string;
    'shortDescription'?: string;
    'longDescription'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "shortDescription",
            "baseName": "shortDescription",
            "type": "string"
        },
        {
            "name": "longDescription",
            "baseName": "longDescription",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AppEventLocalizationUpdateRequestDataAttributes.attributeTypeMap;
    }
}

