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
import type { CiArtifactsResponse, CiBuildActionResponse, CiBuildRunResponse, CiIssuesResponse, CiTestResultsResponse, ErrorResponse, } from '../models';
import { CiArtifactsResponseFromJSON, CiArtifactsResponseToJSON, CiBuildActionResponseFromJSON, CiBuildActionResponseToJSON, CiBuildRunResponseFromJSON, CiBuildRunResponseToJSON, CiIssuesResponseFromJSON, CiIssuesResponseToJSON, CiTestResultsResponseFromJSON, CiTestResultsResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface CiBuildActionsArtifactsGetToManyRelatedRequest {
    id: string;
    fieldsCiArtifacts?: Array<CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum>;
    limit?: number;
}
export interface CiBuildActionsBuildRunGetToOneRelatedRequest {
    id: string;
    fieldsScmGitReferences?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum>;
    fieldsCiBuildRuns?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum>;
    fieldsCiWorkflows?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum>;
    fieldsScmPullRequests?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum>;
    fieldsCiProducts?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum>;
    fieldsBuilds?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum>;
    limitBuilds?: number;
    include?: Array<CiBuildActionsBuildRunGetToOneRelatedIncludeEnum>;
}
export interface CiBuildActionsGetInstanceRequest {
    id: string;
    fieldsCiBuildActions?: Array<CiBuildActionsGetInstanceFieldsCiBuildActionsEnum>;
    include?: Array<CiBuildActionsGetInstanceIncludeEnum>;
    fieldsCiIssues?: Array<CiBuildActionsGetInstanceFieldsCiIssuesEnum>;
    fieldsCiBuildRuns?: Array<CiBuildActionsGetInstanceFieldsCiBuildRunsEnum>;
    fieldsCiTestResults?: Array<CiBuildActionsGetInstanceFieldsCiTestResultsEnum>;
    fieldsCiArtifacts?: Array<CiBuildActionsGetInstanceFieldsCiArtifactsEnum>;
}
export interface CiBuildActionsIssuesGetToManyRelatedRequest {
    id: string;
    fieldsCiIssues?: Array<CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum>;
    limit?: number;
}
export interface CiBuildActionsTestResultsGetToManyRelatedRequest {
    id: string;
    fieldsCiTestResults?: Array<CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum>;
    limit?: number;
}
/**
 *
 */
export class CiBuildActionsApi extends runtime.BaseAPI {
    /**
     */
    async ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters: CiBuildActionsArtifactsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiArtifactsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsArtifactsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCiArtifacts) {
            queryParameters['fields[ciArtifacts]'] = requestParameters.fieldsCiArtifacts.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/ciBuildActions/{id}/artifacts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiArtifactsResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciBuildActionsArtifactsGetToManyRelated(requestParameters: CiBuildActionsArtifactsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiArtifactsResponse> {
        const response = await this.ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters: CiBuildActionsBuildRunGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildRunResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsBuildRunGetToOneRelated.');
        }
        const queryParameters: any = {};
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
            path: `/v1/ciBuildActions/{id}/buildRun`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildRunResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciBuildActionsBuildRunGetToOneRelated(requestParameters: CiBuildActionsBuildRunGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildRunResponse> {
        const response = await this.ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciBuildActionsGetInstanceRaw(requestParameters: CiBuildActionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildActionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCiBuildActions) {
            queryParameters['fields[ciBuildActions]'] = requestParameters.fieldsCiBuildActions.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiIssues) {
            queryParameters['fields[ciIssues]'] = requestParameters.fieldsCiIssues.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiTestResults) {
            queryParameters['fields[ciTestResults]'] = requestParameters.fieldsCiTestResults.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCiArtifacts) {
            queryParameters['fields[ciArtifacts]'] = requestParameters.fieldsCiArtifacts.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciBuildActions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildActionResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciBuildActionsGetInstance(requestParameters: CiBuildActionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildActionResponse> {
        const response = await this.ciBuildActionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters: CiBuildActionsIssuesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiIssuesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsIssuesGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCiIssues) {
            queryParameters['fields[ciIssues]'] = requestParameters.fieldsCiIssues.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/ciBuildActions/{id}/issues`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiIssuesResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciBuildActionsIssuesGetToManyRelated(requestParameters: CiBuildActionsIssuesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiIssuesResponse> {
        const response = await this.ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters: CiBuildActionsTestResultsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiTestResultsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsTestResultsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCiTestResults) {
            queryParameters['fields[ciTestResults]'] = requestParameters.fieldsCiTestResults.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/ciBuildActions/{id}/testResults`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CiTestResultsResponseFromJSON(jsonValue));
    }
    /**
     */
    async ciBuildActionsTestResultsGetToManyRelated(requestParameters: CiBuildActionsTestResultsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiTestResultsResponse> {
        const response = await this.ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum = 'downloadUrl' | 'fileName' | 'fileSize' | 'fileType';;
/**
 * @export
 */
export type CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum = 'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository';;
/**
 * @export
 */
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum = 'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow';;
/**
 * @export
 */
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum = 'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion';;
/**
 * @export
 */
export type CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum = 'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl';;
/**
 * @export
 */
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum = 'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows';;
/**
 * @export
 */
export type CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';;
/**
 * @export
 */
export type CiBuildActionsBuildRunGetToOneRelatedIncludeEnum = 'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow';;
/**
 * @export
 */
export type CiBuildActionsGetInstanceFieldsCiBuildActionsEnum = 'actionType' | 'artifacts' | 'buildRun' | 'completionStatus' | 'executionProgress' | 'finishedDate' | 'isRequiredToPass' | 'issueCounts' | 'issues' | 'name' | 'startedDate' | 'testResults';;
/**
 * @export
 */
export type CiBuildActionsGetInstanceIncludeEnum = 'buildRun';;
/**
 * @export
 */
export type CiBuildActionsGetInstanceFieldsCiIssuesEnum = 'category' | 'fileSource' | 'issueType' | 'message';;
/**
 * @export
 */
export type CiBuildActionsGetInstanceFieldsCiBuildRunsEnum = 'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow';;
/**
 * @export
 */
export type CiBuildActionsGetInstanceFieldsCiTestResultsEnum = 'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status';;
/**
 * @export
 */
export type CiBuildActionsGetInstanceFieldsCiArtifactsEnum = 'downloadUrl' | 'fileName' | 'fileSize' | 'fileType';;
/**
 * @export
 */
export type CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum = 'category' | 'fileSource' | 'issueType' | 'message';;
/**
 * @export
 */
export type CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum = 'className' | 'destinationTestResults' | 'fileSource' | 'message' | 'name' | 'status';;
