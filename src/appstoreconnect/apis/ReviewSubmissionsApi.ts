/* tslint:disable */
/* eslint-disable */
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
import * as runtime from '../runtime';
import type { ErrorResponse, ReviewSubmissionCreateRequest, ReviewSubmissionItemsResponse, ReviewSubmissionResponse, ReviewSubmissionUpdateRequest, ReviewSubmissionsResponse, } from '../models';
import { ErrorResponseFromJSON, ErrorResponseToJSON, ReviewSubmissionCreateRequestFromJSON, ReviewSubmissionCreateRequestToJSON, ReviewSubmissionItemsResponseFromJSON, ReviewSubmissionItemsResponseToJSON, ReviewSubmissionResponseFromJSON, ReviewSubmissionResponseToJSON, ReviewSubmissionUpdateRequestFromJSON, ReviewSubmissionUpdateRequestToJSON, ReviewSubmissionsResponseFromJSON, ReviewSubmissionsResponseToJSON, } from '../models';
export interface ReviewSubmissionsCreateInstanceRequest {
    reviewSubmissionCreateRequest: ReviewSubmissionCreateRequest;
}
export interface ReviewSubmissionsGetCollectionRequest {
    filterApp: Array<string>;
    filterPlatform?: Array<ReviewSubmissionsGetCollectionFilterPlatformEnum>;
    filterState?: Array<ReviewSubmissionsGetCollectionFilterStateEnum>;
    fieldsReviewSubmissions?: Array<ReviewSubmissionsGetCollectionFieldsReviewSubmissionsEnum>;
    limit?: number;
    include?: Array<ReviewSubmissionsGetCollectionIncludeEnum>;
    fieldsReviewSubmissionItems?: Array<ReviewSubmissionsGetCollectionFieldsReviewSubmissionItemsEnum>;
    limitItems?: number;
}
export interface ReviewSubmissionsGetInstanceRequest {
    id: string;
    fieldsReviewSubmissions?: Array<ReviewSubmissionsGetInstanceFieldsReviewSubmissionsEnum>;
    include?: Array<ReviewSubmissionsGetInstanceIncludeEnum>;
    fieldsReviewSubmissionItems?: Array<ReviewSubmissionsGetInstanceFieldsReviewSubmissionItemsEnum>;
    limitItems?: number;
}
export interface ReviewSubmissionsItemsGetToManyRelatedRequest {
    id: string;
    fieldsAppStoreVersionExperiments?: Array<ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionExperimentsEnum>;
    fieldsReviewSubmissionItems?: Array<ReviewSubmissionsItemsGetToManyRelatedFieldsReviewSubmissionItemsEnum>;
    fieldsAppStoreVersions?: Array<ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionsEnum>;
    fieldsAppCustomProductPageVersions?: Array<ReviewSubmissionsItemsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum>;
    fieldsAppEvents?: Array<ReviewSubmissionsItemsGetToManyRelatedFieldsAppEventsEnum>;
    limit?: number;
    include?: Array<ReviewSubmissionsItemsGetToManyRelatedIncludeEnum>;
}
export interface ReviewSubmissionsUpdateInstanceRequest {
    id: string;
    reviewSubmissionUpdateRequest: ReviewSubmissionUpdateRequest;
}
/**
 *
 */
