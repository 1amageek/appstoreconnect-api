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
 * @interface SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
 */
export interface SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
     */
    type: SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum = {
    SubscriptionGroupLocalizations: 'subscriptionGroupLocalizations'
} as const;
export type SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum = typeof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum[keyof typeof SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner interface.
 */
export function instanceOfSubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSON(json: any): SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    return SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSONTyped(json, false);
}

export function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInnerToJSON(value?: SubscriptionGroupRelationshipsSubscriptionGroupLocalizationsDataInner | null): any {
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
