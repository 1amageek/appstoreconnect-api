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
import type { AppPreviewCreateRequest, AppPreviewResponse, AppPreviewUpdateRequest, ErrorResponse, } from '../models';
import { AppPreviewCreateRequestFromJSON, AppPreviewCreateRequestToJSON, AppPreviewResponseFromJSON, AppPreviewResponseToJSON, AppPreviewUpdateRequestFromJSON, AppPreviewUpdateRequestToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface AppPreviewsCreateInstanceRequest {
    appPreviewCreateRequest: AppPreviewCreateRequest;
}
export interface AppPreviewsDeleteInstanceRequest {
    id: string;
}
export interface AppPreviewsGetInstanceRequest {
    id: string;
    fieldsAppPreviews?: Array<AppPreviewsGetInstanceFieldsAppPreviewsEnum>;
    include?: Array<AppPreviewsGetInstanceIncludeEnum>;
}
export interface AppPreviewsUpdateInstanceRequest {
    id: string;
    appPreviewUpdateRequest: AppPreviewUpdateRequest;
}
/**
 *
 */
export class AppPreviewsApi extends runtime.BaseAPI {
    /**
     */
    async appPreviewsCreateInstanceRaw(requestParameters: AppPreviewsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreviewResponse>> {
        if (requestParameters.appPreviewCreateRequest === null || requestParameters.appPreviewCreateRequest === undefined) {
            throw new runtime.RequiredError('appPreviewCreateRequest', 'Required parameter requestParameters.appPreviewCreateRequest was null or undefined when calling appPreviewsCreateInstance.');
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
            path: `/v1/appPreviews`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppPreviewCreateRequestToJSON(requestParameters.appPreviewCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppPreviewResponseFromJSON(jsonValue));
    }
    /**
     */
    async appPreviewsCreateInstance(requestParameters: AppPreviewsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreviewResponse> {
        const response = await this.appPreviewsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appPreviewsDeleteInstanceRaw(requestParameters: AppPreviewsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appPreviewsDeleteInstance.');
        }
        const queryParameters: any = {};
        const headerParameters: runtime.HTTPHeaders = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/appPreviews/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     */
    async appPreviewsDeleteInstance(requestParameters: AppPreviewsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appPreviewsDeleteInstanceRaw(requestParameters, initOverrides);
    }
    /**
     */
    async appPreviewsGetInstanceRaw(requestParameters: AppPreviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreviewResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appPreviewsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsAppPreviews) {
            queryParameters['fields[appPreviews]'] = requestParameters.fieldsAppPreviews.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appPreviews/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppPreviewResponseFromJSON(jsonValue));
    }
    /**
     */
    async appPreviewsGetInstance(requestParameters: AppPreviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreviewResponse> {
        const response = await this.appPreviewsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appPreviewsUpdateInstanceRaw(requestParameters: AppPreviewsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreviewResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appPreviewsUpdateInstance.');
        }
        if (requestParameters.appPreviewUpdateRequest === null || requestParameters.appPreviewUpdateRequest === undefined) {
            throw new runtime.RequiredError('appPreviewUpdateRequest', 'Required parameter requestParameters.appPreviewUpdateRequest was null or undefined when calling appPreviewsUpdateInstance.');
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
            path: `/v1/appPreviews/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppPreviewUpdateRequestToJSON(requestParameters.appPreviewUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppPreviewResponseFromJSON(jsonValue));
    }
    /**
     */
    async appPreviewsUpdateInstance(requestParameters: AppPreviewsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreviewResponse> {
        const response = await this.appPreviewsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type AppPreviewsGetInstanceFieldsAppPreviewsEnum = 'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl';;
/**
 * @export
 */
export type AppPreviewsGetInstanceIncludeEnum = 'appPreviewSet';;
