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
import { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner } from './appCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';

export class AppPreviewCreateRequestDataRelationshipsAppPreviewSet {
    'data': AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner"
        }    ];

    static getAttributeTypeMap() {
        return AppPreviewCreateRequestDataRelationshipsAppPreviewSet.attributeTypeMap;
    }
}

