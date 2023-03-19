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
    SubscriptionOfferCodeCustomCode,
    instanceOfSubscriptionOfferCodeCustomCode,
    SubscriptionOfferCodeCustomCodeFromJSON,
    SubscriptionOfferCodeCustomCodeFromJSONTyped,
    SubscriptionOfferCodeCustomCodeToJSON,
} from './SubscriptionOfferCodeCustomCode';
import {
    SubscriptionOfferCodeOneTimeUseCode,
    instanceOfSubscriptionOfferCodeOneTimeUseCode,
    SubscriptionOfferCodeOneTimeUseCodeFromJSON,
    SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped,
    SubscriptionOfferCodeOneTimeUseCodeToJSON,
} from './SubscriptionOfferCodeOneTimeUseCode';
import {
    SubscriptionOfferCodePrice,
    instanceOfSubscriptionOfferCodePrice,
    SubscriptionOfferCodePriceFromJSON,
    SubscriptionOfferCodePriceFromJSONTyped,
    SubscriptionOfferCodePriceToJSON,
} from './SubscriptionOfferCodePrice';

/**
 * @type SubscriptionOfferCodesResponseIncludedInner
 * 
 * @export
 */
export type SubscriptionOfferCodesResponseIncludedInner = Subscription | SubscriptionOfferCodeCustomCode | SubscriptionOfferCodeOneTimeUseCode | SubscriptionOfferCodePrice;

export function SubscriptionOfferCodesResponseIncludedInnerFromJSON(json: any): SubscriptionOfferCodesResponseIncludedInner {
    return SubscriptionOfferCodesResponseIncludedInnerFromJSONTyped(json, false);
}

export function SubscriptionOfferCodesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodesResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return { ...SubscriptionFromJSONTyped(json, true), ...SubscriptionOfferCodeCustomCodeFromJSONTyped(json, true), ...SubscriptionOfferCodeOneTimeUseCodeFromJSONTyped(json, true), ...SubscriptionOfferCodePriceFromJSONTyped(json, true) };
}

export function SubscriptionOfferCodesResponseIncludedInnerToJSON(value?: SubscriptionOfferCodesResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfSubscription(value)) {
        return SubscriptionToJSON(value as Subscription);
    }
    if (instanceOfSubscriptionOfferCodeCustomCode(value)) {
        return SubscriptionOfferCodeCustomCodeToJSON(value as SubscriptionOfferCodeCustomCode);
    }
    if (instanceOfSubscriptionOfferCodeOneTimeUseCode(value)) {
        return SubscriptionOfferCodeOneTimeUseCodeToJSON(value as SubscriptionOfferCodeOneTimeUseCode);
    }
    if (instanceOfSubscriptionOfferCodePrice(value)) {
        return SubscriptionOfferCodePriceToJSON(value as SubscriptionOfferCodePrice);
    }

    return {};
}

