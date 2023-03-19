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
import type { AppRelationshipsBetaLicenseAgreementData } from './AppRelationshipsBetaLicenseAgreementData';
/**
 *
 * @export
 * @interface AppRelationshipsBetaLicenseAgreement
 */
export interface AppRelationshipsBetaLicenseAgreement {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppRelationshipsBetaLicenseAgreement
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {AppRelationshipsBetaLicenseAgreementData}
     * @memberof AppRelationshipsBetaLicenseAgreement
     */
    data?: AppRelationshipsBetaLicenseAgreementData;
}
/**
 * Check if a given object implements the AppRelationshipsBetaLicenseAgreement interface.
 */
export declare function instanceOfAppRelationshipsBetaLicenseAgreement(value: object): boolean;
export declare function AppRelationshipsBetaLicenseAgreementFromJSON(json: any): AppRelationshipsBetaLicenseAgreement;
export declare function AppRelationshipsBetaLicenseAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaLicenseAgreement;
export declare function AppRelationshipsBetaLicenseAgreementToJSON(value?: AppRelationshipsBetaLicenseAgreement | null): any;
