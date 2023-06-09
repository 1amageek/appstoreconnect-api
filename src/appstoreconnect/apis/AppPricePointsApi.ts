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
import type { AppPricePointV3Response, AppPricePointsV3Response, ErrorResponse, } from '../models';
import { AppPricePointV3ResponseFromJSON, AppPricePointV3ResponseToJSON, AppPricePointsV3ResponseFromJSON, AppPricePointsV3ResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface AppPricePointsEqualizationsGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsAppPricePoints?: Array<AppPricePointsEqualizationsGetToManyRelatedFieldsAppPricePointsEnum>;
    fieldsApps?: Array<AppPricePointsEqualizationsGetToManyRelatedFieldsAppsEnum>;
    fieldsTerritories?: Array<AppPricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
    include?: Array<AppPricePointsEqualizationsGetToManyRelatedIncludeEnum>;
}
export interface AppPricePointsGetInstanceRequest {
    id: string;
    fieldsAppPricePoints?: Array<AppPricePointsGetInstanceFieldsAppPricePointsEnum>;
    include?: Array<AppPricePointsGetInstanceIncludeEnum>;
}
/**
 *
 */
export class AppPricePointsApi extends runtime.BaseAPI {
    /**
     */
    async appPricePointsEqualizationsGetToManyRelatedRaw(requestParameters: AppPricePointsEqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPricePointsV3Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appPricePointsEqualizationsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.filterTerritory) {
            queryParameters['filter[territory]'] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppPricePoints) {
            queryParameters['fields[appPricePoints]'] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v3/appPricePoints/{id}/equalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppPricePointsV3ResponseFromJSON(jsonValue));
    }
    /**
     */
    async appPricePointsEqualizationsGetToManyRelated(requestParameters: AppPricePointsEqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPricePointsV3Response> {
        const response = await this.appPricePointsEqualizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appPricePointsGetInstanceRaw(requestParameters: AppPricePointsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPricePointV3Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appPricePointsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsAppPricePoints) {
            queryParameters['fields[appPricePoints]'] = requestParameters.fieldsAppPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v3/appPricePoints/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppPricePointV3ResponseFromJSON(jsonValue));
    }
    /**
     */
    async appPricePointsGetInstance(requestParameters: AppPricePointsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPricePointV3Response> {
        const response = await this.appPricePointsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type AppPricePointsEqualizationsGetToManyRelatedFieldsAppPricePointsEnum = 'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory';;
/**
 * @export
 */
export type AppPricePointsEqualizationsGetToManyRelatedFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type AppPricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum = 'currency';;
/**
 * @export
 */
export type AppPricePointsEqualizationsGetToManyRelatedIncludeEnum = 'app' | 'territory';;
/**
 * @export
 */
export type AppPricePointsGetInstanceFieldsAppPricePointsEnum = 'app' | 'customerPrice' | 'equalizations' | 'proceeds' | 'territory';;
/**
 * @export
 */
export type AppPricePointsGetInstanceIncludeEnum = 'app' | 'territory';;
