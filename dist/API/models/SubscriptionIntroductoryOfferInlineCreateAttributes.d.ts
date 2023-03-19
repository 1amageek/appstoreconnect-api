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
import type { SubscriptionOfferDuration } from './SubscriptionOfferDuration';
import type { SubscriptionOfferMode } from './SubscriptionOfferMode';
/**
 *
 * @export
 * @interface SubscriptionIntroductoryOfferInlineCreateAttributes
 */
export interface SubscriptionIntroductoryOfferInlineCreateAttributes {
    /**
     *
     * @type {Date}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    startDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    endDate?: Date;
    /**
     *
     * @type {SubscriptionOfferDuration}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    duration: SubscriptionOfferDuration;
    /**
     *
     * @type {SubscriptionOfferMode}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    offerMode: SubscriptionOfferMode;
    /**
     *
     * @type {number}
     * @memberof SubscriptionIntroductoryOfferInlineCreateAttributes
     */
    numberOfPeriods: number;
}
/**
 * Check if a given object implements the SubscriptionIntroductoryOfferInlineCreateAttributes interface.
 */
export declare function instanceOfSubscriptionIntroductoryOfferInlineCreateAttributes(value: object): boolean;
export declare function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSON(json: any): SubscriptionIntroductoryOfferInlineCreateAttributes;
export declare function SubscriptionIntroductoryOfferInlineCreateAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferInlineCreateAttributes;
export declare function SubscriptionIntroductoryOfferInlineCreateAttributesToJSON(value?: SubscriptionIntroductoryOfferInlineCreateAttributes | null): any;
