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
import type { RoutingAppCoverageCreateRequestData } from './RoutingAppCoverageCreateRequestData';
/**
 *
 * @export
 * @interface RoutingAppCoverageCreateRequest
 */
export interface RoutingAppCoverageCreateRequest {
    /**
     *
     * @type {RoutingAppCoverageCreateRequestData}
     * @memberof RoutingAppCoverageCreateRequest
     */
    data: RoutingAppCoverageCreateRequestData;
}
/**
 * Check if a given object implements the RoutingAppCoverageCreateRequest interface.
 */
export declare function instanceOfRoutingAppCoverageCreateRequest(value: object): boolean;
export declare function RoutingAppCoverageCreateRequestFromJSON(json: any): RoutingAppCoverageCreateRequest;
export declare function RoutingAppCoverageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageCreateRequest;
export declare function RoutingAppCoverageCreateRequestToJSON(value?: RoutingAppCoverageCreateRequest | null): any;
