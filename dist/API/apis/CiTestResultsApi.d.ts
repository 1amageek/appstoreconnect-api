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
import * as runtime from '../runtime';
import type { CiTestResultResponse } from '../models';
export interface CiTestResultsGetInstanceRequest {
    id: string;
    fieldsCiTestResults?: Array<CiTestResultsGetInstanceFieldsCiTestResultsEnum>;
}
/**
 *
 */
export declare class CiTestResultsApi extends runtime.BaseAPI {
    /**
     */
    ciTestResultsGetInstanceRaw(requestParameters: CiTestResultsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiTestResultResponse>>;
    /**
     */
    ciTestResultsGetInstance(requestParameters: CiTestResultsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiTestResultResponse>;
}
/**
 * @export
 */
export type CiTestResultsGetInstanceFieldsCiTestResultsEnum = 'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status';
