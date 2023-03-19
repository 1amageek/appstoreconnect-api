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
import type { CiBuildRunsResponse, CiWorkflowCreateRequest, CiWorkflowResponse, CiWorkflowUpdateRequest, ErrorResponse, ScmRepositoryResponse, } from '../models';
import { CiBuildRunsResponseFromJSON, CiBuildRunsResponseToJSON, CiWorkflowCreateRequestFromJSON, CiWorkflowCreateRequestToJSON, CiWorkflowResponseFromJSON, CiWorkflowResponseToJSON, CiWorkflowUpdateRequestFromJSON, CiWorkflowUpdateRequestToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, ScmRepositoryResponseFromJSON, ScmRepositoryResponseToJSON, } from '../models';
export interface CiWorkflowsBuildRunsGetToManyRelatedRequest {
    id: string;
    filterBuilds?: Array<string>;
    fieldsScmGitReferences?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsScmGitReferencesEnum>;
    fieldsCiBuildRuns?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsCiBuildRunsEnum>;
    fieldsCiWorkflows?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsCiWorkflowsEnum>;
    fieldsScmPullRequests?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsScmPullRequestsEnum>;
    fieldsCiProducts?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsCiProductsEnum>;
    fieldsBuilds?: Array<CiWorkflowsBuildRunsGetToManyRelatedFieldsBuildsEnum>;
    limit?: number;
    limitBuilds?: number;
    include?: Array<CiWorkflowsBuildRunsGetToManyRelatedIncludeEnum>;
}
export interface CiWorkflowsCreateInstanceRequest {
    ciWorkflowCreateRequest: CiWorkflowCreateRequest;
}
export interface CiWorkflowsDeleteInstanceRequest {
    id: string;
}
export interface CiWorkflowsGetInstanceRequest {
    id: string;
    fieldsCiWorkflows?: Array<CiWorkflowsGetInstanceFieldsCiWorkflowsEnum>;
    include?: Array<CiWorkflowsGetInstanceIncludeEnum>;
    fieldsCiBuildRuns?: Array<CiWorkflowsGetInstanceFieldsCiBuildRunsEnum>;
    fieldsScmRepositories?: Array<CiWorkflowsGetInstanceFieldsScmRepositoriesEnum>;
}
export interface CiWorkflowsRepositoryGetToOneRelatedRequest {
    id: string;
    fieldsScmGitReferences?: Array<CiWorkflowsRepositoryGetToOneRelatedFieldsScmGitReferencesEnum>;
    fieldsScmProviders?: Array<CiWorkflowsRepositoryGetToOneRelatedFieldsScmProvidersEnum>;
    fieldsScmRepositories?: Array<CiWorkflowsRepositoryGetToOneRelatedFieldsScmRepositoriesEnum>;
    include?: Array<CiWorkflowsRepositoryGetToOneRelatedIncludeEnum>;
}
export interface CiWorkflowsUpdateInstanceRequest {
    id: string;
    ciWorkflowUpdateRequest: CiWorkflowUpdateRequest;
}
/**
 *
 */
