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
import type { AppStoreVersionReleaseRequestCreateRequestData } from './AppStoreVersionReleaseRequestCreateRequestData';
/**
 *
 * @export
 * @interface AppStoreVersionReleaseRequestCreateRequest
 */
export interface AppStoreVersionReleaseRequestCreateRequest {
    /**
     *
     * @type {AppStoreVersionReleaseRequestCreateRequestData}
     * @memberof AppStoreVersionReleaseRequestCreateRequest
     */
    data: AppStoreVersionReleaseRequestCreateRequestData;
}
/**
 * Check if a given object implements the AppStoreVersionReleaseRequestCreateRequest interface.
 */
export declare function instanceOfAppStoreVersionReleaseRequestCreateRequest(value: object): boolean;
export declare function AppStoreVersionReleaseRequestCreateRequestFromJSON(json: any): AppStoreVersionReleaseRequestCreateRequest;
export declare function AppStoreVersionReleaseRequestCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionReleaseRequestCreateRequest;
export declare function AppStoreVersionReleaseRequestCreateRequestToJSON(value?: AppStoreVersionReleaseRequestCreateRequest | null): any;
