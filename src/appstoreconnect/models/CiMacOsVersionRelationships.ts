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
import type { CiMacOsVersionRelationshipsXcodeVersions } from './CiMacOsVersionRelationshipsXcodeVersions';
import {
    CiMacOsVersionRelationshipsXcodeVersionsFromJSON,
    CiMacOsVersionRelationshipsXcodeVersionsFromJSONTyped,
    CiMacOsVersionRelationshipsXcodeVersionsToJSON,
} from './CiMacOsVersionRelationshipsXcodeVersions';

/**
 * 
 * @export
 * @interface CiMacOsVersionRelationships
 */
export interface CiMacOsVersionRelationships {
    /**
     * 
     * @type {CiMacOsVersionRelationshipsXcodeVersions}
     * @memberof CiMacOsVersionRelationships
     */
    xcodeVersions?: CiMacOsVersionRelationshipsXcodeVersions;
}

/**
 * Check if a given object implements the CiMacOsVersionRelationships interface.
 */
export function instanceOfCiMacOsVersionRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiMacOsVersionRelationshipsFromJSON(json: any): CiMacOsVersionRelationships {
    return CiMacOsVersionRelationshipsFromJSONTyped(json, false);
}

export function CiMacOsVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'xcodeVersions': !exists(json, 'xcodeVersions') ? undefined : CiMacOsVersionRelationshipsXcodeVersionsFromJSON(json['xcodeVersions']),
    };
}

export function CiMacOsVersionRelationshipsToJSON(value?: CiMacOsVersionRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'xcodeVersions': CiMacOsVersionRelationshipsXcodeVersionsToJSON(value.xcodeVersions),
    };
}

