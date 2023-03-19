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
import type { ReviewSubmissionItemAttributes } from './ReviewSubmissionItemAttributes';
import type { ReviewSubmissionItemRelationships } from './ReviewSubmissionItemRelationships';
/**
 *
 * @export
 * @interface ReviewSubmissionItem
 */
export interface ReviewSubmissionItem {
    /**
     *
     * @type {string}
     * @memberof ReviewSubmissionItem
     */
    type: ReviewSubmissionItemTypeEnum;
    /**
     *
     * @type {string}
     * @memberof ReviewSubmissionItem
     */
    id: string;
    /**
     *
     * @type {ReviewSubmissionItemAttributes}
     * @memberof ReviewSubmissionItem
     */
    attributes?: ReviewSubmissionItemAttributes;
    /**
     *
     * @type {ReviewSubmissionItemRelationships}
     * @memberof ReviewSubmissionItem
     */
    relationships?: ReviewSubmissionItemRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof ReviewSubmissionItem
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const ReviewSubmissionItemTypeEnum: {
    readonly ReviewSubmissionItems: "reviewSubmissionItems";
};
export type ReviewSubmissionItemTypeEnum = typeof ReviewSubmissionItemTypeEnum[keyof typeof ReviewSubmissionItemTypeEnum];
/**
 * Check if a given object implements the ReviewSubmissionItem interface.
 */
export declare function instanceOfReviewSubmissionItem(value: object): boolean;
export declare function ReviewSubmissionItemFromJSON(json: any): ReviewSubmissionItem;
export declare function ReviewSubmissionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItem;
export declare function ReviewSubmissionItemToJSON(value?: ReviewSubmissionItem | null): any;
