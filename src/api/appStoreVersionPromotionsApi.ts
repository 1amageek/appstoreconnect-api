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
import { AppStoreVersionPromotionCreateRequest } from '../model/appStoreVersionPromotionCreateRequest';
import { AppStoreVersionPromotionResponse } from '../model/appStoreVersionPromotionResponse';
import { ErrorResponse } from '../model/errorResponse';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';
import { HttpError, RequestFile } from './apis';
let defaultBasePath = 'https://api.appstoreconnect.apple.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
export enum AppStoreVersionPromotionsApiApiKeys {
}
export class AppStoreVersionPromotionsApi {
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
        key: AppStoreVersionPromotionsApiApiKeys;
        value: string;
    }) {
        const { key, value } = params;
        (this.authentications as any)[AppStoreVersionPromotionsApiApiKeys[key]].apiKey = value;
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
     * @param appStoreVersionPromotionCreateRequest AppStoreVersionPromotion representation
     */
    public async appStoreVersionPromotionsCreateInstance(params: {
        appStoreVersionPromotionCreateRequest: AppStoreVersionPromotionCreateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AppStoreVersionPromotionResponse;
    }> {
        const { appStoreVersionPromotionCreateRequest, options } = params;
        const localVarPath = this.basePath + '/v1/appStoreVersionPromotions';
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
        // verify required parameter 'appStoreVersionPromotionCreateRequest' is not null or undefined
        if (appStoreVersionPromotionCreateRequest === null || appStoreVersionPromotionCreateRequest === undefined) {
            throw new Error('Required parameter appStoreVersionPromotionCreateRequest was null or undefined when calling appStoreVersionPromotionsCreateInstance.');
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
            body: ObjectSerializer.serialize(appStoreVersionPromotionCreateRequest, "AppStoreVersionPromotionCreateRequest")
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
                body: AppStoreVersionPromotionResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppStoreVersionPromotionResponse");
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
