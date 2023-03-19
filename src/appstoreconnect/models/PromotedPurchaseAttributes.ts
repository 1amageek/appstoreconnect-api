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
 * @interface PromotedPurchaseAttributes
 */
export interface PromotedPurchaseAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseAttributes
     */
    visibleForAllUsers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseAttributes
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseAttributes
     */
    state?: PromotedPurchaseAttributesStateEnum;
}


/**
 * @export
 */
export const PromotedPurchaseAttributesStateEnum = {
    Approved: 'APPROVED',
    InReview: 'IN_REVIEW',
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    Rejected: 'REJECTED'
} as const;
export type PromotedPurchaseAttributesStateEnum = typeof PromotedPurchaseAttributesStateEnum[keyof typeof PromotedPurchaseAttributesStateEnum];


/**
 * Check if a given object implements the PromotedPurchaseAttributes interface.
 */
export function instanceOfPromotedPurchaseAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotedPurchaseAttributesFromJSON(json: any): PromotedPurchaseAttributes {
    return PromotedPurchaseAttributesFromJSONTyped(json, false);
}

export function PromotedPurchaseAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'visibleForAllUsers': !exists(json, 'visibleForAllUsers') ? undefined : json['visibleForAllUsers'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function PromotedPurchaseAttributesToJSON(value?: PromotedPurchaseAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'visibleForAllUsers': value.visibleForAllUsers,
        'enabled': value.enabled,
        'state': value.state,
    };
}