export class CiWorkflowsApi extends runtime.BaseAPI {
    /**
     */
    async ciWorkflowsBuildRunsGetToManyRelatedRaw(requestParameters: CiWorkflowsBuildRunsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildRunsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciWorkflowsBuildRunsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.filterBuilds) {
            queryParameters['filter[builds]'] = requestParameters.filterBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiWorkflows) {
            queryParameters['fields[ciWorkflows]'] = requestParameters.fieldsCiWorkflows.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiProducts) {
            queryParameters['fields[ciProducts]'] = requestParameters.fieldsCiProducts.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.limitBuilds !== undefined) {
            queryParameters['limit[builds]'] = requestParameters.limitBuilds;
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
            path: `/v1/ciWorkflows/{id}/buildRuns`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildRunsResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciWorkflowsBuildRunsGetToManyRelated(requestParameters: CiWorkflowsBuildRunsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildRunsResponse> {
        const response = await this.ciWorkflowsBuildRunsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciWorkflowsCreateInstanceRaw(requestParameters: CiWorkflowsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiWorkflowResponse>> {
        if (requestParameters.ciWorkflowCreateRequest === null || requestParameters.ciWorkflowCreateRequest === undefined) {
            throw new runtime.RequiredError('ciWorkflowCreateRequest', 'Required parameter requestParameters.ciWorkflowCreateRequest was null or undefined when calling ciWorkflowsCreateInstance.');
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
            path: `/v1/ciWorkflows`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CiWorkflowCreateRequestToJSON(requestParameters.ciWorkflowCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiWorkflowResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciWorkflowsCreateInstance(requestParameters: CiWorkflowsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiWorkflowResponse> {
        const response = await this.ciWorkflowsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciWorkflowsDeleteInstanceRaw(requestParameters: CiWorkflowsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciWorkflowsDeleteInstance.');
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
            path: `/v1/ciWorkflows/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     */
    async ciWorkflowsDeleteInstance(requestParameters: CiWorkflowsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ciWorkflowsDeleteInstanceRaw(requestParameters, initOverrides);
    }
    /**
     */
    async ciWorkflowsGetInstanceRaw(requestParameters: CiWorkflowsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiWorkflowResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciWorkflowsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCiWorkflows) {
            queryParameters['fields[ciWorkflows]'] = requestParameters.fieldsCiWorkflows.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciWorkflows/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiWorkflowResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciWorkflowsGetInstance(requestParameters: CiWorkflowsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiWorkflowResponse> {
        const response = await this.ciWorkflowsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciWorkflowsRepositoryGetToOneRelatedRaw(requestParameters: CiWorkflowsRepositoryGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoryResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciWorkflowsRepositoryGetToOneRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsScmProviders) {
            queryParameters['fields[scmProviders]'] = requestParameters.fieldsScmProviders.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsScmRepositories) {
            queryParameters['fields[scmRepositories]'] = requestParameters.fieldsScmRepositories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciWorkflows/{id}/repository`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoryResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciWorkflowsRepositoryGetToOneRelated(requestParameters: CiWorkflowsRepositoryGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoryResponse> {
        const response = await this.ciWorkflowsRepositoryGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciWorkflowsUpdateInstanceRaw(requestParameters: CiWorkflowsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiWorkflowResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciWorkflowsUpdateInstance.');
        }
        if (requestParameters.ciWorkflowUpdateRequest === null || requestParameters.ciWorkflowUpdateRequest === undefined) {
            throw new runtime.RequiredError('ciWorkflowUpdateRequest', 'Required parameter requestParameters.ciWorkflowUpdateRequest was null or undefined when calling ciWorkflowsUpdateInstance.');
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
            path: `/v1/ciWorkflows/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CiWorkflowUpdateRequestToJSON(requestParameters.ciWorkflowUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiWorkflowResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciWorkflowsUpdateInstance(requestParameters: CiWorkflowsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiWorkflowResponse> {
        const response = await this.ciWorkflowsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsScmGitReferencesEnum = 'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository';;
/**
 * @export
 */
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsCiBuildRunsEnum = 'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow';;
/**
 * @export
 */
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsCiWorkflowsEnum = 'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion';;
/**
 * @export
 */
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsScmPullRequestsEnum = 'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl';;
/**
 * @export
 */
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsCiProductsEnum = 'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows';;
/**
 * @export
 */
export type CiWorkflowsBuildRunsGetToManyRelatedFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';;
/**
 * @export
 */
export type CiWorkflowsBuildRunsGetToManyRelatedIncludeEnum = 'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow';;
/**
 * @export
 */
export type CiWorkflowsGetInstanceFieldsCiWorkflowsEnum = 'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion';;
/**
 * @export
 */
export type CiWorkflowsGetInstanceIncludeEnum = 'macOsVersion' | 'product' | 'repository' | 'xcodeVersion';;
/**
 * @export
 */
export type CiWorkflowsGetInstanceFieldsCiBuildRunsEnum = 'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow';;
/**
 * @export
 */
export type CiWorkflowsGetInstanceFieldsScmRepositoriesEnum = 'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl';;
/**
 * @export
 */
export type CiWorkflowsRepositoryGetToOneRelatedFieldsScmGitReferencesEnum = 'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository';;
/**
 * @export
 */
export type CiWorkflowsRepositoryGetToOneRelatedFieldsScmProvidersEnum = 'repositories' | 'scmProviderType' | 'url';;
/**
 * @export
 */
export type CiWorkflowsRepositoryGetToOneRelatedFieldsScmRepositoriesEnum = 'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl';;
/**
 * @export
 */
export type CiWorkflowsRepositoryGetToOneRelatedIncludeEnum = 'defaultBranch' | 'scmProvider';;