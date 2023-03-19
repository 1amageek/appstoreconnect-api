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
 * @interface CiWorkflowRelationshipsMacOsVersionData
 */
export interface CiWorkflowRelationshipsMacOsVersionData {
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowRelationshipsMacOsVersionData
     */
    type: CiWorkflowRelationshipsMacOsVersionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowRelationshipsMacOsVersionData
     */
    id: string;
}


/**
 * @export
 */
export const CiWorkflowRelationshipsMacOsVersionDataTypeEnum = {
    CiMacOsVersions: 'ciMacOsVersions'
} as const;
export type CiWorkflowRelationshipsMacOsVersionDataTypeEnum = typeof CiWorkflowRelationshipsMacOsVersionDataTypeEnum[keyof typeof CiWorkflowRelationshipsMacOsVersionDataTypeEnum];


/**
 * Check if a given object implements the CiWorkflowRelationshipsMacOsVersionData interface.
 */
export function instanceOfCiWorkflowRelationshipsMacOsVersionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CiWorkflowRelationshipsMacOsVersionDataFromJSON(json: any): CiWorkflowRelationshipsMacOsVersionData {
    return CiWorkflowRelationshipsMacOsVersionDataFromJSONTyped(json, false);
}

export function CiWorkflowRelationshipsMacOsVersionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowRelationshipsMacOsVersionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CiWorkflowRelationshipsMacOsVersionDataToJSON(value?: CiWorkflowRelationshipsMacOsVersionData | null): any {
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

