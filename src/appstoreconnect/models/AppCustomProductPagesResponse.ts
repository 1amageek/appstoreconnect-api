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
import type { AppCustomProductPage } from './AppCustomProductPage';
import {
    AppCustomProductPageFromJSON,
    AppCustomProductPageFromJSONTyped,
    AppCustomProductPageToJSON,
} from './AppCustomProductPage';
import type { AppCustomProductPagesResponseIncludedInner } from './AppCustomProductPagesResponseIncludedInner';
import {
    AppCustomProductPagesResponseIncludedInnerFromJSON,
    AppCustomProductPagesResponseIncludedInnerFromJSONTyped,
    AppCustomProductPagesResponseIncludedInnerToJSON,
} from './AppCustomProductPagesResponseIncludedInner';
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
 * @interface AppCustomProductPagesResponse
 */
export interface AppCustomProductPagesResponse {
    /**
     * 
     * @type {Array<AppCustomProductPage>}
     * @memberof AppCustomProductPagesResponse
     */
    data: Array<AppCustomProductPage>;
    /**
     * 
     * @type {Array<AppCustomProductPagesResponseIncludedInner>}
     * @memberof AppCustomProductPagesResponse
     */
    included?: Array<AppCustomProductPagesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppCustomProductPagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCustomProductPagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppCustomProductPagesResponse interface.
 */
export function instanceOfAppCustomProductPagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCustomProductPagesResponseFromJSON(json: any): AppCustomProductPagesResponse {
    return AppCustomProductPagesResponseFromJSONTyped(json, false);
}

export function AppCustomProductPagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppCustomProductPageFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPagesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppCustomProductPagesResponseToJSON(value?: AppCustomProductPagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppCustomProductPageToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCustomProductPagesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

