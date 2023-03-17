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
import { CiBranchPatternsPatternsInner } from './ciBranchPatternsPatternsInner';

export class CiTagPatterns {
    'isAllMatch'?: boolean;
    'patterns'?: Array<CiBranchPatternsPatternsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isAllMatch",
            "baseName": "isAllMatch",
            "type": "boolean"
        },
        {
            "name": "patterns",
            "baseName": "patterns",
            "type": "Array<CiBranchPatternsPatternsInner>"
        }    ];

    static getAttributeTypeMap() {
        return CiTagPatterns.attributeTypeMap;
    }
}

