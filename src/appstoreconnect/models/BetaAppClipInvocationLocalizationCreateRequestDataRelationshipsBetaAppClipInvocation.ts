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
import type { BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData } from './BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData';
import {
    BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON,
    BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSONTyped,
    BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON,
} from './BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation
 */
export interface BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation {
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData}
     * @memberof BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation
     */
    data: BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON(json: any): BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation {
    return BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON(value?: BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON(value.data),
    };
}

