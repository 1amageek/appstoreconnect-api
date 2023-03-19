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
import type { AppScreenshotSet } from './AppScreenshotSet';
import {
    AppScreenshotSetFromJSON,
    AppScreenshotSetFromJSONTyped,
    AppScreenshotSetToJSON,
} from './AppScreenshotSet';
import type { AppScreenshotSetsResponseIncludedInner } from './AppScreenshotSetsResponseIncludedInner';
import {
    AppScreenshotSetsResponseIncludedInnerFromJSON,
    AppScreenshotSetsResponseIncludedInnerFromJSONTyped,
    AppScreenshotSetsResponseIncludedInnerToJSON,
} from './AppScreenshotSetsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppScreenshotSetResponse
 */
export interface AppScreenshotSetResponse {
    /**
     * 
     * @type {AppScreenshotSet}
     * @memberof AppScreenshotSetResponse
     */
    data: AppScreenshotSet;
    /**
     * 
     * @type {Array<AppScreenshotSetsResponseIncludedInner>}
     * @memberof AppScreenshotSetResponse
     */
    included?: Array<AppScreenshotSetsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppScreenshotSetResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppScreenshotSetResponse interface.
 */
export function instanceOfAppScreenshotSetResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppScreenshotSetResponseFromJSON(json: any): AppScreenshotSetResponse {
    return AppScreenshotSetResponseFromJSONTyped(json, false);
}

export function AppScreenshotSetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppScreenshotSetFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppScreenshotSetsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppScreenshotSetResponseToJSON(value?: AppScreenshotSetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppScreenshotSetToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppScreenshotSetsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

