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
import type { AppAvailabilityRelationshipsAppData } from './AppAvailabilityRelationshipsAppData';
/**
 *
 * @export
 * @interface BetaTesterAppsLinkagesRequest
 */
export interface BetaTesterAppsLinkagesRequest {
    /**
     *
     * @type {Array<AppAvailabilityRelationshipsAppData>}
     * @memberof BetaTesterAppsLinkagesRequest
     */
    data: Array<AppAvailabilityRelationshipsAppData>;
}
/**
 * Check if a given object implements the BetaTesterAppsLinkagesRequest interface.
 */
export declare function instanceOfBetaTesterAppsLinkagesRequest(value: object): boolean;
export declare function BetaTesterAppsLinkagesRequestFromJSON(json: any): BetaTesterAppsLinkagesRequest;
export declare function BetaTesterAppsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterAppsLinkagesRequest;
export declare function BetaTesterAppsLinkagesRequestToJSON(value?: BetaTesterAppsLinkagesRequest | null): any;
