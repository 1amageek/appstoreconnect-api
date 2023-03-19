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
import type { SubscriptionOfferCodeCreateRequest, SubscriptionOfferCodeCustomCodesResponse, SubscriptionOfferCodeOneTimeUseCodesResponse, SubscriptionOfferCodePricesResponse, SubscriptionOfferCodeResponse, SubscriptionOfferCodeUpdateRequest } from '../models';
export interface SubscriptionOfferCodesCreateInstanceRequest {
    subscriptionOfferCodeCreateRequest: SubscriptionOfferCodeCreateRequest;
}
export interface SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest {
    id: string;
    fieldsSubscriptionOfferCodeCustomCodes?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum>;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum>;
}
export interface SubscriptionOfferCodesGetInstanceRequest {
    id: string;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum>;
    include?: Array<SubscriptionOfferCodesGetInstanceIncludeEnum>;
    fieldsSubscriptionOfferCodeCustomCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum>;
    fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum>;
    fieldsSubscriptionOfferCodePrices?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum>;
    limitCustomCodes?: number;
    limitOneTimeUseCodes?: number;
    limitPrices?: number;
}
export interface SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest {
    id: string;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum>;
    fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum>;
}
export interface SubscriptionOfferCodesPricesGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsSubscriptionPricePoints?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum>;
    fieldsTerritories?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum>;
    fieldsSubscriptionOfferCodePrices?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum>;
}
export interface SubscriptionOfferCodesUpdateInstanceRequest {
    id: string;
    subscriptionOfferCodeUpdateRequest: SubscriptionOfferCodeUpdateRequest;
}
/**
 *
 */
export declare class SubscriptionOfferCodesApi extends runtime.BaseAPI {
    /**
     */
    subscriptionOfferCodesCreateInstanceRaw(requestParameters: SubscriptionOfferCodesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>>;
    /**
     */
    subscriptionOfferCodesCreateInstance(requestParameters: SubscriptionOfferCodesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse>;
    /**
     */
    subscriptionOfferCodesCustomCodesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeCustomCodesResponse>>;
    /**
     */
    subscriptionOfferCodesCustomCodesGetToManyRelated(requestParameters: SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeCustomCodesResponse>;
    /**
     */
    subscriptionOfferCodesGetInstanceRaw(requestParameters: SubscriptionOfferCodesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>>;
    /**
     */
    subscriptionOfferCodesGetInstance(requestParameters: SubscriptionOfferCodesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse>;
    /**
     */
    subscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeOneTimeUseCodesResponse>>;
    /**
     */
    subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(requestParameters: SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeOneTimeUseCodesResponse>;
    /**
     */
    subscriptionOfferCodesPricesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodePricesResponse>>;
    /**
     */
    subscriptionOfferCodesPricesGetToManyRelated(requestParameters: SubscriptionOfferCodesPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodePricesResponse>;
    /**
     */
    subscriptionOfferCodesUpdateInstanceRaw(requestParameters: SubscriptionOfferCodesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>>;
    /**
     */
    subscriptionOfferCodesUpdateInstance(requestParameters: SubscriptionOfferCodesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse>;
}
/**
 * @export
 */
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum = 'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode';
/**
 * @export
 */
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = 'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes';
/**
 * @export
 */
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum = 'offerCode';
/**
 * @export
 */
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum = 'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes';
/**
 * @export
 */
export type SubscriptionOfferCodesGetInstanceIncludeEnum = 'customCodes' | 'oneTimeUseCodes' | 'prices' | 'subscription';
/**
 * @export
 */
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum = 'active' | 'createdDate' | 'customCode' | 'expirationDate' | 'numberOfCodes' | 'offerCode';
/**
 * @export
 */
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = 'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values';
/**
 * @export
 */
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum = 'subscriptionPricePoint' | 'territory';
/**
 * @export
 */
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = 'active' | 'customCodes' | 'customerEligibilities' | 'duration' | 'name' | 'numberOfPeriods' | 'offerEligibility' | 'offerMode' | 'oneTimeUseCodes' | 'prices' | 'subscription' | 'totalNumberOfCodes';
/**
 * @export
 */
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = 'active' | 'createdDate' | 'expirationDate' | 'numberOfCodes' | 'offerCode' | 'values';
/**
 * @export
 */
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum = 'offerCode';
/**
 * @export
 */
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = 'customerPrice' | 'equalizations' | 'proceeds' | 'proceedsYear2' | 'subscription' | 'territory';
/**
 * @export
 */
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum = 'currency';
/**
 * @export
 */
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum = 'subscriptionPricePoint' | 'territory';
/**
 * @export
 */
export type SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum = 'subscriptionPricePoint' | 'territory';
