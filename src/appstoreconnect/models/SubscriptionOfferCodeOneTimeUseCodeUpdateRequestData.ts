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
import type { SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes } from './SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes';
import {
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSON,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSONTyped,
    SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesToJSON,
} from './SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData
 */
export interface SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData
     */
    type: SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData
     */
    attributes?: SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataTypeEnum = {
    SubscriptionOfferCodeOneTimeUseCodes: 'subscriptionOfferCodeOneTimeUseCodes'
} as const;
export type SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataTypeEnum = typeof SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataTypeEnum[keyof typeof SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData interface.
 */
export function instanceOfSubscriptionOfferCodeOneTimeUseCodeUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData {
    return SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function SubscriptionOfferCodeOneTimeUseCodeUpdateRequestDataToJSON(value?: SubscriptionOfferCodeOneTimeUseCodeUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionOfferCodeCustomCodeUpdateRequestDataAttributesToJSON(value.attributes),
    };
}

