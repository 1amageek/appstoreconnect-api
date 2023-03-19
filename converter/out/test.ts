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
import type { AppClipAdvancedExperiencesResponse, AppClipDefaultExperiencesResponse, AppClipResponse, ErrorResponse, } from '../models';
import { AppClipAdvancedExperiencesResponseFromJSON, AppClipAdvancedExperiencesResponseToJSON, AppClipDefaultExperiencesResponseFromJSON, AppClipDefaultExperiencesResponseToJSON, AppClipResponseFromJSON, AppClipResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest {
    id: string;
    filterAction?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum>;
    filterPlaceStatus?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum>;
    filterStatus?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum>;
    fieldsAppClipAdvancedExperiences?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum>;
    fieldsAppClips?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum>;
    fieldsAppClipAdvancedExperienceImages?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum>;
    fieldsAppClipAdvancedExperienceLocalizations?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum>;
    limit?: number;
    limitLocalizations?: number;
    include?: Array<AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum>;
}
export interface AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest {
    id: string;
    existsReleaseWithAppStoreVersion?: boolean;
    fieldsAppClips?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum>;
    fieldsAppClipAppStoreReviewDetails?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum>;
    fieldsAppStoreVersions?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum>;
    fieldsAppClipDefaultExperiences?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum>;
    fieldsAppClipDefaultExperienceLocalizations?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum>;
    limit?: number;
    limitAppClipDefaultExperienceLocalizations?: number;
    include?: Array<AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum>;
}
export interface AppClipsGetInstanceRequest {
    id: string;
    fieldsAppClips?: Array<AppClipsGetInstanceFieldsAppClipsEnum>;
    include?: Array<AppClipsGetInstanceIncludeEnum>;
    fieldsAppClipAdvancedExperiences?: Array<AppClipsGetInstanceFieldsAppClipAdvancedExperiencesEnum>;
    fieldsAppClipDefaultExperiences?: Array<AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum>;
    limitAppClipDefaultExperiences?: number;
}
/**
 *
 */
export class AppClipsApi extends runtime.BaseAPI {
    /**
     */
    async appClipsAppClipAdvancedExperiencesGetToManyRelatedRaw(requestParameters: AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperiencesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appClipsAppClipAdvancedExperiencesGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.filterAction) {
            queryParameters['filter[action]'] = requestParameters.filterAction.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterPlaceStatus) {
            queryParameters['filter[placeStatus]'] = requestParameters.filterPlaceStatus.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterStatus) {
            queryParameters['filter[status]'] = requestParameters.filterStatus.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipAdvancedExperiences) {
            queryParameters['fields[appClipAdvancedExperiences]'] = requestParameters.fieldsAppClipAdvancedExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClips) {
            queryParameters['fields[appClips]'] = requestParameters.fieldsAppClips.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipAdvancedExperienceImages) {
            queryParameters['fields[appClipAdvancedExperienceImages]'] = requestParameters.fieldsAppClipAdvancedExperienceImages.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipAdvancedExperienceLocalizations) {
            queryParameters['fields[appClipAdvancedExperienceLocalizations]'] = requestParameters.fieldsAppClipAdvancedExperienceLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.limitLocalizations !== undefined) {
            queryParameters['limit[localizations]'] = requestParameters.limitLocalizations;
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
            path: `/v1/appClips/{id}/appClipAdvancedExperiences`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperiencesResponseFromJSON(jsonValue));
    }
    /**
     */
    async appClipsAppClipAdvancedExperiencesGetToManyRelated(requestParameters: AppClipsAppClipAdvancedExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperiencesResponse> {
        const response = await this.appClipsAppClipAdvancedExperiencesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appClipsAppClipDefaultExperiencesGetToManyRelatedRaw(requestParameters: AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperiencesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appClipsAppClipDefaultExperiencesGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.existsReleaseWithAppStoreVersion !== undefined) {
            queryParameters['exists[releaseWithAppStoreVersion]'] = requestParameters.existsReleaseWithAppStoreVersion;
        }
        if (requestParameters.fieldsAppClips) {
            queryParameters['fields[appClips]'] = requestParameters.fieldsAppClips.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipAppStoreReviewDetails) {
            queryParameters['fields[appClipAppStoreReviewDetails]'] = requestParameters.fieldsAppClipAppStoreReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreVersions) {
            queryParameters['fields[appStoreVersions]'] = requestParameters.fieldsAppStoreVersions.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipDefaultExperiences) {
            queryParameters['fields[appClipDefaultExperiences]'] = requestParameters.fieldsAppClipDefaultExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipDefaultExperienceLocalizations) {
            queryParameters['fields[appClipDefaultExperienceLocalizations]'] = requestParameters.fieldsAppClipDefaultExperienceLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.limitAppClipDefaultExperienceLocalizations !== undefined) {
            queryParameters['limit[appClipDefaultExperienceLocalizations]'] = requestParameters.limitAppClipDefaultExperienceLocalizations;
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
            path: `/v1/appClips/{id}/appClipDefaultExperiences`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipDefaultExperiencesResponseFromJSON(jsonValue));
    }
    /**
     */
    async appClipsAppClipDefaultExperiencesGetToManyRelated(requestParameters: AppClipsAppClipDefaultExperiencesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperiencesResponse> {
        const response = await this.appClipsAppClipDefaultExperiencesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appClipsGetInstanceRaw(requestParameters: AppClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appClipsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsAppClips) {
            queryParameters['fields[appClips]'] = requestParameters.fieldsAppClips.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipAdvancedExperiences) {
            queryParameters['fields[appClipAdvancedExperiences]'] = requestParameters.fieldsAppClipAdvancedExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppClipDefaultExperiences) {
            queryParameters['fields[appClipDefaultExperiences]'] = requestParameters.fieldsAppClipDefaultExperiences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitAppClipDefaultExperiences !== undefined) {
            queryParameters['limit[appClipDefaultExperiences]'] = requestParameters.limitAppClipDefaultExperiences;
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
            path: `/v1/appClips/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipResponseFromJSON(jsonValue));
    }
    /**
     */
    async appClipsGetInstance(requestParameters: AppClipsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipResponse> {
        const response = await this.appClipsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterActionEnum = 'OPEN' | 'VIEW' | 'PLAY';;
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterPlaceStatusEnum = 'PENDING' | 'MATCHED' | 'NO_MATCH';;
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFilterStatusEnum = 'RECEIVED' | 'DEACTIVATED' | 'APP_TRANSFER_IN_PROGRESS';;
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperiencesEnum = 'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version';;
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipsEnum = 'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId';;
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceImagesEnum = 'assetDeliveryState' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded';;
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedFieldsAppClipAdvancedExperienceLocalizationsEnum = 'language' | 'subtitle' | 'title';;
/**
 * @export
 */
export type AppClipsAppClipAdvancedExperiencesGetToManyRelatedIncludeEnum = 'appClip' | 'headerImage' | 'localizations';;
/**
 * @export
 */
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipsEnum = 'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId';;
/**
 * @export
 */
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipAppStoreReviewDetailsEnum = 'appClipDefaultExperience' | 'invocationUrls';;
/**
 * @export
 */
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppStoreVersionsEnum = 'ageRatingDeclaration' | 'app' | 'appClipDefaultExperience' | 'appStoreReviewDetail' | 'appStoreState' | 'appStoreVersionExperiments' | 'appStoreVersionLocalizations' | 'appStoreVersionPhasedRelease' | 'appStoreVersionSubmission' | 'build' | 'copyright' | 'createdDate' | 'customerReviews' | 'downloadable' | 'earliestReleaseDate' | 'platform' | 'releaseType' | 'routingAppCoverage' | 'versionString';;
/**
 * @export
 */
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperiencesEnum = 'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion';;
/**
 * @export
 */
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedFieldsAppClipDefaultExperienceLocalizationsEnum = 'appClipDefaultExperience' | 'appClipHeaderImage' | 'locale' | 'subtitle';;
/**
 * @export
 */
export type AppClipsAppClipDefaultExperiencesGetToManyRelatedIncludeEnum = 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'releaseWithAppStoreVersion';;
/**
 * @export
 */
export type AppClipsGetInstanceFieldsAppClipsEnum = 'app' | 'appClipAdvancedExperiences' | 'appClipDefaultExperiences' | 'bundleId';;
/**
 * @export
 */
export type AppClipsGetInstanceIncludeEnum = 'app' | 'appClipDefaultExperiences';;
/**
 * @export
 */
export type AppClipsGetInstanceFieldsAppClipAdvancedExperiencesEnum = 'action' | 'appClip' | 'businessCategory' | 'defaultLanguage' | 'headerImage' | 'isPoweredBy' | 'link' | 'localizations' | 'place' | 'placeStatus' | 'removed' | 'status' | 'version';;
/**
 * @export
 */
export type AppClipsGetInstanceFieldsAppClipDefaultExperiencesEnum = 'action' | 'appClip' | 'appClipAppStoreReviewDetail' | 'appClipDefaultExperienceLocalizations' | 'appClipDefaultExperienceTemplate' | 'releaseWithAppStoreVersion';;
