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
/**
 *
 * @export
 * @interface SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
 */
export interface SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner {
    /**
     *
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
     */
    type: SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum: {
    readonly SubscriptionOfferCodeOneTimeUseCodes: "subscriptionOfferCodeOneTimeUseCodes";
};
export type SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum = typeof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum[keyof typeof SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerTypeEnum];
/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner interface.
 */
export declare function instanceOfSubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner(value: object): boolean;
export declare function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSON(json: any): SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner;
export declare function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner;
export declare function SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInnerToJSON(value?: SubscriptionOfferCodeRelationshipsOneTimeUseCodesDataInner | null): any;
