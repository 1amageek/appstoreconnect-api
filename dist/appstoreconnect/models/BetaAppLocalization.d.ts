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
import type { AppPreOrderRelationships } from './AppPreOrderRelationships';
import type { BetaAppLocalizationAttributes } from './BetaAppLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface BetaAppLocalization
 */
export interface BetaAppLocalization {
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalization
     */
    type: BetaAppLocalizationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaAppLocalization
     */
    id: string;
    /**
     *
     * @type {BetaAppLocalizationAttributes}
     * @memberof BetaAppLocalization
     */
    attributes?: BetaAppLocalizationAttributes;
    /**
     *
     * @type {AppPreOrderRelationships}
     * @memberof BetaAppLocalization
     */
    relationships?: AppPreOrderRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof BetaAppLocalization
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const BetaAppLocalizationTypeEnum: {
    readonly BetaAppLocalizations: "betaAppLocalizations";
};
export type BetaAppLocalizationTypeEnum = typeof BetaAppLocalizationTypeEnum[keyof typeof BetaAppLocalizationTypeEnum];
/**
 * Check if a given object implements the BetaAppLocalization interface.
 */
export declare function instanceOfBetaAppLocalization(value: object): boolean;
export declare function BetaAppLocalizationFromJSON(json: any): BetaAppLocalization;
export declare function BetaAppLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalization;
export declare function BetaAppLocalizationToJSON(value?: BetaAppLocalization | null): any;
