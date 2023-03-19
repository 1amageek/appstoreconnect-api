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
 * @interface AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner
 */
export interface AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner {
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner
     */
    type: AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerTypeEnum: {
    readonly AppClipDefaultExperienceLocalizations: "appClipDefaultExperienceLocalizations";
};
export type AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerTypeEnum = typeof AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerTypeEnum[keyof typeof AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerTypeEnum];
/**
 * Check if a given object implements the AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner interface.
 */
export declare function instanceOfAppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner(value: object): boolean;
export declare function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSON(json: any): AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner;
export declare function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner;
export declare function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerToJSON(value?: AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner | null): any;
