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
import type { InAppPurchasePriceScheduleRelationshipsManualPricesDataInner } from './InAppPurchasePriceScheduleRelationshipsManualPricesDataInner';
import {
    InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSON,
    InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSONTyped,
    InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSON,
} from './InAppPurchasePriceScheduleRelationshipsManualPricesDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleRelationshipsManualPrices
 */
export interface InAppPurchasePriceScheduleRelationshipsManualPrices {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPrices
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPrices
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>}
     * @memberof InAppPurchasePriceScheduleRelationshipsManualPrices
     */
    data?: Array<InAppPurchasePriceScheduleRelationshipsManualPricesDataInner>;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleRelationshipsManualPrices interface.
 */
export function instanceOfInAppPurchasePriceScheduleRelationshipsManualPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesFromJSON(json: any): InAppPurchasePriceScheduleRelationshipsManualPrices {
    return InAppPurchasePriceScheduleRelationshipsManualPricesFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleRelationshipsManualPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerFromJSON)),
    };
}

export function InAppPurchasePriceScheduleRelationshipsManualPricesToJSON(value?: InAppPurchasePriceScheduleRelationshipsManualPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(InAppPurchasePriceScheduleRelationshipsManualPricesDataInnerToJSON)),
    };
}

