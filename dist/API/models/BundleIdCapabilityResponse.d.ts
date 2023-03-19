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
import type { BundleIdCapability } from './BundleIdCapability';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface BundleIdCapabilityResponse
 */
export interface BundleIdCapabilityResponse {
    /**
     *
     * @type {BundleIdCapability}
     * @memberof BundleIdCapabilityResponse
     */
    data: BundleIdCapability;
    /**
     *
     * @type {DocumentLinks}
     * @memberof BundleIdCapabilityResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the BundleIdCapabilityResponse interface.
 */
export declare function instanceOfBundleIdCapabilityResponse(value: object): boolean;
export declare function BundleIdCapabilityResponseFromJSON(json: any): BundleIdCapabilityResponse;
export declare function BundleIdCapabilityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityResponse;
export declare function BundleIdCapabilityResponseToJSON(value?: BundleIdCapabilityResponse | null): any;
