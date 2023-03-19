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
  ErrorResponse,
  ScmProviderResponse,
  ScmProvidersResponse,
  ScmRepositoriesResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ScmProviderResponseFromJSON,
    ScmProviderResponseToJSON,
    ScmProvidersResponseFromJSON,
    ScmProvidersResponseToJSON,
    ScmRepositoriesResponseFromJSON,
    ScmRepositoriesResponseToJSON,
} from '../models';

export interface ScmProvidersGetCollectionRequest {
    fieldsScmProviders?: Array<ScmProvidersGetCollectionFieldsScmProvidersEnum>;
    limit?: number;
    fieldsScmRepositories?: Array<ScmProvidersGetCollectionFieldsScmRepositoriesEnum>;
}

export interface ScmProvidersGetInstanceRequest {
    id: string;
    fieldsScmProviders?: Array<ScmProvidersGetInstanceFieldsScmProvidersEnum>;
    fieldsScmRepositories?: Array<ScmProvidersGetInstanceFieldsScmRepositoriesEnum>;
}

export interface ScmProvidersRepositoriesGetToManyRelatedRequest {
    id: string;
    filterId?: Array<string>;
    fieldsScmGitReferences?: Array<ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum>;
    fieldsScmProviders?: Array<ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum>;
    fieldsScmRepositories?: Array<ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum>;
    limit?: number;
    include?: Array<ScmProvidersRepositoriesGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class ScmProvidersApi extends runtime.BaseAPI {

    /**
     */
    async scmProvidersGetCollectionRaw(requestParameters: ScmProvidersGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmProvidersResponse>> {
        const queryParameters: any = {};

        if (requestParameters.fieldsScmProviders) {
            queryParameters['fields[scmProviders]'] = requestParameters.fieldsScmProviders.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmProviders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmProvidersResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmProvidersGetCollection(requestParameters: ScmProvidersGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmProvidersResponse> {
        const response = await this.scmProvidersGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scmProvidersGetInstanceRaw(requestParameters: ScmProvidersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmProviderResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling scmProvidersGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsScmProviders) {
            queryParameters['fields[scmProviders]'] = requestParameters.fieldsScmProviders.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmProviders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmProviderResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmProvidersGetInstance(requestParameters: ScmProvidersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmProviderResponse> {
        const response = await this.scmProvidersGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scmProvidersRepositoriesGetToManyRelatedRaw(requestParameters: ScmProvidersRepositoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoriesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling scmProvidersRepositoriesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmProviders) {
            queryParameters['fields[scmProviders]'] = requestParameters.fieldsScmProviders.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmProviders/{id}/repositories`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoriesResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmProvidersRepositoriesGetToManyRelated(requestParameters: ScmProvidersRepositoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoriesResponse> {
        const response = await this.scmProvidersRepositoriesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ScmProvidersGetCollectionFieldsScmProvidersEnum = {
    Repositories: 'repositories',
    ScmProviderType: 'scmProviderType',
    Url: 'url'
} as const;
export type ScmProvidersGetCollectionFieldsScmProvidersEnum = typeof ScmProvidersGetCollectionFieldsScmProvidersEnum[keyof typeof ScmProvidersGetCollectionFieldsScmProvidersEnum];
/**
 * @export
 */
export const ScmProvidersGetCollectionFieldsScmRepositoriesEnum = {
    DefaultBranch: 'defaultBranch',
    GitReferences: 'gitReferences',
    HttpCloneUrl: 'httpCloneUrl',
    LastAccessedDate: 'lastAccessedDate',
    OwnerName: 'ownerName',
    PullRequests: 'pullRequests',
    RepositoryName: 'repositoryName',
    ScmProvider: 'scmProvider',
    SshCloneUrl: 'sshCloneUrl'
} as const;
export type ScmProvidersGetCollectionFieldsScmRepositoriesEnum = typeof ScmProvidersGetCollectionFieldsScmRepositoriesEnum[keyof typeof ScmProvidersGetCollectionFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmProvidersGetInstanceFieldsScmProvidersEnum = {
    Repositories: 'repositories',
    ScmProviderType: 'scmProviderType',
    Url: 'url'
} as const;
export type ScmProvidersGetInstanceFieldsScmProvidersEnum = typeof ScmProvidersGetInstanceFieldsScmProvidersEnum[keyof typeof ScmProvidersGetInstanceFieldsScmProvidersEnum];
/**
 * @export
 */
export const ScmProvidersGetInstanceFieldsScmRepositoriesEnum = {
    DefaultBranch: 'defaultBranch',
    GitReferences: 'gitReferences',
    HttpCloneUrl: 'httpCloneUrl',
    LastAccessedDate: 'lastAccessedDate',
    OwnerName: 'ownerName',
    PullRequests: 'pullRequests',
    RepositoryName: 'repositoryName',
    ScmProvider: 'scmProvider',
    SshCloneUrl: 'sshCloneUrl'
} as const;
export type ScmProvidersGetInstanceFieldsScmRepositoriesEnum = typeof ScmProvidersGetInstanceFieldsScmRepositoriesEnum[keyof typeof ScmProvidersGetInstanceFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum = {
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Name: 'name',
    Repository: 'repository'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum = typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum = {
    Repositories: 'repositories',
    ScmProviderType: 'scmProviderType',
    Url: 'url'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum = typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum = {
    DefaultBranch: 'defaultBranch',
    GitReferences: 'gitReferences',
    HttpCloneUrl: 'httpCloneUrl',
    LastAccessedDate: 'lastAccessedDate',
    OwnerName: 'ownerName',
    PullRequests: 'pullRequests',
    RepositoryName: 'repositoryName',
    ScmProvider: 'scmProvider',
    SshCloneUrl: 'sshCloneUrl'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum = typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedIncludeEnum = {
    DefaultBranch: 'defaultBranch',
    ScmProvider: 'scmProvider'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedIncludeEnum = typeof ScmProvidersRepositoriesGetToManyRelatedIncludeEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedIncludeEnum];
