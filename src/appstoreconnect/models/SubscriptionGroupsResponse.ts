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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { SubscriptionGroup } from './SubscriptionGroup';
import {
    SubscriptionGroupFromJSON,
    SubscriptionGroupFromJSONTyped,
    SubscriptionGroupToJSON,
} from './SubscriptionGroup';
import type { SubscriptionGroupsResponseIncludedInner } from './SubscriptionGroupsResponseIncludedInner';
import {
    SubscriptionGroupsResponseIncludedInnerFromJSON,
    SubscriptionGroupsResponseIncludedInnerFromJSONTyped,
    SubscriptionGroupsResponseIncludedInnerToJSON,
} from './SubscriptionGroupsResponseIncludedInner';

/**
 * 
 * @export
 * @interface SubscriptionGroupsResponse
 */
export interface SubscriptionGroupsResponse {
    /**
     * 
     * @type {Array<SubscriptionGroup>}
     * @memberof SubscriptionGroupsResponse
     */
    data: Array<SubscriptionGroup>;
    /**
     * 
     * @type {Array<SubscriptionGroupsResponseIncludedInner>}
     * @memberof SubscriptionGroupsResponse
     */
    included?: Array<SubscriptionGroupsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionGroupsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionGroupsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionGroupsResponse interface.
 */
export function instanceOfSubscriptionGroupsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionGroupsResponseFromJSON(json: any): SubscriptionGroupsResponse {
    return SubscriptionGroupsResponseFromJSONTyped(json, false);
}

export function SubscriptionGroupsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionGroupFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionGroupsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionGroupsResponseToJSON(value?: SubscriptionGroupsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionGroupToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionGroupsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
