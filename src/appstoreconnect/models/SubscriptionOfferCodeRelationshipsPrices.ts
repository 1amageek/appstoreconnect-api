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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';
import type { SubscriptionOfferCodeRelationshipsPricesDataInner } from './SubscriptionOfferCodeRelationshipsPricesDataInner';
import {
    SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSON,
    SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionOfferCodeRelationshipsPricesDataInnerToJSON,
} from './SubscriptionOfferCodeRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeRelationshipsPrices
 */
export interface SubscriptionOfferCodeRelationshipsPrices {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof SubscriptionOfferCodeRelationshipsPrices
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof SubscriptionOfferCodeRelationshipsPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<SubscriptionOfferCodeRelationshipsPricesDataInner>}
     * @memberof SubscriptionOfferCodeRelationshipsPrices
     */
    data?: Array<SubscriptionOfferCodeRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeRelationshipsPrices interface.
 */
export function instanceOfSubscriptionOfferCodeRelationshipsPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionOfferCodeRelationshipsPricesFromJSON(json: any): SubscriptionOfferCodeRelationshipsPrices {
    return SubscriptionOfferCodeRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionOfferCodeRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionOfferCodeRelationshipsPricesToJSON(value?: SubscriptionOfferCodeRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionOfferCodeRelationshipsPricesDataInnerToJSON)),
    };
}

