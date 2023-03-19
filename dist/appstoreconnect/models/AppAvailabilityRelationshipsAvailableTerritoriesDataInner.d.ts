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
 * @interface AppAvailabilityRelationshipsAvailableTerritoriesDataInner
 */
export interface AppAvailabilityRelationshipsAvailableTerritoriesDataInner {
    /**
     *
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAvailableTerritoriesDataInner
     */
    type: AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAvailableTerritoriesDataInner
     */
    id: string;
}
/**
 * @export
 */
export declare const AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum: {
    readonly Territories: "territories";
};
export type AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum = typeof AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum[keyof typeof AppAvailabilityRelationshipsAvailableTerritoriesDataInnerTypeEnum];
/**
 * Check if a given object implements the AppAvailabilityRelationshipsAvailableTerritoriesDataInner interface.
 */
export declare function instanceOfAppAvailabilityRelationshipsAvailableTerritoriesDataInner(value: object): boolean;
export declare function AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON(json: any): AppAvailabilityRelationshipsAvailableTerritoriesDataInner;
export declare function AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityRelationshipsAvailableTerritoriesDataInner;
export declare function AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON(value?: AppAvailabilityRelationshipsAvailableTerritoriesDataInner | null): any;
