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
import { DocumentLinks } from './documentLinks';
import { PromotedPurchase } from './promotedPurchase';
import { PromotedPurchasesResponseIncludedInner } from './promotedPurchasesResponseIncludedInner';

export class PromotedPurchaseResponse {
    'data': PromotedPurchase;
    'included'?: Array<PromotedPurchasesResponseIncludedInner>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PromotedPurchase"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<PromotedPurchasesResponseIncludedInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return PromotedPurchaseResponse.attributeTypeMap;
    }
}

