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
 * @interface SubscriptionRelationshipsIntroductoryOffersDataInner
 */
export interface SubscriptionRelationshipsIntroductoryOffersDataInner {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsIntroductoryOffersDataInner
     */
    type: SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRelationshipsIntroductoryOffersDataInner
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum = {
    SubscriptionIntroductoryOffers: 'subscriptionIntroductoryOffers'
} as const;
export type SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum = typeof SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum[keyof typeof SubscriptionRelationshipsIntroductoryOffersDataInnerTypeEnum];


/**
 * Check if a given object implements the SubscriptionRelationshipsIntroductoryOffersDataInner interface.
 */
export function instanceOfSubscriptionRelationshipsIntroductoryOffersDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSON(json: any): SubscriptionRelationshipsIntroductoryOffersDataInner {
    return SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSONTyped(json, false);
}

export function SubscriptionRelationshipsIntroductoryOffersDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRelationshipsIntroductoryOffersDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionRelationshipsIntroductoryOffersDataInnerToJSON(value?: SubscriptionRelationshipsIntroductoryOffersDataInner | null): any {
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

