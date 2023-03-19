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
import type { AppEncryptionDeclarationAttributes } from './AppEncryptionDeclarationAttributes';
import {
    AppEncryptionDeclarationAttributesFromJSON,
    AppEncryptionDeclarationAttributesFromJSONTyped,
    AppEncryptionDeclarationAttributesToJSON,
} from './AppEncryptionDeclarationAttributes';
import type { AppEncryptionDeclarationRelationships } from './AppEncryptionDeclarationRelationships';
import {
    AppEncryptionDeclarationRelationshipsFromJSON,
    AppEncryptionDeclarationRelationshipsFromJSONTyped,
    AppEncryptionDeclarationRelationshipsToJSON,
} from './AppEncryptionDeclarationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppEncryptionDeclaration
 */
export interface AppEncryptionDeclaration {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclaration
     */
    type: AppEncryptionDeclarationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclaration
     */
    id: string;
    /**
     * 
     * @type {AppEncryptionDeclarationAttributes}
     * @memberof AppEncryptionDeclaration
     */
    attributes?: AppEncryptionDeclarationAttributes;
    /**
     * 
     * @type {AppEncryptionDeclarationRelationships}
     * @memberof AppEncryptionDeclaration
     */
    relationships?: AppEncryptionDeclarationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppEncryptionDeclaration
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppEncryptionDeclarationTypeEnum = {
    AppEncryptionDeclarations: 'appEncryptionDeclarations'
} as const;
export type AppEncryptionDeclarationTypeEnum = typeof AppEncryptionDeclarationTypeEnum[keyof typeof AppEncryptionDeclarationTypeEnum];


/**
 * Check if a given object implements the AppEncryptionDeclaration interface.
 */
export function instanceOfAppEncryptionDeclaration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEncryptionDeclarationFromJSON(json: any): AppEncryptionDeclaration {
    return AppEncryptionDeclarationFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclaration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppEncryptionDeclarationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppEncryptionDeclarationRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppEncryptionDeclarationToJSON(value?: AppEncryptionDeclaration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppEncryptionDeclarationAttributesToJSON(value.attributes),
        'relationships': AppEncryptionDeclarationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}
