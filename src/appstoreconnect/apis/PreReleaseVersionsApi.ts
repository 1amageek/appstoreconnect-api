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
import type { AppResponse, BuildsResponse, ErrorResponse, PreReleaseVersionsResponse, PrereleaseVersionResponse, } from '../models';
import { AppResponseFromJSON, AppResponseToJSON, BuildsResponseFromJSON, BuildsResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, PreReleaseVersionsResponseFromJSON, PreReleaseVersionsResponseToJSON, PrereleaseVersionResponseFromJSON, PrereleaseVersionResponseToJSON, } from '../models';
export interface PreReleaseVersionsAppGetToOneRelatedRequest {
    id: string;
    fieldsApps?: Array<PreReleaseVersionsAppGetToOneRelatedFieldsAppsEnum>;
}
export interface PreReleaseVersionsBuildsGetToManyRelatedRequest {
    id: string;
    fieldsBuilds?: Array<PreReleaseVersionsBuildsGetToManyRelatedFieldsBuildsEnum>;
    limit?: number;
}
export interface PreReleaseVersionsGetCollectionRequest {
    filterBuildsExpired?: Array<string>;
    filterBuildsProcessingState?: Array<PreReleaseVersionsGetCollectionFilterBuildsProcessingStateEnum>;
    filterBuildsVersion?: Array<string>;
    filterPlatform?: Array<PreReleaseVersionsGetCollectionFilterPlatformEnum>;
    filterVersion?: Array<string>;
    filterApp?: Array<string>;
    filterBuilds?: Array<string>;
    sort?: Array<PreReleaseVersionsGetCollectionSortEnum>;
    fieldsPreReleaseVersions?: Array<PreReleaseVersionsGetCollectionFieldsPreReleaseVersionsEnum>;
    limit?: number;
    include?: Array<PreReleaseVersionsGetCollectionIncludeEnum>;
    fieldsApps?: Array<PreReleaseVersionsGetCollectionFieldsAppsEnum>;
    fieldsBuilds?: Array<PreReleaseVersionsGetCollectionFieldsBuildsEnum>;
    limitBuilds?: number;
}
export interface PreReleaseVersionsGetInstanceRequest {
    id: string;
    fieldsPreReleaseVersions?: Array<PreReleaseVersionsGetInstanceFieldsPreReleaseVersionsEnum>;
    include?: Array<PreReleaseVersionsGetInstanceIncludeEnum>;
    fieldsApps?: Array<PreReleaseVersionsGetInstanceFieldsAppsEnum>;
    fieldsBuilds?: Array<PreReleaseVersionsGetInstanceFieldsBuildsEnum>;
    limitBuilds?: number;
}
/**
 *
 */
export class PreReleaseVersionsApi extends runtime.BaseAPI {
    /**
     */
    async preReleaseVersionsAppGetToOneRelatedRaw(requestParameters: PreReleaseVersionsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling preReleaseVersionsAppGetToOneRelated.');
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
            path: `/v1/preReleaseVersions/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppResponseFromJSON(jsonValue));
    }
    /**
     */
    async preReleaseVersionsAppGetToOneRelated(requestParameters: PreReleaseVersionsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppResponse> {
        const response = await this.preReleaseVersionsAppGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async preReleaseVersionsBuildsGetToManyRelatedRaw(requestParameters: PreReleaseVersionsBuildsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling preReleaseVersionsBuildsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v1/preReleaseVersions/{id}/builds`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BuildsResponseFromJSON(jsonValue));
    }
    /**
     */
    async preReleaseVersionsBuildsGetToManyRelated(requestParameters: PreReleaseVersionsBuildsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildsResponse> {
        const response = await this.preReleaseVersionsBuildsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async preReleaseVersionsGetCollectionRaw(requestParameters: PreReleaseVersionsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PreReleaseVersionsResponse>> {
        const queryParameters: any = {};
        if (requestParameters.filterBuildsExpired) {
            queryParameters['filter[builds.expired]'] = requestParameters.filterBuildsExpired.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterBuildsProcessingState) {
            queryParameters['filter[builds.processingState]'] = requestParameters.filterBuildsProcessingState.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterBuildsVersion) {
            queryParameters['filter[builds.version]'] = requestParameters.filterBuildsVersion.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterPlatform) {
            queryParameters['filter[platform]'] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterVersion) {
            queryParameters['filter[version]'] = requestParameters.filterVersion.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterApp) {
            queryParameters['filter[app]'] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterBuilds) {
            queryParameters['filter[builds]'] = requestParameters.filterBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsPreReleaseVersions) {
            queryParameters['fields[preReleaseVersions]'] = requestParameters.fieldsPreReleaseVersions.join(runtime.COLLECTION_FORMATS["csv"]);
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
        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitBuilds !== undefined) {
            queryParameters['limit[builds]'] = requestParameters.limitBuilds;
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
            path: `/v1/preReleaseVersions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => PreReleaseVersionsResponseFromJSON(jsonValue));
    }
    /**
     */
    async preReleaseVersionsGetCollection(requestParameters: PreReleaseVersionsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PreReleaseVersionsResponse> {
        const response = await this.preReleaseVersionsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async preReleaseVersionsGetInstanceRaw(requestParameters: PreReleaseVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PrereleaseVersionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling preReleaseVersionsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsPreReleaseVersions) {
            queryParameters['fields[preReleaseVersions]'] = requestParameters.fieldsPreReleaseVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitBuilds !== undefined) {
            queryParameters['limit[builds]'] = requestParameters.limitBuilds;
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
            path: `/v1/preReleaseVersions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => PrereleaseVersionResponseFromJSON(jsonValue));
    }
    /**
     */
    async preReleaseVersionsGetInstance(requestParameters: PreReleaseVersionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PrereleaseVersionResponse> {
        const response = await this.preReleaseVersionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type PreReleaseVersionsAppGetToOneRelatedFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type PreReleaseVersionsBuildsGetToManyRelatedFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';;
/**
 * @export
 */
export type PreReleaseVersionsGetCollectionFilterBuildsProcessingStateEnum = 'PROCESSING' | 'FAILED' | 'INVALID' | 'VALID';;
/**
 * @export
 */
export type PreReleaseVersionsGetCollectionFilterPlatformEnum = 'IOS' | 'MAC_OS' | 'TV_OS';;
/**
 * @export
 */
export type PreReleaseVersionsGetCollectionSortEnum = 'version' | '-version';;
/**
 * @export
 */
export type PreReleaseVersionsGetCollectionFieldsPreReleaseVersionsEnum = 'app' | 'builds' | 'platform' | 'version';;
/**
 * @export
 */
export type PreReleaseVersionsGetCollectionIncludeEnum = 'app' | 'builds';;
/**
 * @export
 */
export type PreReleaseVersionsGetCollectionFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type PreReleaseVersionsGetCollectionFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';;
/**
 * @export
 */
export type PreReleaseVersionsGetInstanceFieldsPreReleaseVersionsEnum = 'app' | 'builds' | 'platform' | 'version';;
/**
 * @export
 */
export type PreReleaseVersionsGetInstanceIncludeEnum = 'app' | 'builds';;
/**
 * @export
 */
export type PreReleaseVersionsGetInstanceFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type PreReleaseVersionsGetInstanceFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';;