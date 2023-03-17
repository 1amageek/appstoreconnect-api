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
import { AppPricePointV3Attributes } from './appPricePointV3Attributes';
import { AppPricePointV3Relationships } from './appPricePointV3Relationships';
import { ResourceLinks } from './resourceLinks';

export class AppPricePointV3 {
    'type': AppPricePointV3.TypeEnum;
    'id': string;
    'attributes'?: AppPricePointV3Attributes;
    'relationships'?: AppPricePointV3Relationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppPricePointV3.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppPricePointV3Attributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppPricePointV3Relationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppPricePointV3.attributeTypeMap;
    }
}

export namespace AppPricePointV3 {
    export enum TypeEnum {
        AppPricePoints = <any> 'appPricePoints'
    }
}
