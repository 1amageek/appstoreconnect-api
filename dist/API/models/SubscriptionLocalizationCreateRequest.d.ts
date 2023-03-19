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
import type { SubscriptionLocalizationCreateRequestData } from './SubscriptionLocalizationCreateRequestData';
/**
 *
 * @export
 * @interface SubscriptionLocalizationCreateRequest
 */
export interface SubscriptionLocalizationCreateRequest {
    /**
     *
     * @type {SubscriptionLocalizationCreateRequestData}
     * @memberof SubscriptionLocalizationCreateRequest
     */
    data: SubscriptionLocalizationCreateRequestData;
}
/**
 * Check if a given object implements the SubscriptionLocalizationCreateRequest interface.
 */
export declare function instanceOfSubscriptionLocalizationCreateRequest(value: object): boolean;
export declare function SubscriptionLocalizationCreateRequestFromJSON(json: any): SubscriptionLocalizationCreateRequest;
export declare function SubscriptionLocalizationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionLocalizationCreateRequest;
export declare function SubscriptionLocalizationCreateRequestToJSON(value?: SubscriptionLocalizationCreateRequest | null): any;
