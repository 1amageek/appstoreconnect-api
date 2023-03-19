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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import {
    AppAvailabilityRelationshipsAppLinksFromJSON,
    AppAvailabilityRelationshipsAppLinksFromJSONTyped,
    AppAvailabilityRelationshipsAppLinksToJSON,
} from './AppAvailabilityRelationshipsAppLinks';
import type { AppRelationshipsSubscriptionGroupsDataInner } from './AppRelationshipsSubscriptionGroupsDataInner';
import {
    AppRelationshipsSubscriptionGroupsDataInnerFromJSON,
    AppRelationshipsSubscriptionGroupsDataInnerFromJSONTyped,
    AppRelationshipsSubscriptionGroupsDataInnerToJSON,
} from './AppRelationshipsSubscriptionGroupsDataInner';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationRelationshipsSubscriptionGroup
 */
export interface SubscriptionGroupLocalizationRelationshipsSubscriptionGroup {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof SubscriptionGroupLocalizationRelationshipsSubscriptionGroup
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppRelationshipsSubscriptionGroupsDataInner}
     * @memberof SubscriptionGroupLocalizationRelationshipsSubscriptionGroup
     */
    data?: AppRelationshipsSubscriptionGroupsDataInner;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationRelationshipsSubscriptionGroup interface.
 */
export function instanceOfSubscriptionGroupLocalizationRelationshipsSubscriptionGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSON(json: any): SubscriptionGroupLocalizationRelationshipsSubscriptionGroup {
    return SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationRelationshipsSubscriptionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationRelationshipsSubscriptionGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppRelationshipsSubscriptionGroupsDataInnerFromJSON(json['data']),
    };
}

export function SubscriptionGroupLocalizationRelationshipsSubscriptionGroupToJSON(value?: SubscriptionGroupLocalizationRelationshipsSubscriptionGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppRelationshipsSubscriptionGroupsDataInnerToJSON(value.data),
    };
}

