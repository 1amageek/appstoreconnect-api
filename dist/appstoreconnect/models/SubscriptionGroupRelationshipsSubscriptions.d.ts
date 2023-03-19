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
import type { PromotedPurchaseRelationshipsSubscriptionData } from './PromotedPurchaseRelationshipsSubscriptionData';
/**
 *
 * @export
 * @interface SubscriptionGroupRelationshipsSubscriptions
 */
export interface SubscriptionGroupRelationshipsSubscriptions {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof SubscriptionGroupRelationshipsSubscriptions
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof SubscriptionGroupRelationshipsSubscriptions
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<PromotedPurchaseRelationshipsSubscriptionData>}
     * @memberof SubscriptionGroupRelationshipsSubscriptions
     */
    data?: Array<PromotedPurchaseRelationshipsSubscriptionData>;
}
/**
 * Check if a given object implements the SubscriptionGroupRelationshipsSubscriptions interface.
 */
export declare function instanceOfSubscriptionGroupRelationshipsSubscriptions(value: object): boolean;
export declare function SubscriptionGroupRelationshipsSubscriptionsFromJSON(json: any): SubscriptionGroupRelationshipsSubscriptions;
export declare function SubscriptionGroupRelationshipsSubscriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupRelationshipsSubscriptions;
export declare function SubscriptionGroupRelationshipsSubscriptionsToJSON(value?: SubscriptionGroupRelationshipsSubscriptions | null): any;
