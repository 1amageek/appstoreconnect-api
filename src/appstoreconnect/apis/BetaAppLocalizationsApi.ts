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
import type { AppResponse, BetaAppLocalizationCreateRequest, BetaAppLocalizationResponse, BetaAppLocalizationUpdateRequest, BetaAppLocalizationsResponse, ErrorResponse, } from '../models';
import { AppResponseFromJSON, AppResponseToJSON, BetaAppLocalizationCreateRequestFromJSON, BetaAppLocalizationCreateRequestToJSON, BetaAppLocalizationResponseFromJSON, BetaAppLocalizationResponseToJSON, BetaAppLocalizationUpdateRequestFromJSON, BetaAppLocalizationUpdateRequestToJSON, BetaAppLocalizationsResponseFromJSON, BetaAppLocalizationsResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface BetaAppLocalizationsAppGetToOneRelatedRequest {
    id: string;
    fieldsApps?: Array<BetaAppLocalizationsAppGetToOneRelatedFieldsAppsEnum>;
}
export interface BetaAppLocalizationsCreateInstanceRequest {
    betaAppLocalizationCreateRequest: BetaAppLocalizationCreateRequest;
}
export interface BetaAppLocalizationsDeleteInstanceRequest {
    id: string;
}
export interface BetaAppLocalizationsGetCollectionRequest {
    filterLocale?: Array<string>;
    filterApp?: Array<string>;
    fieldsBetaAppLocalizations?: Array<BetaAppLocalizationsGetCollectionFieldsBetaAppLocalizationsEnum>;
    limit?: number;
    include?: Array<BetaAppLocalizationsGetCollectionIncludeEnum>;
    fieldsApps?: Array<BetaAppLocalizationsGetCollectionFieldsAppsEnum>;
}
export interface BetaAppLocalizationsGetInstanceRequest {
    id: string;
    fieldsBetaAppLocalizations?: Array<BetaAppLocalizationsGetInstanceFieldsBetaAppLocalizationsEnum>;
    include?: Array<BetaAppLocalizationsGetInstanceIncludeEnum>;
    fieldsApps?: Array<BetaAppLocalizationsGetInstanceFieldsAppsEnum>;
}
export interface BetaAppLocalizationsUpdateInstanceRequest {
    id: string;
    betaAppLocalizationUpdateRequest: BetaAppLocalizationUpdateRequest;
}
/**
 *
 */
export class BetaAppLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    async betaAppLocalizationsAppGetToOneRelatedRaw(requestParameters: BetaAppLocalizationsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling betaAppLocalizationsAppGetToOneRelated.');
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
            path: `/v1/betaAppLocalizations/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppLocalizationsAppGetToOneRelated(requestParameters: BetaAppLocalizationsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppResponse> {
        const response = await this.betaAppLocalizationsAppGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async betaAppLocalizationsCreateInstanceRaw(requestParameters: BetaAppLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppLocalizationResponse>> {
        if (requestParameters.betaAppLocalizationCreateRequest === null || requestParameters.betaAppLocalizationCreateRequest === undefined) {
            throw new runtime.RequiredError('betaAppLocalizationCreateRequest', 'Required parameter requestParameters.betaAppLocalizationCreateRequest was null or undefined when calling betaAppLocalizationsCreateInstance.');
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
            path: `/v1/betaAppLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BetaAppLocalizationCreateRequestToJSON(requestParameters.betaAppLocalizationCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppLocalizationResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppLocalizationsCreateInstance(requestParameters: BetaAppLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppLocalizationResponse> {
        const response = await this.betaAppLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async betaAppLocalizationsDeleteInstanceRaw(requestParameters: BetaAppLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling betaAppLocalizationsDeleteInstance.');
        }
        const queryParameters: any = {};
        const headerParameters: runtime.HTTPHeaders = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/betaAppLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     */
    async betaAppLocalizationsDeleteInstance(requestParameters: BetaAppLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.betaAppLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }
    /**
     */
    async betaAppLocalizationsGetCollectionRaw(requestParameters: BetaAppLocalizationsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppLocalizationsResponse>> {
        const queryParameters: any = {};
        if (requestParameters.filterLocale) {
            queryParameters['filter[locale]'] = requestParameters.filterLocale.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterApp) {
            queryParameters['filter[app]'] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsBetaAppLocalizations) {
            queryParameters['fields[betaAppLocalizations]'] = requestParameters.fieldsBetaAppLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppLocalizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppLocalizationsResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppLocalizationsGetCollection(requestParameters: BetaAppLocalizationsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppLocalizationsResponse> {
        const response = await this.betaAppLocalizationsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async betaAppLocalizationsGetInstanceRaw(requestParameters: BetaAppLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling betaAppLocalizationsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsBetaAppLocalizations) {
            queryParameters['fields[betaAppLocalizations]'] = requestParameters.fieldsBetaAppLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/betaAppLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppLocalizationResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppLocalizationsGetInstance(requestParameters: BetaAppLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppLocalizationResponse> {
        const response = await this.betaAppLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async betaAppLocalizationsUpdateInstanceRaw(requestParameters: BetaAppLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaAppLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling betaAppLocalizationsUpdateInstance.');
        }
        if (requestParameters.betaAppLocalizationUpdateRequest === null || requestParameters.betaAppLocalizationUpdateRequest === undefined) {
            throw new runtime.RequiredError('betaAppLocalizationUpdateRequest', 'Required parameter requestParameters.betaAppLocalizationUpdateRequest was null or undefined when calling betaAppLocalizationsUpdateInstance.');
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
            path: `/v1/betaAppLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BetaAppLocalizationUpdateRequestToJSON(requestParameters.betaAppLocalizationUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BetaAppLocalizationResponseFromJSON(jsonValue));
    }
    /**
     */
    async betaAppLocalizationsUpdateInstance(requestParameters: BetaAppLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaAppLocalizationResponse> {
        const response = await this.betaAppLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type BetaAppLocalizationsAppGetToOneRelatedFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type BetaAppLocalizationsGetCollectionFieldsBetaAppLocalizationsEnum = 'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy';;
/**
 * @export
 */
export type BetaAppLocalizationsGetCollectionIncludeEnum = 'app';;
/**
 * @export
 */
export type BetaAppLocalizationsGetCollectionFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type BetaAppLocalizationsGetInstanceFieldsBetaAppLocalizationsEnum = 'app' | 'description' | 'feedbackEmail' | 'locale' | 'marketingUrl' | 'privacyPolicyUrl' | 'tvOsPrivacyPolicy';;
/**
 * @export
 */
export type BetaAppLocalizationsGetInstanceIncludeEnum = 'app';;
/**
 * @export
 */
export type BetaAppLocalizationsGetInstanceFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
