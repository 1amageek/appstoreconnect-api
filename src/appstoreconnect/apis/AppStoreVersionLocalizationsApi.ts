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
import type { AppPreviewSetsResponse, AppScreenshotSetsResponse, AppStoreVersionLocalizationCreateRequest, AppStoreVersionLocalizationResponse, AppStoreVersionLocalizationUpdateRequest, ErrorResponse, } from '../models';
import { AppPreviewSetsResponseFromJSON, AppPreviewSetsResponseToJSON, AppScreenshotSetsResponseFromJSON, AppScreenshotSetsResponseToJSON, AppStoreVersionLocalizationCreateRequestFromJSON, AppStoreVersionLocalizationCreateRequestToJSON, AppStoreVersionLocalizationResponseFromJSON, AppStoreVersionLocalizationResponseToJSON, AppStoreVersionLocalizationUpdateRequestFromJSON, AppStoreVersionLocalizationUpdateRequestToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRequest {
    id: string;
    filterPreviewType?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum>;
    filterAppCustomProductPageLocalization?: Array<string>;
    filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>;
    fieldsAppCustomProductPageLocalizations?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppPreviews?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum>;
    fieldsAppPreviewSets?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    limit?: number;
    limitAppPreviews?: number;
    include?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum>;
}
export interface AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRequest {
    id: string;
    filterScreenshotDisplayType?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum>;
    filterAppCustomProductPageLocalization?: Array<string>;
    filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppScreenshots?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    limit?: number;
    limitAppScreenshots?: number;
    include?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum>;
}
export interface AppStoreVersionLocalizationsCreateInstanceRequest {
    appStoreVersionLocalizationCreateRequest: AppStoreVersionLocalizationCreateRequest;
}
export interface AppStoreVersionLocalizationsDeleteInstanceRequest {
    id: string;
}
export interface AppStoreVersionLocalizationsGetInstanceRequest {
    id: string;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionLocalizationsGetInstanceFieldsAppStoreVersionLocalizationsEnum>;
    include?: Array<AppStoreVersionLocalizationsGetInstanceIncludeEnum>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionLocalizationsGetInstanceFieldsAppScreenshotSetsEnum>;
    fieldsAppPreviewSets?: Array<AppStoreVersionLocalizationsGetInstanceFieldsAppPreviewSetsEnum>;
    limitAppPreviewSets?: number;
    limitAppScreenshotSets?: number;
}
export interface AppStoreVersionLocalizationsUpdateInstanceRequest {
    id: string;
    appStoreVersionLocalizationUpdateRequest: AppStoreVersionLocalizationUpdateRequest;
}
/**
 *
 */
export class AppStoreVersionLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    async appStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters: AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreviewSetsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.filterPreviewType) {
            queryParameters['filter[previewType]'] = requestParameters.filterPreviewType.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterAppCustomProductPageLocalization) {
            queryParameters['filter[appCustomProductPageLocalization]'] = requestParameters.filterAppCustomProductPageLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterAppStoreVersionExperimentTreatmentLocalization) {
            queryParameters['filter[appStoreVersionExperimentTreatmentLocalization]'] = requestParameters.filterAppStoreVersionExperimentTreatmentLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppCustomProductPageLocalizations) {
            queryParameters['fields[appCustomProductPageLocalizations]'] = requestParameters.fieldsAppCustomProductPageLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations) {
            queryParameters['fields[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppPreviews) {
            queryParameters['fields[appPreviews]'] = requestParameters.fieldsAppPreviews.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppPreviewSets) {
            queryParameters['fields[appPreviewSets]'] = requestParameters.fieldsAppPreviewSets.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreVersionLocalizations) {
            queryParameters['fields[appStoreVersionLocalizations]'] = requestParameters.fieldsAppStoreVersionLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.limitAppPreviews !== undefined) {
            queryParameters['limit[appPreviews]'] = requestParameters.limitAppPreviews;
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
            path: `/v1/appStoreVersionLocalizations/{id}/appPreviewSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppPreviewSetsResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated(requestParameters: AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreviewSetsResponse> {
        const response = await this.appStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters: AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotSetsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.filterScreenshotDisplayType) {
            queryParameters['filter[screenshotDisplayType]'] = requestParameters.filterScreenshotDisplayType.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterAppCustomProductPageLocalization) {
            queryParameters['filter[appCustomProductPageLocalization]'] = requestParameters.filterAppCustomProductPageLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.filterAppStoreVersionExperimentTreatmentLocalization) {
            queryParameters['filter[appStoreVersionExperimentTreatmentLocalization]'] = requestParameters.filterAppStoreVersionExperimentTreatmentLocalization.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppScreenshotSets) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters.fieldsAppScreenshotSets.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppCustomProductPageLocalizations) {
            queryParameters['fields[appCustomProductPageLocalizations]'] = requestParameters.fieldsAppCustomProductPageLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations) {
            queryParameters['fields[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters.fieldsAppStoreVersionExperimentTreatmentLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppScreenshots) {
            queryParameters['fields[appScreenshots]'] = requestParameters.fieldsAppScreenshots.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppStoreVersionLocalizations) {
            queryParameters['fields[appStoreVersionLocalizations]'] = requestParameters.fieldsAppStoreVersionLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }
        if (requestParameters.limitAppScreenshots !== undefined) {
            queryParameters['limit[appScreenshots]'] = requestParameters.limitAppScreenshots;
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
            path: `/v1/appStoreVersionLocalizations/{id}/appScreenshotSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotSetsResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated(requestParameters: AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotSetsResponse> {
        const response = await this.appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appStoreVersionLocalizationsCreateInstanceRaw(requestParameters: AppStoreVersionLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionLocalizationResponse>> {
        if (requestParameters.appStoreVersionLocalizationCreateRequest === null || requestParameters.appStoreVersionLocalizationCreateRequest === undefined) {
            throw new runtime.RequiredError('appStoreVersionLocalizationCreateRequest', 'Required parameter requestParameters.appStoreVersionLocalizationCreateRequest was null or undefined when calling appStoreVersionLocalizationsCreateInstance.');
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
            path: `/v1/appStoreVersionLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionLocalizationCreateRequestToJSON(requestParameters.appStoreVersionLocalizationCreateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionLocalizationResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreVersionLocalizationsCreateInstance(requestParameters: AppStoreVersionLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionLocalizationResponse> {
        const response = await this.appStoreVersionLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appStoreVersionLocalizationsDeleteInstanceRaw(requestParameters: AppStoreVersionLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreVersionLocalizationsDeleteInstance.');
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
            path: `/v1/appStoreVersionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    /**
     */
    async appStoreVersionLocalizationsDeleteInstance(requestParameters: AppStoreVersionLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appStoreVersionLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }
    /**
     */
    async appStoreVersionLocalizationsGetInstanceRaw(requestParameters: AppStoreVersionLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreVersionLocalizationsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsAppStoreVersionLocalizations) {
            queryParameters['fields[appStoreVersionLocalizations]'] = requestParameters.fieldsAppStoreVersionLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppScreenshotSets) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters.fieldsAppScreenshotSets.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsAppPreviewSets) {
            queryParameters['fields[appPreviewSets]'] = requestParameters.fieldsAppPreviewSets.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limitAppPreviewSets !== undefined) {
            queryParameters['limit[appPreviewSets]'] = requestParameters.limitAppPreviewSets;
        }
        if (requestParameters.limitAppScreenshotSets !== undefined) {
            queryParameters['limit[appScreenshotSets]'] = requestParameters.limitAppScreenshotSets;
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
            path: `/v1/appStoreVersionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionLocalizationResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreVersionLocalizationsGetInstance(requestParameters: AppStoreVersionLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionLocalizationResponse> {
        const response = await this.appStoreVersionLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async appStoreVersionLocalizationsUpdateInstanceRaw(requestParameters: AppStoreVersionLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreVersionLocalizationsUpdateInstance.');
        }
        if (requestParameters.appStoreVersionLocalizationUpdateRequest === null || requestParameters.appStoreVersionLocalizationUpdateRequest === undefined) {
            throw new runtime.RequiredError('appStoreVersionLocalizationUpdateRequest', 'Required parameter requestParameters.appStoreVersionLocalizationUpdateRequest was null or undefined when calling appStoreVersionLocalizationsUpdateInstance.');
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
            path: `/v1/appStoreVersionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionLocalizationUpdateRequestToJSON(requestParameters.appStoreVersionLocalizationUpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionLocalizationResponseFromJSON(jsonValue));
    }
    /**
     */
    async appStoreVersionLocalizationsUpdateInstance(requestParameters: AppStoreVersionLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionLocalizationResponse> {
        const response = await this.appStoreVersionLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = 'IPHONE_67' | 'IPHONE_61' | 'IPHONE_65' | 'IPHONE_58' | 'IPHONE_55' | 'IPHONE_47' | 'IPHONE_40' | 'IPHONE_35' | 'IPAD_PRO_3GEN_129' | 'IPAD_PRO_3GEN_11' | 'IPAD_PRO_129' | 'IPAD_105' | 'IPAD_97' | 'DESKTOP' | 'APPLE_TV';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = 'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = 'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = 'appPreviewSet' | 'assetDeliveryState' | 'fileName' | 'fileSize' | 'mimeType' | 'previewFrameTimeCode' | 'previewImage' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded' | 'videoUrl';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = 'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = 'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = 'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = 'APP_IPHONE_67' | 'APP_IPHONE_61' | 'APP_IPHONE_65' | 'APP_IPHONE_58' | 'APP_IPHONE_55' | 'APP_IPHONE_47' | 'APP_IPHONE_40' | 'APP_IPHONE_35' | 'APP_IPAD_PRO_3GEN_129' | 'APP_IPAD_PRO_3GEN_11' | 'APP_IPAD_PRO_129' | 'APP_IPAD_105' | 'APP_IPAD_97' | 'APP_DESKTOP' | 'APP_WATCH_ULTRA' | 'APP_WATCH_SERIES_7' | 'APP_WATCH_SERIES_4' | 'APP_WATCH_SERIES_3' | 'APP_APPLE_TV' | 'IMESSAGE_APP_IPHONE_67' | 'IMESSAGE_APP_IPHONE_61' | 'IMESSAGE_APP_IPHONE_65' | 'IMESSAGE_APP_IPHONE_58' | 'IMESSAGE_APP_IPHONE_55' | 'IMESSAGE_APP_IPHONE_47' | 'IMESSAGE_APP_IPHONE_40' | 'IMESSAGE_APP_IPAD_PRO_3GEN_129' | 'IMESSAGE_APP_IPAD_PRO_3GEN_11' | 'IMESSAGE_APP_IPAD_PRO_129' | 'IMESSAGE_APP_IPAD_105' | 'IMESSAGE_APP_IPAD_97';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = 'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = 'appCustomProductPageVersion' | 'appPreviewSets' | 'appScreenshotSets' | 'locale' | 'promotionalText';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = 'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersionExperimentTreatment' | 'locale';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = 'appScreenshotSet' | 'assetDeliveryState' | 'assetToken' | 'assetType' | 'fileName' | 'fileSize' | 'imageAsset' | 'sourceFileChecksum' | 'uploadOperations' | 'uploaded';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = 'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = 'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsGetInstanceFieldsAppStoreVersionLocalizationsEnum = 'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion' | 'description' | 'keywords' | 'locale' | 'marketingUrl' | 'promotionalText' | 'supportUrl' | 'whatsNew';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsGetInstanceIncludeEnum = 'appPreviewSets' | 'appScreenshotSets' | 'appStoreVersion';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = 'appCustomProductPageLocalization' | 'appScreenshots' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'screenshotDisplayType';;
/**
 * @export
 */
export type AppStoreVersionLocalizationsGetInstanceFieldsAppPreviewSetsEnum = 'appCustomProductPageLocalization' | 'appPreviews' | 'appStoreVersionExperimentTreatmentLocalization' | 'appStoreVersionLocalization' | 'previewType';;
