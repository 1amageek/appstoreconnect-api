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
import { Subscription } from './subscription';
import { SubscriptionRelationships } from './subscriptionRelationships';
import { Territory } from './territory';
import { TerritoryAttributes } from './territoryAttributes';

export class SubscriptionAvailabilityResponseIncludedInner {
    'type': SubscriptionAvailabilityResponseIncludedInner.TypeEnum;
    'id': string;
    'attributes'?: TerritoryAttributes;
    'relationships'?: SubscriptionRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionAvailabilityResponseIncludedInner.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "TerritoryAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "SubscriptionRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAvailabilityResponseIncludedInner.attributeTypeMap;
    }
}

export namespace SubscriptionAvailabilityResponseIncludedInner {
    export enum TypeEnum {
        Territories = <any> 'territories'
    }
}
