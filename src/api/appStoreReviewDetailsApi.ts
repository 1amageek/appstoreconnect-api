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
import { AppStoreReviewAttachmentsResponse } from '../model/appStoreReviewAttachmentsResponse';
import { AppStoreReviewDetailCreateRequest } from '../model/appStoreReviewDetailCreateRequest';
import { AppStoreReviewDetailResponse } from '../model/appStoreReviewDetailResponse';
import { AppStoreReviewDetailUpdateRequest } from '../model/appStoreReviewDetailUpdateRequest';
import { ErrorResponse } from '../model/errorResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AppStoreReviewDetailsApiApiKeys {
}

export class AppStoreReviewDetailsApi {
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

    public setApiKey(key: AppStoreReviewDetailsApiApiKeys, value: string) {
        (this.authentications as any)[AppStoreReviewDetailsApiApiKeys[key]].apiKey = value;
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
     * @param fieldsAppStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
     * @param fieldsAppStoreReviewAttachments the fields to include for returned resources of type appStoreReviewAttachments
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated (id: string, fieldsAppStoreReviewDetails?: Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, fieldsAppStoreReviewAttachments?: Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, limit?: number, include?: Array<'appStoreReviewDetail'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppStoreReviewAttachmentsResponse;  }> {
        const localVarPath = this.basePath + '/v1/appStoreReviewDetails/{id}/appStoreReviewAttachments'
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
            throw new Error('Required parameter id was null or undefined when calling appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated.');
        }

        if (fieldsAppStoreReviewDetails !== undefined) {
            localVarQueryParameters['fields[appStoreReviewDetails]'] = ObjectSerializer.serialize(fieldsAppStoreReviewDetails, "Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>");
        }

        if (fieldsAppStoreReviewAttachments !== undefined) {
            localVarQueryParameters['fields[appStoreReviewAttachments]'] = ObjectSerializer.serialize(fieldsAppStoreReviewAttachments, "Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'appStoreReviewDetail'>");
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
            return new Promise<{ response: http.IncomingMessage; body: AppStoreReviewAttachmentsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppStoreReviewAttachmentsResponse");
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
     * @param appStoreReviewDetailCreateRequest AppStoreReviewDetail representation
     */
    public async appStoreReviewDetailsCreateInstance (appStoreReviewDetailCreateRequest: AppStoreReviewDetailCreateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppStoreReviewDetailResponse;  }> {
        const localVarPath = this.basePath + '/v1/appStoreReviewDetails';
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

        // verify required parameter 'appStoreReviewDetailCreateRequest' is not null or undefined
        if (appStoreReviewDetailCreateRequest === null || appStoreReviewDetailCreateRequest === undefined) {
            throw new Error('Required parameter appStoreReviewDetailCreateRequest was null or undefined when calling appStoreReviewDetailsCreateInstance.');
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
            body: ObjectSerializer.serialize(appStoreReviewDetailCreateRequest, "AppStoreReviewDetailCreateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: AppStoreReviewDetailResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppStoreReviewDetailResponse");
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
     * @param fieldsAppStoreReviewDetails the fields to include for returned resources of type appStoreReviewDetails
     * @param include comma-separated list of relationships to include
     * @param fieldsAppStoreReviewAttachments the fields to include for returned resources of type appStoreReviewAttachments
     * @param limitAppStoreReviewAttachments maximum number of related appStoreReviewAttachments returned (when they are included)
     */
    public async appStoreReviewDetailsGetInstance (id: string, fieldsAppStoreReviewDetails?: Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>, include?: Array<'appStoreReviewAttachments' | 'appStoreVersion'>, fieldsAppStoreReviewAttachments?: Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>, limitAppStoreReviewAttachments?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppStoreReviewDetailResponse;  }> {
        const localVarPath = this.basePath + '/v1/appStoreReviewDetails/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling appStoreReviewDetailsGetInstance.');
        }

        if (fieldsAppStoreReviewDetails !== undefined) {
            localVarQueryParameters['fields[appStoreReviewDetails]'] = ObjectSerializer.serialize(fieldsAppStoreReviewDetails, "Array<'appStoreReviewAttachments' | 'appStoreVersion' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes'>");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'appStoreReviewAttachments' | 'appStoreVersion'>");
        }

        if (fieldsAppStoreReviewAttachments !== undefined) {
            localVarQueryParameters['fields[appStoreReviewAttachments]'] = ObjectSerializer.serialize(fieldsAppStoreReviewAttachments, "Array<'appStoreReviewDetail' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded'>");
        }

        if (limitAppStoreReviewAttachments !== undefined) {
            localVarQueryParameters['limit[appStoreReviewAttachments]'] = ObjectSerializer.serialize(limitAppStoreReviewAttachments, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: AppStoreReviewDetailResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppStoreReviewDetailResponse");
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
     * @param appStoreReviewDetailUpdateRequest AppStoreReviewDetail representation
     */
    public async appStoreReviewDetailsUpdateInstance (id: string, appStoreReviewDetailUpdateRequest: AppStoreReviewDetailUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppStoreReviewDetailResponse;  }> {
        const localVarPath = this.basePath + '/v1/appStoreReviewDetails/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling appStoreReviewDetailsUpdateInstance.');
        }

        // verify required parameter 'appStoreReviewDetailUpdateRequest' is not null or undefined
        if (appStoreReviewDetailUpdateRequest === null || appStoreReviewDetailUpdateRequest === undefined) {
            throw new Error('Required parameter appStoreReviewDetailUpdateRequest was null or undefined when calling appStoreReviewDetailsUpdateInstance.');
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
            body: ObjectSerializer.serialize(appStoreReviewDetailUpdateRequest, "AppStoreReviewDetailUpdateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: AppStoreReviewDetailResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppStoreReviewDetailResponse");
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
