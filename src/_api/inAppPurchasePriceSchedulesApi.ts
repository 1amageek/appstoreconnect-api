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
import { InAppPurchasePriceScheduleCreateRequest } from '../model/inAppPurchasePriceScheduleCreateRequest';
import { InAppPurchasePriceScheduleResponse } from '../model/inAppPurchasePriceScheduleResponse';
import { InAppPurchasePricesResponse } from '../model/inAppPurchasePricesResponse';
import { TerritoryResponse } from '../model/territoryResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum InAppPurchasePriceSchedulesApiApiKeys {
}

export class InAppPurchasePriceSchedulesApi {
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

    public setApiKey(key: InAppPurchasePriceSchedulesApiApiKeys, value: string) {
        (this.authentications as any)[InAppPurchasePriceSchedulesApiApiKeys[key]].apiKey = value;
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
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsInAppPurchasePricePoints the fields to include for returned resources of type inAppPurchasePricePoints
     * @param fieldsInAppPurchasePrices the fields to include for returned resources of type inAppPurchasePrices
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated (id: string, filterTerritory?: Array<string>, fieldsInAppPurchasePricePoints?: Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>, fieldsInAppPurchasePrices?: Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'inAppPurchasePricePoint' | 'territory'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InAppPurchasePricesResponse;  }> {
        const localVarPath = this.basePath + '/v1/inAppPurchasePriceSchedules/{id}/automaticPrices'
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
            throw new Error('Required parameter id was null or undefined when calling inAppPurchasePriceSchedulesAutomaticPricesGetToManyRelated.');
        }

        if (filterTerritory !== undefined) {
            localVarQueryParameters['filter[territory]'] = ObjectSerializer.serialize(filterTerritory, "Array<string>");
        }

        if (fieldsInAppPurchasePricePoints !== undefined) {
            localVarQueryParameters['fields[inAppPurchasePricePoints]'] = ObjectSerializer.serialize(fieldsInAppPurchasePricePoints, "Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>");
        }

        if (fieldsInAppPurchasePrices !== undefined) {
            localVarQueryParameters['fields[inAppPurchasePrices]'] = ObjectSerializer.serialize(fieldsInAppPurchasePrices, "Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>");
        }

        if (fieldsTerritories !== undefined) {
            localVarQueryParameters['fields[territories]'] = ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'inAppPurchasePricePoint' | 'territory'>");
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
            return new Promise<{ response: http.IncomingMessage; body: InAppPurchasePricesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "InAppPurchasePricesResponse");
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
     * @param fieldsTerritories the fields to include for returned resources of type territories
     */
    public async inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated (id: string, fieldsTerritories?: Array<'currency'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TerritoryResponse;  }> {
        const localVarPath = this.basePath + '/v1/inAppPurchasePriceSchedules/{id}/baseTerritory'
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
            throw new Error('Required parameter id was null or undefined when calling inAppPurchasePriceSchedulesBaseTerritoryGetToOneRelated.');
        }

        if (fieldsTerritories !== undefined) {
            localVarQueryParameters['fields[territories]'] = ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>");
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
            return new Promise<{ response: http.IncomingMessage; body: TerritoryResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "TerritoryResponse");
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
     * @param inAppPurchasePriceScheduleCreateRequest InAppPurchasePriceSchedule representation
     */
    public async inAppPurchasePriceSchedulesCreateInstance (inAppPurchasePriceScheduleCreateRequest: InAppPurchasePriceScheduleCreateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InAppPurchasePriceScheduleResponse;  }> {
        const localVarPath = this.basePath + '/v1/inAppPurchasePriceSchedules';
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

        // verify required parameter 'inAppPurchasePriceScheduleCreateRequest' is not null or undefined
        if (inAppPurchasePriceScheduleCreateRequest === null || inAppPurchasePriceScheduleCreateRequest === undefined) {
            throw new Error('Required parameter inAppPurchasePriceScheduleCreateRequest was null or undefined when calling inAppPurchasePriceSchedulesCreateInstance.');
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
            body: ObjectSerializer.serialize(inAppPurchasePriceScheduleCreateRequest, "InAppPurchasePriceScheduleCreateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: InAppPurchasePriceScheduleResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "InAppPurchasePriceScheduleResponse");
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
     * @param fieldsInAppPurchasePriceSchedules the fields to include for returned resources of type inAppPurchasePriceSchedules
     * @param include comma-separated list of relationships to include
     * @param fieldsInAppPurchasePrices the fields to include for returned resources of type inAppPurchasePrices
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limitAutomaticPrices maximum number of related automaticPrices returned (when they are included)
     * @param limitManualPrices maximum number of related manualPrices returned (when they are included)
     */
    public async inAppPurchasePriceSchedulesGetInstance (id: string, fieldsInAppPurchasePriceSchedules?: Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>, include?: Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>, fieldsInAppPurchasePrices?: Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>, fieldsTerritories?: Array<'currency'>, limitAutomaticPrices?: number, limitManualPrices?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InAppPurchasePriceScheduleResponse;  }> {
        const localVarPath = this.basePath + '/v1/inAppPurchasePriceSchedules/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling inAppPurchasePriceSchedulesGetInstance.');
        }

        if (fieldsInAppPurchasePriceSchedules !== undefined) {
            localVarQueryParameters['fields[inAppPurchasePriceSchedules]'] = ObjectSerializer.serialize(fieldsInAppPurchasePriceSchedules, "Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'automaticPrices' | 'baseTerritory' | 'inAppPurchase' | 'manualPrices'>");
        }

        if (fieldsInAppPurchasePrices !== undefined) {
            localVarQueryParameters['fields[inAppPurchasePrices]'] = ObjectSerializer.serialize(fieldsInAppPurchasePrices, "Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>");
        }

        if (fieldsTerritories !== undefined) {
            localVarQueryParameters['fields[territories]'] = ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>");
        }

        if (limitAutomaticPrices !== undefined) {
            localVarQueryParameters['limit[automaticPrices]'] = ObjectSerializer.serialize(limitAutomaticPrices, "number");
        }

        if (limitManualPrices !== undefined) {
            localVarQueryParameters['limit[manualPrices]'] = ObjectSerializer.serialize(limitManualPrices, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: InAppPurchasePriceScheduleResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "InAppPurchasePriceScheduleResponse");
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
     * @param filterTerritory filter by id(s) of related \&#39;territory\&#39;
     * @param fieldsInAppPurchasePricePoints the fields to include for returned resources of type inAppPurchasePricePoints
     * @param fieldsInAppPurchasePrices the fields to include for returned resources of type inAppPurchasePrices
     * @param fieldsTerritories the fields to include for returned resources of type territories
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async inAppPurchasePriceSchedulesManualPricesGetToManyRelated (id: string, filterTerritory?: Array<string>, fieldsInAppPurchasePricePoints?: Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>, fieldsInAppPurchasePrices?: Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>, fieldsTerritories?: Array<'currency'>, limit?: number, include?: Array<'inAppPurchasePricePoint' | 'territory'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: InAppPurchasePricesResponse;  }> {
        const localVarPath = this.basePath + '/v1/inAppPurchasePriceSchedules/{id}/manualPrices'
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
            throw new Error('Required parameter id was null or undefined when calling inAppPurchasePriceSchedulesManualPricesGetToManyRelated.');
        }

        if (filterTerritory !== undefined) {
            localVarQueryParameters['filter[territory]'] = ObjectSerializer.serialize(filterTerritory, "Array<string>");
        }

        if (fieldsInAppPurchasePricePoints !== undefined) {
            localVarQueryParameters['fields[inAppPurchasePricePoints]'] = ObjectSerializer.serialize(fieldsInAppPurchasePricePoints, "Array<'customerPrice' | 'inAppPurchaseV2' | 'priceTier' | 'proceeds' | 'territory'>");
        }

        if (fieldsInAppPurchasePrices !== undefined) {
            localVarQueryParameters['fields[inAppPurchasePrices]'] = ObjectSerializer.serialize(fieldsInAppPurchasePrices, "Array<'endDate' | 'inAppPurchasePricePoint' | 'inAppPurchaseV2' | 'manual' | 'startDate' | 'territory'>");
        }

        if (fieldsTerritories !== undefined) {
            localVarQueryParameters['fields[territories]'] = ObjectSerializer.serialize(fieldsTerritories, "Array<'currency'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'inAppPurchasePricePoint' | 'territory'>");
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
            return new Promise<{ response: http.IncomingMessage; body: InAppPurchasePricesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "InAppPurchasePricesResponse");
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