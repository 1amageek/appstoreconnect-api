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
import { ErrorResponse } from '../model/errorResponse';
import { SubscriptionOfferCodeOneTimeUseCodeCreateRequest } from '../model/subscriptionOfferCodeOneTimeUseCodeCreateRequest';
import { SubscriptionOfferCodeOneTimeUseCodeResponse } from '../model/subscriptionOfferCodeOneTimeUseCodeResponse';
import { SubscriptionOfferCodeOneTimeUseCodeUpdateRequest } from '../model/subscriptionOfferCodeOneTimeUseCodeUpdateRequest';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';
import { HttpError, RequestFile } from './apis';
let defaultBasePath = 'https://api.appstoreconnect.apple.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
export enum SubscriptionOfferCodeOneTimeUseCodesApiApiKeys {
}
export class SubscriptionOfferCodeOneTimeUseCodesApi {
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
        key: SubscriptionOfferCodeOneTimeUseCodesApiApiKeys;
        value: string;
    }) {
        const { key, value } = params;
        (this.authentications as any)[SubscriptionOfferCodeOneTimeUseCodesApiApiKeys[key]].apiKey = value;
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
     * @param subscriptionOfferCodeOneTimeUseCodeCreateRequest SubscriptionOfferCodeOneTimeUseCode representation
     */
    public async subscriptionOfferCodeOneTimeUseCodesCreateInstance(params: {
        subscriptionOfferCodeOneTimeUseCodeCreateRequest: SubscriptionOfferCodeOneTimeUseCodeCreateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SubscriptionOfferCodeOneTimeUseCodeResponse;
    }> {
        const { subscriptionOfferCodeOneTimeUseCodeCreateRequest, options } = params;
        const localVarPath = this.basePath + '/v1/subscriptionOfferCodeOneTimeUseCodes';
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
        // verify required parameter 'subscriptionOfferCodeOneTimeUseCodeCreateRequest' is not null or undefined
        if (subscriptionOfferCodeOneTimeUseCodeCreateRequest === null || subscriptionOfferCodeOneTimeUseCodeCreateRequest === undefined) {
            throw new Error('Required parameter subscriptionOfferCodeOneTimeUseCodeCreateRequest was null or undefined when calling subscriptionOfferCodeOneTimeUseCodesCreateInstance.');
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
            body: ObjectSerializer.serialize(subscriptionOfferCodeOneTimeUseCodeCreateRequest, "SubscriptionOfferCodeOneTimeUseCodeCreateRequest")
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
                body: SubscriptionOfferCodeOneTimeUseCodeResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SubscriptionOfferCodeOneTimeUseCodeResponse");
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
     * @param fieldsSubscriptionOfferCodeOneTimeUseCodes the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodes
     * @param include comma-separated list of relationships to include
     * @param fieldsSubscriptionOfferCodeOneTimeUseCodeValues the fields to include for returned resources of type subscriptionOfferCodeOneTimeUseCodeValues
     */
    public async subscriptionOfferCodeOneTimeUseCodesGetInstance(params: {
        id: string;
        fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>;
        include?: Array<'offerCode'>;
        fieldsSubscriptionOfferCodeOneTimeUseCodeValues?: Array<string>;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SubscriptionOfferCodeOneTimeUseCodeResponse;
    }> {
        const { id, fieldsSubscriptionOfferCodeOneTimeUseCodes, include, fieldsSubscriptionOfferCodeOneTimeUseCodeValues, options } = params;
        const localVarPath = this.basePath + '/v1/subscriptionOfferCodeOneTimeUseCodes/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling subscriptionOfferCodeOneTimeUseCodesGetInstance.');
        }
        if (fieldsSubscriptionOfferCodeOneTimeUseCodes !== undefined) {
            localVarQueryParameters['fields[subscriptionOfferCodeOneTimeUseCodes]'] = ObjectSerializer.serialize(fieldsSubscriptionOfferCodeOneTimeUseCodes, "Array<'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values'>");
        }
        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'offerCode'>");
        }
        if (fieldsSubscriptionOfferCodeOneTimeUseCodeValues !== undefined) {
            localVarQueryParameters['fields[subscriptionOfferCodeOneTimeUseCodeValues]'] = ObjectSerializer.serialize(fieldsSubscriptionOfferCodeOneTimeUseCodeValues, "Array<string>");
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
                body: SubscriptionOfferCodeOneTimeUseCodeResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SubscriptionOfferCodeOneTimeUseCodeResponse");
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
     * @param subscriptionOfferCodeOneTimeUseCodeUpdateRequest SubscriptionOfferCodeOneTimeUseCode representation
     */
    public async subscriptionOfferCodeOneTimeUseCodesUpdateInstance(params: {
        id: string;
        subscriptionOfferCodeOneTimeUseCodeUpdateRequest: SubscriptionOfferCodeOneTimeUseCodeUpdateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SubscriptionOfferCodeOneTimeUseCodeResponse;
    }> {
        const { id, subscriptionOfferCodeOneTimeUseCodeUpdateRequest, options } = params;
        const localVarPath = this.basePath + '/v1/subscriptionOfferCodeOneTimeUseCodes/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling subscriptionOfferCodeOneTimeUseCodesUpdateInstance.');
        }
        // verify required parameter 'subscriptionOfferCodeOneTimeUseCodeUpdateRequest' is not null or undefined
        if (subscriptionOfferCodeOneTimeUseCodeUpdateRequest === null || subscriptionOfferCodeOneTimeUseCodeUpdateRequest === undefined) {
            throw new Error('Required parameter subscriptionOfferCodeOneTimeUseCodeUpdateRequest was null or undefined when calling subscriptionOfferCodeOneTimeUseCodesUpdateInstance.');
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
            body: ObjectSerializer.serialize(subscriptionOfferCodeOneTimeUseCodeUpdateRequest, "SubscriptionOfferCodeOneTimeUseCodeUpdateRequest")
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
                body: SubscriptionOfferCodeOneTimeUseCodeResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SubscriptionOfferCodeOneTimeUseCodeResponse");
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
    public async subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated(params: {
        id: string;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }> {
        const { id, options } = params;
        const localVarPath = this.basePath + '/v1/subscriptionOfferCodeOneTimeUseCodes/{id}/values'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/csv'];
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
            throw new Error('Required parameter id was null or undefined when calling subscriptionOfferCodeOneTimeUseCodesValuesGetToOneRelated.');
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
                body: string;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "string");
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
