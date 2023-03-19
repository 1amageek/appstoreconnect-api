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
import type { ScmProviderType } from './ScmProviderType';
/**
 *
 * @export
 * @interface ScmProviderAttributes
 */
export interface ScmProviderAttributes {
    /**
     *
     * @type {ScmProviderType}
     * @memberof ScmProviderAttributes
     */
    scmProviderType?: ScmProviderType;
    /**
     *
     * @type {string}
     * @memberof ScmProviderAttributes
     */
    url?: string;
}
/**
 * Check if a given object implements the ScmProviderAttributes interface.
 */
export declare function instanceOfScmProviderAttributes(value: object): boolean;
export declare function ScmProviderAttributesFromJSON(json: any): ScmProviderAttributes;
export declare function ScmProviderAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProviderAttributes;
export declare function ScmProviderAttributesToJSON(value?: ScmProviderAttributes | null): any;
