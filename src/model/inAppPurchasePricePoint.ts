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
import { InAppPurchasePricePointAttributes } from './inAppPurchasePricePointAttributes';
import { InAppPurchasePricePointRelationships } from './inAppPurchasePricePointRelationships';
import { ResourceLinks } from './resourceLinks';

export class InAppPurchasePricePoint {
    'type': InAppPurchasePricePoint.TypeEnum;
    'id': string;
    'attributes'?: InAppPurchasePricePointAttributes;
    'relationships'?: InAppPurchasePricePointRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "InAppPurchasePricePoint.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "InAppPurchasePricePointAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "InAppPurchasePricePointRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchasePricePoint.attributeTypeMap;
    }
}

export namespace InAppPurchasePricePoint {
    export enum TypeEnum {
        InAppPurchasePricePoints = <any> 'inAppPurchasePricePoints'
    }
}
