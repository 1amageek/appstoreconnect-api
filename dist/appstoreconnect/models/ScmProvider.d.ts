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
import type { ResourceLinks } from './ResourceLinks';
import type { ScmProviderAttributes } from './ScmProviderAttributes';
/**
 *
 * @export
 * @interface ScmProvider
 */
export interface ScmProvider {
    /**
     *
     * @type {string}
     * @memberof ScmProvider
     */
    type: ScmProviderTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ScmProvider
     */
    id: string;
    /**
     *
     * @type {ScmProviderAttributes}
     * @memberof ScmProvider
     */
    attributes?: ScmProviderAttributes;
    /**
     *
     * @type {ResourceLinks}
     * @memberof ScmProvider
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const ScmProviderTypeEnum: {
    readonly ScmProviders: "scmProviders";
};
export type ScmProviderTypeEnum = typeof ScmProviderTypeEnum[keyof typeof ScmProviderTypeEnum];
/**
 * Check if a given object implements the ScmProvider interface.
 */
export declare function instanceOfScmProvider(value: object): boolean;
export declare function ScmProviderFromJSON(json: any): ScmProvider;
export declare function ScmProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmProvider;
export declare function ScmProviderToJSON(value?: ScmProvider | null): any;
