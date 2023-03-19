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
import type { AppStoreVersionPhasedRelease } from './AppStoreVersionPhasedRelease';
import type { DocumentLinks } from './DocumentLinks';
/**
 *
 * @export
 * @interface AppStoreVersionPhasedReleaseResponse
 */
export interface AppStoreVersionPhasedReleaseResponse {
    /**
     *
     * @type {AppStoreVersionPhasedRelease}
     * @memberof AppStoreVersionPhasedReleaseResponse
     */
    data: AppStoreVersionPhasedRelease;
    /**
     *
     * @type {DocumentLinks}
     * @memberof AppStoreVersionPhasedReleaseResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseResponse interface.
 */
export declare function instanceOfAppStoreVersionPhasedReleaseResponse(value: object): boolean;
export declare function AppStoreVersionPhasedReleaseResponseFromJSON(json: any): AppStoreVersionPhasedReleaseResponse;
export declare function AppStoreVersionPhasedReleaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseResponse;
export declare function AppStoreVersionPhasedReleaseResponseToJSON(value?: AppStoreVersionPhasedReleaseResponse | null): any;
