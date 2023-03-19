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
import type { BundleIdRelationshipsBundleIdCapabilitiesDataInner } from './BundleIdRelationshipsBundleIdCapabilitiesDataInner';
import {
    BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSON,
    BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSONTyped,
    BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSON,
} from './BundleIdRelationshipsBundleIdCapabilitiesDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface BundleIdRelationshipsBundleIdCapabilities
 */
export interface BundleIdRelationshipsBundleIdCapabilities {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    data?: Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>;
}

/**
 * Check if a given object implements the BundleIdRelationshipsBundleIdCapabilities interface.
 */
export function instanceOfBundleIdRelationshipsBundleIdCapabilities(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BundleIdRelationshipsBundleIdCapabilitiesFromJSON(json: any): BundleIdRelationshipsBundleIdCapabilities {
    return BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped(json, false);
}

export function BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsBundleIdCapabilities {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSON)),
    };
}

export function BundleIdRelationshipsBundleIdCapabilitiesToJSON(value?: BundleIdRelationshipsBundleIdCapabilities | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSON)),
    };
}

