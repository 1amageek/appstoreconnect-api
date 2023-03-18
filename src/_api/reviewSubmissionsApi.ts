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
import { ReviewSubmissionCreateRequest } from '../model/reviewSubmissionCreateRequest';
import { ReviewSubmissionItemsResponse } from '../model/reviewSubmissionItemsResponse';
import { ReviewSubmissionResponse } from '../model/reviewSubmissionResponse';
import { ReviewSubmissionUpdateRequest } from '../model/reviewSubmissionUpdateRequest';
import { ReviewSubmissionsResponse } from '../model/reviewSubmissionsResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.appstoreconnect.apple.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ReviewSubmissionsApiApiKeys {
}

export class ReviewSubmissionsApi {
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

    public setApiKey(key: ReviewSubmissionsApiApiKeys, value: string) {
        (this.authentications as any)[ReviewSubmissionsApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.itcBearerToken.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @param reviewSubmissionCreateRequest ReviewSubmission representation
     */
    public async reviewSubmissionsCreateInstance (reviewSubmissionCreateRequest: ReviewSubmissionCreateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReviewSubmissionResponse;  }> {
        const localVarPath = this.basePath + '/v1/reviewSubmissions';
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

        // verify required parameter 'reviewSubmissionCreateRequest' is not null or undefined
        if (reviewSubmissionCreateRequest === null || reviewSubmissionCreateRequest === undefined) {
            throw new Error('Required parameter reviewSubmissionCreateRequest was null or undefined when calling reviewSubmissionsCreateInstance.');
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
            body: ObjectSerializer.serialize(reviewSubmissionCreateRequest, "ReviewSubmissionCreateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ReviewSubmissionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ReviewSubmissionResponse");
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
     * @param filterApp filter by id(s) of related \&#39;app\&#39;
     * @param filterPlatform filter by attribute \&#39;platform\&#39;
     * @param filterState filter by attribute \&#39;state\&#39;
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     * @param fieldsReviewSubmissionItems the fields to include for returned resources of type reviewSubmissionItems
     * @param limitItems maximum number of related items returned (when they are included)
     */
    public async reviewSubmissionsGetCollection (filterApp: Array<string>, filterPlatform?: Array<'IOS' | 'MAC_OS' | 'TV_OS'>, filterState?: Array<'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'UNRESOLVED_ISSUES' | 'CANCELING' | 'COMPLETING' | 'COMPLETE'>, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'platform' | 'state' | 'submitted' | 'submittedDate'>, limit?: number, include?: Array<'app' | 'appStoreVersionForReview' | 'items'>, fieldsReviewSubmissionItems?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>, limitItems?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReviewSubmissionsResponse;  }> {
        const localVarPath = this.basePath + '/v1/reviewSubmissions';
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

        // verify required parameter 'filterApp' is not null or undefined
        if (filterApp === null || filterApp === undefined) {
            throw new Error('Required parameter filterApp was null or undefined when calling reviewSubmissionsGetCollection.');
        }

        if (filterPlatform !== undefined) {
            localVarQueryParameters['filter[platform]'] = ObjectSerializer.serialize(filterPlatform, "Array<'IOS' | 'MAC_OS' | 'TV_OS'>");
        }

        if (filterState !== undefined) {
            localVarQueryParameters['filter[state]'] = ObjectSerializer.serialize(filterState, "Array<'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'UNRESOLVED_ISSUES' | 'CANCELING' | 'COMPLETING' | 'COMPLETE'>");
        }

        if (filterApp !== undefined) {
            localVarQueryParameters['filter[app]'] = ObjectSerializer.serialize(filterApp, "Array<string>");
        }

        if (fieldsReviewSubmissions !== undefined) {
            localVarQueryParameters['fields[reviewSubmissions]'] = ObjectSerializer.serialize(fieldsReviewSubmissions, "Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'platform' | 'state' | 'submitted' | 'submittedDate'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'app' | 'appStoreVersionForReview' | 'items'>");
        }

        if (fieldsReviewSubmissionItems !== undefined) {
            localVarQueryParameters['fields[reviewSubmissionItems]'] = ObjectSerializer.serialize(fieldsReviewSubmissionItems, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>");
        }

        if (limitItems !== undefined) {
            localVarQueryParameters['limit[items]'] = ObjectSerializer.serialize(limitItems, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: ReviewSubmissionsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ReviewSubmissionsResponse");
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
     * @param fieldsReviewSubmissions the fields to include for returned resources of type reviewSubmissions
     * @param include comma-separated list of relationships to include
     * @param fieldsReviewSubmissionItems the fields to include for returned resources of type reviewSubmissionItems
     * @param limitItems maximum number of related items returned (when they are included)
     */
    public async reviewSubmissionsGetInstance (id: string, fieldsReviewSubmissions?: Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'platform' | 'state' | 'submitted' | 'submittedDate'>, include?: Array<'app' | 'appStoreVersionForReview' | 'items'>, fieldsReviewSubmissionItems?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>, limitItems?: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReviewSubmissionResponse;  }> {
        const localVarPath = this.basePath + '/v1/reviewSubmissions/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling reviewSubmissionsGetInstance.');
        }

        if (fieldsReviewSubmissions !== undefined) {
            localVarQueryParameters['fields[reviewSubmissions]'] = ObjectSerializer.serialize(fieldsReviewSubmissions, "Array<'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'platform' | 'state' | 'submitted' | 'submittedDate'>");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'app' | 'appStoreVersionForReview' | 'items'>");
        }

        if (fieldsReviewSubmissionItems !== undefined) {
            localVarQueryParameters['fields[reviewSubmissionItems]'] = ObjectSerializer.serialize(fieldsReviewSubmissionItems, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>");
        }

        if (limitItems !== undefined) {
            localVarQueryParameters['limit[items]'] = ObjectSerializer.serialize(limitItems, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: ReviewSubmissionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ReviewSubmissionResponse");
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
     * @param fieldsAppStoreVersionExperiments the fields to include for returned resources of type appStoreVersionExperiments
     * @param fieldsReviewSubmissionItems the fields to include for returned resources of type reviewSubmissionItems
     * @param fieldsAppStoreVersions the fields to include for returned resources of type appStoreVersions
     * @param fieldsAppCustomProductPageVersions the fields to include for returned resources of type appCustomProductPageVersions
     * @param fieldsAppEvents the fields to include for returned resources of type appEvents
     * @param limit maximum resources per page
     * @param include comma-separated list of relationships to include
     */
    public async reviewSubmissionsItemsGetToManyRelated (id: string, fieldsAppStoreVersionExperiments?: Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>, fieldsReviewSubmissionItems?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>, fieldsAppStoreVersions?: Array<'ageRatingDeclaration' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'routingAppCoverage' | 'versionString'>, fieldsAppCustomProductPageVersions?: Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>, fieldsAppEvents?: Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>, limit?: number, include?: Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment'>, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReviewSubmissionItemsResponse;  }> {
        const localVarPath = this.basePath + '/v1/reviewSubmissions/{id}/items'
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
            throw new Error('Required parameter id was null or undefined when calling reviewSubmissionsItemsGetToManyRelated.');
        }

        if (fieldsAppStoreVersionExperiments !== undefined) {
            localVarQueryParameters['fields[appStoreVersionExperiments]'] = ObjectSerializer.serialize(fieldsAppStoreVersionExperiments, "Array<'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion'>");
        }

        if (fieldsReviewSubmissionItems !== undefined) {
            localVarQueryParameters['fields[reviewSubmissionItems]'] = ObjectSerializer.serialize(fieldsReviewSubmissionItems, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state'>");
        }

        if (fieldsAppStoreVersions !== undefined) {
            localVarQueryParameters['fields[appStoreVersions]'] = ObjectSerializer.serialize(fieldsAppStoreVersions, "Array<'ageRatingDeclaration' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'routingAppCoverage' | 'versionString'>");
        }

        if (fieldsAppCustomProductPageVersions !== undefined) {
            localVarQueryParameters['fields[appCustomProductPageVersions]'] = ObjectSerializer.serialize(fieldsAppCustomProductPageVersions, "Array<'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version'>");
        }

        if (fieldsAppEvents !== undefined) {
            localVarQueryParameters['fields[appEvents]'] = ObjectSerializer.serialize(fieldsAppEvents, "Array<'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules'>");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(include, "Array<'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment'>");
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
            return new Promise<{ response: http.IncomingMessage; body: ReviewSubmissionItemsResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ReviewSubmissionItemsResponse");
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
     * @param reviewSubmissionUpdateRequest ReviewSubmission representation
     */
    public async reviewSubmissionsUpdateInstance (id: string, reviewSubmissionUpdateRequest: ReviewSubmissionUpdateRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReviewSubmissionResponse;  }> {
        const localVarPath = this.basePath + '/v1/reviewSubmissions/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling reviewSubmissionsUpdateInstance.');
        }

        // verify required parameter 'reviewSubmissionUpdateRequest' is not null or undefined
        if (reviewSubmissionUpdateRequest === null || reviewSubmissionUpdateRequest === undefined) {
            throw new Error('Required parameter reviewSubmissionUpdateRequest was null or undefined when calling reviewSubmissionsUpdateInstance.');
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
            body: ObjectSerializer.serialize(reviewSubmissionUpdateRequest, "ReviewSubmissionUpdateRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ReviewSubmissionResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ReviewSubmissionResponse");
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
