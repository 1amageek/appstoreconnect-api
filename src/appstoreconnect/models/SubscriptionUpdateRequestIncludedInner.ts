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
    SubscriptionIntroductoryOfferInlineCreate,
    instanceOfSubscriptionIntroductoryOfferInlineCreate,
    SubscriptionIntroductoryOfferInlineCreateFromJSON,
    SubscriptionIntroductoryOfferInlineCreateFromJSONTyped,
    SubscriptionIntroductoryOfferInlineCreateToJSON,
} from './SubscriptionIntroductoryOfferInlineCreate';
import {
    SubscriptionPriceInlineCreate,
    instanceOfSubscriptionPriceInlineCreate,
    SubscriptionPriceInlineCreateFromJSON,
    SubscriptionPriceInlineCreateFromJSONTyped,
    SubscriptionPriceInlineCreateToJSON,
} from './SubscriptionPriceInlineCreate';
import {
    SubscriptionPromotionalOfferInlineCreate,
    instanceOfSubscriptionPromotionalOfferInlineCreate,
    SubscriptionPromotionalOfferInlineCreateFromJSON,
    SubscriptionPromotionalOfferInlineCreateFromJSONTyped,
    SubscriptionPromotionalOfferInlineCreateToJSON,
} from './SubscriptionPromotionalOfferInlineCreate';

/**
 * @type SubscriptionUpdateRequestIncludedInner
 * 
 * @export
 */
export type SubscriptionUpdateRequestIncludedInner = SubscriptionIntroductoryOfferInlineCreate | SubscriptionPriceInlineCreate | SubscriptionPromotionalOfferInlineCreate;

export function SubscriptionUpdateRequestIncludedInnerFromJSON(json: any): SubscriptionUpdateRequestIncludedInner {
    return SubscriptionUpdateRequestIncludedInnerFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequestIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...SubscriptionIntroductoryOfferInlineCreateFromJSONTyped(json, true), ...SubscriptionPriceInlineCreateFromJSONTyped(json, true), ...SubscriptionPromotionalOfferInlineCreateFromJSONTyped(json, true) };
}

export function SubscriptionUpdateRequestIncludedInnerToJSON(value?: SubscriptionUpdateRequestIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfSubscriptionIntroductoryOfferInlineCreate(value)) {
        return SubscriptionIntroductoryOfferInlineCreateToJSON(value as SubscriptionIntroductoryOfferInlineCreate);
    }
    if (instanceOfSubscriptionPriceInlineCreate(value)) {
        return SubscriptionPriceInlineCreateToJSON(value as SubscriptionPriceInlineCreate);
    }
    if (instanceOfSubscriptionPromotionalOfferInlineCreate(value)) {
        return SubscriptionPromotionalOfferInlineCreateToJSON(value as SubscriptionPromotionalOfferInlineCreate);
    }

    return {};
}

