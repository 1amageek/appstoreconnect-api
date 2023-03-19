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
import type { CiXcodeVersionRelationshipsMacOsVersions } from './CiXcodeVersionRelationshipsMacOsVersions';
import {
    CiXcodeVersionRelationshipsMacOsVersionsFromJSON,
    CiXcodeVersionRelationshipsMacOsVersionsFromJSONTyped,
    CiXcodeVersionRelationshipsMacOsVersionsToJSON,
} from './CiXcodeVersionRelationshipsMacOsVersions';

/**
 * 
 * @export
 * @interface CiXcodeVersionRelationships
 */
export interface CiXcodeVersionRelationships {
    /**
     * 
     * @type {CiXcodeVersionRelationshipsMacOsVersions}
     * @memberof CiXcodeVersionRelationships
     */
    macOsVersions?: CiXcodeVersionRelationshipsMacOsVersions;
}

/**
 * Check if a given object implements the CiXcodeVersionRelationships interface.
 */
export function instanceOfCiXcodeVersionRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiXcodeVersionRelationshipsFromJSON(json: any): CiXcodeVersionRelationships {
    return CiXcodeVersionRelationshipsFromJSONTyped(json, false);
}

export function CiXcodeVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersionRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'macOsVersions': !exists(json, 'macOsVersions') ? undefined : CiXcodeVersionRelationshipsMacOsVersionsFromJSON(json['macOsVersions']),
    };
}

export function CiXcodeVersionRelationshipsToJSON(value?: CiXcodeVersionRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'macOsVersions': CiXcodeVersionRelationshipsMacOsVersionsToJSON(value.macOsVersions),
    };
}

