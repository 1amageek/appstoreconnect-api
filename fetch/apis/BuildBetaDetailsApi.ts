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
  BuildBetaDetailResponse,
  BuildBetaDetailUpdateRequest,
  BuildBetaDetailsResponse,
  BuildResponse,
  ErrorResponse,
} from '../models';
import {
    BuildBetaDetailResponseFromJSON,
    BuildBetaDetailResponseToJSON,
    BuildBetaDetailUpdateRequestFromJSON,
    BuildBetaDetailUpdateRequestToJSON,
    BuildBetaDetailsResponseFromJSON,
    BuildBetaDetailsResponseToJSON,
    BuildResponseFromJSON,
    BuildResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface BuildBetaDetailsBuildGetToOneRelatedRequest {
    id: string;
    fieldsBuilds?: Array<BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum>;
}

export interface BuildBetaDetailsGetCollectionRequest {
    filterBuild?: Array<string>;
    filterId?: Array<string>;
    fieldsBuildBetaDetails?: Array<BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum>;
    limit?: number;
    include?: Array<BuildBetaDetailsGetCollectionIncludeEnum>;
    fieldsBuilds?: Array<BuildBetaDetailsGetCollectionFieldsBuildsEnum>;
}

export interface BuildBetaDetailsGetInstanceRequest {
    id: string;
    fieldsBuildBetaDetails?: Array<BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum>;
    include?: Array<BuildBetaDetailsGetInstanceIncludeEnum>;
    fieldsBuilds?: Array<BuildBetaDetailsGetInstanceFieldsBuildsEnum>;
}

export interface BuildBetaDetailsUpdateInstanceRequest {
    id: string;
    buildBetaDetailUpdateRequest: BuildBetaDetailUpdateRequest;
}

/**
 * 
 */
export class BuildBetaDetailsApi extends runtime.BaseAPI {

    /**
     */
    async buildBetaDetailsBuildGetToOneRelatedRaw(requestParameters: BuildBetaDetailsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling buildBetaDetailsBuildGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/buildBetaDetails/{id}/build`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsBuildGetToOneRelated(requestParameters: BuildBetaDetailsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildResponse> {
        const response = await this.buildBetaDetailsBuildGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBetaDetailsGetCollectionRaw(requestParameters: BuildBetaDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBetaDetailsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterBuild) {
            queryParameters['filter[build]'] = requestParameters.filterBuild.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuildBetaDetails) {
            queryParameters['fields[buildBetaDetails]'] = requestParameters.fieldsBuildBetaDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/buildBetaDetails`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBetaDetailsResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsGetCollection(requestParameters: BuildBetaDetailsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBetaDetailsResponse> {
        const response = await this.buildBetaDetailsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBetaDetailsGetInstanceRaw(requestParameters: BuildBetaDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBetaDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling buildBetaDetailsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsBuildBetaDetails) {
            queryParameters['fields[buildBetaDetails]'] = requestParameters.fieldsBuildBetaDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/buildBetaDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBetaDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsGetInstance(requestParameters: BuildBetaDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBetaDetailResponse> {
        const response = await this.buildBetaDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBetaDetailsUpdateInstanceRaw(requestParameters: BuildBetaDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBetaDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling buildBetaDetailsUpdateInstance.');
        }

        if (requestParameters.buildBetaDetailUpdateRequest === null || requestParameters.buildBetaDetailUpdateRequest === undefined) {
            throw new runtime.RequiredError('buildBetaDetailUpdateRequest','Required parameter requestParameters.buildBetaDetailUpdateRequest was null or undefined when calling buildBetaDetailsUpdateInstance.');
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
            path: `/v1/buildBetaDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BuildBetaDetailUpdateRequestToJSON(requestParameters.buildBetaDetailUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBetaDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsUpdateInstance(requestParameters: BuildBetaDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBetaDetailResponse> {
        const response = await this.buildBetaDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum = {
    App: 'app',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    AppStoreVersion: 'appStoreVersion',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    BetaGroups: 'betaGroups',
    BuildAudienceType: 'buildAudienceType',
    BuildBetaDetail: 'buildBetaDetail',
    BuildBundles: 'buildBundles',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    DiagnosticSignatures: 'diagnosticSignatures',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    IconAssetToken: 'iconAssetToken',
    Icons: 'icons',
    IndividualTesters: 'individualTesters',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    MinOsVersion: 'minOsVersion',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreReleaseVersion: 'preReleaseVersion',
    ProcessingState: 'processingState',
    UploadedDate: 'uploadedDate',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    Version: 'version'
} as const;
export type BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum = typeof BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum[keyof typeof BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum = {
    AutoNotifyEnabled: 'autoNotifyEnabled',
    Build: 'build',
    ExternalBuildState: 'externalBuildState',
    InternalBuildState: 'internalBuildState'
} as const;
export type BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum = typeof BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum[keyof typeof BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetCollectionIncludeEnum = {
    Build: 'build'
} as const;
export type BuildBetaDetailsGetCollectionIncludeEnum = typeof BuildBetaDetailsGetCollectionIncludeEnum[keyof typeof BuildBetaDetailsGetCollectionIncludeEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetCollectionFieldsBuildsEnum = {
    App: 'app',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    AppStoreVersion: 'appStoreVersion',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    BetaGroups: 'betaGroups',
    BuildAudienceType: 'buildAudienceType',
    BuildBetaDetail: 'buildBetaDetail',
    BuildBundles: 'buildBundles',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    DiagnosticSignatures: 'diagnosticSignatures',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    IconAssetToken: 'iconAssetToken',
    Icons: 'icons',
    IndividualTesters: 'individualTesters',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    MinOsVersion: 'minOsVersion',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreReleaseVersion: 'preReleaseVersion',
    ProcessingState: 'processingState',
    UploadedDate: 'uploadedDate',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    Version: 'version'
} as const;
export type BuildBetaDetailsGetCollectionFieldsBuildsEnum = typeof BuildBetaDetailsGetCollectionFieldsBuildsEnum[keyof typeof BuildBetaDetailsGetCollectionFieldsBuildsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum = {
    AutoNotifyEnabled: 'autoNotifyEnabled',
    Build: 'build',
    ExternalBuildState: 'externalBuildState',
    InternalBuildState: 'internalBuildState'
} as const;
export type BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum = typeof BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum[keyof typeof BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetInstanceIncludeEnum = {
    Build: 'build'
} as const;
export type BuildBetaDetailsGetInstanceIncludeEnum = typeof BuildBetaDetailsGetInstanceIncludeEnum[keyof typeof BuildBetaDetailsGetInstanceIncludeEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetInstanceFieldsBuildsEnum = {
    App: 'app',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    AppStoreVersion: 'appStoreVersion',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    BetaGroups: 'betaGroups',
    BuildAudienceType: 'buildAudienceType',
    BuildBetaDetail: 'buildBetaDetail',
    BuildBundles: 'buildBundles',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    DiagnosticSignatures: 'diagnosticSignatures',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    IconAssetToken: 'iconAssetToken',
    Icons: 'icons',
    IndividualTesters: 'individualTesters',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    MinOsVersion: 'minOsVersion',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreReleaseVersion: 'preReleaseVersion',
    ProcessingState: 'processingState',
    UploadedDate: 'uploadedDate',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    Version: 'version'
} as const;
export type BuildBetaDetailsGetInstanceFieldsBuildsEnum = typeof BuildBetaDetailsGetInstanceFieldsBuildsEnum[keyof typeof BuildBetaDetailsGetInstanceFieldsBuildsEnum];
