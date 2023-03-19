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
import type { AppResponse, BundleIdCapabilitiesResponse, BundleIdCreateRequest, BundleIdResponse, BundleIdUpdateRequest, BundleIdsResponse, ErrorResponse, ProfilesResponse, } from '../models';
import { AppResponseFromJSON, AppResponseToJSON, BundleIdCapabilitiesResponseFromJSON, BundleIdCapabilitiesResponseToJSON, BundleIdCreateRequestFromJSON, BundleIdCreateRequestToJSON, BundleIdResponseFromJSON, BundleIdResponseToJSON, BundleIdUpdateRequestFromJSON, BundleIdUpdateRequestToJSON, BundleIdsResponseFromJSON, BundleIdsResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, ProfilesResponseFromJSON, ProfilesResponseToJSON, } from '../models';
export interface BundleIdsAppGetToOneRelatedRequest {
    id: string;
    fieldsApps?: Array<BundleIdsAppGetToOneRelatedFieldsAppsEnum>;
}
export interface BundleIdsBundleIdCapabilitiesGetToManyRelatedRequest {
    id: string;
    fieldsBundleIdCapabilities?: Array<BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum>;
    limit?: number;
}
export interface BundleIdsCreateInstanceRequest {
    bundleIdCreateRequest: BundleIdCreateRequest;
}
export interface BundleIdsDeleteInstanceRequest {
    id: string;
}
export interface BundleIdsGetCollectionRequest {
    filterIdentifier?: Array<string>;
    filterName?: Array<string>;
    filterPlatform?: Array<BundleIdsGetCollectionFilterPlatformEnum>;
    filterSeedId?: Array<string>;
    filterId?: Array<string>;
    sort?: Array<BundleIdsGetCollectionSortEnum>;
    fieldsBundleIds?: Array<BundleIdsGetCollectionFieldsBundleIdsEnum>;
    limit?: number;
    include?: Array<BundleIdsGetCollectionIncludeEnum>;
    fieldsBundleIdCapabilities?: Array<BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum>;
    fieldsProfiles?: Array<BundleIdsGetCollectionFieldsProfilesEnum>;
    fieldsApps?: Array<BundleIdsGetCollectionFieldsAppsEnum>;
    limitBundleIdCapabilities?: number;
    limitProfiles?: number;
}
export interface BundleIdsGetInstanceRequest {
    id: string;
    fieldsBundleIds?: Array<BundleIdsGetInstanceFieldsBundleIdsEnum>;
    include?: Array<BundleIdsGetInstanceIncludeEnum>;
    fieldsBundleIdCapabilities?: Array<BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum>;
    fieldsProfiles?: Array<BundleIdsGetInstanceFieldsProfilesEnum>;
    fieldsApps?: Array<BundleIdsGetInstanceFieldsAppsEnum>;
    limitBundleIdCapabilities?: number;
    limitProfiles?: number;
}
export interface BundleIdsProfilesGetToManyRelatedRequest {
    id: string;
    fieldsProfiles?: Array<BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum>;
    limit?: number;
}
export interface BundleIdsUpdateInstanceRequest {
    id: string;
    bundleIdUpdateRequest: BundleIdUpdateRequest;
}
/**
 *
 */
