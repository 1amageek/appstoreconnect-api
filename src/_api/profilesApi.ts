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
import { BundleIdResponse } from '../model/bundleIdResponse';
import { CertificatesResponse } from '../model/certificatesResponse';
import { DevicesResponse } from '../model/devicesResponse';
import { ErrorResponse } from '../model/errorResponse';
import { ProfileCreateRequest } from '../model/profileCreateRequest';
import { ProfileResponse } from '../model/profileResponse';
import { ProfilesResponse } from '../model/profilesResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ProfilesApiApiKeys {
}

export class ProfilesApi {
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

    public setApiKey(key: ProfilesApiApiKeys, value: string) {
        (this.authentications as any)[ProfilesApiApiKeys[key]].apiKey = value;
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
     * @param fieldsBundleIds the fields to include for returned resources of type bundleIds
     */
    public async profilesBundleIdGetToOneRelated (id: string, fieldsBundleIds?: Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BundleIdResponse;  }> {
        const localVarPath = this.basePath + '/v1/profiles/{id}/bundleId'
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
            throw new Error('Required parameter id was null or undefined when calling profilesBundleIdGetToOneRelated.');
        }

        if (fieldsBundleIds !== undefined) {
            localVarQueryParameters['fields[bundleIds]'] = ObjectSerializer.serialize(fieldsBundleIds, "Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>");
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
            return new Promise<{ response: http.IncomingMessage; body: BundleIdResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BundleIdResponse");
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
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     * @param limit maximum resources per page
     */
    public async profilesCertificatesGetToManyRelated (id: string, fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CertificatesResponse;  }> {
        const localVarPath = this.basePath + '/v1/profiles/{id}/certificates'
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
            throw new Error('Required parameter id was null or undefined when calling profilesCertificatesGetToManyRelated.');
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
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CertificatesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CertificatesResponse");
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
     * @param profileCreateRequest Profile representation
     */
    public async profilesCreateInstance (profileCreateRequest: ProfileCreateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ProfileResponse;  }> {
        const localVarPath = this.basePath + '/v1/profiles';
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

        // verify required parameter 'profileCreateRequest' is not null or undefined
        if (profileCreateRequest === null || profileCreateRequest === undefined) {
            throw new Error('Required parameter profileCreateRequest was null or undefined when calling profilesCreateInstance.');
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
            body: ObjectSerializer.serialize(profileCreateRequest, "ProfileCreateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ProfileResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ProfileResponse");
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
    public async profilesDeleteInstance (id: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/v1/profiles/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling profilesDeleteInstance.');
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
     * @param fieldsDevices the fields to include for returned resources of type devices
     * @param limit maximum resources per page
     */
    public async profilesDevicesGetToManyRelated (id: string, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, limit?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DevicesResponse;  }> {
        const localVarPath = this.basePath + '/v1/profiles/{id}/devices'
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
            throw new Error('Required parameter id was null or undefined when calling profilesDevicesGetToManyRelated.');
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
     * @param filterName filter by attribute \&#39;name\&#39;
     * @param filterProfileState filter by attribute \&#39;profileState\&#39;
     * @param filterProfileType filter by attribute \&#39;profileType\&#39;
     * @param filterId filter by id(s)
     * @param sort comma-separated list of sort expressions; resources will be sorted as specified
     * @param fieldsProfiles the fields to include for returned resources of type profiles
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     * @param fieldsDevices the fields to include for returned resources of type devices
     * @param fieldsBundleIds the fields to include for returned resources of type bundleIds
     * @param limitCertificates maximum number of related certificates returned (when they are included)
     * @param limitDevices maximum number of related devices returned (when they are included)
     */
    public async profilesGetCollection (filterName?: Array<string>, filterProfileState?: Array<'ACTIVE' | 'INVALID'>, filterProfileType?: Array<'IOS_APP_DEVELOPMENT' | 'IOS_APP_STORE' | 'IOS_APP_ADHOC' | 'IOS_APP_INHOUSE' | 'MAC_APP_DEVELOPMENT' | 'MAC_APP_STORE' | 'MAC_APP_DIRECT' | 'TVOS_APP_DEVELOPMENT' | 'TVOS_APP_STORE' | 'TVOS_APP_ADHOC' | 'TVOS_APP_INHOUSE' | 'MAC_CATALYST_APP_DEVELOPMENT' | 'MAC_CATALYST_APP_STORE' | 'MAC_CATALYST_APP_DIRECT'>, filterId?: Array<string>, sort?: Array<'id' | '-id' | 'name' | '-name' | 'profileState' | '-profileState' | 'profileType' | '-profileType'>, fieldsProfiles?: Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>, limit?: number, include?: Array<'bundleId' | 'certificates' | 'devices'>, fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, fieldsBundleIds?: Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>, limitCertificates?: number, limitDevices?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ProfilesResponse;  }> {
        const localVarPath = this.basePath + '/v1/profiles';
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

        if (filterProfileState !== undefined) {
            localVarQueryParameters['filter[profileState]'] = ObjectSerializer.serialize(filterProfileState, "Array<'ACTIVE' | 'INVALID'>");
        }

        if (filterProfileType !== undefined) {
            localVarQueryParameters['filter[profileType]'] = ObjectSerializer.serialize(filterProfileType, "Array<'IOS_APP_DEVELOPMENT' | 'IOS_APP_STORE' | 'IOS_APP_ADHOC' | 'IOS_APP_INHOUSE' | 'MAC_APP_DEVELOPMENT' | 'MAC_APP_STORE' | 'MAC_APP_DIRECT' | 'TVOS_APP_DEVELOPMENT' | 'TVOS_APP_STORE' | 'TVOS_APP_ADHOC' | 'TVOS_APP_INHOUSE' | 'MAC_CATALYST_APP_DEVELOPMENT' | 'MAC_CATALYST_APP_STORE' | 'MAC_CATALYST_APP_DIRECT'>");
        }

        if (filterId !== undefined) {
            localVarQueryParameters['filter[id]'] = ObjectSerializer.serialize(filterId, "Array<string>");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "Array<'id' | '-id' | 'name' | '-name' | 'profileState' | '-profileState' | 'profileType' | '-profileType'>");
        }

        if (fieldsProfiles !== undefined) {
            localVarQueryParameters['fields[profiles]'] = ObjectSerializer.serialize(fieldsProfiles, "Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'bundleId' | 'certificates' | 'devices'>");
        }

        if (fieldsCertificates !== undefined) {
            localVarQueryParameters['fields[certificates]'] = ObjectSerializer.serialize(fieldsCertificates, "Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>");
        }

        if (fieldsDevices !== undefined) {
            localVarQueryParameters['fields[devices]'] = ObjectSerializer.serialize(fieldsDevices, "Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>");
        }

        if (fieldsBundleIds !== undefined) {
            localVarQueryParameters['fields[bundleIds]'] = ObjectSerializer.serialize(fieldsBundleIds, "Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>");
        }

        if (limitCertificates !== undefined) {
            localVarQueryParameters['limit[certificates]'] = ObjectSerializer.serialize(limitCertificates, "number");
        }

        if (limitDevices !== undefined) {
            localVarQueryParameters['limit[devices]'] = ObjectSerializer.serialize(limitDevices, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: ProfilesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ProfilesResponse");
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
     * @param fieldsProfiles the fields to include for returned resources of type profiles
     * @param include comma-separated list of relationships to include
     * @param fieldsCertificates the fields to include for returned resources of type certificates
     * @param fieldsDevices the fields to include for returned resources of type devices
     * @param fieldsBundleIds the fields to include for returned resources of type bundleIds
     * @param limitCertificates maximum number of related certificates returned (when they are included)
     * @param limitDevices maximum number of related devices returned (when they are included)
     */
    public async profilesGetInstance (id: string, fieldsProfiles?: Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>, include?: Array<'bundleId' | 'certificates' | 'devices'>, fieldsCertificates?: Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>, fieldsDevices?: Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>, fieldsBundleIds?: Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>, limitCertificates?: number, limitDevices?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ProfileResponse;  }> {
        const localVarPath = this.basePath + '/v1/profiles/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling profilesGetInstance.');
        }

        if (fieldsProfiles !== undefined) {
            localVarQueryParameters['fields[profiles]'] = ObjectSerializer.serialize(fieldsProfiles, "Array<'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid'>");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'bundleId' | 'certificates' | 'devices'>");
        }

        if (fieldsCertificates !== undefined) {
            localVarQueryParameters['fields[certificates]'] = ObjectSerializer.serialize(fieldsCertificates, "Array<'certificateContent' | 'certificateType' | 'csrContent' | 'displayName' | 'expirationDate' | 'name' | 'platform' | 'serialNumber'>");
        }

        if (fieldsDevices !== undefined) {
            localVarQueryParameters['fields[devices]'] = ObjectSerializer.serialize(fieldsDevices, "Array<'addedDate' | 'deviceClass' | 'model' | 'name' | 'platform' | 'status' | 'udid'>");
        }

        if (fieldsBundleIds !== undefined) {
            localVarQueryParameters['fields[bundleIds]'] = ObjectSerializer.serialize(fieldsBundleIds, "Array<'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId'>");
        }

        if (limitCertificates !== undefined) {
            localVarQueryParameters['limit[certificates]'] = ObjectSerializer.serialize(limitCertificates, "number");
        }

        if (limitDevices !== undefined) {
            localVarQueryParameters['limit[devices]'] = ObjectSerializer.serialize(limitDevices, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: ProfileResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ProfileResponse");
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