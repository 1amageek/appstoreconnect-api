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
import { AppInfoLocalizationCreateRequestDataAttributes } from './appInfoLocalizationCreateRequestDataAttributes';
import { AppInfoLocalizationCreateRequestDataRelationships } from './appInfoLocalizationCreateRequestDataRelationships';

export class AppInfoLocalizationCreateRequestData {
    'type': AppInfoLocalizationCreateRequestData.TypeEnum;
    'attributes': AppInfoLocalizationCreateRequestDataAttributes;
    'relationships': AppInfoLocalizationCreateRequestDataRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppInfoLocalizationCreateRequestData.TypeEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppInfoLocalizationCreateRequestDataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppInfoLocalizationCreateRequestDataRelationships"
        }    ];

    static getAttributeTypeMap() {
        return AppInfoLocalizationCreateRequestData.attributeTypeMap;
    }
}

export namespace AppInfoLocalizationCreateRequestData {
    export enum TypeEnum {
        AppInfoLocalizations = <any> 'appInfoLocalizations'
    }
}
