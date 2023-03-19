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
import type { AppRelationshipsInAppPurchasesV2DataInner } from './AppRelationshipsInAppPurchasesV2DataInner';
import {
    AppRelationshipsInAppPurchasesV2DataInnerFromJSON,
    AppRelationshipsInAppPurchasesV2DataInnerFromJSONTyped,
    AppRelationshipsInAppPurchasesV2DataInnerToJSON,
} from './AppRelationshipsInAppPurchasesV2DataInner';

/**
 * 
 * @export
 * @interface InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2
 */
export interface InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2 {
    /**
     * 
     * @type {AppRelationshipsInAppPurchasesV2DataInner}
     * @memberof InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2
     */
    data?: AppRelationshipsInAppPurchasesV2DataInner;
}

/**
 * Check if a given object implements the InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2 interface.
 */
export function instanceOfInAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2FromJSON(json: any): InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2 {
    return InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2FromJSONTyped(json, false);
}

export function InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppRelationshipsInAppPurchasesV2DataInnerFromJSON(json['data']),
    };
}

export function InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2ToJSON(value?: InAppPurchasePriceInlineCreateRelationshipsInAppPurchaseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppRelationshipsInAppPurchasesV2DataInnerToJSON(value.data),
    };
}
