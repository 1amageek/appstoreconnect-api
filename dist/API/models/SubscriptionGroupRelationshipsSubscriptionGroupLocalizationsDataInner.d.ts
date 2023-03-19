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
 * @interface SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
 */
export interface SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
     */
    type: SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum: {
    readonly SubscriptionGroupLocalizations: "subscriptionGroupLocalizations";
};
export type SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum = typeof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum[keyof typeof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum];
/**
 * Check if a given object implements the SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner interface.
 */
export declare function instanceOfSubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner(value: object): boolean;
export declare function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSON(json: any): SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner;
export declare function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner;
export declare function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerToJSON(value?: SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner | null): any;
