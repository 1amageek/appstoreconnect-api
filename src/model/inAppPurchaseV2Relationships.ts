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
import { InAppPurchaseV2RelationshipsAppStoreReviewScreenshot } from './inAppPurchaseV2RelationshipsAppStoreReviewScreenshot';
import { InAppPurchaseV2RelationshipsContent } from './inAppPurchaseV2RelationshipsContent';
import { InAppPurchaseV2RelationshipsIapPriceSchedule } from './inAppPurchaseV2RelationshipsIapPriceSchedule';
import { InAppPurchaseV2RelationshipsInAppPurchaseLocalizations } from './inAppPurchaseV2RelationshipsInAppPurchaseLocalizations';
import { InAppPurchaseV2RelationshipsPricePoints } from './inAppPurchaseV2RelationshipsPricePoints';
import { InAppPurchaseV2RelationshipsPromotedPurchase } from './inAppPurchaseV2RelationshipsPromotedPurchase';

export class InAppPurchaseV2Relationships {
    'inAppPurchaseLocalizations'?: InAppPurchaseV2RelationshipsInAppPurchaseLocalizations;
    'pricePoints'?: InAppPurchaseV2RelationshipsPricePoints;
    'content'?: InAppPurchaseV2RelationshipsContent;
    'appStoreReviewScreenshot'?: InAppPurchaseV2RelationshipsAppStoreReviewScreenshot;
    'promotedPurchase'?: InAppPurchaseV2RelationshipsPromotedPurchase;
    'iapPriceSchedule'?: InAppPurchaseV2RelationshipsIapPriceSchedule;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inAppPurchaseLocalizations",
            "baseName": "inAppPurchaseLocalizations",
            "type": "InAppPurchaseV2RelationshipsInAppPurchaseLocalizations"
        },
        {
            "name": "pricePoints",
            "baseName": "pricePoints",
            "type": "InAppPurchaseV2RelationshipsPricePoints"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "InAppPurchaseV2RelationshipsContent"
        },
        {
            "name": "appStoreReviewScreenshot",
            "baseName": "appStoreReviewScreenshot",
            "type": "InAppPurchaseV2RelationshipsAppStoreReviewScreenshot"
        },
        {
            "name": "promotedPurchase",
            "baseName": "promotedPurchase",
            "type": "InAppPurchaseV2RelationshipsPromotedPurchase"
        },
        {
            "name": "iapPriceSchedule",
            "baseName": "iapPriceSchedule",
            "type": "InAppPurchaseV2RelationshipsIapPriceSchedule"
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseV2Relationships.attributeTypeMap;
    }
}

