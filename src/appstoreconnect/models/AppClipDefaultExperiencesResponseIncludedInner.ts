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
    AppClip,
    instanceOfAppClip,
    AppClipFromJSON,
    AppClipFromJSONTyped,
    AppClipToJSON,
} from './AppClip';
import {
    AppClipAppStoreReviewDetail,
    instanceOfAppClipAppStoreReviewDetail,
    AppClipAppStoreReviewDetailFromJSON,
    AppClipAppStoreReviewDetailFromJSONTyped,
    AppClipAppStoreReviewDetailToJSON,
} from './AppClipAppStoreReviewDetail';
import {
    AppClipDefaultExperienceLocalization,
    instanceOfAppClipDefaultExperienceLocalization,
    AppClipDefaultExperienceLocalizationFromJSON,
    AppClipDefaultExperienceLocalizationFromJSONTyped,
    AppClipDefaultExperienceLocalizationToJSON,
} from './AppClipDefaultExperienceLocalization';
import {
    AppStoreVersion,
    instanceOfAppStoreVersion,
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';

/**
 * @type AppClipDefaultExperiencesResponseIncludedInner
 * 
 * @export
 */
export type AppClipDefaultExperiencesResponseIncludedInner = AppClip | AppClipAppStoreReviewDetail | AppClipDefaultExperienceLocalization | AppStoreVersion;

export function AppClipDefaultExperiencesResponseIncludedInnerFromJSON(json: any): AppClipDefaultExperiencesResponseIncludedInner {
    return AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppClipDefaultExperiencesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperiencesResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return { ...AppClipFromJSONTyped(json, true), ...AppClipAppStoreReviewDetailFromJSONTyped(json, true), ...AppClipDefaultExperienceLocalizationFromJSONTyped(json, true), ...AppStoreVersionFromJSONTyped(json, true) };
}

export function AppClipDefaultExperiencesResponseIncludedInnerToJSON(value?: AppClipDefaultExperiencesResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfAppClip(value)) {
        return AppClipToJSON(value as AppClip);
    }
    if (instanceOfAppClipAppStoreReviewDetail(value)) {
        return AppClipAppStoreReviewDetailToJSON(value as AppClipAppStoreReviewDetail);
    }
    if (instanceOfAppClipDefaultExperienceLocalization(value)) {
        return AppClipDefaultExperienceLocalizationToJSON(value as AppClipDefaultExperienceLocalization);
    }
    if (instanceOfAppStoreVersion(value)) {
        return AppStoreVersionToJSON(value as AppStoreVersion);
    }

    return {};
}

