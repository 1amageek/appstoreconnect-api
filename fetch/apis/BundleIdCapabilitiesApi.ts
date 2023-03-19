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
  BundleIdCapabilityCreateRequest,
  BundleIdCapabilityResponse,
  BundleIdCapabilityUpdateRequest,
  ErrorResponse,
} from '../models';
import {
    BundleIdCapabilityCreateRequestFromJSON,
    BundleIdCapabilityCreateRequestToJSON,
    BundleIdCapabilityResponseFromJSON,
    BundleIdCapabilityResponseToJSON,
    BundleIdCapabilityUpdateRequestFromJSON,
    BundleIdCapabilityUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface BundleIdCapabilitiesCreateInstanceRequest {
    bundleIdCapabilityCreateRequest: BundleIdCapabilityCreateRequest;
}

export interface BundleIdCapabilitiesDeleteInstanceRequest {
    id: string;
}

export interface BundleIdCapabilitiesUpdateInstanceRequest {
    id: string;
    bundleIdCapabilityUpdateRequest: BundleIdCapabilityUpdateRequest;
}

/**
 * 
 */
export class BundleIdCapabilitiesApi extends runtime.BaseAPI {

    /**
     */
    async bundleIdCapabilitiesCreateInstanceRaw(requestParameters: BundleIdCapabilitiesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdCapabilityResponse>> {
        if (requestParameters.bundleIdCapabilityCreateRequest === null || requestParameters.bundleIdCapabilityCreateRequest === undefined) {
            throw new runtime.RequiredError('bundleIdCapabilityCreateRequest','Required parameter requestParameters.bundleIdCapabilityCreateRequest was null or undefined when calling bundleIdCapabilitiesCreateInstance.');
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
            path: `/v1/bundleIdCapabilities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BundleIdCapabilityCreateRequestToJSON(requestParameters.bundleIdCapabilityCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdCapabilityResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdCapabilitiesCreateInstance(requestParameters: BundleIdCapabilitiesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdCapabilityResponse> {
        const response = await this.bundleIdCapabilitiesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async bundleIdCapabilitiesDeleteInstanceRaw(requestParameters: BundleIdCapabilitiesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdCapabilitiesDeleteInstance.');
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
            path: `/v1/bundleIdCapabilities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async bundleIdCapabilitiesDeleteInstance(requestParameters: BundleIdCapabilitiesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bundleIdCapabilitiesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async bundleIdCapabilitiesUpdateInstanceRaw(requestParameters: BundleIdCapabilitiesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdCapabilityResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling bundleIdCapabilitiesUpdateInstance.');
        }

        if (requestParameters.bundleIdCapabilityUpdateRequest === null || requestParameters.bundleIdCapabilityUpdateRequest === undefined) {
            throw new runtime.RequiredError('bundleIdCapabilityUpdateRequest','Required parameter requestParameters.bundleIdCapabilityUpdateRequest was null or undefined when calling bundleIdCapabilitiesUpdateInstance.');
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
            path: `/v1/bundleIdCapabilities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BundleIdCapabilityUpdateRequestToJSON(requestParameters.bundleIdCapabilityUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdCapabilityResponseFromJSON(jsonValue));
    }

    /**
     */
    async bundleIdCapabilitiesUpdateInstance(requestParameters: BundleIdCapabilitiesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdCapabilityResponse> {
        const response = await this.bundleIdCapabilitiesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
