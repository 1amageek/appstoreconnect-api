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
import type { BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData } from './BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData';
import {
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON,
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSONTyped,
    BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON,
} from './BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData';

/**
 * 
 * @export
 * @interface BundleIdCapabilityCreateRequestDataRelationshipsBundleId
 */
export interface BundleIdCapabilityCreateRequestDataRelationshipsBundleId {
    /**
     * 
     * @type {BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData}
     * @memberof BundleIdCapabilityCreateRequestDataRelationshipsBundleId
     */
    data: BundleIdCapabilityCreateRequestDataRelationshipsBundleIdData;
}

/**
 * Check if a given object implements the BundleIdCapabilityCreateRequestDataRelationshipsBundleId interface.
 */
export function instanceOfBundleIdCapabilityCreateRequestDataRelationshipsBundleId(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFromJSON(json: any): BundleIdCapabilityCreateRequestDataRelationshipsBundleId {
    return BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFromJSONTyped(json, false);
}

export function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdCapabilityCreateRequestDataRelationshipsBundleId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataFromJSON(json['data']),
    };
}

export function BundleIdCapabilityCreateRequestDataRelationshipsBundleIdToJSON(value?: BundleIdCapabilityCreateRequestDataRelationshipsBundleId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BundleIdCapabilityCreateRequestDataRelationshipsBundleIdDataToJSON(value.data),
    };
}

