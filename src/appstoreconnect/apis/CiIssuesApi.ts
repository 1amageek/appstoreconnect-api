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
import * as runtime from '../runtime';
import type { CiIssueResponse, ErrorResponse, } from '../models';
import { CiIssueResponseFromJSON, CiIssueResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface CiIssuesGetInstanceRequest {
    id: string;
    fieldsCiIssues?: Array<CiIssuesGetInstanceFieldsCiIssuesEnum>;
}
/**
 *
 */
export class CiIssuesApi extends runtime.BaseAPI {
    /**
     */
    async ciIssuesGetInstanceRaw(requestParameters: CiIssuesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiIssueResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciIssuesGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCiIssues) {
            queryParameters['fields[ciIssues]'] = requestParameters.fieldsCiIssues.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        const headerParameters: runtime.HTTPHeaders = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciIssues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiIssueResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciIssuesGetInstance(requestParameters: CiIssuesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiIssueResponse> {
        const response = await this.ciIssuesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type CiIssuesGetInstanceFieldsCiIssuesEnum = 'category' | 'fileSource' | 'issueType' | 'message';;
