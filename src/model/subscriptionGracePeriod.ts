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
import { SubscriptionGracePeriodAttributes } from './subscriptionGracePeriodAttributes';

export class SubscriptionGracePeriod {
    'type': SubscriptionGracePeriod.TypeEnum;
    'id': string;
    'attributes'?: SubscriptionGracePeriodAttributes;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionGracePeriod.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "SubscriptionGracePeriodAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionGracePeriod.attributeTypeMap;
    }
}

export namespace SubscriptionGracePeriod {
    export enum TypeEnum {
        SubscriptionGracePeriods = <any> 'subscriptionGracePeriods'
    }
}
