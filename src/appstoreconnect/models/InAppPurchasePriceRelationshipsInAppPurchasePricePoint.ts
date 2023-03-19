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
import type { InAppPurchasePriceRelationshipsInAppPurchasePricePointData } from './InAppPurchasePriceRelationshipsInAppPurchasePricePointData';
import {
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON,
} from './InAppPurchasePriceRelationshipsInAppPurchasePricePointData';

/**
 * 
 * @export
 * @interface InAppPurchasePriceRelationshipsInAppPurchasePricePoint
 */
export interface InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof InAppPurchasePriceRelationshipsInAppPurchasePricePoint
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {InAppPurchasePriceRelationshipsInAppPurchasePricePointData}
     * @memberof InAppPurchasePriceRelationshipsInAppPurchasePricePoint
     */
    data?: InAppPurchasePriceRelationshipsInAppPurchasePricePointData;
}

/**
 * Check if a given object implements the InAppPurchasePriceRelationshipsInAppPurchasePricePoint interface.
 */
export function instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePoint(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON(json: any): InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    return InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped(json, false);
}

export function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON(json['data']),
    };
}

export function InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON(value?: InAppPurchasePriceRelationshipsInAppPurchasePricePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON(value.data),
    };
}

