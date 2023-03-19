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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import type { AppRelationshipsCiProductData } from './AppRelationshipsCiProductData';
/**
 *
 * @export
 * @interface AppRelationshipsCiProduct
 */
export interface AppRelationshipsCiProduct {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppRelationshipsCiProduct
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {AppRelationshipsCiProductData}
     * @memberof AppRelationshipsCiProduct
     */
    data?: AppRelationshipsCiProductData;
}
/**
 * Check if a given object implements the AppRelationshipsCiProduct interface.
 */
export declare function instanceOfAppRelationshipsCiProduct(value: object): boolean;
export declare function AppRelationshipsCiProductFromJSON(json: any): AppRelationshipsCiProduct;
export declare function AppRelationshipsCiProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsCiProduct;
export declare function AppRelationshipsCiProductToJSON(value?: AppRelationshipsCiProduct | null): any;
