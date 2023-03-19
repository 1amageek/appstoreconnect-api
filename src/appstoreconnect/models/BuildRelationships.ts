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
import type { AppAvailabilityRelationshipsApp } from './AppAvailabilityRelationshipsApp';
import {
    AppAvailabilityRelationshipsAppFromJSON,
    AppAvailabilityRelationshipsAppFromJSONTyped,
    AppAvailabilityRelationshipsAppToJSON,
} from './AppAvailabilityRelationshipsApp';
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON,
} from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import type { AppRelationshipsBetaGroups } from './AppRelationshipsBetaGroups';
import {
    AppRelationshipsBetaGroupsFromJSON,
    AppRelationshipsBetaGroupsFromJSONTyped,
    AppRelationshipsBetaGroupsToJSON,
} from './AppRelationshipsBetaGroups';
import type { BetaGroupRelationshipsBetaTesters } from './BetaGroupRelationshipsBetaTesters';
import {
    BetaGroupRelationshipsBetaTestersFromJSON,
    BetaGroupRelationshipsBetaTestersFromJSONTyped,
    BetaGroupRelationshipsBetaTestersToJSON,
} from './BetaGroupRelationshipsBetaTesters';
import type { BuildRelationshipsAppEncryptionDeclaration } from './BuildRelationshipsAppEncryptionDeclaration';
import {
    BuildRelationshipsAppEncryptionDeclarationFromJSON,
    BuildRelationshipsAppEncryptionDeclarationFromJSONTyped,
    BuildRelationshipsAppEncryptionDeclarationToJSON,
} from './BuildRelationshipsAppEncryptionDeclaration';
import type { BuildRelationshipsBetaAppReviewSubmission } from './BuildRelationshipsBetaAppReviewSubmission';
import {
    BuildRelationshipsBetaAppReviewSubmissionFromJSON,
    BuildRelationshipsBetaAppReviewSubmissionFromJSONTyped,
    BuildRelationshipsBetaAppReviewSubmissionToJSON,
} from './BuildRelationshipsBetaAppReviewSubmission';
import type { BuildRelationshipsBetaBuildLocalizations } from './BuildRelationshipsBetaBuildLocalizations';
import {
    BuildRelationshipsBetaBuildLocalizationsFromJSON,
    BuildRelationshipsBetaBuildLocalizationsFromJSONTyped,
    BuildRelationshipsBetaBuildLocalizationsToJSON,
} from './BuildRelationshipsBetaBuildLocalizations';
import type { BuildRelationshipsBuildBetaDetail } from './BuildRelationshipsBuildBetaDetail';
import {
    BuildRelationshipsBuildBetaDetailFromJSON,
    BuildRelationshipsBuildBetaDetailFromJSONTyped,
    BuildRelationshipsBuildBetaDetailToJSON,
} from './BuildRelationshipsBuildBetaDetail';
import type { BuildRelationshipsBuildBundles } from './BuildRelationshipsBuildBundles';
import {
    BuildRelationshipsBuildBundlesFromJSON,
    BuildRelationshipsBuildBundlesFromJSONTyped,
    BuildRelationshipsBuildBundlesToJSON,
} from './BuildRelationshipsBuildBundles';
import type { BuildRelationshipsIcons } from './BuildRelationshipsIcons';
import {
    BuildRelationshipsIconsFromJSON,
    BuildRelationshipsIconsFromJSONTyped,
    BuildRelationshipsIconsToJSON,
} from './BuildRelationshipsIcons';
import type { BuildRelationshipsPreReleaseVersion } from './BuildRelationshipsPreReleaseVersion';
import {
    BuildRelationshipsPreReleaseVersionFromJSON,
    BuildRelationshipsPreReleaseVersionFromJSONTyped,
    BuildRelationshipsPreReleaseVersionToJSON,
} from './BuildRelationshipsPreReleaseVersion';

/**
 * 
 * @export
 * @interface BuildRelationships
 */
