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

import {
    Subscription,
    instanceOfSubscription,
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';
import {
    Territory,
    instanceOfTerritory,
    TerritoryFromJSON,
    TerritoryFromJSONTyped,
    TerritoryToJSON,
} from './Territory';

/**
 * @type SubscriptionAvailabilityResponseIncludedInner
 * 
 * @export
 */
export type SubscriptionAvailabilityResponseIncludedInner = Subscription | Territory;

export function SubscriptionAvailabilityResponseIncludedInnerFromJSON(json: any): SubscriptionAvailabilityResponseIncludedInner {
    return SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped(json, false);
}

export function SubscriptionAvailabilityResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAvailabilityResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return { ...SubscriptionFromJSONTyped(json, true), ...TerritoryFromJSONTyped(json, true) };
}

export function SubscriptionAvailabilityResponseIncludedInnerToJSON(value?: SubscriptionAvailabilityResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfSubscription(value)) {
        return SubscriptionToJSON(value as Subscription);
    }
    if (instanceOfTerritory(value)) {
        return TerritoryToJSON(value as Territory);
    }

    return {};
}
