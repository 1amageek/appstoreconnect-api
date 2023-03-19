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
import type { BetaLicenseAgreementAttributes } from './BetaLicenseAgreementAttributes';
import type { EndUserLicenseAgreementRelationships } from './EndUserLicenseAgreementRelationships';
import type { ResourceLinks } from './ResourceLinks';
/**
 *
 * @export
 * @interface EndUserLicenseAgreement
 */
export interface EndUserLicenseAgreement {
    /**
     *
     * @type {string}
     * @memberof EndUserLicenseAgreement
     */
    type: EndUserLicenseAgreementTypeEnum;
    /**
     *
     * @type {string}
     * @memberof EndUserLicenseAgreement
     */
    id: string;
    /**
     *
     * @type {BetaLicenseAgreementAttributes}
     * @memberof EndUserLicenseAgreement
     */
    attributes?: BetaLicenseAgreementAttributes;
    /**
     *
     * @type {EndUserLicenseAgreementRelationships}
     * @memberof EndUserLicenseAgreement
     */
    relationships?: EndUserLicenseAgreementRelationships;
    /**
     *
     * @type {ResourceLinks}
     * @memberof EndUserLicenseAgreement
     */
    links: ResourceLinks;
}
/**
 * @export
 */
export declare const EndUserLicenseAgreementTypeEnum: {
    readonly EndUserLicenseAgreements: "endUserLicenseAgreements";
};
export type EndUserLicenseAgreementTypeEnum = typeof EndUserLicenseAgreementTypeEnum[keyof typeof EndUserLicenseAgreementTypeEnum];
/**
 * Check if a given object implements the EndUserLicenseAgreement interface.
 */
export declare function instanceOfEndUserLicenseAgreement(value: object): boolean;
export declare function EndUserLicenseAgreementFromJSON(json: any): EndUserLicenseAgreement;
export declare function EndUserLicenseAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreement;
export declare function EndUserLicenseAgreementToJSON(value?: EndUserLicenseAgreement | null): any;
