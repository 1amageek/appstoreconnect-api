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
/**
 *
 * @export
 * @interface AppCategoryRelationshipsSubcategoriesDataInner
 */
export interface AppCategoryRelationshipsSubcategoriesDataInner {
    /**
     *
     * @type {string}
     * @memberof AppCategoryRelationshipsSubcategoriesDataInner
     */
    type: AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppCategoryRelationshipsSubcategoriesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum: {
    readonly AppCategories: "appCategories";
};
export type AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum = typeof AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum[keyof typeof AppCategoryRelationshipsSubcategoriesDataInnerTypeEnum];
/**
 * Check if a given object implements the AppCategoryRelationshipsSubcategoriesDataInner interface.
 */
export declare function instanceOfAppCategoryRelationshipsSubcategoriesDataInner(value: object): boolean;
export declare function AppCategoryRelationshipsSubcategoriesDataInnerFromJSON(json: any): AppCategoryRelationshipsSubcategoriesDataInner;
export declare function AppCategoryRelationshipsSubcategoriesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryRelationshipsSubcategoriesDataInner;
export declare function AppCategoryRelationshipsSubcategoriesDataInnerToJSON(value?: AppCategoryRelationshipsSubcategoriesDataInner | null): any;
