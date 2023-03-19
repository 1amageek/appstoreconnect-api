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
 * @interface PromotedPurchaseRelationshipsSubscriptionData
 */
export interface PromotedPurchaseRelationshipsSubscriptionData {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseRelationshipsSubscriptionData
     */
    type: PromotedPurchaseRelationshipsSubscriptionDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseRelationshipsSubscriptionData
     */
    id: string;
}


/**
 * @export
 */
export const PromotedPurchaseRelationshipsSubscriptionDataTypeEnum = {
    Subscriptions: 'subscriptions'
} as const;
export type PromotedPurchaseRelationshipsSubscriptionDataTypeEnum = typeof PromotedPurchaseRelationshipsSubscriptionDataTypeEnum[keyof typeof PromotedPurchaseRelationshipsSubscriptionDataTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseRelationshipsSubscriptionData interface.
 */
export function instanceOfPromotedPurchaseRelationshipsSubscriptionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PromotedPurchaseRelationshipsSubscriptionDataFromJSON(json: any): PromotedPurchaseRelationshipsSubscriptionData {
    return PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsSubscriptionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseRelationshipsSubscriptionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function PromotedPurchaseRelationshipsSubscriptionDataToJSON(value?: PromotedPurchaseRelationshipsSubscriptionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}
