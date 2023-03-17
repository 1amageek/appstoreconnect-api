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

export class XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner {
    'goalKey'?: string;
    'lowerBound'?: number;
    'upperBound'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "goalKey",
            "baseName": "goalKey",
            "type": "string"
        },
        {
            "name": "lowerBound",
            "baseName": "lowerBound",
            "type": "number"
        },
        {
            "name": "upperBound",
            "baseName": "upperBound",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerGoalKeysInner.attributeTypeMap;
    }
}

