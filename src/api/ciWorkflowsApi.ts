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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CiBuildRunsResponse } from '../model/ciBuildRunsResponse';
import { CiWorkflowCreateRequest } from '../model/ciWorkflowCreateRequest';
import { CiWorkflowResponse } from '../model/ciWorkflowResponse';
import { CiWorkflowUpdateRequest } from '../model/ciWorkflowUpdateRequest';
import { ErrorResponse } from '../model/errorResponse';
import { ScmRepositoryResponse } from '../model/scmRepositoryResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CiWorkflowsApiApiKeys {
}

export class CiWorkflowsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'itcBearerToken': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CiWorkflowsApiApiKeys, value: string) {
        (this.authentications as any)[CiWorkflowsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.itcBearerToken.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @param id the id of the requested resource
     * @param filterBuilds filter by id(s) of related \&#39;builds\&#39;
     * @param fieldsScmGitReferences the fields to include for returned resources of type scmGitReferences
     * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
     * @param fieldsCiWorkflows the fields to include for returned resources of type ciWorkflows
     * @param fieldsScmPullRequests the fields to include for returned resources of type scmPullRequests
     * @param fieldsCiProducts the fields to include for returned resources of type ciProducts
     * @param fieldsBuilds the fields to include for returned resources of type builds
     * @param limit maximum resources per page
     * @param limitBuilds maximum number of related builds returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async ciWorkflowsBuildRunsGetToManyRelated (id: string, filterBuilds?: Array<string>, fieldsScmGitReferences?: Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>, fieldsCiBuildRuns?: Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>, fieldsCiWorkflows?: Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>, fieldsScmPullRequests?: Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'>, fieldsCiProducts?: Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>, fieldsBuilds?: Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>, limit?: number, limitBuilds?: number, include?: Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CiBuildRunsResponse;  }> {
        const localVarPath = this.basePath + '/v1/ciWorkflows/{id}/buildRuns'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ciWorkflowsBuildRunsGetToManyRelated.');
        }

        if (filterBuilds !== undefined) {
            localVarQueryParameters['filter[builds]'] = ObjectSerializer.serialize(filterBuilds, "Array<string>");
        }

        if (fieldsScmGitReferences !== undefined) {
            localVarQueryParameters['fields[scmGitReferences]'] = ObjectSerializer.serialize(fieldsScmGitReferences, "Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>");
        }

        if (fieldsCiBuildRuns !== undefined) {
            localVarQueryParameters['fields[ciBuildRuns]'] = ObjectSerializer.serialize(fieldsCiBuildRuns, "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>");
        }

        if (fieldsCiWorkflows !== undefined) {
            localVarQueryParameters['fields[ciWorkflows]'] = ObjectSerializer.serialize(fieldsCiWorkflows, "Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>");
        }

        if (fieldsScmPullRequests !== undefined) {
            localVarQueryParameters['fields[scmPullRequests]'] = ObjectSerializer.serialize(fieldsScmPullRequests, "Array<'destinationBranchName' | 'destinationRepositoryName' | 'destinationRepositoryOwner' | 'isClosed' | 'isCrossRepository' | 'number' | 'repository' | 'sourceBranchName' | 'sourceRepositoryName' | 'sourceRepositoryOwner' | 'title' | 'webUrl'>");
        }

        if (fieldsCiProducts !== undefined) {
            localVarQueryParameters['fields[ciProducts]'] = ObjectSerializer.serialize(fieldsCiProducts, "Array<'additionalRepositories' | 'app' | 'buildRuns' | 'bundleId' | 'createdDate' | 'name' | 'primaryRepositories' | 'productType' | 'workflows'>");
        }

        if (fieldsBuilds !== undefined) {
            localVarQueryParameters['fields[builds]'] = ObjectSerializer.serialize(fieldsBuilds, "Array<'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (limitBuilds !== undefined) {
            localVarQueryParameters['limit[builds]'] = ObjectSerializer.serialize(limitBuilds, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'builds' | 'destinationBranch' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'workflow'>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.itcBearerToken.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.itcBearerToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CiBuildRunsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CiBuildRunsResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param ciWorkflowCreateRequest CiWorkflow representation
     */
    public async ciWorkflowsCreateInstance (ciWorkflowCreateRequest: CiWorkflowCreateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CiWorkflowResponse;  }> {
        const localVarPath = this.basePath + '/v1/ciWorkflows';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'ciWorkflowCreateRequest' is not null or undefined
        if (ciWorkflowCreateRequest === null || ciWorkflowCreateRequest === undefined) {
            throw new Error('Required parameter ciWorkflowCreateRequest was null or undefined when calling ciWorkflowsCreateInstance.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ciWorkflowCreateRequest, "CiWorkflowCreateRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.itcBearerToken.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.itcBearerToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CiWorkflowResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CiWorkflowResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param id the id of the requested resource
     */
    public async ciWorkflowsDeleteInstance (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/ciWorkflows/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ciWorkflowsDeleteInstance.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.itcBearerToken.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.itcBearerToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param id the id of the requested resource
     * @param fieldsCiWorkflows the fields to include for returned resources of type ciWorkflows
     * @param include comma-separated list of relationships to include
     * @param fieldsCiBuildRuns the fields to include for returned resources of type ciBuildRuns
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     */
    public async ciWorkflowsGetInstance (id: string, fieldsCiWorkflows?: Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>, include?: Array<'macOsVersion' | 'product' | 'repository' | 'xcodeVersion'>, fieldsCiBuildRuns?: Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CiWorkflowResponse;  }> {
        const localVarPath = this.basePath + '/v1/ciWorkflows/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ciWorkflowsGetInstance.');
        }

        if (fieldsCiWorkflows !== undefined) {
            localVarQueryParameters['fields[ciWorkflows]'] = ObjectSerializer.serialize(fieldsCiWorkflows, "Array<'actions' | 'branchStartCondition' | 'buildRuns' | 'clean' | 'containerFilePath' | 'description' | 'isEnabled' | 'isLockedForEditing' | 'lastModifiedDate' | 'macOsVersion' | 'name' | 'product' | 'pullRequestStartCondition' | 'repository' | 'scheduledStartCondition' | 'tagStartCondition' | 'xcodeVersion'>");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'macOsVersion' | 'product' | 'repository' | 'xcodeVersion'>");
        }

        if (fieldsCiBuildRuns !== undefined) {
            localVarQueryParameters['fields[ciBuildRuns]'] = ObjectSerializer.serialize(fieldsCiBuildRuns, "Array<'actions' | 'buildRun' | 'builds' | 'cancelReason' | 'clean' | 'completionStatus' | 'createdDate' | 'destinationBranch' | 'destinationCommit' | 'executionProgress' | 'finishedDate' | 'isPullRequestBuild' | 'issueCounts' | 'number' | 'product' | 'pullRequest' | 'sourceBranchOrTag' | 'sourceCommit' | 'startReason' | 'startedDate' | 'workflow'>");
        }

        if (fieldsScmRepositories !== undefined) {
            localVarQueryParameters['fields[scmRepositories]'] = ObjectSerializer.serialize(fieldsScmRepositories, "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.itcBearerToken.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.itcBearerToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CiWorkflowResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CiWorkflowResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param id the id of the requested resource
     * @param fieldsScmGitReferences the fields to include for returned resources of type scmGitReferences
     * @param fieldsScmProviders the fields to include for returned resources of type scmProviders
     * @param fieldsScmRepositories the fields to include for returned resources of type scmRepositories
     * @param include comma-separated list of relationships to include
     */
    public async ciWorkflowsRepositoryGetToOneRelated (id: string, fieldsScmGitReferences?: Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>, fieldsScmProviders?: Array<'repositories' | 'scmProviderType' | 'url'>, fieldsScmRepositories?: Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>, include?: Array<'defaultBranch' | 'scmProvider'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ScmRepositoryResponse;  }> {
        const localVarPath = this.basePath + '/v1/ciWorkflows/{id}/repository'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ciWorkflowsRepositoryGetToOneRelated.');
        }

        if (fieldsScmGitReferences !== undefined) {
            localVarQueryParameters['fields[scmGitReferences]'] = ObjectSerializer.serialize(fieldsScmGitReferences, "Array<'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository'>");
        }

        if (fieldsScmProviders !== undefined) {
            localVarQueryParameters['fields[scmProviders]'] = ObjectSerializer.serialize(fieldsScmProviders, "Array<'repositories' | 'scmProviderType' | 'url'>");
        }

        if (fieldsScmRepositories !== undefined) {
            localVarQueryParameters['fields[scmRepositories]'] = ObjectSerializer.serialize(fieldsScmRepositories, "Array<'defaultBranch' | 'gitReferences' | 'httpCloneUrl' | 'lastAccessedDate' | 'ownerName' | 'pullRequests' | 'repositoryName' | 'scmProvider' | 'sshCloneUrl'>");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'defaultBranch' | 'scmProvider'>");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.itcBearerToken.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.itcBearerToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ScmRepositoryResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ScmRepositoryResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param id the id of the requested resource
     * @param ciWorkflowUpdateRequest CiWorkflow representation
     */
    public async ciWorkflowsUpdateInstance (id: string, ciWorkflowUpdateRequest: CiWorkflowUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CiWorkflowResponse;  }> {
        const localVarPath = this.basePath + '/v1/ciWorkflows/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling ciWorkflowsUpdateInstance.');
        }

        // verify required parameter 'ciWorkflowUpdateRequest' is not null or undefined
        if (ciWorkflowUpdateRequest === null || ciWorkflowUpdateRequest === undefined) {
            throw new Error('Required parameter ciWorkflowUpdateRequest was null or undefined when calling ciWorkflowsUpdateInstance.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PATCH',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(ciWorkflowUpdateRequest, "CiWorkflowUpdateRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.itcBearerToken.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.itcBearerToken.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CiWorkflowResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CiWorkflowResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
