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
import { SandboxTesterV2Response } from '../model/sandboxTesterV2Response';
import { SandboxTesterV2UpdateRequest } from '../model/sandboxTesterV2UpdateRequest';
import { SandboxTestersV2Response } from '../model/sandboxTestersV2Response';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';
import { HttpError, RequestFile } from './apis';
let defaultBasePath = 'https://api.appstoreconnect.apple.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
export enum SandboxTestersApiApiKeys {
}
export class SandboxTestersApi {
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
        key: SandboxTestersApiApiKeys;
        value: string;
    }) {
        const { key, value } = params;
        (this.authentications as any)[SandboxTestersApiApiKeys[key]].apiKey = value;
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
     * @param fieldsSandboxTesters the fields to include for returned resources of type sandboxTesters
     * @param limit maximum resources per page
     */
    public async sandboxTestersGetCollection(params: {
        fieldsSandboxTesters?: Array<'acAccountName' | 'applePayCompatible' | 'firstName' | 'interruptPurchases' | 'lastName' | 'subscriptionRenewalRate' | 'territory'>;
        limit?: number;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SandboxTestersV2Response;
    }> {
        const { fieldsSandboxTesters, limit, options } = params;
        const localVarPath = this.basePath + '/v2/sandboxTesters';
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
        if (fieldsSandboxTesters !== undefined) {
            localVarQueryParameters['fields[sandboxTesters]'] = ObjectSerializer.serialize(fieldsSandboxTesters, "Array<'acAccountName' | 'applePayCompatible' | 'firstName' | 'interruptPurchases' | 'lastName' | 'subscriptionRenewalRate' | 'territory'>");
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
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{
                response: http.IncomingMessage;
                body: SandboxTestersV2Response;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SandboxTestersV2Response");
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
     * @param sandboxTesterV2UpdateRequest SandboxTester representation
     */
    public async sandboxTestersUpdateInstance(params: {
        id: string;
        sandboxTesterV2UpdateRequest: SandboxTesterV2UpdateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SandboxTesterV2Response;
    }> {
        const { id, sandboxTesterV2UpdateRequest, options } = params;
        const localVarPath = this.basePath + '/v2/sandboxTesters/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling sandboxTestersUpdateInstance.');
        }
        // verify required parameter 'sandboxTesterV2UpdateRequest' is not null or undefined
        if (sandboxTesterV2UpdateRequest === null || sandboxTesterV2UpdateRequest === undefined) {
            throw new Error('Required parameter sandboxTesterV2UpdateRequest was null or undefined when calling sandboxTestersUpdateInstance.');
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
            body: ObjectSerializer.serialize(sandboxTesterV2UpdateRequest, "SandboxTesterV2UpdateRequest")
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
                body: SandboxTesterV2Response;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "SandboxTesterV2Response");
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
