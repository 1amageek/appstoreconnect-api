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
import type { BetaTesterCreateRequestData } from './BetaTesterCreateRequestData';
/**
 *
 * @export
 * @interface BetaTesterCreateRequest
 */
export interface BetaTesterCreateRequest {
    /**
     *
     * @type {BetaTesterCreateRequestData}
     * @memberof BetaTesterCreateRequest
     */
    data: BetaTesterCreateRequestData;
}
/**
 * Check if a given object implements the BetaTesterCreateRequest interface.
 */
export declare function instanceOfBetaTesterCreateRequest(value: object): boolean;
export declare function BetaTesterCreateRequestFromJSON(json: any): BetaTesterCreateRequest;
export declare function BetaTesterCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterCreateRequest;
export declare function BetaTesterCreateRequestToJSON(value?: BetaTesterCreateRequest | null): any;
