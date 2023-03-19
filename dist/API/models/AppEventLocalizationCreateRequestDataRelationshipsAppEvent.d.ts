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
import type { AppEventLocalizationRelationshipsAppEventData } from './AppEventLocalizationRelationshipsAppEventData';
/**
 *
 * @export
 * @interface AppEventLocalizationCreateRequestDataRelationshipsAppEvent
 */
export interface AppEventLocalizationCreateRequestDataRelationshipsAppEvent {
    /**
     *
     * @type {AppEventLocalizationRelationshipsAppEventData}
     * @memberof AppEventLocalizationCreateRequestDataRelationshipsAppEvent
     */
    data: AppEventLocalizationRelationshipsAppEventData;
}
/**
 * Check if a given object implements the AppEventLocalizationCreateRequestDataRelationshipsAppEvent interface.
 */
export declare function instanceOfAppEventLocalizationCreateRequestDataRelationshipsAppEvent(value: object): boolean;
export declare function AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSON(json: any): AppEventLocalizationCreateRequestDataRelationshipsAppEvent;
export declare function AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationCreateRequestDataRelationshipsAppEvent;
export declare function AppEventLocalizationCreateRequestDataRelationshipsAppEventToJSON(value?: AppEventLocalizationCreateRequestDataRelationshipsAppEvent | null): any;
