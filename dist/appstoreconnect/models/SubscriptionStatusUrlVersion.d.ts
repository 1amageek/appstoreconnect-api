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
 */
export declare const SubscriptionStatusUrlVersion: {
    readonly V1: "V1";
    readonly V2: "V2";
};
export type SubscriptionStatusUrlVersion = typeof SubscriptionStatusUrlVersion[keyof typeof SubscriptionStatusUrlVersion];
export declare function SubscriptionStatusUrlVersionFromJSON(json: any): SubscriptionStatusUrlVersion;
export declare function SubscriptionStatusUrlVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionStatusUrlVersion;
export declare function SubscriptionStatusUrlVersionToJSON(value?: SubscriptionStatusUrlVersion | null): any;
