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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import type { PagingInformation } from './PagingInformation';
import type { SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData } from './SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData';
/**
 *
 * @export
 * @interface SubscriptionRelationshipsOfferCodes
 */
export interface SubscriptionRelationshipsOfferCodes {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof SubscriptionRelationshipsOfferCodes
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionRelationshipsOfferCodes
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData>}
     * @memberof SubscriptionRelationshipsOfferCodes
     */
    data?: Array<SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData>;
}
/**
 * Check if a given object implements the SubscriptionRelationshipsOfferCodes interface.
 */
export declare function instanceOfSubscriptionRelationshipsOfferCodes(value: object): boolean;
export declare function SubscriptionRelationshipsOfferCodesFromJSON(json: any): SubscriptionRelationshipsOfferCodes;
export declare function SubscriptionRelationshipsOfferCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsOfferCodes;
export declare function SubscriptionRelationshipsOfferCodesToJSON(value?: SubscriptionRelationshipsOfferCodes | null): any;
