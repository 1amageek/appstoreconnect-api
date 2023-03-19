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
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON,
} from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import type { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion } from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion';
import {
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON,
} from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion';
import type { AppEventLocalizationRelationshipsAppEvent } from './AppEventLocalizationRelationshipsAppEvent';
import {
    AppEventLocalizationRelationshipsAppEventFromJSON,
    AppEventLocalizationRelationshipsAppEventFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventToJSON,
} from './AppEventLocalizationRelationshipsAppEvent';
import type { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment } from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment';
import {
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON,
} from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemRelationships
 */
export interface ReviewSubmissionItemRelationships {
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion}
     * @memberof ReviewSubmissionItemRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion}
     * @memberof ReviewSubmissionItemRelationships
     */
    appCustomProductPageVersion?: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment}
     * @memberof ReviewSubmissionItemRelationships
     */
    appStoreVersionExperiment?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment;
    /**
     * 
     * @type {AppEventLocalizationRelationshipsAppEvent}
     * @memberof ReviewSubmissionItemRelationships
     */
    appEvent?: AppEventLocalizationRelationshipsAppEvent;
}

/**
 * Check if a given object implements the ReviewSubmissionItemRelationships interface.
 */
export function instanceOfReviewSubmissionItemRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionItemRelationshipsFromJSON(json: any): ReviewSubmissionItemRelationships {
    return ReviewSubmissionItemRelationshipsFromJSONTyped(json, false);
}

export function ReviewSubmissionItemRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreVersion': !exists(json, 'appStoreVersion') ? undefined : AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersion']),
        'appCustomProductPageVersion': !exists(json, 'appCustomProductPageVersion') ? undefined : AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON(json['appCustomProductPageVersion']),
        'appStoreVersionExperiment': !exists(json, 'appStoreVersionExperiment') ? undefined : AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON(json['appStoreVersionExperiment']),
        'appEvent': !exists(json, 'appEvent') ? undefined : AppEventLocalizationRelationshipsAppEventFromJSON(json['appEvent']),
    };
}

export function ReviewSubmissionItemRelationshipsToJSON(value?: ReviewSubmissionItemRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreVersion': AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionToJSON(value.appStoreVersion),
        'appCustomProductPageVersion': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON(value.appCustomProductPageVersion),
        'appStoreVersionExperiment': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON(value.appStoreVersionExperiment),
        'appEvent': AppEventLocalizationRelationshipsAppEventToJSON(value.appEvent),
    };
}
