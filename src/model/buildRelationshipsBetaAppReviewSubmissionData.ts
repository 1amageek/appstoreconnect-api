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

export class BuildRelationshipsBetaAppReviewSubmissionData {
    'type': BuildRelationshipsBetaAppReviewSubmissionData.TypeEnum;
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BuildRelationshipsBetaAppReviewSubmissionData.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BuildRelationshipsBetaAppReviewSubmissionData.attributeTypeMap;
    }
}

export namespace BuildRelationshipsBetaAppReviewSubmissionData {
    export enum TypeEnum {
        BetaAppReviewSubmissions = <any> 'betaAppReviewSubmissions'
    }
}
