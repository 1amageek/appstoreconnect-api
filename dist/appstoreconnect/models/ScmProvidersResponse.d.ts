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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import type { ScmProvider } from './ScmProvider';
/**
 *
 * @export
 * @interface ScmProvidersResponse
 */
export interface ScmProvidersResponse {
    /**
     *
     * @type {Array<ScmProvider>}
     * @memberof ScmProvidersResponse
     */
    data: Array<ScmProvider>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof ScmProvidersResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof ScmProvidersResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the ScmProvidersResponse interface.
 */
export declare function instanceOfScmProvidersResponse(value: object): boolean;
export declare function ScmProvidersResponseFromJSON(json: any): ScmProvidersResponse;
export declare function ScmProvidersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProvidersResponse;
export declare function ScmProvidersResponseToJSON(value?: ScmProvidersResponse | null): any;
