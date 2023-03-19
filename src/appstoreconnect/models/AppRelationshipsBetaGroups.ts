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
import type { AppRelationshipsBetaGroupsDataInner } from './AppRelationshipsBetaGroupsDataInner';
import {
    AppRelationshipsBetaGroupsDataInnerFromJSON,
    AppRelationshipsBetaGroupsDataInnerFromJSONTyped,
    AppRelationshipsBetaGroupsDataInnerToJSON,
} from './AppRelationshipsBetaGroupsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppRelationshipsBetaGroups
 */
export interface AppRelationshipsBetaGroups {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppRelationshipsBetaGroups
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsBetaGroups
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppRelationshipsBetaGroupsDataInner>}
     * @memberof AppRelationshipsBetaGroups
     */
    data?: Array<AppRelationshipsBetaGroupsDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsBetaGroups interface.
 */
export function instanceOfAppRelationshipsBetaGroups(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppRelationshipsBetaGroupsFromJSON(json: any): AppRelationshipsBetaGroups {
    return AppRelationshipsBetaGroupsFromJSONTyped(json, false);
}

export function AppRelationshipsBetaGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaGroups {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppRelationshipsBetaGroupsDataInnerFromJSON)),
    };
}

export function AppRelationshipsBetaGroupsToJSON(value?: AppRelationshipsBetaGroups | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppRelationshipsBetaGroupsDataInnerToJSON)),
    };
}

