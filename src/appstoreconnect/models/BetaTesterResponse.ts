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
import type { BetaTester } from './BetaTester';
import {
    BetaTesterFromJSON,
    BetaTesterFromJSONTyped,
    BetaTesterToJSON,
} from './BetaTester';
import type { BetaTestersResponseIncludedInner } from './BetaTestersResponseIncludedInner';
import {
    BetaTestersResponseIncludedInnerFromJSON,
    BetaTestersResponseIncludedInnerFromJSONTyped,
    BetaTestersResponseIncludedInnerToJSON,
} from './BetaTestersResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BetaTesterResponse
 */
export interface BetaTesterResponse {
    /**
     * 
     * @type {BetaTester}
     * @memberof BetaTesterResponse
     */
    data: BetaTester;
    /**
     * 
     * @type {Array<BetaTestersResponseIncludedInner>}
     * @memberof BetaTesterResponse
     */
    included?: Array<BetaTestersResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaTesterResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaTesterResponse interface.
 */
export function instanceOfBetaTesterResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function BetaTesterResponseFromJSON(json: any): BetaTesterResponse {
    return BetaTesterResponseFromJSONTyped(json, false);
}

export function BetaTesterResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': BetaTesterFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(BetaTestersResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaTesterResponseToJSON(value?: BetaTesterResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': BetaTesterToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(BetaTestersResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}
