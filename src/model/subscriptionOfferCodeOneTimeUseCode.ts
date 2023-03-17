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
import { ResourceLinks } from './resourceLinks';
import { SubscriptionOfferCodeCustomCodeRelationships } from './subscriptionOfferCodeCustomCodeRelationships';
import { SubscriptionOfferCodeOneTimeUseCodeAttributes } from './subscriptionOfferCodeOneTimeUseCodeAttributes';

export class SubscriptionOfferCodeOneTimeUseCode {
    'type': SubscriptionOfferCodeOneTimeUseCode.TypeEnum;
    'id': string;
    'attributes'?: SubscriptionOfferCodeOneTimeUseCodeAttributes;
    'relationships'?: SubscriptionOfferCodeCustomCodeRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionOfferCodeOneTimeUseCode.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SubscriptionOfferCodeOneTimeUseCodeAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionOfferCodeCustomCodeRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionOfferCodeOneTimeUseCode.attributeTypeMap;
    }
}

export namespace SubscriptionOfferCodeOneTimeUseCode {
    export enum TypeEnum {
        SubscriptionOfferCodeOneTimeUseCodes = <any> 'subscriptionOfferCodeOneTimeUseCodes'
    }
}
