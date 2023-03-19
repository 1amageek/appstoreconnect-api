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
import type { AppAvailabilityRelationshipsAvailableTerritoriesDataInner } from './AppAvailabilityRelationshipsAvailableTerritoriesDataInner';
import {
    AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON,
    AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSONTyped,
    AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON,
} from './AppAvailabilityRelationshipsAvailableTerritoriesDataInner';

/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory
 */
export interface InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAvailableTerritoriesDataInner}
     * @memberof InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory
     */
    data?: AppAvailabilityRelationshipsAvailableTerritoriesDataInner;
}

/**
 * Check if a given object implements the InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory interface.
 */
export function instanceOfInAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSON(json: any): InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory {
    return InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON(json['data']),
    };
}

export function InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritoryToJSON(value?: InAppPurchasePriceScheduleCreateRequestDataRelationshipsBaseTerritory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON(value.data),
    };
}

