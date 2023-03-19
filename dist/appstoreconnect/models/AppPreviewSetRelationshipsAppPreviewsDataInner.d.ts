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
 * @interface AppPreviewSetRelationshipsAppPreviewsDataInner
 */
export interface AppPreviewSetRelationshipsAppPreviewsDataInner {
    /**
     *
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppPreviewsDataInner
     */
    type: AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppPreviewSetRelationshipsAppPreviewsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum: {
    readonly AppPreviews: "appPreviews";
};
export type AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum = typeof AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum[keyof typeof AppPreviewSetRelationshipsAppPreviewsDataInnerTypeEnum];
/**
 * Check if a given object implements the AppPreviewSetRelationshipsAppPreviewsDataInner interface.
 */
export declare function instanceOfAppPreviewSetRelationshipsAppPreviewsDataInner(value: object): boolean;
export declare function AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSON(json: any): AppPreviewSetRelationshipsAppPreviewsDataInner;
export declare function AppPreviewSetRelationshipsAppPreviewsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSetRelationshipsAppPreviewsDataInner;
export declare function AppPreviewSetRelationshipsAppPreviewsDataInnerToJSON(value?: AppPreviewSetRelationshipsAppPreviewsDataInner | null): any;
