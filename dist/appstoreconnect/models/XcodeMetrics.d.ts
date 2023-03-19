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
import type { XcodeMetricsInsights } from './XcodeMetricsInsights';
import type { XcodeMetricsProductDataInner } from './XcodeMetricsProductDataInner';
/**
 *
 * @export
 * @interface XcodeMetrics
 */
export interface XcodeMetrics {
    /**
     *
     * @type {string}
     * @memberof XcodeMetrics
     */
    version?: string;
    /**
     *
     * @type {XcodeMetricsInsights}
     * @memberof XcodeMetrics
     */
    insights?: XcodeMetricsInsights;
    /**
     *
     * @type {Array<XcodeMetricsProductDataInner>}
     * @memberof XcodeMetrics
     */
    productData?: Array<XcodeMetricsProductDataInner>;
}
/**
 * Check if a given object implements the XcodeMetrics interface.
 */
export declare function instanceOfXcodeMetrics(value: object): boolean;
export declare function XcodeMetricsFromJSON(json: any): XcodeMetrics;
export declare function XcodeMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): XcodeMetrics;
export declare function XcodeMetricsToJSON(value?: XcodeMetrics | null): any;
