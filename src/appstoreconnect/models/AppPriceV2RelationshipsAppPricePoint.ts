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
import type { AppPriceV2RelationshipsAppPricePointData } from './AppPriceV2RelationshipsAppPricePointData';
import {
    AppPriceV2RelationshipsAppPricePointDataFromJSON,
    AppPriceV2RelationshipsAppPricePointDataFromJSONTyped,
    AppPriceV2RelationshipsAppPricePointDataToJSON,
} from './AppPriceV2RelationshipsAppPricePointData';

/**
 * 
 * @export
 * @interface AppPriceV2RelationshipsAppPricePoint
 */
export interface AppPriceV2RelationshipsAppPricePoint {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppPriceV2RelationshipsAppPricePoint
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppPriceV2RelationshipsAppPricePointData}
     * @memberof AppPriceV2RelationshipsAppPricePoint
     */
    data?: AppPriceV2RelationshipsAppPricePointData;
}

/**
 * Check if a given object implements the AppPriceV2RelationshipsAppPricePoint interface.
 */
export function instanceOfAppPriceV2RelationshipsAppPricePoint(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppPriceV2RelationshipsAppPricePointFromJSON(json: any): AppPriceV2RelationshipsAppPricePoint {
    return AppPriceV2RelationshipsAppPricePointFromJSONTyped(json, false);
}

export function AppPriceV2RelationshipsAppPricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceV2RelationshipsAppPricePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppPriceV2RelationshipsAppPricePointDataFromJSON(json['data']),
    };
}

export function AppPriceV2RelationshipsAppPricePointToJSON(value?: AppPriceV2RelationshipsAppPricePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppPriceV2RelationshipsAppPricePointDataToJSON(value.data),
    };
}

