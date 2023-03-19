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
import type { BetaBuildLocalizationCreateRequest, BetaBuildLocalizationResponse, BetaBuildLocalizationUpdateRequest, BetaBuildLocalizationsResponse, BuildResponse } from '../models';
export interface BetaBuildLocalizationsBuildGetToOneRelatedRequest {
    id: string;
    fieldsBuilds?: Array<BetaBuildLocalizationsBuildGetToOneRelatedFieldsBuildsEnum>;
}
export interface BetaBuildLocalizationsCreateInstanceRequest {
    betaBuildLocalizationCreateRequest: BetaBuildLocalizationCreateRequest;
}
export interface BetaBuildLocalizationsDeleteInstanceRequest {
    id: string;
}
export interface BetaBuildLocalizationsGetCollectionRequest {
    filterLocale?: Array<string>;
    filterBuild?: Array<string>;
    fieldsBetaBuildLocalizations?: Array<BetaBuildLocalizationsGetCollectionFieldsBetaBuildLocalizationsEnum>;
    limit?: number;
    include?: Array<BetaBuildLocalizationsGetCollectionIncludeEnum>;
    fieldsBuilds?: Array<BetaBuildLocalizationsGetCollectionFieldsBuildsEnum>;
}
export interface BetaBuildLocalizationsGetInstanceRequest {
    id: string;
    fieldsBetaBuildLocalizations?: Array<BetaBuildLocalizationsGetInstanceFieldsBetaBuildLocalizationsEnum>;
    include?: Array<BetaBuildLocalizationsGetInstanceIncludeEnum>;
    fieldsBuilds?: Array<BetaBuildLocalizationsGetInstanceFieldsBuildsEnum>;
}
export interface BetaBuildLocalizationsUpdateInstanceRequest {
    id: string;
    betaBuildLocalizationUpdateRequest: BetaBuildLocalizationUpdateRequest;
}
/**
 *
 */
export declare class BetaBuildLocalizationsApi extends runtime.BaseAPI {
    /**
     */
    betaBuildLocalizationsBuildGetToOneRelatedRaw(requestParameters: BetaBuildLocalizationsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildResponse>>;
    /**
     */
    betaBuildLocalizationsBuildGetToOneRelated(requestParameters: BetaBuildLocalizationsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildResponse>;
    /**
     */
    betaBuildLocalizationsCreateInstanceRaw(requestParameters: BetaBuildLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationResponse>>;
    /**
     */
    betaBuildLocalizationsCreateInstance(requestParameters: BetaBuildLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationResponse>;
    /**
     */
    betaBuildLocalizationsDeleteInstanceRaw(requestParameters: BetaBuildLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    betaBuildLocalizationsDeleteInstance(requestParameters: BetaBuildLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    betaBuildLocalizationsGetCollectionRaw(requestParameters: BetaBuildLocalizationsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationsResponse>>;
    /**
     */
    betaBuildLocalizationsGetCollection(requestParameters?: BetaBuildLocalizationsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationsResponse>;
    /**
     */
    betaBuildLocalizationsGetInstanceRaw(requestParameters: BetaBuildLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationResponse>>;
    /**
     */
    betaBuildLocalizationsGetInstance(requestParameters: BetaBuildLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationResponse>;
    /**
     */
    betaBuildLocalizationsUpdateInstanceRaw(requestParameters: BetaBuildLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BetaBuildLocalizationResponse>>;
    /**
     */
    betaBuildLocalizationsUpdateInstance(requestParameters: BetaBuildLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BetaBuildLocalizationResponse>;
}
/**
 * @export
 */
export type BetaBuildLocalizationsBuildGetToOneRelatedFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';
/**
 * @export
 */
export type BetaBuildLocalizationsGetCollectionFieldsBetaBuildLocalizationsEnum = 'build' | 'locale' | 'whatsNew';
/**
 * @export
 */
export type BetaBuildLocalizationsGetCollectionIncludeEnum = 'build';
/**
 * @export
 */
export type BetaBuildLocalizationsGetCollectionFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';
/**
 * @export
 */
export type BetaBuildLocalizationsGetInstanceFieldsBetaBuildLocalizationsEnum = 'build' | 'locale' | 'whatsNew';
/**
 * @export
 */
export type BetaBuildLocalizationsGetInstanceIncludeEnum = 'build';
/**
 * @export
 */
export type BetaBuildLocalizationsGetInstanceFieldsBuildsEnum = 'app' | 'appEncryptionDeclaration' | 'appStoreVersion' | 'betaAppReviewSubmission' | 'betaBuildLocalizations' | 'betaGroups' | 'buildAudienceType' | 'buildBetaDetail' | 'buildBundles' | 'computedMinMacOsVersion' | 'diagnosticSignatures' | 'expirationDate' | 'expired' | 'iconAssetToken' | 'icons' | 'individualTesters' | 'lsMinimumSystemVersion' | 'minOsVersion' | 'perfPowerMetrics' | 'preReleaseVersion' | 'processingState' | 'uploadedDate' | 'usesNonExemptEncryption' | 'version';
