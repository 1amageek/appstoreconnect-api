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
import type { SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup } from './SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup';
import {
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSONTyped,
    SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON,
} from './SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationCreateRequestDataRelationships
 */
export interface SubscriptionGroupLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup}
     * @memberof SubscriptionGroupLocalizationCreateRequestDataRelationships
     */
    subscriptionGroup: SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroup;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfSubscriptionGroupLocalizationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subscriptionGroup" in value;

    return isInstance;
}

export function SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSON(json: any): SubscriptionGroupLocalizationCreateRequestDataRelationships {
    return SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subscriptionGroup': SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupFromJSON(json['subscriptionGroup']),
    };
}

export function SubscriptionGroupLocalizationCreateRequestDataRelationshipsToJSON(value?: SubscriptionGroupLocalizationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subscriptionGroup': SubscriptionGroupLocalizationCreateRequestDataRelationshipsSubscriptionGroupToJSON(value.subscriptionGroup),
    };
}

