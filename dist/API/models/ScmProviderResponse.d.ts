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
import type { DocumentLinks } from './DocumentLinks';
import type { ScmProvider } from './ScmProvider';
/**
 *
 * @export
 * @interface ScmProviderResponse
 */
export interface ScmProviderResponse {
    /**
     *
     * @type {ScmProvider}
     * @memberof ScmProviderResponse
     */
    data: ScmProvider;
    /**
     *
     * @type {DocumentLinks}
     * @memberof ScmProviderResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the ScmProviderResponse interface.
 */
export declare function instanceOfScmProviderResponse(value: object): boolean;
export declare function ScmProviderResponseFromJSON(json: any): ScmProviderResponse;
export declare function ScmProviderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProviderResponse;
export declare function ScmProviderResponseToJSON(value?: ScmProviderResponse | null): any;
