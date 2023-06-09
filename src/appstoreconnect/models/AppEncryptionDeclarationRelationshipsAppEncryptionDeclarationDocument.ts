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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import {
    AppAvailabilityRelationshipsAppLinksFromJSON,
    AppAvailabilityRelationshipsAppLinksFromJSONTyped,
    AppAvailabilityRelationshipsAppLinksToJSON,
} from './AppAvailabilityRelationshipsAppLinks';
import type { AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData } from './AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData';
import {
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSON,
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSONTyped,
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSON,
} from './AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument
 */
export interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument
     */
    data?: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument interface.
 */
export function instanceOfAppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSON(json: any): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument {
    return AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSON(json['data']),
    };
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentToJSON(value?: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSON(value.data),
    };
}

