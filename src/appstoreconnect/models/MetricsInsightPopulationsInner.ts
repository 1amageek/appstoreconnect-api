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
 * @interface MetricsInsightPopulationsInner
 */
export interface MetricsInsightPopulationsInner {
    /**
     * 
     * @type {number}
     * @memberof MetricsInsightPopulationsInner
     */
    deltaPercentage?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricsInsightPopulationsInner
     */
    percentile?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricsInsightPopulationsInner
     */
    summaryString?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricsInsightPopulationsInner
     */
    referenceAverageValue?: number;
    /**
     * 
     * @type {number}
     * @memberof MetricsInsightPopulationsInner
     */
    latestVersionValue?: number;
    /**
     * 
     * @type {string}
     * @memberof MetricsInsightPopulationsInner
     */
    device?: string;
}

/**
 * Check if a given object implements the MetricsInsightPopulationsInner interface.
 */
export function instanceOfMetricsInsightPopulationsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetricsInsightPopulationsInnerFromJSON(json: any): MetricsInsightPopulationsInner {
    return MetricsInsightPopulationsInnerFromJSONTyped(json, false);
}

export function MetricsInsightPopulationsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetricsInsightPopulationsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deltaPercentage': !exists(json, 'deltaPercentage') ? undefined : json['deltaPercentage'],
        'percentile': !exists(json, 'percentile') ? undefined : json['percentile'],
        'summaryString': !exists(json, 'summaryString') ? undefined : json['summaryString'],
        'referenceAverageValue': !exists(json, 'referenceAverageValue') ? undefined : json['referenceAverageValue'],
        'latestVersionValue': !exists(json, 'latestVersionValue') ? undefined : json['latestVersionValue'],
        'device': !exists(json, 'device') ? undefined : json['device'],
    };
}

export function MetricsInsightPopulationsInnerToJSON(value?: MetricsInsightPopulationsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deltaPercentage': value.deltaPercentage,
        'percentile': value.percentile,
        'summaryString': value.summaryString,
        'referenceAverageValue': value.referenceAverageValue,
        'latestVersionValue': value.latestVersionValue,
        'device': value.device,
    };
}