export class BundleIdsApi extends runtime.BaseAPI {
    /**
     */
    async bundleIdsAppGetToOneRelatedRaw(requestParameters: BundleIdsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling bundleIdsAppGetToOneRelated.');
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
            path: `/v1/bundleIds/{id}/app`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppResponseFromJSON(jsonValue));
    }
    /**
     */
    async bundleIdsAppGetToOneRelated(requestParameters: BundleIdsAppGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppResponse> {
        const response = await this.bundleIdsAppGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async bundleIdsBundleIdCapabilitiesGetToManyRelatedRaw(requestParameters: BundleIdsBundleIdCapabilitiesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdCapabilitiesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling bundleIdsBundleIdCapabilitiesGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsBundleIdCapabilities) {
            queryParameters['fields[bundleIdCapabilities]'] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/bundleIds/{id}/bundleIdCapabilities`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdCapabilitiesResponseFromJSON(jsonValue));
    }
    /**
     */
    async bundleIdsBundleIdCapabilitiesGetToManyRelated(requestParameters: BundleIdsBundleIdCapabilitiesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdCapabilitiesResponse> {
        const response = await this.bundleIdsBundleIdCapabilitiesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async bundleIdsCreateInstanceRaw(requestParameters: BundleIdsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdResponse>> {
        if (requestParameters.bundleIdCreateRequest === null || requestParameters.bundleIdCreateRequest === undefined) {
            throw new runtime.RequiredError('bundleIdCreateRequest', 'Required parameter requestParameters.bundleIdCreateRequest was null or undefined when calling bundleIdsCreateInstance.');
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
            path: `/v1/bundleIds`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BundleIdCreateRequestToJSON(requestParameters.bundleIdCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdResponseFromJSON(jsonValue));
    }
    /**
     */
    async bundleIdsCreateInstance(requestParameters: BundleIdsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdResponse> {
        const response = await this.bundleIdsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async bundleIdsDeleteInstanceRaw(requestParameters: BundleIdsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling bundleIdsDeleteInstance.');
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
            path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     */
    async bundleIdsDeleteInstance(requestParameters: BundleIdsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bundleIdsDeleteInstanceRaw(requestParameters, initOverrides);
    }
    /**
     */
    async bundleIdsGetCollectionRaw(requestParameters: BundleIdsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdsResponse>> {
        const queryParameters: any = {};
        if (requestParameters.filterIdentifier) {
            queryParameters['filter[identifier]'] = requestParameters.filterIdentifier.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterName) {
            queryParameters['filter[name]'] = requestParameters.filterName.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterPlatform) {
            queryParameters['filter[platform]'] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterSeedId) {
            queryParameters['filter[seedId]'] = requestParameters.filterSeedId.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsBundleIds) {
            queryParameters['fields[bundleIds]'] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsBundleIdCapabilities) {
            queryParameters['fields[bundleIdCapabilities]'] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsProfiles) {
            queryParameters['fields[profiles]'] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitBundleIdCapabilities !== undefined) {
            queryParameters['limit[bundleIdCapabilities]'] = requestParameters.limitBundleIdCapabilities;
        }
        if (requestParameters.limitProfiles !== undefined) {
            queryParameters['limit[profiles]'] = requestParameters.limitProfiles;
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
            path: `/v1/bundleIds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdsResponseFromJSON(jsonValue));
    }
    /**
     */
    async bundleIdsGetCollection(requestParameters: BundleIdsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdsResponse> {
        const response = await this.bundleIdsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async bundleIdsGetInstanceRaw(requestParameters: BundleIdsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling bundleIdsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsBundleIds) {
            queryParameters['fields[bundleIds]'] = requestParameters.fieldsBundleIds.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsBundleIdCapabilities) {
            queryParameters['fields[bundleIdCapabilities]'] = requestParameters.fieldsBundleIdCapabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsProfiles) {
            queryParameters['fields[profiles]'] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitBundleIdCapabilities !== undefined) {
            queryParameters['limit[bundleIdCapabilities]'] = requestParameters.limitBundleIdCapabilities;
        }
        if (requestParameters.limitProfiles !== undefined) {
            queryParameters['limit[profiles]'] = requestParameters.limitProfiles;
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
            path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdResponseFromJSON(jsonValue));
    }
    /**
     */
    async bundleIdsGetInstance(requestParameters: BundleIdsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdResponse> {
        const response = await this.bundleIdsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async bundleIdsProfilesGetToManyRelatedRaw(requestParameters: BundleIdsProfilesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProfilesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling bundleIdsProfilesGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsProfiles) {
            queryParameters['fields[profiles]'] = requestParameters.fieldsProfiles.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/bundleIds/{id}/profiles`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ProfilesResponseFromJSON(jsonValue));
    }
    /**
     */
    async bundleIdsProfilesGetToManyRelated(requestParameters: BundleIdsProfilesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProfilesResponse> {
        const response = await this.bundleIdsProfilesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async bundleIdsUpdateInstanceRaw(requestParameters: BundleIdsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BundleIdResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling bundleIdsUpdateInstance.');
        }
        if (requestParameters.bundleIdUpdateRequest === null || requestParameters.bundleIdUpdateRequest === undefined) {
            throw new runtime.RequiredError('bundleIdUpdateRequest', 'Required parameter requestParameters.bundleIdUpdateRequest was null or undefined when calling bundleIdsUpdateInstance.');
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
            path: `/v1/bundleIds/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BundleIdUpdateRequestToJSON(requestParameters.bundleIdUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => BundleIdResponseFromJSON(jsonValue));
    }
    /**
     */
    async bundleIdsUpdateInstance(requestParameters: BundleIdsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BundleIdResponse> {
        const response = await this.bundleIdsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type BundleIdsAppGetToOneRelatedFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type BundleIdsBundleIdCapabilitiesGetToManyRelatedFieldsBundleIdCapabilitiesEnum = 'bundleId' | 'capabilityType' | 'settings';;
/**
 * @export
 */
export type BundleIdsGetCollectionFilterPlatformEnum = 'IOS' | 'MAC_OS';;
/**
 * @export
 */
export type BundleIdsGetCollectionSortEnum = 'id' | '-id' | 'identifier' | '-identifier' | 'name' | '-name' | 'platform' | '-platform' | 'seedId' | '-seedId';;
/**
 * @export
 */
export type BundleIdsGetCollectionFieldsBundleIdsEnum = 'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId';;
/**
 * @export
 */
export type BundleIdsGetCollectionIncludeEnum = 'app' | 'bundleIdCapabilities' | 'profiles';;
/**
 * @export
 */
export type BundleIdsGetCollectionFieldsBundleIdCapabilitiesEnum = 'bundleId' | 'capabilityType' | 'settings';;
/**
 * @export
 */
export type BundleIdsGetCollectionFieldsProfilesEnum = 'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid';;
/**
 * @export
 */
export type BundleIdsGetCollectionFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type BundleIdsGetInstanceFieldsBundleIdsEnum = 'app' | 'bundleIdCapabilities' | 'identifier' | 'name' | 'platform' | 'profiles' | 'seedId';;
/**
 * @export
 */
export type BundleIdsGetInstanceIncludeEnum = 'app' | 'bundleIdCapabilities' | 'profiles';;
/**
 * @export
 */
export type BundleIdsGetInstanceFieldsBundleIdCapabilitiesEnum = 'bundleId' | 'capabilityType' | 'settings';;
/**
 * @export
 */
export type BundleIdsGetInstanceFieldsProfilesEnum = 'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid';;
/**
 * @export
 */
export type BundleIdsGetInstanceFieldsAppsEnum = 'appAvailability' | 'appClips' | 'appCustomProductPages' | 'appEvents' | 'appInfos' | 'appPricePoints' | 'appPriceSchedule' | 'appStoreVersions' | 'availableInNewTerritories' | 'availableTerritories' | 'betaAppLocalizations' | 'betaAppReviewDetail' | 'betaGroups' | 'betaLicenseAgreement' | 'betaTesters' | 'builds' | 'bundleId' | 'ciProduct' | 'contentRightsDeclaration' | 'customerReviews' | 'endUserLicenseAgreement' | 'gameCenterEnabledVersions' | 'inAppPurchases' | 'inAppPurchasesV2' | 'isOrEverWasMadeForKids' | 'name' | 'perfPowerMetrics' | 'preOrder' | 'preReleaseVersions' | 'pricePoints' | 'prices' | 'primaryLocale' | 'promotedPurchases' | 'reviewSubmissions' | 'sku' | 'subscriptionGracePeriod' | 'subscriptionGroups' | 'subscriptionStatusUrl' | 'subscriptionStatusUrlForSandbox' | 'subscriptionStatusUrlVersion' | 'subscriptionStatusUrlVersionForSandbox';;
/**
 * @export
 */
export type BundleIdsProfilesGetToManyRelatedFieldsProfilesEnum = 'bundleId' | 'certificates' | 'createdDate' | 'devices' | 'expirationDate' | 'name' | 'platform' | 'profileContent' | 'profileState' | 'profileType' | 'uuid';;
