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
import type { AppAvailabilityResponseIncludedInner } from './AppAvailabilityResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import type { EndUserLicenseAgreement } from './EndUserLicenseAgreement';
/**
 *
 * @export
 * @interface EndUserLicenseAgreementResponse
 */
export interface EndUserLicenseAgreementResponse {
    /**
     *
     * @type {EndUserLicenseAgreement}
     * @memberof EndUserLicenseAgreementResponse
     */
    data: EndUserLicenseAgreement;
    /**
     *
     * @type {Array<AppAvailabilityResponseIncludedInner>}
     * @memberof EndUserLicenseAgreementResponse
     */
    included?: Array<AppAvailabilityResponseIncludedInner>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof EndUserLicenseAgreementResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the EndUserLicenseAgreementResponse interface.
 */
export declare function instanceOfEndUserLicenseAgreementResponse(value: object): boolean;
export declare function EndUserLicenseAgreementResponseFromJSON(json: any): EndUserLicenseAgreementResponse;
export declare function EndUserLicenseAgreementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementResponse;
export declare function EndUserLicenseAgreementResponseToJSON(value?: EndUserLicenseAgreementResponse | null): any;
