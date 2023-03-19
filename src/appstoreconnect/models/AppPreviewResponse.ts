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
import type { AppPreview } from './AppPreview';
import {
    AppPreviewFromJSON,
    AppPreviewFromJSONTyped,
    AppPreviewToJSON,
} from './AppPreview';
import type { AppPreviewSet } from './AppPreviewSet';
import {
    AppPreviewSetFromJSON,
    AppPreviewSetFromJSONTyped,
    AppPreviewSetToJSON,
} from './AppPreviewSet';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppPreviewResponse
 */
export interface AppPreviewResponse {
    /**
     * 
     * @type {AppPreview}
     * @memberof AppPreviewResponse
     */
    data: AppPreview;
    /**
     * 
     * @type {Array<AppPreviewSet>}
     * @memberof AppPreviewResponse
     */
    included?: Array<AppPreviewSet>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPreviewResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPreviewResponse interface.
 */
export function instanceOfAppPreviewResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppPreviewResponseFromJSON(json: any): AppPreviewResponse {
    return AppPreviewResponseFromJSONTyped(json, false);
}

export function AppPreviewResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppPreviewFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppPreviewSetFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPreviewResponseToJSON(value?: AppPreviewResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppPreviewToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppPreviewSetToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

