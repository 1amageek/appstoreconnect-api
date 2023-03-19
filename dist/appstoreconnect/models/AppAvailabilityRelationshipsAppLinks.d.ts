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
 * @interface AppAvailabilityRelationshipsAppLinks
 */
export interface AppAvailabilityRelationshipsAppLinks {
    /**
     *
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAppLinks
     */
    self?: string;
    /**
     *
     * @type {string}
     * @memberof AppAvailabilityRelationshipsAppLinks
     */
    related?: string;
}
/**
 * Check if a given object implements the AppAvailabilityRelationshipsAppLinks interface.
 */
export declare function instanceOfAppAvailabilityRelationshipsAppLinks(value: object): boolean;
export declare function AppAvailabilityRelationshipsAppLinksFromJSON(json: any): AppAvailabilityRelationshipsAppLinks;
export declare function AppAvailabilityRelationshipsAppLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityRelationshipsAppLinks;
export declare function AppAvailabilityRelationshipsAppLinksToJSON(value?: AppAvailabilityRelationshipsAppLinks | null): any;
