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

import {
    AppCustomProductPageLocalization,
    instanceOfAppCustomProductPageLocalization,
    AppCustomProductPageLocalizationFromJSON,
    AppCustomProductPageLocalizationFromJSONTyped,
    AppCustomProductPageLocalizationToJSON,
} from './AppCustomProductPageLocalization';
import {
    AppScreenshot,
    instanceOfAppScreenshot,
    AppScreenshotFromJSON,
    AppScreenshotFromJSONTyped,
    AppScreenshotToJSON,
} from './AppScreenshot';
import {
    AppStoreVersionExperimentTreatmentLocalization,
    instanceOfAppStoreVersionExperimentTreatmentLocalization,
    AppStoreVersionExperimentTreatmentLocalizationFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationToJSON,
} from './AppStoreVersionExperimentTreatmentLocalization';
import {
    AppStoreVersionLocalization,
    instanceOfAppStoreVersionLocalization,
    AppStoreVersionLocalizationFromJSON,
    AppStoreVersionLocalizationFromJSONTyped,
    AppStoreVersionLocalizationToJSON,
} from './AppStoreVersionLocalization';

/**
 * @type AppScreenshotSetsResponseIncludedInner
 * 
 * @export
 */
export type AppScreenshotSetsResponseIncludedInner = AppCustomProductPageLocalization | AppScreenshot | AppStoreVersionExperimentTreatmentLocalization | AppStoreVersionLocalization;

export function AppScreenshotSetsResponseIncludedInnerFromJSON(json: any): AppScreenshotSetsResponseIncludedInner {
    return AppScreenshotSetsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppScreenshotSetsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return { ...AppCustomProductPageLocalizationFromJSONTyped(json, true), ...AppScreenshotFromJSONTyped(json, true), ...AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped(json, true), ...AppStoreVersionLocalizationFromJSONTyped(json, true) };
}

export function AppScreenshotSetsResponseIncludedInnerToJSON(value?: AppScreenshotSetsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppCustomProductPageLocalization(value)) {
        return AppCustomProductPageLocalizationToJSON(value as AppCustomProductPageLocalization);
    }
    if (instanceOfAppScreenshot(value)) {
        return AppScreenshotToJSON(value as AppScreenshot);
    }
    if (instanceOfAppStoreVersionExperimentTreatmentLocalization(value)) {
        return AppStoreVersionExperimentTreatmentLocalizationToJSON(value as AppStoreVersionExperimentTreatmentLocalization);
    }
    if (instanceOfAppStoreVersionLocalization(value)) {
        return AppStoreVersionLocalizationToJSON(value as AppStoreVersionLocalization);
    }

    return {};
}

