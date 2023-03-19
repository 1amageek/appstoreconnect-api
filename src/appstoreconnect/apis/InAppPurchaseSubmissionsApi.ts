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
import type { ErrorResponse, InAppPurchaseSubmissionCreateRequest, InAppPurchaseSubmissionResponse, } from '../models';
import { ErrorResponseFromJSON, ErrorResponseToJSON, InAppPurchaseSubmissionCreateRequestFromJSON, InAppPurchaseSubmissionCreateRequestToJSON, InAppPurchaseSubmissionResponseFromJSON, InAppPurchaseSubmissionResponseToJSON, } from '../models';
export interface InAppPurchaseSubmissionsCreateInstanceRequest {
    inAppPurchaseSubmissionCreateRequest: InAppPurchaseSubmissionCreateRequest;
}
/**
 *
 */
export class InAppPurchaseSubmissionsApi extends runtime.BaseAPI {
    /**
     */
    async inAppPurchaseSubmissionsCreateInstanceRaw(requestParameters: InAppPurchaseSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseSubmissionResponse>> {
        if (requestParameters.inAppPurchaseSubmissionCreateRequest === null || requestParameters.inAppPurchaseSubmissionCreateRequest === undefined) {
            throw new runtime.RequiredError('inAppPurchaseSubmissionCreateRequest', 'Required parameter requestParameters.inAppPurchaseSubmissionCreateRequest was null or undefined when calling inAppPurchaseSubmissionsCreateInstance.');
        }
        const queryParameters: any = {};
        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/inAppPurchaseSubmissions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InAppPurchaseSubmissionCreateRequestToJSON(requestParameters.inAppPurchaseSubmissionCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseSubmissionResponseFromJSON(jsonValue));
    }
    /**
     */
    async inAppPurchaseSubmissionsCreateInstance(requestParameters: InAppPurchaseSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseSubmissionResponse> {
        const response = await this.inAppPurchaseSubmissionsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}