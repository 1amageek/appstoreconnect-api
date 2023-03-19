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
/**
 *
 * @export
 * @interface AppStoreVersionReleaseRequest
 */
export interface AppStoreVersionReleaseRequest {
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionReleaseRequest
     */
    type: AppStoreVersionReleaseRequestTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppStoreVersionReleaseRequest
     */
    id: string;
    /**
     *
     * @type {ResourceLinks}
     * @memberof AppStoreVersionReleaseRequest
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const AppStoreVersionReleaseRequestTypeEnum: {
    readonly AppStoreVersionReleaseRequests: "appStoreVersionReleaseRequests";
};
export type AppStoreVersionReleaseRequestTypeEnum = typeof AppStoreVersionReleaseRequestTypeEnum[keyof typeof AppStoreVersionReleaseRequestTypeEnum];
/**
 * Check if a given object implements the AppStoreVersionReleaseRequest interface.
 */
export declare function instanceOfAppStoreVersionReleaseRequest(value: object): boolean;
export declare function AppStoreVersionReleaseRequestFromJSON(json: any): AppStoreVersionReleaseRequest;
export declare function AppStoreVersionReleaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionReleaseRequest;
export declare function AppStoreVersionReleaseRequestToJSON(value?: AppStoreVersionReleaseRequest | null): any;
