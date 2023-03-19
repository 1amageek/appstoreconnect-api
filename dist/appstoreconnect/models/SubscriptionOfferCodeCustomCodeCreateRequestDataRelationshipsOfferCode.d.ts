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
import type { SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData } from './SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData';
/**
 *
 * @export
 * @interface SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode
 */
export interface SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode {
    /**
     *
     * @type {SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData}
     * @memberof SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode
     */
    data: SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode interface.
 */
export declare function instanceOfSubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode(value: object): boolean;
export declare function SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCodeFromJSON(json: any): SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode;
export declare function SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode;
export declare function SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCodeToJSON(value?: SubscriptionOfferCodeCustomCodeCreateRequestDataRelationshipsOfferCode | null): any;
