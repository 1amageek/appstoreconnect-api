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
import { InAppPurchaseLocalizationCreateRequestDataAttributes } from './inAppPurchaseLocalizationCreateRequestDataAttributes';
import { SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships } from './subscriptionAppStoreReviewScreenshotCreateRequestDataRelationships';

export class SubscriptionLocalizationCreateRequestData {
    'type': SubscriptionLocalizationCreateRequestData.TypeEnum;
    'attributes': InAppPurchaseLocalizationCreateRequestDataAttributes;
    'relationships': SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionLocalizationCreateRequestData.TypeEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "InAppPurchaseLocalizationCreateRequestDataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionAppStoreReviewScreenshotCreateRequestDataRelationships"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionLocalizationCreateRequestData.attributeTypeMap;
    }
}

export namespace SubscriptionLocalizationCreateRequestData {
    export enum TypeEnum {
        SubscriptionLocalizations = <any> 'subscriptionLocalizations'
    }
}
