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
import type { SubscriptionRelationshipsPricesDataInner } from './SubscriptionRelationshipsPricesDataInner';
import {
    SubscriptionRelationshipsPricesDataInnerFromJSON,
    SubscriptionRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionRelationshipsPricesDataInnerToJSON,
} from './SubscriptionRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionUpdateRequestDataRelationshipsPrices
 */
export interface SubscriptionUpdateRequestDataRelationshipsPrices {
    /**
     * 
     * @type {Array<SubscriptionRelationshipsPricesDataInner>}
     * @memberof SubscriptionUpdateRequestDataRelationshipsPrices
     */
    data?: Array<SubscriptionRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionUpdateRequestDataRelationshipsPrices interface.
 */
export function instanceOfSubscriptionUpdateRequestDataRelationshipsPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionUpdateRequestDataRelationshipsPricesFromJSON(json: any): SubscriptionUpdateRequestDataRelationshipsPrices {
    return SubscriptionUpdateRequestDataRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestDataRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequestDataRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionUpdateRequestDataRelationshipsPricesToJSON(value?: SubscriptionUpdateRequestDataRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionRelationshipsPricesDataInnerToJSON)),
    };
}

