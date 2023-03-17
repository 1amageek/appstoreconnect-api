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

export class DiagnosticLogsProductDataInnerDiagnosticInsightsInner {
    'insightsURL'?: string;
    'insightsCategory'?: string;
    'insightsString'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "insightsURL",
            "baseName": "insightsURL",
            "type": "string"
        },
        {
            "name": "insightsCategory",
            "baseName": "insightsCategory",
            "type": "string"
        },
        {
            "name": "insightsString",
            "baseName": "insightsString",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DiagnosticLogsProductDataInnerDiagnosticInsightsInner.attributeTypeMap;
    }
}

