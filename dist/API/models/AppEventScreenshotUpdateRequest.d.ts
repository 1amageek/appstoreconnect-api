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
import type { AppEventScreenshotUpdateRequestData } from './AppEventScreenshotUpdateRequestData';
/**
 *
 * @export
 * @interface AppEventScreenshotUpdateRequest
 */
export interface AppEventScreenshotUpdateRequest {
    /**
     *
     * @type {AppEventScreenshotUpdateRequestData}
     * @memberof AppEventScreenshotUpdateRequest
     */
    data: AppEventScreenshotUpdateRequestData;
}
/**
 * Check if a given object implements the AppEventScreenshotUpdateRequest interface.
 */
export declare function instanceOfAppEventScreenshotUpdateRequest(value: object): boolean;
export declare function AppEventScreenshotUpdateRequestFromJSON(json: any): AppEventScreenshotUpdateRequest;
export declare function AppEventScreenshotUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshotUpdateRequest;
export declare function AppEventScreenshotUpdateRequestToJSON(value?: AppEventScreenshotUpdateRequest | null): any;
