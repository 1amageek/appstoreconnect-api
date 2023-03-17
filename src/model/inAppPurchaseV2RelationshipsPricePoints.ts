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
import { AppAvailabilityRelationshipsAppLinks } from './appAvailabilityRelationshipsAppLinks';
import { InAppPurchasePriceRelationshipsInAppPurchasePricePointData } from './inAppPurchasePriceRelationshipsInAppPurchasePricePointData';
import { PagingInformation } from './pagingInformation';

export class InAppPurchaseV2RelationshipsPricePoints {
    'links'?: AppAvailabilityRelationshipsAppLinks;
    'meta'?: PagingInformation;
    'data'?: Array<InAppPurchasePriceRelationshipsInAppPurchasePricePointData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "AppAvailabilityRelationshipsAppLinks"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingInformation"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<InAppPurchasePriceRelationshipsInAppPurchasePricePointData>"
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseV2RelationshipsPricePoints.attributeTypeMap;
    }
}

