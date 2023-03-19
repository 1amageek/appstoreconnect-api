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
import type { AppScreenshotSet } from './AppScreenshotSet';
import type { AppScreenshotSetsResponseIncludedInner } from './AppScreenshotSetsResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
/**
 *
 * @export
 * @interface AppScreenshotSetsResponse
 */
export interface AppScreenshotSetsResponse {
    /**
     *
     * @type {Array<AppScreenshotSet>}
     * @memberof AppScreenshotSetsResponse
     */
    data: Array<AppScreenshotSet>;
    /**
     *
     * @type {Array<AppScreenshotSetsResponseIncludedInner>}
     * @memberof AppScreenshotSetsResponse
     */
    included?: Array<AppScreenshotSetsResponseIncludedInner>;
    /**
     *
     * @type {PagedDocumentLinks}
     * @memberof AppScreenshotSetsResponse
     */
    links: PagedDocumentLinks;
    /**
     *
     * @type {PagingInformation}
     * @memberof AppScreenshotSetsResponse
     */
    meta?: PagingInformation;
}
/**
 * Check if a given object implements the AppScreenshotSetsResponse interface.
 */
export declare function instanceOfAppScreenshotSetsResponse(value: object): boolean;
export declare function AppScreenshotSetsResponseFromJSON(json: any): AppScreenshotSetsResponse;
export declare function AppScreenshotSetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetsResponse;
export declare function AppScreenshotSetsResponseToJSON(value?: AppScreenshotSetsResponse | null): any;
