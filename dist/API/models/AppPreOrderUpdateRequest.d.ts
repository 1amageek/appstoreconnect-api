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
import type { AppPreOrderUpdateRequestData } from './AppPreOrderUpdateRequestData';
/**
 *
 * @export
 * @interface AppPreOrderUpdateRequest
 */
export interface AppPreOrderUpdateRequest {
    /**
     *
     * @type {AppPreOrderUpdateRequestData}
     * @memberof AppPreOrderUpdateRequest
     */
    data: AppPreOrderUpdateRequestData;
}
/**
 * Check if a given object implements the AppPreOrderUpdateRequest interface.
 */
export declare function instanceOfAppPreOrderUpdateRequest(value: object): boolean;
export declare function AppPreOrderUpdateRequestFromJSON(json: any): AppPreOrderUpdateRequest;
export declare function AppPreOrderUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderUpdateRequest;
export declare function AppPreOrderUpdateRequestToJSON(value?: AppPreOrderUpdateRequest | null): any;
