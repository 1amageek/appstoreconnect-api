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
import { SubscriptionIntroductoryOfferCreateRequestDataRelationships } from './subscriptionIntroductoryOfferCreateRequestDataRelationships';
import { SubscriptionIntroductoryOfferInlineCreateAttributes } from './subscriptionIntroductoryOfferInlineCreateAttributes';

export class SubscriptionIntroductoryOfferCreateRequestData {
    'type': SubscriptionIntroductoryOfferCreateRequestData.TypeEnum;
    'attributes': SubscriptionIntroductoryOfferInlineCreateAttributes;
    'relationships': SubscriptionIntroductoryOfferCreateRequestDataRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionIntroductoryOfferCreateRequestData.TypeEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SubscriptionIntroductoryOfferInlineCreateAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionIntroductoryOfferCreateRequestDataRelationships"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionIntroductoryOfferCreateRequestData.attributeTypeMap;
    }
}

export namespace SubscriptionIntroductoryOfferCreateRequestData {
    export enum TypeEnum {
        SubscriptionIntroductoryOffers = <any> 'subscriptionIntroductoryOffers'
    }
}
