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

export class InAppPurchaseV2UpdateRequestDataAttributes {
    'name'?: string;
    'reviewNote'?: string;
    'familySharable'?: boolean;
    'availableInAllTerritories'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "reviewNote",
            "baseName": "reviewNote",
            "type": "string"
        },
        {
            "name": "familySharable",
            "baseName": "familySharable",
            "type": "boolean"
        },
        {
            "name": "availableInAllTerritories",
            "baseName": "availableInAllTerritories",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseV2UpdateRequestDataAttributes.attributeTypeMap;
    }
}

