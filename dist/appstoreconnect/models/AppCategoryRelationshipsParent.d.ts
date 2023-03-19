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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import type { AppCategoryRelationshipsSubcategoriesDataInner } from './AppCategoryRelationshipsSubcategoriesDataInner';
/**
 *
 * @export
 * @interface AppCategoryRelationshipsParent
 */
export interface AppCategoryRelationshipsParent {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppCategoryRelationshipsParent
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {AppCategoryRelationshipsSubcategoriesDataInner}
     * @memberof AppCategoryRelationshipsParent
     */
    data?: AppCategoryRelationshipsSubcategoriesDataInner;
}
/**
 * Check if a given object implements the AppCategoryRelationshipsParent interface.
 */
export declare function instanceOfAppCategoryRelationshipsParent(value: object): boolean;
export declare function AppCategoryRelationshipsParentFromJSON(json: any): AppCategoryRelationshipsParent;
export declare function AppCategoryRelationshipsParentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryRelationshipsParent;
export declare function AppCategoryRelationshipsParentToJSON(value?: AppCategoryRelationshipsParent | null): any;
