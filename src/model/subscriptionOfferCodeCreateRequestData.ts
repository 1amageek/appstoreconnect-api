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
import { SubscriptionOfferCodeCreateRequestDataAttributes } from './subscriptionOfferCodeCreateRequestDataAttributes';
import { SubscriptionOfferCodeCreateRequestDataRelationships } from './subscriptionOfferCodeCreateRequestDataRelationships';

export class SubscriptionOfferCodeCreateRequestData {
    'type': SubscriptionOfferCodeCreateRequestData.TypeEnum;
    'attributes': SubscriptionOfferCodeCreateRequestDataAttributes;
    'relationships': SubscriptionOfferCodeCreateRequestDataRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionOfferCodeCreateRequestData.TypeEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SubscriptionOfferCodeCreateRequestDataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionOfferCodeCreateRequestDataRelationships"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionOfferCodeCreateRequestData.attributeTypeMap;
    }
}

export namespace SubscriptionOfferCodeCreateRequestData {
    export enum TypeEnum {
        SubscriptionOfferCodes = <any> 'subscriptionOfferCodes'
    }
}
