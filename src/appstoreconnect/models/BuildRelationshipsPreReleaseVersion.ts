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
import type { AppRelationshipsPreReleaseVersionsDataInner } from './AppRelationshipsPreReleaseVersionsDataInner';
import {
    AppRelationshipsPreReleaseVersionsDataInnerFromJSON,
    AppRelationshipsPreReleaseVersionsDataInnerFromJSONTyped,
    AppRelationshipsPreReleaseVersionsDataInnerToJSON,
} from './AppRelationshipsPreReleaseVersionsDataInner';

/**
 * 
 * @export
 * @interface BuildRelationshipsPreReleaseVersion
 */
export interface BuildRelationshipsPreReleaseVersion {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof BuildRelationshipsPreReleaseVersion
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppRelationshipsPreReleaseVersionsDataInner}
     * @memberof BuildRelationshipsPreReleaseVersion
     */
    data?: AppRelationshipsPreReleaseVersionsDataInner;
}

/**
 * Check if a given object implements the BuildRelationshipsPreReleaseVersion interface.
 */
export function instanceOfBuildRelationshipsPreReleaseVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildRelationshipsPreReleaseVersionFromJSON(json: any): BuildRelationshipsPreReleaseVersion {
    return BuildRelationshipsPreReleaseVersionFromJSONTyped(json, false);
}

export function BuildRelationshipsPreReleaseVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsPreReleaseVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppRelationshipsPreReleaseVersionsDataInnerFromJSON(json['data']),
    };
}

export function BuildRelationshipsPreReleaseVersionToJSON(value?: BuildRelationshipsPreReleaseVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppRelationshipsPreReleaseVersionsDataInnerToJSON(value.data),
    };
}
