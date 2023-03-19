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
import type { AppEncryptionDeclarationDocumentCreateRequestData } from './AppEncryptionDeclarationDocumentCreateRequestData';
/**
 *
 * @export
 * @interface AppEncryptionDeclarationDocumentCreateRequest
 */
export interface AppEncryptionDeclarationDocumentCreateRequest {
    /**
     *
     * @type {AppEncryptionDeclarationDocumentCreateRequestData}
     * @memberof AppEncryptionDeclarationDocumentCreateRequest
     */
    data: AppEncryptionDeclarationDocumentCreateRequestData;
}
/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentCreateRequest interface.
 */
export declare function instanceOfAppEncryptionDeclarationDocumentCreateRequest(value: object): boolean;
export declare function AppEncryptionDeclarationDocumentCreateRequestFromJSON(json: any): AppEncryptionDeclarationDocumentCreateRequest;
export declare function AppEncryptionDeclarationDocumentCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentCreateRequest;
export declare function AppEncryptionDeclarationDocumentCreateRequestToJSON(value?: AppEncryptionDeclarationDocumentCreateRequest | null): any;
