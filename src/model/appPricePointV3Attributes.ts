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

export class AppPricePointV3Attributes {
    'customerPrice'?: string;
    'proceeds'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customerPrice",
            "baseName": "customerPrice",
            "type": "string"
        },
        {
            "name": "proceeds",
            "baseName": "proceeds",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AppPricePointV3Attributes.attributeTypeMap;
    }
}

