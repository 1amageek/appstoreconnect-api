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
import type { BetaGroupRelationshipsBetaTestersDataInner } from './BetaGroupRelationshipsBetaTestersDataInner';
import {
    BetaGroupRelationshipsBetaTestersDataInnerFromJSON,
    BetaGroupRelationshipsBetaTestersDataInnerFromJSONTyped,
    BetaGroupRelationshipsBetaTestersDataInnerToJSON,
} from './BetaGroupRelationshipsBetaTestersDataInner';

/**
 * 
 * @export
 * @interface AppBetaTestersLinkagesRequest
 */
export interface AppBetaTestersLinkagesRequest {
    /**
     * 
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof AppBetaTestersLinkagesRequest
     */
    data: Array<BetaGroupRelationshipsBetaTestersDataInner>;
}

/**
 * Check if a given object implements the AppBetaTestersLinkagesRequest interface.
 */
export function instanceOfAppBetaTestersLinkagesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppBetaTestersLinkagesRequestFromJSON(json: any): AppBetaTestersLinkagesRequest {
    return AppBetaTestersLinkagesRequestFromJSONTyped(json, false);
}

export function AppBetaTestersLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppBetaTestersLinkagesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerFromJSON)),
    };
}

export function AppBetaTestersLinkagesRequestToJSON(value?: AppBetaTestersLinkagesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerToJSON)),
    };
}

