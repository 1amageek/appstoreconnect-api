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
import type { BetaGroup } from './BetaGroup';
import type { BetaGroupsResponseIncludedInner } from './BetaGroupsResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface BetaGroupsResponse
 */
export interface BetaGroupsResponse {
    /**
     *
     * @type {Array<BetaGroup>}
     * @memberof BetaGroupsResponse
     */
    data: Array<BetaGroup>;
    /**
     *
     * @type {Array<BetaGroupsResponseIncludedInner>}
     * @memberof BetaGroupsResponse
     */
    included?: Array<BetaGroupsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof BetaGroupsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof BetaGroupsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the BetaGroupsResponse interface.
 */
export declare function instanceOfBetaGroupsResponse(value: object): boolean;
export declare function BetaGroupsResponseFromJSON(json: any): BetaGroupsResponse;
export declare function BetaGroupsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupsResponse;
export declare function BetaGroupsResponseToJSON(value?: BetaGroupsResponse | null): any;
