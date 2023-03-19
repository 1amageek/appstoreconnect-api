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
import type { CiBuildRunRelationshipsSourceBranchOrTagData } from './CiBuildRunRelationshipsSourceBranchOrTagData';
import {
    CiBuildRunRelationshipsSourceBranchOrTagDataFromJSON,
    CiBuildRunRelationshipsSourceBranchOrTagDataFromJSONTyped,
    CiBuildRunRelationshipsSourceBranchOrTagDataToJSON,
} from './CiBuildRunRelationshipsSourceBranchOrTagData';

/**
 * 
 * @export
 * @interface CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag
 */
export interface CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag {
    /**
     * 
     * @type {CiBuildRunRelationshipsSourceBranchOrTagData}
     * @memberof CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag
     */
    data?: CiBuildRunRelationshipsSourceBranchOrTagData;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag interface.
 */
export function instanceOfCiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTagFromJSON(json: any): CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag {
    return CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTagFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CiBuildRunRelationshipsSourceBranchOrTagDataFromJSON(json['data']),
    };
}

export function CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTagToJSON(value?: CiBuildRunCreateRequestDataRelationshipsSourceBranchOrTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiBuildRunRelationshipsSourceBranchOrTagDataToJSON(value.data),
    };
}

