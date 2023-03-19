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
import type { AppCategoriesResponseIncludedInner } from './AppCategoriesResponseIncludedInner';
import {
    AppCategoriesResponseIncludedInnerFromJSON,
    AppCategoriesResponseIncludedInnerFromJSONTyped,
    AppCategoriesResponseIncludedInnerToJSON,
} from './AppCategoriesResponseIncludedInner';
import type { AppCategory } from './AppCategory';
import {
    AppCategoryFromJSON,
    AppCategoryFromJSONTyped,
    AppCategoryToJSON,
} from './AppCategory';
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
 * @interface AppCategoriesResponse
 */
export interface AppCategoriesResponse {
    /**
     * 
     * @type {Array<AppCategory>}
     * @memberof AppCategoriesResponse
     */
    data: Array<AppCategory>;
    /**
     * 
     * @type {Array<AppCategoriesResponseIncludedInner>}
     * @memberof AppCategoriesResponse
     */
    included?: Array<AppCategoriesResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof AppCategoriesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCategoriesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the AppCategoriesResponse interface.
 */
export function instanceOfAppCategoriesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppCategoriesResponseFromJSON(json: any): AppCategoriesResponse {
    return AppCategoriesResponseFromJSONTyped(json, false);
}

export function AppCategoriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoriesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppCategoryFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppCategoriesResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function AppCategoriesResponseToJSON(value?: AppCategoriesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(AppCategoryToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppCategoriesResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

