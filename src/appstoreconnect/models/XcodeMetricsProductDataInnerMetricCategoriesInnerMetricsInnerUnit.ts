/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit
 */
export interface XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    /**
     * 
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit
     */
    identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit
     */
    displayName?: string;
}

/**
 * Check if a given object implements the XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit interface.
 */
export function instanceOfXcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSON(json: any): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    return XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped(json, false);
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifier': !exists(json, 'identifier') ? undefined : json['identifier'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
    };
}

export function XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnitToJSON(value?: XcodeMetricsProductDataInnerMetricCategoriesInnerMetricsInnerUnit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier': value.identifier,
        'displayName': value.displayName,
    };
}

