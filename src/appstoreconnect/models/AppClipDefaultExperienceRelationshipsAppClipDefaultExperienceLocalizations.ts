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
import type { AppAvailabilityRelationshipsAppLinks } from './AppAvailabilityRelationshipsAppLinks';
import {
    AppAvailabilityRelationshipsAppLinksFromJSON,
    AppAvailabilityRelationshipsAppLinksFromJSONTyped,
    AppAvailabilityRelationshipsAppLinksToJSON,
} from './AppAvailabilityRelationshipsAppLinks';
import type { AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner } from './AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner';
import {
    AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSON,
    AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSONTyped,
    AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerToJSON,
} from './AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations
 */
export interface AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner>}
     * @memberof AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations
     */
    data?: Array<AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInner>;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations interface.
 */
export function instanceOfAppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsFromJSON(json: any): AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations {
    return AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerFromJSON)),
    };
}

export function AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsToJSON(value?: AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppClipDefaultExperienceRelationshipsAppClipDefaultExperienceLocalizationsDataInnerToJSON)),
    };
}
