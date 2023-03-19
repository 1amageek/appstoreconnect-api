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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import type { BundleIdRelationshipsBundleIdCapabilitiesDataInner } from './BundleIdRelationshipsBundleIdCapabilitiesDataInner';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface BundleIdRelationshipsBundleIdCapabilities
 */
export interface BundleIdRelationshipsBundleIdCapabilities {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    meta?: PagingInformation;
    /**
     *
     * @type {Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    data?: Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>;
}
/**
 * Check if a given object implements the BundleIdRelationshipsBundleIdCapabilities interface.
 */
export declare function instanceOfBundleIdRelationshipsBundleIdCapabilities(value: object): boolean;
export declare function BundleIdRelationshipsBundleIdCapabilitiesFromJSON(json: any): BundleIdRelationshipsBundleIdCapabilities;
export declare function BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsBundleIdCapabilities;
export declare function BundleIdRelationshipsBundleIdCapabilitiesToJSON(value?: BundleIdRelationshipsBundleIdCapabilities | null): any;
