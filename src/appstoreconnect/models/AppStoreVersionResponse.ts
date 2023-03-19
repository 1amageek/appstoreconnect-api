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
import type { AppStoreVersion } from './AppStoreVersion';
import {
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';
import type { AppStoreVersionsResponseIncludedInner } from './AppStoreVersionsResponseIncludedInner';
import {
    AppStoreVersionsResponseIncludedInnerFromJSON,
    AppStoreVersionsResponseIncludedInnerFromJSONTyped,
    AppStoreVersionsResponseIncludedInnerToJSON,
} from './AppStoreVersionsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionResponse
 */
export interface AppStoreVersionResponse {
    /**
     * 
     * @type {AppStoreVersion}
     * @memberof AppStoreVersionResponse
     */
    data: AppStoreVersion;
    /**
     * 
     * @type {Array<AppStoreVersionsResponseIncludedInner>}
     * @memberof AppStoreVersionResponse
     */
    included?: Array<AppStoreVersionsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionResponse interface.
 */
export function instanceOfAppStoreVersionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionResponseFromJSON(json: any): AppStoreVersionResponse {
    return AppStoreVersionResponseFromJSONTyped(json, false);
}

export function AppStoreVersionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionResponseToJSON(value?: AppStoreVersionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppStoreVersionsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}
