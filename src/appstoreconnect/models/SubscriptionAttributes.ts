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
/**
 * 
 * @export
 * @interface SubscriptionAttributes
 */
export interface SubscriptionAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAttributes
     */
    productId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionAttributes
     */
    familySharable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAttributes
     */
    state?: SubscriptionAttributesStateEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAttributes
     */
    subscriptionPeriod?: SubscriptionAttributesSubscriptionPeriodEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAttributes
     */
    reviewNote?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAttributes
     */
    groupLevel?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionAttributes
     */
    availableInAllTerritories?: boolean;
}


/**
 * @export
 */
export const SubscriptionAttributesStateEnum = {
    MissingMetadata: 'MISSING_METADATA',
    ReadyToSubmit: 'READY_TO_SUBMIT',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    InReview: 'IN_REVIEW',
    DeveloperActionNeeded: 'DEVELOPER_ACTION_NEEDED',
    PendingBinaryApproval: 'PENDING_BINARY_APPROVAL',
    Approved: 'APPROVED',
    DeveloperRemovedFromSale: 'DEVELOPER_REMOVED_FROM_SALE',
    RemovedFromSale: 'REMOVED_FROM_SALE',
    Rejected: 'REJECTED'
} as const;
export type SubscriptionAttributesStateEnum = typeof SubscriptionAttributesStateEnum[keyof typeof SubscriptionAttributesStateEnum];

/**
 * @export
 */
export const SubscriptionAttributesSubscriptionPeriodEnum = {
    OneWeek: 'ONE_WEEK',
    OneMonth: 'ONE_MONTH',
    TwoMonths: 'TWO_MONTHS',
    ThreeMonths: 'THREE_MONTHS',
    SixMonths: 'SIX_MONTHS',
    OneYear: 'ONE_YEAR'
} as const;
export type SubscriptionAttributesSubscriptionPeriodEnum = typeof SubscriptionAttributesSubscriptionPeriodEnum[keyof typeof SubscriptionAttributesSubscriptionPeriodEnum];


/**
 * Check if a given object implements the SubscriptionAttributes interface.
 */
export function instanceOfSubscriptionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionAttributesFromJSON(json: any): SubscriptionAttributes {
    return SubscriptionAttributesFromJSONTyped(json, false);
}

export function SubscriptionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'productId': !exists(json, 'productId') ? undefined : json['productId'],
        'familySharable': !exists(json, 'familySharable') ? undefined : json['familySharable'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'subscriptionPeriod': !exists(json, 'subscriptionPeriod') ? undefined : json['subscriptionPeriod'],
        'reviewNote': !exists(json, 'reviewNote') ? undefined : json['reviewNote'],
        'groupLevel': !exists(json, 'groupLevel') ? undefined : json['groupLevel'],
        'availableInAllTerritories': !exists(json, 'availableInAllTerritories') ? undefined : json['availableInAllTerritories'],
    };
}

export function SubscriptionAttributesToJSON(value?: SubscriptionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'productId': value.productId,
        'familySharable': value.familySharable,
        'state': value.state,
        'subscriptionPeriod': value.subscriptionPeriod,
        'reviewNote': value.reviewNote,
        'groupLevel': value.groupLevel,
        'availableInAllTerritories': value.availableInAllTerritories,
    };
}

