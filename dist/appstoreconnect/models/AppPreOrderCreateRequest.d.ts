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
import type { AppPreOrderCreateRequestData } from './AppPreOrderCreateRequestData';
/**
 *
 * @export
 * @interface AppPreOrderCreateRequest
 */
export interface AppPreOrderCreateRequest {
    /**
     *
     * @type {AppPreOrderCreateRequestData}
     * @memberof AppPreOrderCreateRequest
     */
    data: AppPreOrderCreateRequestData;
}
/**
 * Check if a given object implements the AppPreOrderCreateRequest interface.
 */
export declare function instanceOfAppPreOrderCreateRequest(value: object): boolean;
export declare function AppPreOrderCreateRequestFromJSON(json: any): AppPreOrderCreateRequest;
export declare function AppPreOrderCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreOrderCreateRequest;
export declare function AppPreOrderCreateRequestToJSON(value?: AppPreOrderCreateRequest | null): any;
