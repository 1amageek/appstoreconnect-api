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
  AppStoreVersionPhasedReleaseCreateRequest,
  AppStoreVersionPhasedReleaseResponse,
  AppStoreVersionPhasedReleaseUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    AppStoreVersionPhasedReleaseCreateRequestFromJSON,
    AppStoreVersionPhasedReleaseCreateRequestToJSON,
    AppStoreVersionPhasedReleaseResponseFromJSON,
    AppStoreVersionPhasedReleaseResponseToJSON,
    AppStoreVersionPhasedReleaseUpdateRequestFromJSON,
    AppStoreVersionPhasedReleaseUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppStoreVersionPhasedReleasesCreateInstanceRequest {
    appStoreVersionPhasedReleaseCreateRequest: AppStoreVersionPhasedReleaseCreateRequest;
}

export interface AppStoreVersionPhasedReleasesDeleteInstanceRequest {
    id: string;
}

export interface AppStoreVersionPhasedReleasesUpdateInstanceRequest {
    id: string;
    appStoreVersionPhasedReleaseUpdateRequest: AppStoreVersionPhasedReleaseUpdateRequest;
}

/**
 * 
 */
export class AppStoreVersionPhasedReleasesApi extends runtime.BaseAPI {

    /**
     */
    async appStoreVersionPhasedReleasesCreateInstanceRaw(requestParameters: AppStoreVersionPhasedReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionPhasedReleaseResponse>> {
        if (requestParameters.appStoreVersionPhasedReleaseCreateRequest === null || requestParameters.appStoreVersionPhasedReleaseCreateRequest === undefined) {
            throw new runtime.RequiredError('appStoreVersionPhasedReleaseCreateRequest','Required parameter requestParameters.appStoreVersionPhasedReleaseCreateRequest was null or undefined when calling appStoreVersionPhasedReleasesCreateInstance.');
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
            path: `/v1/appStoreVersionPhasedReleases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionPhasedReleaseCreateRequestToJSON(requestParameters.appStoreVersionPhasedReleaseCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionPhasedReleaseResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionPhasedReleasesCreateInstance(requestParameters: AppStoreVersionPhasedReleasesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionPhasedReleaseResponse> {
        const response = await this.appStoreVersionPhasedReleasesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionPhasedReleasesDeleteInstanceRaw(requestParameters: AppStoreVersionPhasedReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appStoreVersionPhasedReleasesDeleteInstance.');
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
            path: `/v1/appStoreVersionPhasedReleases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appStoreVersionPhasedReleasesDeleteInstance(requestParameters: AppStoreVersionPhasedReleasesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appStoreVersionPhasedReleasesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appStoreVersionPhasedReleasesUpdateInstanceRaw(requestParameters: AppStoreVersionPhasedReleasesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionPhasedReleaseResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appStoreVersionPhasedReleasesUpdateInstance.');
        }

        if (requestParameters.appStoreVersionPhasedReleaseUpdateRequest === null || requestParameters.appStoreVersionPhasedReleaseUpdateRequest === undefined) {
            throw new runtime.RequiredError('appStoreVersionPhasedReleaseUpdateRequest','Required parameter requestParameters.appStoreVersionPhasedReleaseUpdateRequest was null or undefined when calling appStoreVersionPhasedReleasesUpdateInstance.');
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
            path: `/v1/appStoreVersionPhasedReleases/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionPhasedReleaseUpdateRequestToJSON(requestParameters.appStoreVersionPhasedReleaseUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionPhasedReleaseResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionPhasedReleasesUpdateInstance(requestParameters: AppStoreVersionPhasedReleasesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionPhasedReleaseResponse> {
        const response = await this.appStoreVersionPhasedReleasesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
