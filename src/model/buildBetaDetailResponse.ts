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
import { Build } from './build';
import { BuildBetaDetail } from './buildBetaDetail';
import { DocumentLinks } from './documentLinks';

export class BuildBetaDetailResponse {
    'data': BuildBetaDetail;
    'included'?: Array<Build>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BuildBetaDetail"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<Build>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return BuildBetaDetailResponse.attributeTypeMap;
    }
}

