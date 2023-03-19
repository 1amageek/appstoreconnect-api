/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AppEncryptionDeclarationDocumentUpdateRequestData } from './AppEncryptionDeclarationDocumentUpdateRequestData';
import {
    AppEncryptionDeclarationDocumentUpdateRequestDataFromJSON,
    AppEncryptionDeclarationDocumentUpdateRequestDataFromJSONTyped,
    AppEncryptionDeclarationDocumentUpdateRequestDataToJSON,
} from './AppEncryptionDeclarationDocumentUpdateRequestData';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocumentUpdateRequest
 */
export interface AppEncryptionDeclarationDocumentUpdateRequest {
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentUpdateRequestData}
     * @memberof AppEncryptionDeclarationDocumentUpdateRequest
     */
    data: AppEncryptionDeclarationDocumentUpdateRequestData;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentUpdateRequest interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentUpdateRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppEncryptionDeclarationDocumentUpdateRequestFromJSON(json: any): AppEncryptionDeclarationDocumentUpdateRequest {
    return AppEncryptionDeclarationDocumentUpdateRequestFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationDocumentUpdateRequestDataFromJSON(json['data']),
    };
}

export function AppEncryptionDeclarationDocumentUpdateRequestToJSON(value?: AppEncryptionDeclarationDocumentUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEncryptionDeclarationDocumentUpdateRequestDataToJSON(value.data),
    };
}

