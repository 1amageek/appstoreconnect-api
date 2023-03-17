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

export class InAppPurchaseLocalizationAttributes {
    'name'?: string;
    'locale'?: string;
    'description'?: string;
    'state'?: InAppPurchaseLocalizationAttributes.StateEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "InAppPurchaseLocalizationAttributes.StateEnum"
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseLocalizationAttributes.attributeTypeMap;
    }
}

export namespace InAppPurchaseLocalizationAttributes {
    export enum StateEnum {
        PrepareForSubmission = <any> 'PREPARE_FOR_SUBMISSION',
        WaitingForReview = <any> 'WAITING_FOR_REVIEW',
        Approved = <any> 'APPROVED',
        Rejected = <any> 'REJECTED'
    }
}
