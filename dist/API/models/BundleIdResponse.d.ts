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
import type { BundleId } from './BundleId';
import type { BundleIdsResponseIncludedInner } from './BundleIdsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface BundleIdResponse
 */
export interface BundleIdResponse {
    /**
     *
     * @type {BundleId}
     * @memberof BundleIdResponse
     */
    data: BundleId;
    /**
     *
     * @type {Array<BundleIdsResponseIncludedInner>}
     * @memberof BundleIdResponse
     */
    included?: Array<BundleIdsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof BundleIdResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the BundleIdResponse interface.
 */
export declare function instanceOfBundleIdResponse(value: object): boolean;
export declare function BundleIdResponseFromJSON(json: any): BundleIdResponse;
export declare function BundleIdResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdResponse;
export declare function BundleIdResponseToJSON(value?: BundleIdResponse | null): any;
