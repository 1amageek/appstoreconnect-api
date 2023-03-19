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
import type { AppStoreReviewAttachmentsResponse, AppStoreReviewDetailCreateRequest, AppStoreReviewDetailResponse, AppStoreReviewDetailUpdateRequest, ErrorResponse, } from '../models';
import { AppStoreReviewAttachmentsResponseFromJSON, AppStoreReviewAttachmentsResponseToJSON, AppStoreReviewDetailCreateRequestFromJSON, AppStoreReviewDetailCreateRequestToJSON, AppStoreReviewDetailResponseFromJSON, AppStoreReviewDetailResponseToJSON, AppStoreReviewDetailUpdateRequestFromJSON, AppStoreReviewDetailUpdateRequestToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest {
    id: string;
    fieldsAppStoreReviewDetails?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum>;
    fieldsAppStoreReviewAttachments?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum>;
    limit?: number;
    include?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum>;
}
export interface AppStoreReviewDetailsCreateInstanceRequest {
    appStoreReviewDetailCreateRequest: AppStoreReviewDetailCreateRequest;
}
export interface AppStoreReviewDetailsGetInstanceRequest {
    id: string;
    fieldsAppStoreReviewDetails?: Array<AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum>;
    include?: Array<AppStoreReviewDetailsGetInstanceIncludeEnum>;
    fieldsAppStoreReviewAttachments?: Array<AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum>;
    limitAppStoreReviewAttachments?: number;
}
export interface AppStoreReviewDetailsUpdateInstanceRequest {
    id: string;
    appStoreReviewDetailUpdateRequest: AppStoreReviewDetailUpdateRequest;
}
/**
 *
 */
export class AppStoreReviewDetailsApi extends runtime.BaseAPI {
    /**
     */
    async appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRaw(requestParameters: AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewAttachmentsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsAppStoreReviewDetails) {
            queryParameters['fields[appStoreReviewDetails]'] = requestParameters.fieldsAppStoreReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreReviewAttachments) {
            queryParameters['fields[appStoreReviewAttachments]'] = requestParameters.fieldsAppStoreReviewAttachments.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/appStoreReviewDetails/{id}/appStoreReviewAttachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewAttachmentsResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(requestParameters: AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewAttachmentsResponse> {
        const response = await this.appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appStoreReviewDetailsCreateInstanceRaw(requestParameters: AppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>> {
        if (requestParameters.appStoreReviewDetailCreateRequest === null || requestParameters.appStoreReviewDetailCreateRequest === undefined) {
            throw new runtime.RequiredError('appStoreReviewDetailCreateRequest', 'Required parameter requestParameters.appStoreReviewDetailCreateRequest was null or undefined when calling appStoreReviewDetailsCreateInstance.');
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
            path: `/v1/appStoreReviewDetails`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreReviewDetailCreateRequestToJSON(requestParameters.appStoreReviewDetailCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewDetailResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreReviewDetailsCreateInstance(requestParameters: AppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse> {
        const response = await this.appStoreReviewDetailsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appStoreReviewDetailsGetInstanceRaw(requestParameters: AppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreReviewDetailsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsAppStoreReviewDetails) {
            queryParameters['fields[appStoreReviewDetails]'] = requestParameters.fieldsAppStoreReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreReviewAttachments) {
            queryParameters['fields[appStoreReviewAttachments]'] = requestParameters.fieldsAppStoreReviewAttachments.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitAppStoreReviewAttachments !== undefined) {
            queryParameters['limit[appStoreReviewAttachments]'] = requestParameters.limitAppStoreReviewAttachments;
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
            path: `/v1/appStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewDetailResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreReviewDetailsGetInstance(requestParameters: AppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse> {
        const response = await this.appStoreReviewDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appStoreReviewDetailsUpdateInstanceRaw(requestParameters: AppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreReviewDetailsUpdateInstance.');
        }
        if (requestParameters.appStoreReviewDetailUpdateRequest === null || requestParameters.appStoreReviewDetailUpdateRequest === undefined) {
            throw new runtime.RequiredError('appStoreReviewDetailUpdateRequest', 'Required parameter requestParameters.appStoreReviewDetailUpdateRequest was null or undefined when calling appStoreReviewDetailsUpdateInstance.');
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
            path: `/v1/appStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreReviewDetailUpdateRequestToJSON(requestParameters.appStoreReviewDetailUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewDetailResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreReviewDetailsUpdateInstance(requestParameters: AppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse> {
        const response = await this.appStoreReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum = 'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes';;
/**
 * @export
 */
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum = 'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded';;
/**
 * @export
 */
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum = 'appStoreReviewDetail';;
/**
 * @export
 */
export type AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum = 'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes';;
/**
 * @export
 */
export type AppStoreReviewDetailsGetInstanceIncludeEnum = 'appStoreReviewAttachments' | 'appStoreVersion';;
/**
 * @export
 */
export type AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum = 'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded';;