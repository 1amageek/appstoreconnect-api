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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData } from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData';
/**
 *
 * @export
 * @interface BuildRelationshipsAppEncryptionDeclaration
 */
export interface BuildRelationshipsAppEncryptionDeclaration {
    /**
     *
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof BuildRelationshipsAppEncryptionDeclaration
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     *
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData}
     * @memberof BuildRelationshipsAppEncryptionDeclaration
     */
    data?: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData;
}
/**
 * Check if a given object implements the BuildRelationshipsAppEncryptionDeclaration interface.
 */
export declare function instanceOfBuildRelationshipsAppEncryptionDeclaration(value: object): boolean;
export declare function BuildRelationshipsAppEncryptionDeclarationFromJSON(json: any): BuildRelationshipsAppEncryptionDeclaration;
export declare function BuildRelationshipsAppEncryptionDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsAppEncryptionDeclaration;
export declare function BuildRelationshipsAppEncryptionDeclarationToJSON(value?: BuildRelationshipsAppEncryptionDeclaration | null): any;
