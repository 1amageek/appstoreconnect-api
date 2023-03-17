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
import { CiMacOsVersion } from './ciMacOsVersion';
import { CiXcodeVersion } from './ciXcodeVersion';
import { DocumentLinks } from './documentLinks';

export class CiMacOsVersionResponse {
    'data': CiMacOsVersion;
    'included'?: Array<CiXcodeVersion>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CiMacOsVersion"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<CiXcodeVersion>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return CiMacOsVersionResponse.attributeTypeMap;
    }
}

