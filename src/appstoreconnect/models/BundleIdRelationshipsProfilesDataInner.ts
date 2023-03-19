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
 * @interface BundleIdRelationshipsProfilesDataInner
 */
export interface BundleIdRelationshipsProfilesDataInner {
    /**
     * 
     * @type {string}
     * @memberof BundleIdRelationshipsProfilesDataInner
     */
    type: BundleIdRelationshipsProfilesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdRelationshipsProfilesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const BundleIdRelationshipsProfilesDataInnerTypeEnum = {
    Profiles: 'profiles'
} as const;
export type BundleIdRelationshipsProfilesDataInnerTypeEnum = typeof BundleIdRelationshipsProfilesDataInnerTypeEnum[keyof typeof BundleIdRelationshipsProfilesDataInnerTypeEnum];


/**
 * Check if a given object implements the BundleIdRelationshipsProfilesDataInner interface.
 */
export function instanceOfBundleIdRelationshipsProfilesDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BundleIdRelationshipsProfilesDataInnerFromJSON(json: any): BundleIdRelationshipsProfilesDataInner {
    return BundleIdRelationshipsProfilesDataInnerFromJSONTyped(json, false);
}

export function BundleIdRelationshipsProfilesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsProfilesDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BundleIdRelationshipsProfilesDataInnerToJSON(value?: BundleIdRelationshipsProfilesDataInner | null): any {
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

