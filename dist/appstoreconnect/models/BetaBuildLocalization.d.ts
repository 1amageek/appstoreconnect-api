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
import type { BetaAppReviewSubmissionRelationships } from './BetaAppReviewSubmissionRelationships';
import type { BetaBuildLocalizationAttributes } from './BetaBuildLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface BetaBuildLocalization
 */
export interface BetaBuildLocalization {
    /**
     *
     * @type {string}
     * @memberof BetaBuildLocalization
     */
    type: BetaBuildLocalizationTypeEnum;
    /**
     *
     * @type {string}
     * @memberof BetaBuildLocalization
     */
    id: string;
    /**
     *
     * @type {BetaBuildLocalizationAttributes}
     * @memberof BetaBuildLocalization
     */
    attributes?: BetaBuildLocalizationAttributes;
    /**
     *
     * @type {BetaAppReviewSubmissionRelationships}
     * @memberof BetaBuildLocalization
     */
    relationships?: BetaAppReviewSubmissionRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof BetaBuildLocalization
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const BetaBuildLocalizationTypeEnum: {
    readonly BetaBuildLocalizations: "betaBuildLocalizations";
};
export type BetaBuildLocalizationTypeEnum = typeof BetaBuildLocalizationTypeEnum[keyof typeof BetaBuildLocalizationTypeEnum];
/**
 * Check if a given object implements the BetaBuildLocalization interface.
 */
export declare function instanceOfBetaBuildLocalization(value: object): boolean;
export declare function BetaBuildLocalizationFromJSON(json: any): BetaBuildLocalization;
export declare function BetaBuildLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalization;
export declare function BetaBuildLocalizationToJSON(value?: BetaBuildLocalization | null): any;
