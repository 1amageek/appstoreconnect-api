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
/**
 * 
 * @export
 * @interface CiBuildRunRelationshipsSourceBranchOrTagData
 */
export interface CiBuildRunRelationshipsSourceBranchOrTagData {
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunRelationshipsSourceBranchOrTagData
     */
    type: CiBuildRunRelationshipsSourceBranchOrTagDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunRelationshipsSourceBranchOrTagData
     */
    id: string;
}


/**
 * @export
 */
export const CiBuildRunRelationshipsSourceBranchOrTagDataTypeEnum = {
    ScmGitReferences: 'scmGitReferences'
} as const;
export type CiBuildRunRelationshipsSourceBranchOrTagDataTypeEnum = typeof CiBuildRunRelationshipsSourceBranchOrTagDataTypeEnum[keyof typeof CiBuildRunRelationshipsSourceBranchOrTagDataTypeEnum];


/**
 * Check if a given object implements the CiBuildRunRelationshipsSourceBranchOrTagData interface.
 */
export function instanceOfCiBuildRunRelationshipsSourceBranchOrTagData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiBuildRunRelationshipsSourceBranchOrTagDataFromJSON(json: any): CiBuildRunRelationshipsSourceBranchOrTagData {
    return CiBuildRunRelationshipsSourceBranchOrTagDataFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsSourceBranchOrTagDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationshipsSourceBranchOrTagData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CiBuildRunRelationshipsSourceBranchOrTagDataToJSON(value?: CiBuildRunRelationshipsSourceBranchOrTagData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

