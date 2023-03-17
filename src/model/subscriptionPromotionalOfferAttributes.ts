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
import { SubscriptionOfferDuration } from './subscriptionOfferDuration';
import { SubscriptionOfferMode } from './subscriptionOfferMode';

export class SubscriptionPromotionalOfferAttributes {
    'name'?: string;
    'offerCode'?: string;
    'duration'?: SubscriptionOfferDuration;
    'offerMode'?: SubscriptionOfferMode;
    'numberOfPeriods'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "offerCode",
            "baseName": "offerCode",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "SubscriptionOfferDuration"
        },
        {
            "name": "offerMode",
            "baseName": "offerMode",
            "type": "SubscriptionOfferMode"
        },
        {
            "name": "numberOfPeriods",
            "baseName": "numberOfPeriods",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionPromotionalOfferAttributes.attributeTypeMap;
    }
}

export namespace SubscriptionPromotionalOfferAttributes {
}
