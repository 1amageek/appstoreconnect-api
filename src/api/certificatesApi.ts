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
import { CertificateCreateRequest } from '../model/certificateCreateRequest';
import { CertificateResponse } from '../model/certificateResponse';
import { CertificatesResponse } from '../model/certificatesResponse';
import { ErrorResponse } from '../model/errorResponse';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';
import { HttpError, RequestFile } from './apis';
let defaultBasePath = 'https://api.appstoreconnect.apple.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
export enum CertificatesApiApiKeys {
}
export class CertificatesApi {
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
        key: CertificatesApiApiKeys;
        value: string;
    }) {
        const { key, value } = params;
        (this.authentications as any)[CertificatesApiApiKeys[key]].apiKey = value;
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
     * @param certificateCreateRequest Certificate representation
     */
    public async certificatesCreateInstance(params: {
        certificateCreateRequest: CertificateCreateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CertificateResponse;
    }> {
        const { certificateCreateRequest, options } = params;
        const localVarPath = this.basePath + '/v1/certificates';
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
        // verify required parameter 'certificateCreateRequest' is not null or undefined
        if (certificateCreateRequest === null || certificateCreateRequest === undefined) {
            throw new Error('Required parameter certificateCreateRequest was null or undefined when calling certificatesCreateInstance.');
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
            body: ObjectSerializer.serialize(certificateCreateRequest, "CertificateCreateRequest")
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
                body: CertificateResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CertificateResponse");
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
    public async certificatesDeleteInstance(params: {
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
        const localVarPath = this.basePath + '/v1/certificates/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling certificatesDeleteInstance.');
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
     * @param filterCertificateType filter by attribute \&#39;certificateType\&#39;
     * @param filterDisplayName filter by attribute \&#39;displayName\&#39;
     * @param filterSerialNumber filter by attribute \&#39;serialNumber\&#39;
     * @param filterId filter by id(s)
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     * @param limit maximum resources per page
     */
    public async certificatesGetCollection(params: {
        filterCertificateType?: Array<'IOS_DEVELOPMENT' | 'IOS_DISTRIBUTION' | 'MAC_APP_DISTRIBUTION' | 'MAC_INSTALLER_DISTRIBUTION' | 'MAC_APP_DEVELOPMENT' | 'DEVELOPER_ID_KEXT' | 'DEVELOPER_ID_APPLICATION' | 'DEVELOPMENT' | 'DISTRIBUTION' | 'PASS_TYPE_ID' | 'PASS_TYPE_ID_WITH_NFC'>;
        filterDisplayName?: Array<string>;
        filterSerialNumber?: Array<string>;
        filterId?: Array<string>;
        sort?: Array<'certificateType' | '-certificateType' | 'displayName' | '-displayName' | 'id' | '-id' | 'serialNumber' | '-serialNumber'>;
        fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>;
        limit?: number;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CertificatesResponse;
    }> {
        const { filterCertificateType, filterDisplayName, filterSerialNumber, filterId, sort, fieldsCertificates, limit, options } = params;
        const localVarPath = this.basePath + '/v1/certificates';
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
        if (filterCertificateType !== undefined) {
            localVarQueryParameters['filter[certificateType]'] = ObjectSerializer.serialize(filterCertificateType, "Array<'IOS_DEVELOPMENT' | 'IOS_DISTRIBUTION' | 'MAC_APP_DISTRIBUTION' | 'MAC_INSTALLER_DISTRIBUTION' | 'MAC_APP_DEVELOPMENT' | 'DEVELOPER_ID_KEXT' | 'DEVELOPER_ID_APPLICATION' | 'DEVELOPMENT' | 'DISTRIBUTION' | 'PASS_TYPE_ID' | 'PASS_TYPE_ID_WITH_NFC'>");
        }
        if (filterDisplayName !== undefined) {
            localVarQueryParameters['filter[displayName]'] = ObjectSerializer.serialize(filterDisplayName, "Array<string>");
        }
        if (filterSerialNumber !== undefined) {
            localVarQueryParameters['filter[serialNumber]'] = ObjectSerializer.serialize(filterSerialNumber, "Array<string>");
        }
        if (filterId !== undefined) {
            localVarQueryParameters['filter[id]'] = ObjectSerializer.serialize(filterId, "Array<string>");
        }
        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "Array<'certificateType' | '-certificateType' | 'displayName' | '-displayName' | 'id' | '-id' | 'serialNumber' | '-serialNumber'>");
        }
        if (fieldsCertificates !== undefined) {
            localVarQueryParameters['fields[certificates]'] = ObjectSerializer.serialize(fieldsCertificates, "Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>");
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
                body: CertificatesResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CertificatesResponse");
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
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     */
    public async certificatesGetInstance(params: {
        id: string;
        fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CertificateResponse;
    }> {
        const { id, fieldsCertificates, options } = params;
        const localVarPath = this.basePath + '/v1/certificates/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling certificatesGetInstance.');
        }
        if (fieldsCertificates !== undefined) {
            localVarQueryParameters['fields[certificates]'] = ObjectSerializer.serialize(fieldsCertificates, "Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>");
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
                body: CertificateResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CertificateResponse");
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
