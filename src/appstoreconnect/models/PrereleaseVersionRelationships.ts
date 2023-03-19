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
import type { AppAvailabilityRelationshipsApp } from './AppAvailabilityRelationshipsApp';
import {
    AppAvailabilityRelationshipsAppFromJSON,
    AppAvailabilityRelationshipsAppFromJSONTyped,
    AppAvailabilityRelationshipsAppToJSON,
} from './AppAvailabilityRelationshipsApp';
import type { AppEncryptionDeclarationRelationshipsBuilds } from './AppEncryptionDeclarationRelationshipsBuilds';
import {
    AppEncryptionDeclarationRelationshipsBuildsFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsToJSON,
} from './AppEncryptionDeclarationRelationshipsBuilds';

/**
 * 
 * @export
 * @interface PrereleaseVersionRelationships
 */
export interface PrereleaseVersionRelationships {
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsBuilds}
     * @memberof PrereleaseVersionRelationships
     */
    builds?: AppEncryptionDeclarationRelationshipsBuilds;
    /**
     * 
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof PrereleaseVersionRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
}

/**
 * Check if a given object implements the PrereleaseVersionRelationships interface.
 */
export function instanceOfPrereleaseVersionRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrereleaseVersionRelationshipsFromJSON(json: any): PrereleaseVersionRelationships {
    return PrereleaseVersionRelationshipsFromJSONTyped(json, false);
}

export function PrereleaseVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrereleaseVersionRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'builds': !exists(json, 'builds') ? undefined : AppEncryptionDeclarationRelationshipsBuildsFromJSON(json['builds']),
        'app': !exists(json, 'app') ? undefined : AppAvailabilityRelationshipsAppFromJSON(json['app']),
    };
}

export function PrereleaseVersionRelationshipsToJSON(value?: PrereleaseVersionRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'builds': AppEncryptionDeclarationRelationshipsBuildsToJSON(value.builds),
        'app': AppAvailabilityRelationshipsAppToJSON(value.app),
    };
}
