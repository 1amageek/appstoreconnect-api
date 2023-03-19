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
import type { AppInfoAttributes } from './AppInfoAttributes';
import type { AppInfoRelationships } from './AppInfoRelationships';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface AppInfo
 */
export interface AppInfo {
    /**
     *
     * @type {string}
     * @memberof AppInfo
     */
    type: AppInfoTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppInfo
     */
    id: string;
    /**
     *
     * @type {AppInfoAttributes}
     * @memberof AppInfo
     */
    attributes?: AppInfoAttributes;
    /**
     *
     * @type {AppInfoRelationships}
     * @memberof AppInfo
     */
    relationships?: AppInfoRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppInfo
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const AppInfoTypeEnum: {
    readonly AppInfos: "appInfos";
};
export type AppInfoTypeEnum = typeof AppInfoTypeEnum[keyof typeof AppInfoTypeEnum];
/**
 * Check if a given object implements the AppInfo interface.
 */
export declare function instanceOfAppInfo(value: object): boolean;
export declare function AppInfoFromJSON(json: any): AppInfo;
export declare function AppInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfo;
export declare function AppInfoToJSON(value?: AppInfo | null): any;
