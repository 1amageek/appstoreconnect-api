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
import { AppClipAdvancedExperienceRelationshipsHeaderImageData } from './appClipAdvancedExperienceRelationshipsHeaderImageData';

export class AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage {
    'data': AppClipAdvancedExperienceRelationshipsHeaderImageData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppClipAdvancedExperienceRelationshipsHeaderImageData"
        }    ];

    static getAttributeTypeMap() {
        return AppClipAdvancedExperienceCreateRequestDataRelationshipsHeaderImage.attributeTypeMap;
    }
}

