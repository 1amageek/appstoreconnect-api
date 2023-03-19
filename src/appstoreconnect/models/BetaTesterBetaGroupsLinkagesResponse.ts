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
import type { AppRelationshipsBetaGroupsDataInner } from './AppRelationshipsBetaGroupsDataInner';
import {
    AppRelationshipsBetaGroupsDataInnerFromJSON,
    AppRelationshipsBetaGroupsDataInnerFromJSONTyped,
    AppRelationshipsBetaGroupsDataInnerToJSON,
} from './AppRelationshipsBetaGroupsDataInner';
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

/**
 * 
 * @export
 * @interface BetaTesterBetaGroupsLinkagesResponse
 */
export interface BetaTesterBetaGroupsLinkagesResponse {
    /**
     * 
     * @type {Array<AppRelationshipsBetaGroupsDataInner>}
     * @memberof BetaTesterBetaGroupsLinkagesResponse
     */
    data: Array<AppRelationshipsBetaGroupsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof BetaTesterBetaGroupsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BetaTesterBetaGroupsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the BetaTesterBetaGroupsLinkagesResponse interface.
 */
export function instanceOfBetaTesterBetaGroupsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaTesterBetaGroupsLinkagesResponseFromJSON(json: any): BetaTesterBetaGroupsLinkagesResponse {
    return BetaTesterBetaGroupsLinkagesResponseFromJSONTyped(json, false);
}

export function BetaTesterBetaGroupsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterBetaGroupsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppRelationshipsBetaGroupsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function BetaTesterBetaGroupsLinkagesResponseToJSON(value?: BetaTesterBetaGroupsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppRelationshipsBetaGroupsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

