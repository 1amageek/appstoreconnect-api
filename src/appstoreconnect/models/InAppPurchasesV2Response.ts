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
import type { InAppPurchaseV2 } from './InAppPurchaseV2';
import {
    InAppPurchaseV2FromJSON,
    InAppPurchaseV2FromJSONTyped,
    InAppPurchaseV2ToJSON,
} from './InAppPurchaseV2';
import type { InAppPurchasesV2ResponseIncludedInner } from './InAppPurchasesV2ResponseIncludedInner';
import {
    InAppPurchasesV2ResponseIncludedInnerFromJSON,
    InAppPurchasesV2ResponseIncludedInnerFromJSONTyped,
    InAppPurchasesV2ResponseIncludedInnerToJSON,
} from './InAppPurchasesV2ResponseIncludedInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface InAppPurchasesV2Response
 */
export interface InAppPurchasesV2Response {
    /**
     * 
     * @type {Array<InAppPurchaseV2>}
     * @memberof InAppPurchasesV2Response
     */
    data: Array<InAppPurchaseV2>;
    /**
     * 
     * @type {Array<InAppPurchasesV2ResponseIncludedInner>}
     * @memberof InAppPurchasesV2Response
     */
    included?: Array<InAppPurchasesV2ResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof InAppPurchasesV2Response
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchasesV2Response
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the InAppPurchasesV2Response interface.
 */
export function instanceOfInAppPurchasesV2Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function InAppPurchasesV2ResponseFromJSON(json: any): InAppPurchasesV2Response {
    return InAppPurchasesV2ResponseFromJSONTyped(json, false);
}

export function InAppPurchasesV2ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasesV2Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(InAppPurchaseV2FromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(InAppPurchasesV2ResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function InAppPurchasesV2ResponseToJSON(value?: InAppPurchasesV2Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(InAppPurchaseV2ToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(InAppPurchasesV2ResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}
