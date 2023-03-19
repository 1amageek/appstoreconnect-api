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
import type { ErrorResponse, ScmGitReferencesResponse, ScmPullRequestsResponse, ScmRepositoriesResponse, ScmRepositoryResponse, } from '../models';
import { ErrorResponseFromJSON, ErrorResponseToJSON, ScmGitReferencesResponseFromJSON, ScmGitReferencesResponseToJSON, ScmPullRequestsResponseFromJSON, ScmPullRequestsResponseToJSON, ScmRepositoriesResponseFromJSON, ScmRepositoriesResponseToJSON, ScmRepositoryResponseFromJSON, ScmRepositoryResponseToJSON, } from '../models';
export interface ScmRepositoriesGetCollectionRequest {
    filterId?: Array<string>;
    fieldsScmRepositories?: Array<ScmRepositoriesGetCollectionFieldsScmRepositoriesEnum>;
    limit?: number;
    include?: Array<ScmRepositoriesGetCollectionIncludeEnum>;
    fieldsScmGitReferences?: Array<ScmRepositoriesGetCollectionFieldsScmGitReferencesEnum>;
    fieldsScmPullRequests?: Array<ScmRepositoriesGetCollectionFieldsScmPullRequestsEnum>;
}
export interface ScmRepositoriesGetInstanceRequest {
    id: string;
    fieldsScmRepositories?: Array<ScmRepositoriesGetInstanceFieldsScmRepositoriesEnum>;
    include?: Array<ScmRepositoriesGetInstanceIncludeEnum>;
    fieldsScmGitReferences?: Array<ScmRepositoriesGetInstanceFieldsScmGitReferencesEnum>;
    fieldsScmPullRequests?: Array<ScmRepositoriesGetInstanceFieldsScmPullRequestsEnum>;
}
export interface ScmRepositoriesGitReferencesGetToManyRelatedRequest {
    id: string;
    fieldsScmGitReferences?: Array<ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmGitReferencesEnum>;
    fieldsScmRepositories?: Array<ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmRepositoriesEnum>;
    limit?: number;
    include?: Array<ScmRepositoriesGitReferencesGetToManyRelatedIncludeEnum>;
}
export interface ScmRepositoriesPullRequestsGetToManyRelatedRequest {
    id: string;
    fieldsScmPullRequests?: Array<ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmPullRequestsEnum>;
    fieldsScmRepositories?: Array<ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmRepositoriesEnum>;
    limit?: number;
    include?: Array<ScmRepositoriesPullRequestsGetToManyRelatedIncludeEnum>;
}
/**
 *
 */
export class ScmRepositoriesApi extends runtime.BaseAPI {
    /**
     */
    async scmRepositoriesGetCollectionRaw(requestParameters: ScmRepositoriesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoriesResponse>> {
        const queryParameters: any = {};
        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
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
        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoriesResponseFromJSON(jsonValue));
    }
    /**
     */
    async scmRepositoriesGetCollection(requestParameters: ScmRepositoriesGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoriesResponse> {
        const response = await this.scmRepositoriesGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async scmRepositoriesGetInstanceRaw(requestParameters: ScmRepositoriesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling scmRepositoriesGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoryResponseFromJSON(jsonValue));
    }
    /**
     */
    async scmRepositoriesGetInstance(requestParameters: ScmRepositoriesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoryResponse> {
        const response = await this.scmRepositoriesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async scmRepositoriesGitReferencesGetToManyRelatedRaw(requestParameters: ScmRepositoriesGitReferencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmGitReferencesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling scmRepositoriesGitReferencesGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories/{id}/gitReferences`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ScmGitReferencesResponseFromJSON(jsonValue));
    }
    /**
     */
    async scmRepositoriesGitReferencesGetToManyRelated(requestParameters: ScmRepositoriesGitReferencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmGitReferencesResponse> {
        const response = await this.scmRepositoriesGitReferencesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async scmRepositoriesPullRequestsGetToManyRelatedRaw(requestParameters: ScmRepositoriesPullRequestsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmPullRequestsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling scmRepositoriesPullRequestsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/scmRepositories/{id}/pullRequests`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ScmPullRequestsResponseFromJSON(jsonValue));
    }
    /**
     */
    async scmRepositoriesPullRequestsGetToManyRelated(requestParameters: ScmRepositoriesPullRequestsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmPullRequestsResponse> {
        const response = await this.scmRepositoriesPullRequestsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type ScmRepositoriesGetCollectionFieldsScmRepositoriesEnum = 'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl';;
/**
 * @export
 */
export type ScmRepositoriesGetCollectionIncludeEnum = 'defaultBranch' | 'scmProvider';;
/**
 * @export
 */
export type ScmRepositoriesGetCollectionFieldsScmGitReferencesEnum = 'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository';;
/**
 * @export
 */
export type ScmRepositoriesGetCollectionFieldsScmPullRequestsEnum = 'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl';;
/**
 * @export
 */
export type ScmRepositoriesGetInstanceFieldsScmRepositoriesEnum = 'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl';;
/**
 * @export
 */
export type ScmRepositoriesGetInstanceIncludeEnum = 'defaultBranch' | 'scmProvider';;
/**
 * @export
 */
export type ScmRepositoriesGetInstanceFieldsScmGitReferencesEnum = 'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository';;
/**
 * @export
 */
export type ScmRepositoriesGetInstanceFieldsScmPullRequestsEnum = 'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl';;
/**
 * @export
 */
export type ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmGitReferencesEnum = 'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository';;
/**
 * @export
 */
export type ScmRepositoriesGitReferencesGetToManyRelatedFieldsScmRepositoriesEnum = 'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl';;
/**
 * @export
 */
export type ScmRepositoriesGitReferencesGetToManyRelatedIncludeEnum = 'repository';;
/**
 * @export
 */
export type ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmPullRequestsEnum = 'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl';;
/**
 * @export
 */
export type ScmRepositoriesPullRequestsGetToManyRelatedFieldsScmRepositoriesEnum = 'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl';;
/**
 * @export
 */
export type ScmRepositoriesPullRequestsGetToManyRelatedIncludeEnum = 'repository';;
