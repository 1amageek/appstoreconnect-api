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
import type { SubscriptionOfferCodeCustomCodeUpdateRequestData } from './SubscriptionOfferCodeCustomCodeUpdateRequestData';
/**
 *
 * @export
 * @interface SubscriptionOfferCodeCustomCodeUpdateRequest
 */
export interface SubscriptionOfferCodeCustomCodeUpdateRequest {
    /**
     *
     * @type {SubscriptionOfferCodeCustomCodeUpdateRequestData}
     * @memberof SubscriptionOfferCodeCustomCodeUpdateRequest
     */
    data: SubscriptionOfferCodeCustomCodeUpdateRequestData;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeUpdateRequest interface.
 */
export declare function instanceOfSubscriptionOfferCodeCustomCodeUpdateRequest(value: object): boolean;
export declare function SubscriptionOfferCodeCustomCodeUpdateRequestFromJSON(json: any): SubscriptionOfferCodeCustomCodeUpdateRequest;
export declare function SubscriptionOfferCodeCustomCodeUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeUpdateRequest;
export declare function SubscriptionOfferCodeCustomCodeUpdateRequestToJSON(value?: SubscriptionOfferCodeCustomCodeUpdateRequest | null): any;
