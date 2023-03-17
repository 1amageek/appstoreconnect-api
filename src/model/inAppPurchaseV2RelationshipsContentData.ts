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

export class InAppPurchaseV2RelationshipsContentData {
    'type': InAppPurchaseV2RelationshipsContentData.TypeEnum;
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InAppPurchaseV2RelationshipsContentData.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseV2RelationshipsContentData.attributeTypeMap;
    }
}

export namespace InAppPurchaseV2RelationshipsContentData {
    export enum TypeEnum {
        InAppPurchaseContents = <any> 'inAppPurchaseContents'
    }
}
