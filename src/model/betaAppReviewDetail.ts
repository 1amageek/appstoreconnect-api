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
import { AppPreOrderRelationships } from './appPreOrderRelationships';
import { AppStoreReviewDetailAttributes } from './appStoreReviewDetailAttributes';
import { ResourceLinks } from './resourceLinks';

export class BetaAppReviewDetail {
    'type': BetaAppReviewDetail.TypeEnum;
    'id': string;
    'attributes'?: AppStoreReviewDetailAttributes;
    'relationships'?: AppPreOrderRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BetaAppReviewDetail.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppStoreReviewDetailAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppPreOrderRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return BetaAppReviewDetail.attributeTypeMap;
    }
}

export namespace BetaAppReviewDetail {
    export enum TypeEnum {
        BetaAppReviewDetails = <any> 'betaAppReviewDetails'
    }
}
