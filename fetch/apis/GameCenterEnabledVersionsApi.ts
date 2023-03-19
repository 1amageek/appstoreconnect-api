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
import type {
  ErrorResponse,
  GameCenterEnabledVersionCompatibleVersionsLinkagesRequest,
  GameCenterEnabledVersionCompatibleVersionsLinkagesResponse,
  GameCenterEnabledVersionsResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterEnabledVersionCompatibleVersionsLinkagesRequestFromJSON,
    GameCenterEnabledVersionCompatibleVersionsLinkagesRequestToJSON,
    GameCenterEnabledVersionCompatibleVersionsLinkagesResponseFromJSON,
    GameCenterEnabledVersionCompatibleVersionsLinkagesResponseToJSON,
    GameCenterEnabledVersionsResponseFromJSON,
    GameCenterEnabledVersionsResponseToJSON,
} from '../models';

export interface GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRequest {
    id: string;
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest;
}

export interface GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRequest {
    id: string;
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest;
}

export interface GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRequest {
    id: string;
    filterPlatform?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum>;
    filterVersionString?: Array<string>;
    filterApp?: Array<string>;
    filterId?: Array<string>;
    sort?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum>;
    fieldsGameCenterEnabledVersions?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum>;
    fieldsApps?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum>;
    limit?: number;
    limitCompatibleVersions?: number;
    include?: Array<GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum>;
}

export interface GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRequest {
    id: string;
    limit?: number;
}

export interface GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRequest {
    id: string;
    gameCenterEnabledVersionCompatibleVersionsLinkagesRequest: GameCenterEnabledVersionCompatibleVersionsLinkagesRequest;
}

/**
 * 
 */
export class GameCenterEnabledVersionsApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship.');
        }

        if (requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === null || requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === undefined) {
            throw new runtime.RequiredError('gameCenterEnabledVersionCompatibleVersionsLinkagesRequest','Required parameter requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship.');
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
            path: `/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterEnabledVersionCompatibleVersionsLinkagesRequestToJSON(requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterEnabledVersionsCompatibleVersionsCreateToManyRelationshipRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship.');
        }

        if (requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === null || requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === undefined) {
            throw new runtime.RequiredError('gameCenterEnabledVersionCompatibleVersionsLinkagesRequest','Required parameter requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship.');
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
            path: `/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterEnabledVersionCompatibleVersionsLinkagesRequestToJSON(requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterEnabledVersionsCompatibleVersionsDeleteToManyRelationshipRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterEnabledVersionsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterPlatform) {
            queryParameters['filter[platform]'] = requestParameters.filterPlatform.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterVersionString) {
            queryParameters['filter[versionString]'] = requestParameters.filterVersionString.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterApp) {
            queryParameters['filter[app]'] = requestParameters.filterApp.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsGameCenterEnabledVersions) {
            queryParameters['fields[gameCenterEnabledVersions]'] = requestParameters.fieldsGameCenterEnabledVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsApps) {
            queryParameters['fields[apps]'] = requestParameters.fieldsApps.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.limitCompatibleVersions !== undefined) {
            queryParameters['limit[compatibleVersions]'] = requestParameters.limitCompatibleVersions;
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
            path: `/v1/gameCenterEnabledVersions/{id}/compatibleVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterEnabledVersionsResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsGetToManyRelated(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterEnabledVersionsResponse> {
        const response = await this.gameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterEnabledVersionCompatibleVersionsLinkagesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship.');
        }

        const queryParameters: any = {};

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
            path: `/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterEnabledVersionCompatibleVersionsLinkagesResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterEnabledVersionCompatibleVersionsLinkagesResponse> {
        const response = await this.gameCenterEnabledVersionsCompatibleVersionsGetToManyRelationshipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRaw(requestParameters: GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship.');
        }

        if (requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === null || requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest === undefined) {
            throw new runtime.RequiredError('gameCenterEnabledVersionCompatibleVersionsLinkagesRequest','Required parameter requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest was null or undefined when calling gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship.');
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
            path: `/v1/gameCenterEnabledVersions/{id}/relationships/compatibleVersions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterEnabledVersionCompatibleVersionsLinkagesRequestToJSON(requestParameters.gameCenterEnabledVersionCompatibleVersionsLinkagesRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationship(requestParameters: GameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterEnabledVersionsCompatibleVersionsReplaceToManyRelationshipRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum = {
    Ios: 'IOS',
    MacOs: 'MAC_OS',
    TvOs: 'TV_OS'
} as const;
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum = typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFilterPlatformEnum];
/**
 * @export
 */
export const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum = {
    VersionString: 'versionString',
    VersionString: '-versionString'
} as const;
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum = typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedSortEnum];
/**
 * @export
 */
export const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum = {
    App: 'app',
    CompatibleVersions: 'compatibleVersions',
    IconAsset: 'iconAsset',
    Platform: 'platform',
    VersionString: 'versionString'
} as const;
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum = typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsGameCenterEnabledVersionsEnum];
/**
 * @export
 */
export const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum = {
    AppAvailability: 'appAvailability',
    AppClips: 'appClips',
    AppCustomProductPages: 'appCustomProductPages',
    AppEvents: 'appEvents',
    AppInfos: 'appInfos',
    AppPricePoints: 'appPricePoints',
    AppPriceSchedule: 'appPriceSchedule',
    AppStoreVersions: 'appStoreVersions',
    AvailableInNewTerritories: 'availableInNewTerritories',
    AvailableTerritories: 'availableTerritories',
    BetaAppLocalizations: 'betaAppLocalizations',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    BetaGroups: 'betaGroups',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaTesters: 'betaTesters',
    Builds: 'builds',
    BundleId: 'bundleId',
    CiProduct: 'ciProduct',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    CustomerReviews: 'customerReviews',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    InAppPurchases: 'inAppPurchases',
    InAppPurchasesV2: 'inAppPurchasesV2',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    Name: 'name',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreOrder: 'preOrder',
    PreReleaseVersions: 'preReleaseVersions',
    PricePoints: 'pricePoints',
    Prices: 'prices',
    PrimaryLocale: 'primaryLocale',
    PromotedPurchases: 'promotedPurchases',
    ReviewSubmissions: 'reviewSubmissions',
    Sku: 'sku',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    SubscriptionGroups: 'subscriptionGroups',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox'
} as const;
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum = typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedFieldsAppsEnum];
/**
 * @export
 */
export const GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum = {
    App: 'app',
    CompatibleVersions: 'compatibleVersions'
} as const;
export type GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum = typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum[keyof typeof GameCenterEnabledVersionsCompatibleVersionsGetToManyRelatedIncludeEnum];
