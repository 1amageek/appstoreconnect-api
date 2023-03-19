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
import type { SubscriptionGroupLocalization } from './SubscriptionGroupLocalization';
import {
    SubscriptionGroupLocalizationFromJSON,
    SubscriptionGroupLocalizationFromJSONTyped,
    SubscriptionGroupLocalizationToJSON,
} from './SubscriptionGroupLocalization';

/**
 * 
 * @export
 * @interface SubscriptionGroupLocalizationsResponse
 */
export interface SubscriptionGroupLocalizationsResponse {
    /**
     * 
     * @type {Array<SubscriptionGroupLocalization>}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    data: Array<SubscriptionGroupLocalization>;
    /**
     * 
     * @type {Array<SubscriptionGroup>}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    included?: Array<SubscriptionGroup>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionGroupLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the SubscriptionGroupLocalizationsResponse interface.
 */
export function instanceOfSubscriptionGroupLocalizationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionGroupLocalizationsResponseFromJSON(json: any): SubscriptionGroupLocalizationsResponse {
    return SubscriptionGroupLocalizationsResponseFromJSONTyped(json, false);
}

export function SubscriptionGroupLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupLocalizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(SubscriptionGroupLocalizationFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionGroupFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function SubscriptionGroupLocalizationsResponseToJSON(value?: SubscriptionGroupLocalizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(SubscriptionGroupLocalizationToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionGroupToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

