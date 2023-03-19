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
import type { CiBuildRun } from './CiBuildRun';
import type { CiBuildRunsResponseIncludedInner } from './CiBuildRunsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface CiBuildRunResponse
 */
export interface CiBuildRunResponse {
    /**
     *
     * @type {CiBuildRun}
     * @memberof CiBuildRunResponse
     */
    data: CiBuildRun;
    /**
     *
     * @type {Array<CiBuildRunsResponseIncludedInner>}
     * @memberof CiBuildRunResponse
     */
    included?: Array<CiBuildRunsResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof CiBuildRunResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the CiBuildRunResponse interface.
 */
export declare function instanceOfCiBuildRunResponse(value: object): boolean;
export declare function CiBuildRunResponseFromJSON(json: any): CiBuildRunResponse;
export declare function CiBuildRunResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunResponse;
export declare function CiBuildRunResponseToJSON(value?: CiBuildRunResponse | null): any;
