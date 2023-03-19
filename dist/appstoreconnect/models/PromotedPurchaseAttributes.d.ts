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
 * @interface PromotedPurchaseAttributes
 */
export interface PromotedPurchaseAttributes {
    /**
     *
     * @type {boolean}
     * @memberof PromotedPurchaseAttributes
     */
    visibleForAllUsers?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof PromotedPurchaseAttributes
     */
    enabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof PromotedPurchaseAttributes
     */
    state?: PromotedPurchaseAttributesStateEnum;
}
/**
 * @export
 */
export declare const PromotedPurchaseAttributesStateEnum: {
    readonly Approved: "APPROVED";
    readonly InReview: "IN_REVIEW";
    readonly PrepareForSubmission: "PREPARE_FOR_SUBMISSION";
    readonly Rejected: "REJECTED";
};
export type PromotedPurchaseAttributesStateEnum = typeof PromotedPurchaseAttributesStateEnum[keyof typeof PromotedPurchaseAttributesStateEnum];
/**
 * Check if a given object implements the PromotedPurchaseAttributes interface.
 */
export declare function instanceOfPromotedPurchaseAttributes(value: object): boolean;
export declare function PromotedPurchaseAttributesFromJSON(json: any): PromotedPurchaseAttributes;
export declare function PromotedPurchaseAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseAttributes;
export declare function PromotedPurchaseAttributesToJSON(value?: PromotedPurchaseAttributes | null): any;
