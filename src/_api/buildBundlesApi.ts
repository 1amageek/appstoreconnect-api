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
import { AppClipDomainStatusResponse } from '../model/appClipDomainStatusResponse';
import { BetaAppClipInvocationsResponse } from '../model/betaAppClipInvocationsResponse';
import { BuildBundleFileSizesResponse } from '../model/buildBundleFileSizesResponse';
import { ErrorResponse } from '../model/errorResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum BuildBundlesApiApiKeys {
}

export class BuildBundlesApi {
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

    public setApiKey(key: BuildBundlesApiApiKeys, value: string) {
        (this.authentications as any)[BuildBundlesApiApiKeys[key]].apiKey = value;
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
     * @param fieldsAppClipDomainStatuses the fields to include for returned resources of type appClipDomainStatuses
     */
    public async buildBundlesAppClipDomainCacheStatusGetToOneRelated (id: string, fieldsAppClipDomainStatuses?: Array<'domains' | 'lastUpdatedDate'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppClipDomainStatusResponse;  }> {
        const localVarPath = this.basePath + '/v1/buildBundles/{id}/appClipDomainCacheStatus'
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
            throw new Error('Required parameter id was null or undefined when calling buildBundlesAppClipDomainCacheStatusGetToOneRelated.');
        }

        if (fieldsAppClipDomainStatuses !== undefined) {
            localVarQueryParameters['fields[appClipDomainStatuses]'] = ObjectSerializer.serialize(fieldsAppClipDomainStatuses, "Array<'domains' | 'lastUpdatedDate'>");
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
            return new Promise<{ response: http.IncomingMessage; body: AppClipDomainStatusResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppClipDomainStatusResponse");
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
     * @param fieldsAppClipDomainStatuses the fields to include for returned resources of type appClipDomainStatuses
     */
    public async buildBundlesAppClipDomainDebugStatusGetToOneRelated (id: string, fieldsAppClipDomainStatuses?: Array<'domains' | 'lastUpdatedDate'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppClipDomainStatusResponse;  }> {
        const localVarPath = this.basePath + '/v1/buildBundles/{id}/appClipDomainDebugStatus'
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
            throw new Error('Required parameter id was null or undefined when calling buildBundlesAppClipDomainDebugStatusGetToOneRelated.');
        }

        if (fieldsAppClipDomainStatuses !== undefined) {
            localVarQueryParameters['fields[appClipDomainStatuses]'] = ObjectSerializer.serialize(fieldsAppClipDomainStatuses, "Array<'domains' | 'lastUpdatedDate'>");
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
            return new Promise<{ response: http.IncomingMessage; body: AppClipDomainStatusResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppClipDomainStatusResponse");
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
     * @param fieldsBetaAppClipInvocations the fields to include for returned resources of type betaAppClipInvocations
     * @param fieldsBetaAppClipInvocationLocalizations the fields to include for returned resources of type betaAppClipInvocationLocalizations
     * @param limit maximum resources per page
     * @param limitBetaAppClipInvocationLocalizations maximum number of related betaAppClipInvocationLocalizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async buildBundlesBetaAppClipInvocationsGetToManyRelated (id: string, fieldsBetaAppClipInvocations?: Array<'betaAppClipInvocationLocalizations' | 'buildBundle' | 'url'>, fieldsBetaAppClipInvocationLocalizations?: Array<'betaAppClipInvocation' | 'locale' | 'title'>, limit?: number, limitBetaAppClipInvocationLocalizations?: number, include?: Array<'betaAppClipInvocationLocalizations'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BetaAppClipInvocationsResponse;  }> {
        const localVarPath = this.basePath + '/v1/buildBundles/{id}/betaAppClipInvocations'
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
            throw new Error('Required parameter id was null or undefined when calling buildBundlesBetaAppClipInvocationsGetToManyRelated.');
        }

        if (fieldsBetaAppClipInvocations !== undefined) {
            localVarQueryParameters['fields[betaAppClipInvocations]'] = ObjectSerializer.serialize(fieldsBetaAppClipInvocations, "Array<'betaAppClipInvocationLocalizations' | 'buildBundle' | 'url'>");
        }

        if (fieldsBetaAppClipInvocationLocalizations !== undefined) {
            localVarQueryParameters['fields[betaAppClipInvocationLocalizations]'] = ObjectSerializer.serialize(fieldsBetaAppClipInvocationLocalizations, "Array<'betaAppClipInvocation' | 'locale' | 'title'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (limitBetaAppClipInvocationLocalizations !== undefined) {
            localVarQueryParameters['limit[betaAppClipInvocationLocalizations]'] = ObjectSerializer.serialize(limitBetaAppClipInvocationLocalizations, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'betaAppClipInvocationLocalizations'>");
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
            return new Promise<{ response: http.IncomingMessage; body: BetaAppClipInvocationsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BetaAppClipInvocationsResponse");
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
     * @param fieldsBuildBundleFileSizes the fields to include for returned resources of type buildBundleFileSizes
     * @param limit maximum resources per page
     */
    public async buildBundlesBuildBundleFileSizesGetToManyRelated (id: string, fieldsBuildBundleFileSizes?: Array<'deviceModel' | 'downloadBytes' | 'installBytes' | 'osVersion'>, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BuildBundleFileSizesResponse;  }> {
        const localVarPath = this.basePath + '/v1/buildBundles/{id}/buildBundleFileSizes'
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
            throw new Error('Required parameter id was null or undefined when calling buildBundlesBuildBundleFileSizesGetToManyRelated.');
        }

        if (fieldsBuildBundleFileSizes !== undefined) {
            localVarQueryParameters['fields[buildBundleFileSizes]'] = ObjectSerializer.serialize(fieldsBuildBundleFileSizes, "Array<'deviceModel' | 'downloadBytes' | 'installBytes' | 'osVersion'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: BuildBundleFileSizesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BuildBundleFileSizesResponse");
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