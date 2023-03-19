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
  CiMacOsVersionResponse,
  CiMacOsVersionsResponse,
  CiXcodeVersionsResponse,
  ErrorResponse,
} from '../models';
import {
    CiMacOsVersionResponseFromJSON,
    CiMacOsVersionResponseToJSON,
    CiMacOsVersionsResponseFromJSON,
    CiMacOsVersionsResponseToJSON,
    CiXcodeVersionsResponseFromJSON,
    CiXcodeVersionsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface CiMacOsVersionsGetCollectionRequest {
    fieldsCiMacOsVersions?: Array<CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum>;
    limit?: number;
    include?: Array<CiMacOsVersionsGetCollectionIncludeEnum>;
    fieldsCiXcodeVersions?: Array<CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum>;
    limitXcodeVersions?: number;
}

export interface CiMacOsVersionsGetInstanceRequest {
    id: string;
    fieldsCiMacOsVersions?: Array<CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum>;
    include?: Array<CiMacOsVersionsGetInstanceIncludeEnum>;
    fieldsCiXcodeVersions?: Array<CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum>;
    limitXcodeVersions?: number;
}

export interface CiMacOsVersionsXcodeVersionsGetToManyRelatedRequest {
    id: string;
    fieldsCiXcodeVersions?: Array<CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum>;
    fieldsCiMacOsVersions?: Array<CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum>;
    limit?: number;
    limitMacOsVersions?: number;
    include?: Array<CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class CiMacOsVersionsApi extends runtime.BaseAPI {

    /**
     */
    async ciMacOsVersionsGetCollectionRaw(requestParameters: CiMacOsVersionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiMacOsVersionsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.fieldsCiMacOsVersions) {
            queryParameters['fields[ciMacOsVersions]'] = requestParameters.fieldsCiMacOsVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiXcodeVersions) {
            queryParameters['fields[ciXcodeVersions]'] = requestParameters.fieldsCiXcodeVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitXcodeVersions !== undefined) {
            queryParameters['limit[xcodeVersions]'] = requestParameters.limitXcodeVersions;
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
            path: `/v1/ciMacOsVersions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiMacOsVersionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciMacOsVersionsGetCollection(requestParameters: CiMacOsVersionsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiMacOsVersionsResponse> {
        const response = await this.ciMacOsVersionsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciMacOsVersionsGetInstanceRaw(requestParameters: CiMacOsVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiMacOsVersionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciMacOsVersionsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiMacOsVersions) {
            queryParameters['fields[ciMacOsVersions]'] = requestParameters.fieldsCiMacOsVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiXcodeVersions) {
            queryParameters['fields[ciXcodeVersions]'] = requestParameters.fieldsCiXcodeVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitXcodeVersions !== undefined) {
            queryParameters['limit[xcodeVersions]'] = requestParameters.limitXcodeVersions;
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
            path: `/v1/ciMacOsVersions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiMacOsVersionResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciMacOsVersionsGetInstance(requestParameters: CiMacOsVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiMacOsVersionResponse> {
        const response = await this.ciMacOsVersionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciMacOsVersionsXcodeVersionsGetToManyRelatedRaw(requestParameters: CiMacOsVersionsXcodeVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiXcodeVersionsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciMacOsVersionsXcodeVersionsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiXcodeVersions) {
            queryParameters['fields[ciXcodeVersions]'] = requestParameters.fieldsCiXcodeVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiMacOsVersions) {
            queryParameters['fields[ciMacOsVersions]'] = requestParameters.fieldsCiMacOsVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.limitMacOsVersions !== undefined) {
            queryParameters['limit[macOsVersions]'] = requestParameters.limitMacOsVersions;
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
            path: `/v1/ciMacOsVersions/{id}/xcodeVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiXcodeVersionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciMacOsVersionsXcodeVersionsGetToManyRelated(requestParameters: CiMacOsVersionsXcodeVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiXcodeVersionsResponse> {
        const response = await this.ciMacOsVersionsXcodeVersionsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum = {
    Name: 'name',
    Version: 'version',
    XcodeVersions: 'xcodeVersions'
} as const;
export type CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum = typeof CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum[keyof typeof CiMacOsVersionsGetCollectionFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export const CiMacOsVersionsGetCollectionIncludeEnum = {
    XcodeVersions: 'xcodeVersions'
} as const;
export type CiMacOsVersionsGetCollectionIncludeEnum = typeof CiMacOsVersionsGetCollectionIncludeEnum[keyof typeof CiMacOsVersionsGetCollectionIncludeEnum];
/**
 * @export
 */
export const CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum = {
    MacOsVersions: 'macOsVersions',
    Name: 'name',
    TestDestinations: 'testDestinations',
    Version: 'version'
} as const;
export type CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum = typeof CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum[keyof typeof CiMacOsVersionsGetCollectionFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export const CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum = {
    Name: 'name',
    Version: 'version',
    XcodeVersions: 'xcodeVersions'
} as const;
export type CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum = typeof CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum[keyof typeof CiMacOsVersionsGetInstanceFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export const CiMacOsVersionsGetInstanceIncludeEnum = {
    XcodeVersions: 'xcodeVersions'
} as const;
export type CiMacOsVersionsGetInstanceIncludeEnum = typeof CiMacOsVersionsGetInstanceIncludeEnum[keyof typeof CiMacOsVersionsGetInstanceIncludeEnum];
/**
 * @export
 */
export const CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum = {
    MacOsVersions: 'macOsVersions',
    Name: 'name',
    TestDestinations: 'testDestinations',
    Version: 'version'
} as const;
export type CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum = typeof CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum[keyof typeof CiMacOsVersionsGetInstanceFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export const CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum = {
    MacOsVersions: 'macOsVersions',
    Name: 'name',
    TestDestinations: 'testDestinations',
    Version: 'version'
} as const;
export type CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum = typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum[keyof typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiXcodeVersionsEnum];
/**
 * @export
 */
export const CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum = {
    Name: 'name',
    Version: 'version',
    XcodeVersions: 'xcodeVersions'
} as const;
export type CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum = typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum[keyof typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedFieldsCiMacOsVersionsEnum];
/**
 * @export
 */
export const CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum = {
    MacOsVersions: 'macOsVersions'
} as const;
export type CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum = typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum[keyof typeof CiMacOsVersionsXcodeVersionsGetToManyRelatedIncludeEnum];
