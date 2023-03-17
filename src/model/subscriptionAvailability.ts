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
import { AppAvailabilityAttributes } from './appAvailabilityAttributes';
import { ResourceLinks } from './resourceLinks';
import { SubscriptionAvailabilityRelationships } from './subscriptionAvailabilityRelationships';

export class SubscriptionAvailability {
    'type': SubscriptionAvailability.TypeEnum;
    'id': string;
    'attributes'?: AppAvailabilityAttributes;
    'relationships'?: SubscriptionAvailabilityRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionAvailability.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppAvailabilityAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionAvailabilityRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAvailability.attributeTypeMap;
    }
}

export namespace SubscriptionAvailability {
    export enum TypeEnum {
        SubscriptionAvailabilities = <any> 'subscriptionAvailabilities'
    }
}
