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
import type {
  AppClipAppStoreReviewDetailCreateRequest,
  AppClipAppStoreReviewDetailResponse,
  AppClipAppStoreReviewDetailUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppClipAppStoreReviewDetailCreateRequestFromJSON,
    AppClipAppStoreReviewDetailCreateRequestToJSON,
    AppClipAppStoreReviewDetailResponseFromJSON,
    AppClipAppStoreReviewDetailResponseToJSON,
    AppClipAppStoreReviewDetailUpdateRequestFromJSON,
    AppClipAppStoreReviewDetailUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppClipAppStoreReviewDetailsCreateInstanceRequest {
    appClipAppStoreReviewDetailCreateRequest: AppClipAppStoreReviewDetailCreateRequest;
}

export interface AppClipAppStoreReviewDetailsGetInstanceRequest {
    id: string;
    fieldsAppClipAppStoreReviewDetails?: Array<AppClipAppStoreReviewDetailsGetInstanceFieldsAppClipAppStoreReviewDetailsEnum>;
    include?: Array<AppClipAppStoreReviewDetailsGetInstanceIncludeEnum>;
}

export interface AppClipAppStoreReviewDetailsUpdateInstanceRequest {
    id: string;
    appClipAppStoreReviewDetailUpdateRequest: AppClipAppStoreReviewDetailUpdateRequest;
}

/**
 * 
 */
export class AppClipAppStoreReviewDetailsApi extends runtime.BaseAPI {

    /**
     */
    async appClipAppStoreReviewDetailsCreateInstanceRaw(requestParameters: AppClipAppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAppStoreReviewDetailResponse>> {
        if (requestParameters.appClipAppStoreReviewDetailCreateRequest === null || requestParameters.appClipAppStoreReviewDetailCreateRequest === undefined) {
            throw new runtime.RequiredError('appClipAppStoreReviewDetailCreateRequest','Required parameter requestParameters.appClipAppStoreReviewDetailCreateRequest was null or undefined when calling appClipAppStoreReviewDetailsCreateInstance.');
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
            path: `/v1/appClipAppStoreReviewDetails`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipAppStoreReviewDetailCreateRequestToJSON(requestParameters.appClipAppStoreReviewDetailCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAppStoreReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAppStoreReviewDetailsCreateInstance(requestParameters: AppClipAppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAppStoreReviewDetailResponse> {
        const response = await this.appClipAppStoreReviewDetailsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipAppStoreReviewDetailsGetInstanceRaw(requestParameters: AppClipAppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAppStoreReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipAppStoreReviewDetailsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClipAppStoreReviewDetails) {
            queryParameters['fields[appClipAppStoreReviewDetails]'] = requestParameters.fieldsAppClipAppStoreReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appClipAppStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAppStoreReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAppStoreReviewDetailsGetInstance(requestParameters: AppClipAppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAppStoreReviewDetailResponse> {
        const response = await this.appClipAppStoreReviewDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipAppStoreReviewDetailsUpdateInstanceRaw(requestParameters: AppClipAppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAppStoreReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipAppStoreReviewDetailsUpdateInstance.');
        }

        if (requestParameters.appClipAppStoreReviewDetailUpdateRequest === null || requestParameters.appClipAppStoreReviewDetailUpdateRequest === undefined) {
            throw new runtime.RequiredError('appClipAppStoreReviewDetailUpdateRequest','Required parameter requestParameters.appClipAppStoreReviewDetailUpdateRequest was null or undefined when calling appClipAppStoreReviewDetailsUpdateInstance.');
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
            path: `/v1/appClipAppStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipAppStoreReviewDetailUpdateRequestToJSON(requestParameters.appClipAppStoreReviewDetailUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAppStoreReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAppStoreReviewDetailsUpdateInstance(requestParameters: AppClipAppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAppStoreReviewDetailResponse> {
        const response = await this.appClipAppStoreReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppClipAppStoreReviewDetailsGetInstanceFieldsAppClipAppStoreReviewDetailsEnum = {
    AppClipDefaultExperience: 'appClipDefaultExperience',
    InvocationUrls: 'invocationUrls'
} as const;
export type AppClipAppStoreReviewDetailsGetInstanceFieldsAppClipAppStoreReviewDetailsEnum = typeof AppClipAppStoreReviewDetailsGetInstanceFieldsAppClipAppStoreReviewDetailsEnum[keyof typeof AppClipAppStoreReviewDetailsGetInstanceFieldsAppClipAppStoreReviewDetailsEnum];
/**
 * @export
 */
export const AppClipAppStoreReviewDetailsGetInstanceIncludeEnum = {
    AppClipDefaultExperience: 'appClipDefaultExperience'
} as const;
export type AppClipAppStoreReviewDetailsGetInstanceIncludeEnum = typeof AppClipAppStoreReviewDetailsGetInstanceIncludeEnum[keyof typeof AppClipAppStoreReviewDetailsGetInstanceIncludeEnum];