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
import { App } from './App';
import { Territory } from './Territory';
/**
 * @type AppAvailabilityResponseIncludedInner
 *
 * @export
 */
export type AppAvailabilityResponseIncludedInner = App | Territory;
export declare function AppAvailabilityResponseIncludedInnerFromJSON(json: any): AppAvailabilityResponseIncludedInner;
export declare function AppAvailabilityResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityResponseIncludedInner;
export declare function AppAvailabilityResponseIncludedInnerToJSON(value?: AppAvailabilityResponseIncludedInner | null): any;