export class ReviewSubmissionsApi extends runtime.BaseAPI {
    /**
     */
    async reviewSubmissionsCreateInstanceRaw(requestParameters: ReviewSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReviewSubmissionResponse>> {
        if (requestParameters.reviewSubmissionCreateRequest === null || requestParameters.reviewSubmissionCreateRequest === undefined) {
            throw new runtime.RequiredError('reviewSubmissionCreateRequest', 'Required parameter requestParameters.reviewSubmissionCreateRequest was null or undefined when calling reviewSubmissionsCreateInstance.');
        }
        const queryParameters: any = {};
        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/reviewSubmissions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReviewSubmissionCreateRequestToJSON(requestParameters.reviewSubmissionCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReviewSubmissionResponseFromJSON(jsonValue));
    }
    /**
     */
    async reviewSubmissionsCreateInstance(requestParameters: ReviewSubmissionsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReviewSubmissionResponse> {
        const response = await this.reviewSubmissionsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async reviewSubmissionsGetCollectionRaw(requestParameters: ReviewSubmissionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReviewSubmissionsResponse>> {
        if (requestParameters.filterApp === null || requestParameters.filterApp === undefined) {
            throw new runtime.RequiredError('filterApp', 'Required parameter requestParameters.filterApp was null or undefined when calling reviewSubmissionsGetCollection.');
        }
        const queryParameters: any = {};
        if (requestParameters.filterPlatform) {
            queryParameters['filter[platform]'] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterState) {
            queryParameters['filter[state]'] = requestParameters.filterState.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterApp) {
            queryParameters['filter[app]'] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsReviewSubmissions) {
            queryParameters['fields[reviewSubmissions]'] = requestParameters.fieldsReviewSubmissions.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsReviewSubmissionItems) {
            queryParameters['fields[reviewSubmissionItems]'] = requestParameters.fieldsReviewSubmissionItems.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitItems !== undefined) {
            queryParameters['limit[items]'] = requestParameters.limitItems;
        }
        const headerParameters: runtime.HTTPHeaders = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/reviewSubmissions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReviewSubmissionsResponseFromJSON(jsonValue));
    }
    /**
     */
    async reviewSubmissionsGetCollection(requestParameters: ReviewSubmissionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReviewSubmissionsResponse> {
        const response = await this.reviewSubmissionsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async reviewSubmissionsGetInstanceRaw(requestParameters: ReviewSubmissionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReviewSubmissionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling reviewSubmissionsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsReviewSubmissions) {
            queryParameters['fields[reviewSubmissions]'] = requestParameters.fieldsReviewSubmissions.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsReviewSubmissionItems) {
            queryParameters['fields[reviewSubmissionItems]'] = requestParameters.fieldsReviewSubmissionItems.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitItems !== undefined) {
            queryParameters['limit[items]'] = requestParameters.limitItems;
        }
        const headerParameters: runtime.HTTPHeaders = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/reviewSubmissions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReviewSubmissionResponseFromJSON(jsonValue));
    }
    /**
     */
    async reviewSubmissionsGetInstance(requestParameters: ReviewSubmissionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReviewSubmissionResponse> {
        const response = await this.reviewSubmissionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async reviewSubmissionsItemsGetToManyRelatedRaw(requestParameters: ReviewSubmissionsItemsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReviewSubmissionItemsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling reviewSubmissionsItemsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsAppStoreVersionExperiments) {
            queryParameters['fields[appStoreVersionExperiments]'] = requestParameters.fieldsAppStoreVersionExperiments.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsReviewSubmissionItems) {
            queryParameters['fields[reviewSubmissionItems]'] = requestParameters.fieldsReviewSubmissionItems.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreVersions) {
            queryParameters['fields[appStoreVersions]'] = requestParameters.fieldsAppStoreVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppCustomProductPageVersions) {
            queryParameters['fields[appCustomProductPageVersions]'] = requestParameters.fieldsAppCustomProductPageVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppEvents) {
            queryParameters['fields[appEvents]'] = requestParameters.fieldsAppEvents.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        const headerParameters: runtime.HTTPHeaders = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/reviewSubmissions/{id}/items`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReviewSubmissionItemsResponseFromJSON(jsonValue));
    }
    /**
     */
    async reviewSubmissionsItemsGetToManyRelated(requestParameters: ReviewSubmissionsItemsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReviewSubmissionItemsResponse> {
        const response = await this.reviewSubmissionsItemsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async reviewSubmissionsUpdateInstanceRaw(requestParameters: ReviewSubmissionsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReviewSubmissionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling reviewSubmissionsUpdateInstance.');
        }
        if (requestParameters.reviewSubmissionUpdateRequest === null || requestParameters.reviewSubmissionUpdateRequest === undefined) {
            throw new runtime.RequiredError('reviewSubmissionUpdateRequest', 'Required parameter requestParameters.reviewSubmissionUpdateRequest was null or undefined when calling reviewSubmissionsUpdateInstance.');
        }
        const queryParameters: any = {};
        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/reviewSubmissions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ReviewSubmissionUpdateRequestToJSON(requestParameters.reviewSubmissionUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ReviewSubmissionResponseFromJSON(jsonValue));
    }
    /**
     */
    async reviewSubmissionsUpdateInstance(requestParameters: ReviewSubmissionsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReviewSubmissionResponse> {
        const response = await this.reviewSubmissionsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type ReviewSubmissionsGetCollectionFilterPlatformEnum = 'IOS' | 'MAC_OS' | 'TV_OS';;
/**
 * @export
 */
export type ReviewSubmissionsGetCollectionFilterStateEnum = 'READY_FOR_REVIEW' | 'WAITING_FOR_REVIEW' | 'IN_REVIEW' | 'UNRESOLVED_ISSUES' | 'CANCELING' | 'COMPLETING' | 'COMPLETE';;
/**
 * @export
 */
export type ReviewSubmissionsGetCollectionFieldsReviewSubmissionsEnum = 'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'platform' | 'state' | 'submitted' | 'submittedDate';;
/**
 * @export
 */
export type ReviewSubmissionsGetCollectionIncludeEnum = 'app' | 'appStoreVersionForReview' | 'items';;
/**
 * @export
 */
export type ReviewSubmissionsGetCollectionFieldsReviewSubmissionItemsEnum = 'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state';;
/**
 * @export
 */
export type ReviewSubmissionsGetInstanceFieldsReviewSubmissionsEnum = 'app' | 'appStoreVersionForReview' | 'canceled' | 'items' | 'platform' | 'state' | 'submitted' | 'submittedDate';;
/**
 * @export
 */
export type ReviewSubmissionsGetInstanceIncludeEnum = 'app' | 'appStoreVersionForReview' | 'items';;
/**
 * @export
 */
export type ReviewSubmissionsGetInstanceFieldsReviewSubmissionItemsEnum = 'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state';;
/**
 * @export
 */
export type ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionExperimentsEnum = 'appStoreVersion' | 'appStoreVersionExperimentTreatments' | 'endDate' | 'name' | 'reviewRequired' | 'startDate' | 'started' | 'state' | 'trafficProportion';;
/**
 * @export
 */
export type ReviewSubmissionsItemsGetToManyRelatedFieldsReviewSubmissionItemsEnum = 'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment' | 'removed' | 'resolved' | 'reviewSubmission' | 'state';;
/**
 * @export
 */
export type ReviewSubmissionsItemsGetToManyRelatedFieldsAppStoreVersionsEnum = 'ageRatingDeclaration' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'routingAppCoverage' | 'versionString';;
/**
 * @export
 */
export type ReviewSubmissionsItemsGetToManyRelatedFieldsAppCustomProductPageVersionsEnum = 'appCustomProductPage' | 'appCustomProductPageLocalizations' | 'state' | 'version';;
/**
 * @export
 */
export type ReviewSubmissionsItemsGetToManyRelatedFieldsAppEventsEnum = 'app' | 'archivedTerritorySchedules' | 'badge' | 'deepLink' | 'eventState' | 'localizations' | 'primaryLocale' | 'priority' | 'purchaseRequirement' | 'purpose' | 'referenceName' | 'territorySchedules';;
/**
 * @export
 */
export type ReviewSubmissionsItemsGetToManyRelatedIncludeEnum = 'appCustomProductPageVersion' | 'appEvent' | 'appStoreVersion' | 'appStoreVersionExperiment';;
