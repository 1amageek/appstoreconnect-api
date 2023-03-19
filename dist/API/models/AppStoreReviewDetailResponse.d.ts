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
import type { AppStoreReviewDetail } from './AppStoreReviewDetail';
import type { AppStoreReviewDetailResponseIncludedInner } from './AppStoreReviewDetailResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface AppStoreReviewDetailResponse
 */
export interface AppStoreReviewDetailResponse {
    /**
     *
     * @type {AppStoreReviewDetail}
     * @memberof AppStoreReviewDetailResponse
     */
    data: AppStoreReviewDetail;
    /**
     *
     * @type {Array<AppStoreReviewDetailResponseIncludedInner>}
     * @memberof AppStoreReviewDetailResponse
     */
    included?: Array<AppStoreReviewDetailResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppStoreReviewDetailResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppStoreReviewDetailResponse interface.
 */
export declare function instanceOfAppStoreReviewDetailResponse(value: object): boolean;
export declare function AppStoreReviewDetailResponseFromJSON(json: any): AppStoreReviewDetailResponse;
export declare function AppStoreReviewDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewDetailResponse;
export declare function AppStoreReviewDetailResponseToJSON(value?: AppStoreReviewDetailResponse | null): any;
