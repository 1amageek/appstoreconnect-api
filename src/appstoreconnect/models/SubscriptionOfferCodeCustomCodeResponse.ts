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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import {
    SubscriptionOfferCodeFromJSON,
    SubscriptionOfferCodeFromJSONTyped,
    SubscriptionOfferCodeToJSON,
} from './SubscriptionOfferCode';
import type { SubscriptionOfferCodeCustomCode } from './SubscriptionOfferCodeCustomCode';
import {
    SubscriptionOfferCodeCustomCodeFromJSON,
    SubscriptionOfferCodeCustomCodeFromJSONTyped,
    SubscriptionOfferCodeCustomCodeToJSON,
} from './SubscriptionOfferCodeCustomCode';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodeResponse
 */
export interface SubscriptionOfferCodeCustomCodeResponse {
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCode}
     * @memberof SubscriptionOfferCodeCustomCodeResponse
     */
    data: SubscriptionOfferCodeCustomCode;
    /**
     * 
     * @type {Array<SubscriptionOfferCode>}
     * @memberof SubscriptionOfferCodeCustomCodeResponse
     */
    included?: Array<SubscriptionOfferCode>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof SubscriptionOfferCodeCustomCodeResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeResponse interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodeResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodeResponseFromJSON(json: any): SubscriptionOfferCodeCustomCodeResponse {
    return SubscriptionOfferCodeCustomCodeResponseFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionOfferCodeCustomCodeFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(SubscriptionOfferCodeFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function SubscriptionOfferCodeCustomCodeResponseToJSON(value?: SubscriptionOfferCodeCustomCodeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionOfferCodeCustomCodeToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(SubscriptionOfferCodeToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

