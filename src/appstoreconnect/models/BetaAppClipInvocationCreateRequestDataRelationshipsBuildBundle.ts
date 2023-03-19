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
import type { BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData } from './BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData';
import {
    BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSON,
    BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSONTyped,
    BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSON,
} from './BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle
 */
export interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    /**
     * 
     * @type {BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle
     */
    data: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleFromJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleToJSON(value?: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSON(value.data),
    };
}

