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
import { DeviceCreateRequest } from '../model/deviceCreateRequest';
import { DeviceResponse } from '../model/deviceResponse';
import { DeviceUpdateRequest } from '../model/deviceUpdateRequest';
import { DevicesResponse } from '../model/devicesResponse';
import { ErrorResponse } from '../model/errorResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DevicesApiApiKeys {
}

export class DevicesApi {
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

    public setApiKey(key: DevicesApiApiKeys, value: string) {
        (this.authentications as any)[DevicesApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.itcBearerToken.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @param deviceCreateRequest Device representation
     */
    public async devicesCreateInstance (deviceCreateRequest: DeviceCreateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeviceResponse;  }> {
        const localVarPath = this.basePath + '/v1/devices';
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

        // verify required parameter 'deviceCreateRequest' is not null or undefined
        if (deviceCreateRequest === null || deviceCreateRequest === undefined) {
            throw new Error('Required parameter deviceCreateRequest was null or undefined when calling devicesCreateInstance.');
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
            body: ObjectSerializer.serialize(deviceCreateRequest, "DeviceCreateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: DeviceResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DeviceResponse");
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
     * @param filterName filter by attribute \&#39;name\&#39;
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     * @param filterStatus filter by attribute \&#39;status\&#39;
     * @param filterUdid filter by attribute \&#39;udid\&#39;
     * @param filterId filter by id(s)
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsDevices the fields to include for returned resources of type devices
     * @param limit maximum resources per page
     */
    public async devicesGetCollection (filterName?: Array<string>, filterPlatform?: Array<'IOS' | 'MAC_OS'>, filterStatus?: Array<'ENABLED' | 'DISABLED'>, filterUdid?: Array<string>, filterId?: Array<string>, sort?: Array<'id' | '-id' | 'name' | '-name' | 'platform' | '-platform' | 'status' | '-status' | 'udid' | '-udid'>, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DevicesResponse;  }> {
        const localVarPath = this.basePath + '/v1/devices';
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

        if (filterName !== undefined) {
            localVarQueryParameters['filter[name]'] = ObjectSerializer.serialize(filterName, "Array<string>");
        }

        if (filterPlatform !== undefined) {
            localVarQueryParameters['filter[platform]'] = ObjectSerializer.serialize(filterPlatform, "Array<'IOS' | 'MAC_OS'>");
        }

        if (filterStatus !== undefined) {
            localVarQueryParameters['filter[status]'] = ObjectSerializer.serialize(filterStatus, "Array<'ENABLED' | 'DISABLED'>");
        }

        if (filterUdid !== undefined) {
            localVarQueryParameters['filter[udid]'] = ObjectSerializer.serialize(filterUdid, "Array<string>");
        }

        if (filterId !== undefined) {
            localVarQueryParameters['filter[id]'] = ObjectSerializer.serialize(filterId, "Array<string>");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "Array<'id' | '-id' | 'name' | '-name' | 'platform' | '-platform' | 'status' | '-status' | 'udid' | '-udid'>");
        }

        if (fieldsDevices !== undefined) {
            localVarQueryParameters['fields[devices]'] = ObjectSerializer.serialize(fieldsDevices, "Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>");
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
            return new Promise<{ response: http.IncomingMessage; body: DevicesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DevicesResponse");
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
     * @param fieldsDevices the fields to include for returned resources of type devices
     */
    public async devicesGetInstance (id: string, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeviceResponse;  }> {
        const localVarPath = this.basePath + '/v1/devices/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling devicesGetInstance.');
        }

        if (fieldsDevices !== undefined) {
            localVarQueryParameters['fields[devices]'] = ObjectSerializer.serialize(fieldsDevices, "Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>");
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
            return new Promise<{ response: http.IncomingMessage; body: DeviceResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DeviceResponse");
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
     * @param deviceUpdateRequest Device representation
     */
    public async devicesUpdateInstance (id: string, deviceUpdateRequest: DeviceUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeviceResponse;  }> {
        const localVarPath = this.basePath + '/v1/devices/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling devicesUpdateInstance.');
        }

        // verify required parameter 'deviceUpdateRequest' is not null or undefined
        if (deviceUpdateRequest === null || deviceUpdateRequest === undefined) {
            throw new Error('Required parameter deviceUpdateRequest was null or undefined when calling devicesUpdateInstance.');
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
            body: ObjectSerializer.serialize(deviceUpdateRequest, "DeviceUpdateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: DeviceResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "DeviceResponse");
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
