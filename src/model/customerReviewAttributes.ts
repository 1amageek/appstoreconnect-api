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
import { TerritoryCode } from './territoryCode';

export class CustomerReviewAttributes {
    'rating'?: number;
    'title'?: string;
    'body'?: string;
    'reviewerNickname'?: string;
    'createdDate'?: Date;
    'territory'?: TerritoryCode;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rating",
            "baseName": "rating",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "reviewerNickname",
            "baseName": "reviewerNickname",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        },
        {
            "name": "territory",
            "baseName": "territory",
            "type": "TerritoryCode"
        }    ];

    static getAttributeTypeMap() {
        return CustomerReviewAttributes.attributeTypeMap;
    }
}

export namespace CustomerReviewAttributes {
}