export interface BuildRelationships {
    /**
     * 
     * @type {BuildRelationshipsPreReleaseVersion}
     * @memberof BuildRelationships
     */
    preReleaseVersion?: BuildRelationshipsPreReleaseVersion;
    /**
     * 
     * @type {BetaGroupRelationshipsBetaTesters}
     * @memberof BuildRelationships
     */
    individualTesters?: BetaGroupRelationshipsBetaTesters;
    /**
     * 
     * @type {AppRelationshipsBetaGroups}
     * @memberof BuildRelationships
     */
    betaGroups?: AppRelationshipsBetaGroups;
    /**
     * 
     * @type {BuildRelationshipsBetaBuildLocalizations}
     * @memberof BuildRelationships
     */
    betaBuildLocalizations?: BuildRelationshipsBetaBuildLocalizations;
    /**
     * 
     * @type {BuildRelationshipsAppEncryptionDeclaration}
     * @memberof BuildRelationships
     */
    appEncryptionDeclaration?: BuildRelationshipsAppEncryptionDeclaration;
    /**
     * 
     * @type {BuildRelationshipsBetaAppReviewSubmission}
     * @memberof BuildRelationships
     */
    betaAppReviewSubmission?: BuildRelationshipsBetaAppReviewSubmission;
    /**
     * 
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof BuildRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
    /**
     * 
     * @type {BuildRelationshipsBuildBetaDetail}
     * @memberof BuildRelationships
     */
    buildBetaDetail?: BuildRelationshipsBuildBetaDetail;
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion}
     * @memberof BuildRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {BuildRelationshipsIcons}
     * @memberof BuildRelationships
     */
    icons?: BuildRelationshipsIcons;
    /**
     * 
     * @type {BuildRelationshipsBuildBundles}
     * @memberof BuildRelationships
     */
    buildBundles?: BuildRelationshipsBuildBundles;
}

/**
 * Check if a given object implements the BuildRelationships interface.
 */
export function instanceOfBuildRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BuildRelationshipsFromJSON(json: any): BuildRelationships {
    return BuildRelationshipsFromJSONTyped(json, false);
}

export function BuildRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preReleaseVersion': !exists(json, 'preReleaseVersion') ? undefined : BuildRelationshipsPreReleaseVersionFromJSON(json['preReleaseVersion']),
        'individualTesters': !exists(json, 'individualTesters') ? undefined : BetaGroupRelationshipsBetaTestersFromJSON(json['individualTesters']),
        'betaGroups': !exists(json, 'betaGroups') ? undefined : AppRelationshipsBetaGroupsFromJSON(json['betaGroups']),
        'betaBuildLocalizations': !exists(json, 'betaBuildLocalizations') ? undefined : BuildRelationshipsBetaBuildLocalizationsFromJSON(json['betaBuildLocalizations']),
        'appEncryptionDeclaration': !exists(json, 'appEncryptionDeclaration') ? undefined : BuildRelationshipsAppEncryptionDeclarationFromJSON(json['appEncryptionDeclaration']),
        'betaAppReviewSubmission': !exists(json, 'betaAppReviewSubmission') ? undefined : BuildRelationshipsBetaAppReviewSubmissionFromJSON(json['betaAppReviewSubmission']),
        'app': !exists(json, 'app') ? undefined : AppAvailabilityRelationshipsAppFromJSON(json['app']),
        'buildBetaDetail': !exists(json, 'buildBetaDetail') ? undefined : BuildRelationshipsBuildBetaDetailFromJSON(json['buildBetaDetail']),
        'appStoreVersion': !exists(json, 'appStoreVersion') ? undefined : AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersion']),
        'icons': !exists(json, 'icons') ? undefined : BuildRelationshipsIconsFromJSON(json['icons']),
        'buildBundles': !exists(json, 'buildBundles') ? undefined : BuildRelationshipsBuildBundlesFromJSON(json['buildBundles']),
    };
}

export function BuildRelationshipsToJSON(value?: BuildRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preReleaseVersion': BuildRelationshipsPreReleaseVersionToJSON(value.preReleaseVersion),
        'individualTesters': BetaGroupRelationshipsBetaTestersToJSON(value.individualTesters),
        'betaGroups': AppRelationshipsBetaGroupsToJSON(value.betaGroups),
        'betaBuildLocalizations': BuildRelationshipsBetaBuildLocalizationsToJSON(value.betaBuildLocalizations),
        'appEncryptionDeclaration': BuildRelationshipsAppEncryptionDeclarationToJSON(value.appEncryptionDeclaration),
        'betaAppReviewSubmission': BuildRelationshipsBetaAppReviewSubmissionToJSON(value.betaAppReviewSubmission),
        'app': AppAvailabilityRelationshipsAppToJSON(value.app),
        'buildBetaDetail': BuildRelationshipsBuildBetaDetailToJSON(value.buildBetaDetail),
        'appStoreVersion': AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON(value.appStoreVersion),
        'icons': BuildRelationshipsIconsToJSON(value.icons),
        'buildBundles': BuildRelationshipsBuildBundlesToJSON(value.buildBundles),
    };
}
