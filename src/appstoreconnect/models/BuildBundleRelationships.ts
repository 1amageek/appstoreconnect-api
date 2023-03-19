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
import type { BuildBundleRelationshipsAppClipDomainCacheStatus } from './BuildBundleRelationshipsAppClipDomainCacheStatus';
import {
    BuildBundleRelationshipsAppClipDomainCacheStatusFromJSON,
    BuildBundleRelationshipsAppClipDomainCacheStatusFromJSONTyped,
    BuildBundleRelationshipsAppClipDomainCacheStatusToJSON,
} from './BuildBundleRelationshipsAppClipDomainCacheStatus';
import type { BuildBundleRelationshipsBetaAppClipInvocations } from './BuildBundleRelationshipsBetaAppClipInvocations';
import {
    BuildBundleRelationshipsBetaAppClipInvocationsFromJSON,
    BuildBundleRelationshipsBetaAppClipInvocationsFromJSONTyped,
    BuildBundleRelationshipsBetaAppClipInvocationsToJSON,
} from './BuildBundleRelationshipsBetaAppClipInvocations';
import type { BuildBundleRelationshipsBuildBundleFileSizes } from './BuildBundleRelationshipsBuildBundleFileSizes';
import {
    BuildBundleRelationshipsBuildBundleFileSizesFromJSON,
    BuildBundleRelationshipsBuildBundleFileSizesFromJSONTyped,
    BuildBundleRelationshipsBuildBundleFileSizesToJSON,
} from './BuildBundleRelationshipsBuildBundleFileSizes';

/**
 * 
 * @export
 * @interface BuildBundleRelationships
 */
export interface BuildBundleRelationships {
    /**
     * 
     * @type {BuildBundleRelationshipsAppClipDomainCacheStatus}
     * @memberof BuildBundleRelationships
     */
    appClipDomainCacheStatus?: BuildBundleRelationshipsAppClipDomainCacheStatus;
    /**
     * 
     * @type {BuildBundleRelationshipsAppClipDomainCacheStatus}
     * @memberof BuildBundleRelationships
     */
    appClipDomainDebugStatus?: BuildBundleRelationshipsAppClipDomainCacheStatus;
    /**
     * 
     * @type {BuildBundleRelationshipsBetaAppClipInvocations}
     * @memberof BuildBundleRelationships
     */
    betaAppClipInvocations?: BuildBundleRelationshipsBetaAppClipInvocations;
    /**
     * 
     * @type {BuildBundleRelationshipsBuildBundleFileSizes}
     * @memberof BuildBundleRelationships
     */
    buildBundleFileSizes?: BuildBundleRelationshipsBuildBundleFileSizes;
}

/**
 * Check if a given object implements the BuildBundleRelationships interface.
 */
export function instanceOfBuildBundleRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildBundleRelationshipsFromJSON(json: any): BuildBundleRelationships {
    return BuildBundleRelationshipsFromJSONTyped(json, false);
}

export function BuildBundleRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appClipDomainCacheStatus': !exists(json, 'appClipDomainCacheStatus') ? undefined : BuildBundleRelationshipsAppClipDomainCacheStatusFromJSON(json['appClipDomainCacheStatus']),
        'appClipDomainDebugStatus': !exists(json, 'appClipDomainDebugStatus') ? undefined : BuildBundleRelationshipsAppClipDomainCacheStatusFromJSON(json['appClipDomainDebugStatus']),
        'betaAppClipInvocations': !exists(json, 'betaAppClipInvocations') ? undefined : BuildBundleRelationshipsBetaAppClipInvocationsFromJSON(json['betaAppClipInvocations']),
        'buildBundleFileSizes': !exists(json, 'buildBundleFileSizes') ? undefined : BuildBundleRelationshipsBuildBundleFileSizesFromJSON(json['buildBundleFileSizes']),
    };
}

export function BuildBundleRelationshipsToJSON(value?: BuildBundleRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appClipDomainCacheStatus': BuildBundleRelationshipsAppClipDomainCacheStatusToJSON(value.appClipDomainCacheStatus),
        'appClipDomainDebugStatus': BuildBundleRelationshipsAppClipDomainCacheStatusToJSON(value.appClipDomainDebugStatus),
        'betaAppClipInvocations': BuildBundleRelationshipsBetaAppClipInvocationsToJSON(value.betaAppClipInvocations),
        'buildBundleFileSizes': BuildBundleRelationshipsBuildBundleFileSizesToJSON(value.buildBundleFileSizes),
    };
}
