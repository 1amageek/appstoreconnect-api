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
import type { BetaAppClipInvocationAttributes } from './BetaAppClipInvocationAttributes';
import type { BetaAppClipInvocationRelationships } from './BetaAppClipInvocationRelationships';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface BetaAppClipInvocation
 */
export interface BetaAppClipInvocation {
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocation
     */
    type: BetaAppClipInvocationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaAppClipInvocation
     */
    id: string;
    /**
     *
     * @type {BetaAppClipInvocationAttributes}
     * @memberof BetaAppClipInvocation
     */
    attributes?: BetaAppClipInvocationAttributes;
    /**
     *
     * @type {BetaAppClipInvocationRelationships}
     * @memberof BetaAppClipInvocation
     */
    relationships?: BetaAppClipInvocationRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof BetaAppClipInvocation
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const BetaAppClipInvocationTypeEnum: {
    readonly BetaAppClipInvocations: "betaAppClipInvocations";
};
export type BetaAppClipInvocationTypeEnum = typeof BetaAppClipInvocationTypeEnum[keyof typeof BetaAppClipInvocationTypeEnum];
/**
 * Check if a given object implements the BetaAppClipInvocation interface.
 */
export declare function instanceOfBetaAppClipInvocation(value: object): boolean;
export declare function BetaAppClipInvocationFromJSON(json: any): BetaAppClipInvocation;
export declare function BetaAppClipInvocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocation;
export declare function BetaAppClipInvocationToJSON(value?: BetaAppClipInvocation | null): any;
