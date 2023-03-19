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
 */
export declare const AppEncryptionDeclarationState: {
    readonly Created: "CREATED";
    readonly InReview: "IN_REVIEW";
    readonly Approved: "APPROVED";
    readonly Rejected: "REJECTED";
    readonly Invalid: "INVALID";
    readonly Expired: "EXPIRED";
};
export type AppEncryptionDeclarationState = typeof AppEncryptionDeclarationState[keyof typeof AppEncryptionDeclarationState];
export declare function AppEncryptionDeclarationStateFromJSON(json: any): AppEncryptionDeclarationState;
export declare function AppEncryptionDeclarationStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationState;
export declare function AppEncryptionDeclarationStateToJSON(value?: AppEncryptionDeclarationState | null): any;
