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
import { SubscriptionGroup } from './subscriptionGroup';
import { SubscriptionGroupLocalization } from './subscriptionGroupLocalization';

export class SubscriptionGroupLocalizationResponse {
    'data': SubscriptionGroupLocalization;
    'included'?: Array<SubscriptionGroup>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SubscriptionGroupLocalization"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<SubscriptionGroup>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionGroupLocalizationResponse.attributeTypeMap;
    }
}

