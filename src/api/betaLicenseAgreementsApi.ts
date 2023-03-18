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
import { AppResponse } from '../model/appResponse';
import { BetaLicenseAgreementResponse } from '../model/betaLicenseAgreementResponse';
import { BetaLicenseAgreementUpdateRequest } from '../model/betaLicenseAgreementUpdateRequest';
import { BetaLicenseAgreementsResponse } from '../model/betaLicenseAgreementsResponse';
import { ErrorResponse } from '../model/errorResponse';
import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';
import { HttpError, RequestFile } from './apis';
let defaultBasePath = 'https://api.appstoreconnect.apple.com';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
export enum BetaLicenseAgreementsApiApiKeys {
}
export class BetaLicenseAgreementsApi {
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
        key: BetaLicenseAgreementsApiApiKeys;
        value: string;
    }) {
        const { key, value } = params;
        (this.authentications as any)[BetaLicenseAgreementsApiApiKeys[key]].apiKey = value;
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
     * @param id the id of the requested resource
     * @param fieldsApps the fields to include for returned resources of type apps
     */
    public async betaLicenseAgreementsAppGetToOneRelated(params: {
        id: string;
        fieldsApps?: Array<'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AppResponse;
    }> {
        const { id, fieldsApps, options } = params;
        const localVarPath = this.basePath + '/v1/betaLicenseAgreements/{id}/app'
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
            throw new Error('Required parameter id was null or undefined when calling betaLicenseAgreementsAppGetToOneRelated.');
        }
        if (fieldsApps !== undefined) {
            localVarQueryParameters['fields[apps]'] = ObjectSerializer.serialize(fieldsApps, "Array<'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>");
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
                body: AppResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "AppResponse");
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
     * @param filterApp filter by id(s) of related \&#39;app\&#39;
     * @param fieldsBetaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsApps the fields to include for returned resources of type apps
     */
    public async betaLicenseAgreementsGetCollection(params: {
        filterApp?: Array<string>;
        fieldsBetaLicenseAgreements?: Array<'agreementText' | 'app'>;
        limit?: number;
        include?: Array<'app'>;
        fieldsApps?: Array<'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BetaLicenseAgreementsResponse;
    }> {
        const { filterApp, fieldsBetaLicenseAgreements, limit, include, fieldsApps, options } = params;
        const localVarPath = this.basePath + '/v1/betaLicenseAgreements';
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
        if (filterApp !== undefined) {
            localVarQueryParameters['filter[app]'] = ObjectSerializer.serialize(filterApp, "Array<string>");
        }
        if (fieldsBetaLicenseAgreements !== undefined) {
            localVarQueryParameters['fields[betaLicenseAgreements]'] = ObjectSerializer.serialize(fieldsBetaLicenseAgreements, "Array<'agreementText' | 'app'>");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'app'>");
        }
        if (fieldsApps !== undefined) {
            localVarQueryParameters['fields[apps]'] = ObjectSerializer.serialize(fieldsApps, "Array<'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>");
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
                body: BetaLicenseAgreementsResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BetaLicenseAgreementsResponse");
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
     * @param fieldsBetaLicenseAgreements the fields to include for returned resources of type betaLicenseAgreements
     * @param include comma-separated list of relationships to include
     * @param fieldsApps the fields to include for returned resources of type apps
     */
    public async betaLicenseAgreementsGetInstance(params: {
        id: string;
        fieldsBetaLicenseAgreements?: Array<'agreementText' | 'app'>;
        include?: Array<'app'>;
        fieldsApps?: Array<'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BetaLicenseAgreementResponse;
    }> {
        const { id, fieldsBetaLicenseAgreements, include, fieldsApps, options } = params;
        const localVarPath = this.basePath + '/v1/betaLicenseAgreements/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling betaLicenseAgreementsGetInstance.');
        }
        if (fieldsBetaLicenseAgreements !== undefined) {
            localVarQueryParameters['fields[betaLicenseAgreements]'] = ObjectSerializer.serialize(fieldsBetaLicenseAgreements, "Array<'agreementText' | 'app'>");
        }
        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'app'>");
        }
        if (fieldsApps !== undefined) {
            localVarQueryParameters['fields[apps]'] = ObjectSerializer.serialize(fieldsApps, "Array<'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox'>");
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
                body: BetaLicenseAgreementResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BetaLicenseAgreementResponse");
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
     * @param betaLicenseAgreementUpdateRequest BetaLicenseAgreement representation
     */
    public async betaLicenseAgreementsUpdateInstance(params: {
        id: string;
        betaLicenseAgreementUpdateRequest: BetaLicenseAgreementUpdateRequest;
        options: {
            headers: {
                [name: string]: string;
            };
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BetaLicenseAgreementResponse;
    }> {
        const { id, betaLicenseAgreementUpdateRequest, options } = params;
        const localVarPath = this.basePath + '/v1/betaLicenseAgreements/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling betaLicenseAgreementsUpdateInstance.');
        }
        // verify required parameter 'betaLicenseAgreementUpdateRequest' is not null or undefined
        if (betaLicenseAgreementUpdateRequest === null || betaLicenseAgreementUpdateRequest === undefined) {
            throw new Error('Required parameter betaLicenseAgreementUpdateRequest was null or undefined when calling betaLicenseAgreementsUpdateInstance.');
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
            body: ObjectSerializer.serialize(betaLicenseAgreementUpdateRequest, "BetaLicenseAgreementUpdateRequest")
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
                body: BetaLicenseAgreementResponse;
            }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BetaLicenseAgreementResponse");
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
