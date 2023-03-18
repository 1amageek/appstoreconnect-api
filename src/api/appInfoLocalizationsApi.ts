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
import { AppInfoLocalizationCreateRequest } from '../model/appInfoLocalizationCreateRequest';
import { AppInfoLocalizationResponse } from '../model/appInfoLocalizationResponse';
import { AppInfoLocalizationUpdateRequest } from '../model/appInfoLocalizationUpdateRequest';
import { ErrorResponse } from '../model/errorResponse';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';
import { HttpError, RequestFile } from './apis';
let defaultBasePath = 'https://api.appstoreconnect.apple.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
export enum AppInfoLocalizationsApiApiKeys {
}
export class AppInfoLocalizationsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders: any = {};
    protected _useQuerystring: boolean = false;
    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'itcBearerToken': new HttpBearerAuth(),
    };
    protected interceptors: Interceptor[] = [];
    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
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
    public setDefaultAuthentication(params: {
        auth: Authentication;
    }) {
        const { auth } = params;
        this.authentications.default = auth;
    }
    public setApiKey(params: {
        key: AppInfoLocalizationsApiApiKeys;
        value: string;
    }) {
        const { key, value } = params;
        (this.authentications as any)[AppInfoLocalizationsApiApiKeys[key]].apiKey = value;
    }
    set accessToken(accessToken: string | (() => string)) {
        this.authentications.itcBearerToken.accessToken = accessToken;
    }
    public addInterceptor(params: {
        interceptor: Interceptor;
    }) {
        const { interceptor } = params;
        this.interceptors.push(interceptor);
    }
    /**
     *
     * @param appInfoLocalizationCreateRequest AppInfoLocalization representation
     */
    public async appInfoLocalizationsCreateInstance(params: {
        appInfoLocalizationCreateRequest: AppInfoLocalizationCreateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AppInfoLocalizationResponse;
    }> {
        const { appInfoLocalizationCreateRequest, options } = params;
        const localVarPath = this.basePath + '/v1/appInfoLocalizations';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};
        // verify required parameter 'appInfoLocalizationCreateRequest' is not null or undefined
        if (appInfoLocalizationCreateRequest === null || appInfoLocalizationCreateRequest === undefined) {
            throw new Error('Required parameter appInfoLocalizationCreateRequest was null or undefined when calling appInfoLocalizationsCreateInstance.');
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
            body: ObjectSerializer.serialize(appInfoLocalizationCreateRequest, "AppInfoLocalizationCreateRequest")
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
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: AppInfoLocalizationResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppInfoLocalizationResponse");
                            resolve({ response: response, body: body });
                        }
                        else {
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
    public async appInfoLocalizationsDeleteInstance(params: {
        id: string;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }> {
        const { id, options } = params;
        const localVarPath = this.basePath + '/v1/appInfoLocalizations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling appInfoLocalizationsDeleteInstance.');
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
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body?: any;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        }
                        else {
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
     * @param fieldsAppInfoLocalizations the fields to include for returned resources of type appInfoLocalizations
     * @param include comma-separated list of relationships to include
     */
    public async appInfoLocalizationsGetInstance(params: {
        id: string;
        fieldsAppInfoLocalizations?: Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>;
        include?: Array<'appInfo'>;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AppInfoLocalizationResponse;
    }> {
        const { id, fieldsAppInfoLocalizations, include, options } = params;
        const localVarPath = this.basePath + '/v1/appInfoLocalizations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling appInfoLocalizationsGetInstance.');
        }
        if (fieldsAppInfoLocalizations !== undefined) {
            localVarQueryParameters['fields[appInfoLocalizations]'] = ObjectSerializer.serialize(fieldsAppInfoLocalizations, "Array<'appInfo' | 'locale' | 'name' | 'privacyChoicesUrl' | 'privacyPolicyText' | 'privacyPolicyUrl' | 'subtitle'>");
        }
        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'appInfo'>");
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
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: AppInfoLocalizationResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppInfoLocalizationResponse");
                            resolve({ response: response, body: body });
                        }
                        else {
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
     * @param appInfoLocalizationUpdateRequest AppInfoLocalization representation
     */
    public async appInfoLocalizationsUpdateInstance(params: {
        id: string;
        appInfoLocalizationUpdateRequest: AppInfoLocalizationUpdateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AppInfoLocalizationResponse;
    }> {
        const { id, appInfoLocalizationUpdateRequest, options } = params;
        const localVarPath = this.basePath + '/v1/appInfoLocalizations/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        }
        else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling appInfoLocalizationsUpdateInstance.');
        }
        // verify required parameter 'appInfoLocalizationUpdateRequest' is not null or undefined
        if (appInfoLocalizationUpdateRequest === null || appInfoLocalizationUpdateRequest === undefined) {
            throw new Error('Required parameter appInfoLocalizationUpdateRequest was null or undefined when calling appInfoLocalizationsUpdateInstance.');
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
            body: ObjectSerializer.serialize(appInfoLocalizationUpdateRequest, "AppInfoLocalizationUpdateRequest")
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
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: AppInfoLocalizationResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppInfoLocalizationResponse");
                            resolve({ response: response, body: body });
                        }
                        else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
