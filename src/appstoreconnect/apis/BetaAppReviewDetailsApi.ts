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
import type { AppResponse, BetaAppReviewDetailResponse, BetaAppReviewDetailUpdateRequest, BetaAppReviewDetailsResponse, ErrorResponse, } from '../models';
import { AppResponseFromJSON, AppResponseToJSON, BetaAppReviewDetailResponseFromJSON, BetaAppReviewDetailResponseToJSON, BetaAppReviewDetailUpdateRequestFromJSON, BetaAppReviewDetailUpdateRequestToJSON, BetaAppReviewDetailsResponseFromJSON, BetaAppReviewDetailsResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface BetaAppReviewDetailsAppGetToOneRelatedRequest {
    id: string;
    fieldsApps?: Array<BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum>;
}
export interface BetaAppReviewDetailsGetCollectionRequest {
    filterApp: Array<string>;
    fieldsBetaAppReviewDetails?: Array<BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum>;
    limit?: number;
    include?: Array<BetaAppReviewDetailsGetCollectionIncludeEnum>;
    fieldsApps?: Array<BetaAppReviewDetailsGetCollectionFieldsAppsEnum>;
}
export interface BetaAppReviewDetailsGetInstanceRequest {
    id: string;
    fieldsBetaAppReviewDetails?: Array<BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum>;
    include?: Array<BetaAppReviewDetailsGetInstanceIncludeEnum>;
    fieldsApps?: Array<BetaAppReviewDetailsGetInstanceFieldsAppsEnum>;
}
export interface BetaAppReviewDetailsUpdateInstanceRequest {
    id: string;
    betaAppReviewDetailUpdateRequest: BetaAppReviewDetailUpdateRequest;
}
/**
 *
 */
export class BetaAppReviewDetailsApi extends runtime.BaseAPI {
    /**
     */
    async betaAppReviewDetailsAppGetToOneRelatedRaw(requestParameters: BetaAppReviewDetailsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsAppGetToOneRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppReviewDetails/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppReviewDetailsAppGetToOneRelated(requestParameters: BetaAppReviewDetailsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppResponse> {
        const response = await this.betaAppReviewDetailsAppGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async betaAppReviewDetailsGetCollectionRaw(requestParameters: BetaAppReviewDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailsResponse>> {
        if (requestParameters.filterApp === null || requestParameters.filterApp === undefined) {
            throw new runtime.RequiredError('filterApp', 'Required parameter requestParameters.filterApp was null or undefined when calling betaAppReviewDetailsGetCollection.');
        }
        const queryParameters: any = {};
        if (requestParameters.filterApp) {
            queryParameters['filter[app]'] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsBetaAppReviewDetails) {
            queryParameters['fields[betaAppReviewDetails]'] = requestParameters.fieldsBetaAppReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppReviewDetails`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailsResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppReviewDetailsGetCollection(requestParameters: BetaAppReviewDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailsResponse> {
        const response = await this.betaAppReviewDetailsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async betaAppReviewDetailsGetInstanceRaw(requestParameters: BetaAppReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsBetaAppReviewDetails) {
            queryParameters['fields[betaAppReviewDetails]'] = requestParameters.fieldsBetaAppReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppReviewDetailsGetInstance(requestParameters: BetaAppReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailResponse> {
        const response = await this.betaAppReviewDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async betaAppReviewDetailsUpdateInstanceRaw(requestParameters: BetaAppReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppReviewDetailResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling betaAppReviewDetailsUpdateInstance.');
        }
        if (requestParameters.betaAppReviewDetailUpdateRequest === null || requestParameters.betaAppReviewDetailUpdateRequest === undefined) {
            throw new runtime.RequiredError('betaAppReviewDetailUpdateRequest', 'Required parameter requestParameters.betaAppReviewDetailUpdateRequest was null or undefined when calling betaAppReviewDetailsUpdateInstance.');
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
            path: `/v1/betaAppReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BetaAppReviewDetailUpdateRequestToJSON(requestParameters.betaAppReviewDetailUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppReviewDetailResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppReviewDetailsUpdateInstance(requestParameters: BetaAppReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppReviewDetailResponse> {
        const response = await this.betaAppReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type BetaAppReviewDetailsAppGetToOneRelatedFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type BetaAppReviewDetailsGetCollectionFieldsBetaAppReviewDetailsEnum = 'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes';;
/**
 * @export
 */
export type BetaAppReviewDetailsGetCollectionIncludeEnum = 'app';;
/**
 * @export
 */
export type BetaAppReviewDetailsGetCollectionFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type BetaAppReviewDetailsGetInstanceFieldsBetaAppReviewDetailsEnum = 'app' | 'contactEmail' | 'contactFirstName' | 'contactLastName' | 'contactPhone' | 'demoAccountName' | 'demoAccountPassword' | 'demoAccountRequired' | 'notes';;
/**
 * @export
 */
export type BetaAppReviewDetailsGetInstanceIncludeEnum = 'app';;
/**
 * @export
 */
export type BetaAppReviewDetailsGetInstanceFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
