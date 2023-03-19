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
import type { PromotedPurchaseImageCreateRequestData } from './PromotedPurchaseImageCreateRequestData';
/**
 *
 * @export
 * @interface PromotedPurchaseImageCreateRequest
 */
export interface PromotedPurchaseImageCreateRequest {
    /**
     *
     * @type {PromotedPurchaseImageCreateRequestData}
     * @memberof PromotedPurchaseImageCreateRequest
     */
    data: PromotedPurchaseImageCreateRequestData;
}
/**
 * Check if a given object implements the PromotedPurchaseImageCreateRequest interface.
 */
export declare function instanceOfPromotedPurchaseImageCreateRequest(value: object): boolean;
export declare function PromotedPurchaseImageCreateRequestFromJSON(json: any): PromotedPurchaseImageCreateRequest;
export declare function PromotedPurchaseImageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageCreateRequest;
export declare function PromotedPurchaseImageCreateRequestToJSON(value?: PromotedPurchaseImageCreateRequest | null): any;
