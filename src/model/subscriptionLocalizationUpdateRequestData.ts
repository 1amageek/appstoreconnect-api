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
import { InAppPurchaseLocalizationUpdateRequestDataAttributes } from './inAppPurchaseLocalizationUpdateRequestDataAttributes';

export class SubscriptionLocalizationUpdateRequestData {
    'type': SubscriptionLocalizationUpdateRequestData.TypeEnum;
    'id': string;
    'attributes'?: InAppPurchaseLocalizationUpdateRequestDataAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionLocalizationUpdateRequestData.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "InAppPurchaseLocalizationUpdateRequestDataAttributes"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionLocalizationUpdateRequestData.attributeTypeMap;
    }
}

export namespace SubscriptionLocalizationUpdateRequestData {
    export enum TypeEnum {
        SubscriptionLocalizations = <any> 'subscriptionLocalizations'
    }
}
