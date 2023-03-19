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
import type { BuildBetaNotificationCreateRequest, BuildBetaNotificationResponse, ErrorResponse, } from '../models';
import { BuildBetaNotificationCreateRequestFromJSON, BuildBetaNotificationCreateRequestToJSON, BuildBetaNotificationResponseFromJSON, BuildBetaNotificationResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface BuildBetaNotificationsCreateInstanceRequest {
    buildBetaNotificationCreateRequest: BuildBetaNotificationCreateRequest;
}
/**
 *
 */
export class BuildBetaNotificationsApi extends runtime.BaseAPI {
    /**
     */
    async buildBetaNotificationsCreateInstanceRaw(requestParameters: BuildBetaNotificationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBetaNotificationResponse>> {
        if (requestParameters.buildBetaNotificationCreateRequest === null || requestParameters.buildBetaNotificationCreateRequest === undefined) {
            throw new runtime.RequiredError('buildBetaNotificationCreateRequest', 'Required parameter requestParameters.buildBetaNotificationCreateRequest was null or undefined when calling buildBetaNotificationsCreateInstance.');
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
            path: `/v1/buildBetaNotifications`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BuildBetaNotificationCreateRequestToJSON(requestParameters.buildBetaNotificationCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBetaNotificationResponseFromJSON(jsonValue));
    }
    /**
     */
    async buildBetaNotificationsCreateInstance(requestParameters: BuildBetaNotificationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBetaNotificationResponse> {
        const response = await this.buildBetaNotificationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
