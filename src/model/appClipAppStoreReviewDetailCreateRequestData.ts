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
import { AppClipAppStoreReviewDetailAttributes } from './appClipAppStoreReviewDetailAttributes';
import { AppClipAppStoreReviewDetailCreateRequestDataRelationships } from './appClipAppStoreReviewDetailCreateRequestDataRelationships';

export class AppClipAppStoreReviewDetailCreateRequestData {
    'type': AppClipAppStoreReviewDetailCreateRequestData.TypeEnum;
    'attributes'?: AppClipAppStoreReviewDetailAttributes;
    'relationships': AppClipAppStoreReviewDetailCreateRequestDataRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppClipAppStoreReviewDetailCreateRequestData.TypeEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppClipAppStoreReviewDetailAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppClipAppStoreReviewDetailCreateRequestDataRelationships"
        }    ];

    static getAttributeTypeMap() {
        return AppClipAppStoreReviewDetailCreateRequestData.attributeTypeMap;
    }
}

export namespace AppClipAppStoreReviewDetailCreateRequestData {
    export enum TypeEnum {
        AppClipAppStoreReviewDetails = <any> 'appClipAppStoreReviewDetails'
    }
}
