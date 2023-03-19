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
 * @interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData
 */
export interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData
     */
    type: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData
     */
    id: string;
}


/**
 * @export
 */
export const BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum = {
    BuildBundles: 'buildBundles'
} as const;
export type BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum = typeof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum[keyof typeof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSON(value?: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData | null): any {
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
