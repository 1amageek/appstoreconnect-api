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
import { CiBranchPatterns } from './ciBranchPatterns';
import { CiFilesAndFoldersRule } from './ciFilesAndFoldersRule';

export class CiPullRequestStartCondition {
    'source'?: CiBranchPatterns;
    'destination'?: CiBranchPatterns;
    'filesAndFoldersRule'?: CiFilesAndFoldersRule;
    'autoCancel'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "CiBranchPatterns"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "CiBranchPatterns"
        },
        {
            "name": "filesAndFoldersRule",
            "baseName": "filesAndFoldersRule",
            "type": "CiFilesAndFoldersRule"
        },
        {
            "name": "autoCancel",
            "baseName": "autoCancel",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CiPullRequestStartCondition.attributeTypeMap;
    }
}

