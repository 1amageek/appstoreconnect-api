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
import type { AppEventLocalization } from './AppEventLocalization';
import {
    AppEventLocalizationFromJSON,
    AppEventLocalizationFromJSONTyped,
    AppEventLocalizationToJSON,
} from './AppEventLocalization';
import type { AppEventVideoClip } from './AppEventVideoClip';
import {
    AppEventVideoClipFromJSON,
    AppEventVideoClipFromJSONTyped,
    AppEventVideoClipToJSON,
} from './AppEventVideoClip';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppEventVideoClipResponse
 */
export interface AppEventVideoClipResponse {
    /**
     * 
     * @type {AppEventVideoClip}
     * @memberof AppEventVideoClipResponse
     */
    data: AppEventVideoClip;
    /**
     * 
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventVideoClipResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEventVideoClipResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEventVideoClipResponse interface.
 */
export function instanceOfAppEventVideoClipResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppEventVideoClipResponseFromJSON(json: any): AppEventVideoClipResponse {
    return AppEventVideoClipResponseFromJSONTyped(json, false);
}

export function AppEventVideoClipResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventVideoClipResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppEventVideoClipFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppEventLocalizationFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEventVideoClipResponseToJSON(value?: AppEventVideoClipResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppEventVideoClipToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppEventLocalizationToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

