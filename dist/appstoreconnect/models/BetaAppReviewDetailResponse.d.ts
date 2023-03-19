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
import type { App } from './App';
import type { BetaAppReviewDetail } from './BetaAppReviewDetail';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface BetaAppReviewDetailResponse
 */
export interface BetaAppReviewDetailResponse {
    /**
     *
     * @type {BetaAppReviewDetail}
     * @memberof BetaAppReviewDetailResponse
     */
    data: BetaAppReviewDetail;
    /**
     *
     * @type {Array<App>}
     * @memberof BetaAppReviewDetailResponse
     */
    included?: Array<App>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof BetaAppReviewDetailResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the BetaAppReviewDetailResponse interface.
 */
export declare function instanceOfBetaAppReviewDetailResponse(value: object): boolean;
export declare function BetaAppReviewDetailResponseFromJSON(json: any): BetaAppReviewDetailResponse;
export declare function BetaAppReviewDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppReviewDetailResponse;
export declare function BetaAppReviewDetailResponseToJSON(value?: BetaAppReviewDetailResponse | null): any;
