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

export class AppCustomProductPageLocalizationInlineCreateAttributes {
    'locale': string;
    'promotionalText'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "promotionalText",
            "baseName": "promotionalText",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AppCustomProductPageLocalizationInlineCreateAttributes.attributeTypeMap;
    }
}

