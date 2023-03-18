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
import { AppCustomProductPageCreateRequest } from '../model/appCustomProductPageCreateRequest';
import { AppCustomProductPageResponse } from '../model/appCustomProductPageResponse';
import { AppCustomProductPageUpdateRequest } from '../model/appCustomProductPageUpdateRequest';
import { AppCustomProductPageVersionsResponse } from '../model/appCustomProductPageVersionsResponse';
import { ErrorResponse } from '../model/errorResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AppCustomProductPagesApiApiKeys {
}

export class AppCustomProductPagesApi {
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

    public setApiKey(key: AppCustomProductPagesApiApiKeys, value: string) {
        (this.authentications as any)[AppCustomProductPagesApiApiKeys[key]].apiKey = value;
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
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param fieldsAppCustomProductPageLocalizations the fields to include for returned resources of type appCustomProductPageLocalizations
     * @param fieldsAppCustomProductPageVersions the fields to include for returned resources of type appCustomProductPageVersions
     * @param fieldsAppCustomProductPages the fields to include for returned resources of type appCustomProductPages
     * @param limit maximum resources per page
     * @param limitAppCustomProductPageLocalizations maximum number of related appCustomProductPageLocalizations returned (when they are included)
     * @param include comma-separated list of relationships to include
     */
    public async appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated (id: string, filterState?: Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REPLACED_WITH_NEW_VERSION' | 'REJECTED'>, fieldsAppCustomProductPageLocalizations?: Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'>, fieldsAppCustomProductPageVersions?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>, fieldsAppCustomProductPages?: Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>, limit?: number, limitAppCustomProductPageLocalizations?: number, include?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppCustomProductPageVersionsResponse;  }> {
        const localVarPath = this.basePath + '/v1/appCustomProductPages/{id}/appCustomProductPageVersions'
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
            throw new Error('Required parameter id was null or undefined when calling appCustomProductPagesAppCustomProductPageVersionsGetToManyRelated.');
        }

        if (filterState !== undefined) {
            localVarQueryParameters['filter[state]'] = ObjectSerializer.serialize(filterState, "Array<'PREPARE_FOR_SUBMISSION' | 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'ACCEPTED' | 'APPROVED' | 'REPLACED_WITH_NEW_VERSION' | 'REJECTED'>");
        }

        if (fieldsAppCustomProductPageLocalizations !== undefined) {
            localVarQueryParameters['fields[appCustomProductPageLocalizations]'] = ObjectSerializer.serialize(fieldsAppCustomProductPageLocalizations, "Array<'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText'>");
        }

        if (fieldsAppCustomProductPageVersions !== undefined) {
            localVarQueryParameters['fields[appCustomProductPageVersions]'] = ObjectSerializer.serialize(fieldsAppCustomProductPageVersions, "Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>");
        }

        if (fieldsAppCustomProductPages !== undefined) {
            localVarQueryParameters['fields[appCustomProductPages]'] = ObjectSerializer.serialize(fieldsAppCustomProductPages, "Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (limitAppCustomProductPageLocalizations !== undefined) {
            localVarQueryParameters['limit[appCustomProductPageLocalizations]'] = ObjectSerializer.serialize(limitAppCustomProductPageLocalizations, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'appCustomProductPage' | 'appCustomProductPageLocalizations'>");
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
            return new Promise<{ response: http.IncomingMessage; body: AppCustomProductPageVersionsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppCustomProductPageVersionsResponse");
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
     * @param appCustomProductPageCreateRequest AppCustomProductPage representation
     */
    public async appCustomProductPagesCreateInstance (appCustomProductPageCreateRequest: AppCustomProductPageCreateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppCustomProductPageResponse;  }> {
        const localVarPath = this.basePath + '/v1/appCustomProductPages';
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

        // verify required parameter 'appCustomProductPageCreateRequest' is not null or undefined
        if (appCustomProductPageCreateRequest === null || appCustomProductPageCreateRequest === undefined) {
            throw new Error('Required parameter appCustomProductPageCreateRequest was null or undefined when calling appCustomProductPagesCreateInstance.');
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
            body: ObjectSerializer.serialize(appCustomProductPageCreateRequest, "AppCustomProductPageCreateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: AppCustomProductPageResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppCustomProductPageResponse");
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
    public async appCustomProductPagesDeleteInstance (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/appCustomProductPages/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling appCustomProductPagesDeleteInstance.');
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
     * @param fieldsAppCustomProductPages the fields to include for returned resources of type appCustomProductPages
     * @param include comma-separated list of relationships to include
     * @param fieldsAppCustomProductPageVersions the fields to include for returned resources of type appCustomProductPageVersions
     * @param limitAppCustomProductPageVersions maximum number of related appCustomProductPageVersions returned (when they are included)
     */
    public async appCustomProductPagesGetInstance (id: string, fieldsAppCustomProductPages?: Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>, include?: Array<'app' | 'appCustomProductPageVersions'>, fieldsAppCustomProductPageVersions?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>, limitAppCustomProductPageVersions?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppCustomProductPageResponse;  }> {
        const localVarPath = this.basePath + '/v1/appCustomProductPages/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling appCustomProductPagesGetInstance.');
        }

        if (fieldsAppCustomProductPages !== undefined) {
            localVarQueryParameters['fields[appCustomProductPages]'] = ObjectSerializer.serialize(fieldsAppCustomProductPages, "Array<'app' | 'appCustomProductPageVersions' | 'appStoreVersionTemplate' | 'customProductPageTemplate' | 'name' | 'url' | 'visible'>");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'app' | 'appCustomProductPageVersions'>");
        }

        if (fieldsAppCustomProductPageVersions !== undefined) {
            localVarQueryParameters['fields[appCustomProductPageVersions]'] = ObjectSerializer.serialize(fieldsAppCustomProductPageVersions, "Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>");
        }

        if (limitAppCustomProductPageVersions !== undefined) {
            localVarQueryParameters['limit[appCustomProductPageVersions]'] = ObjectSerializer.serialize(limitAppCustomProductPageVersions, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: AppCustomProductPageResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppCustomProductPageResponse");
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
     * @param appCustomProductPageUpdateRequest AppCustomProductPage representation
     */
    public async appCustomProductPagesUpdateInstance (id: string, appCustomProductPageUpdateRequest: AppCustomProductPageUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AppCustomProductPageResponse;  }> {
        const localVarPath = this.basePath + '/v1/appCustomProductPages/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling appCustomProductPagesUpdateInstance.');
        }

        // verify required parameter 'appCustomProductPageUpdateRequest' is not null or undefined
        if (appCustomProductPageUpdateRequest === null || appCustomProductPageUpdateRequest === undefined) {
            throw new Error('Required parameter appCustomProductPageUpdateRequest was null or undefined when calling appCustomProductPagesUpdateInstance.');
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
            body: ObjectSerializer.serialize(appCustomProductPageUpdateRequest, "AppCustomProductPageUpdateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: AppCustomProductPageResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppCustomProductPageResponse");
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
