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
import type { AppStoreAgeRating } from './AppStoreAgeRating';
import {
    AppStoreAgeRatingFromJSON,
    AppStoreAgeRatingFromJSONTyped,
    AppStoreAgeRatingToJSON,
} from './AppStoreAgeRating';
import type { AppStoreVersionState } from './AppStoreVersionState';
import {
    AppStoreVersionStateFromJSON,
    AppStoreVersionStateFromJSONTyped,
    AppStoreVersionStateToJSON,
} from './AppStoreVersionState';
import type { KidsAgeBand } from './KidsAgeBand';
import {
    KidsAgeBandFromJSON,
    KidsAgeBandFromJSONTyped,
    KidsAgeBandToJSON,
} from './KidsAgeBand';

/**
 * 
 * @export
 * @interface AppInfoAttributes
 */
export interface AppInfoAttributes {
    /**
     * 
     * @type {AppStoreVersionState}
     * @memberof AppInfoAttributes
     */
    appStoreState?: AppStoreVersionState;
    /**
     * 
     * @type {AppStoreAgeRating}
     * @memberof AppInfoAttributes
     */
    appStoreAgeRating?: AppStoreAgeRating;
    /**
     * 
     * @type {string}
     * @memberof AppInfoAttributes
     */
    brazilAgeRatingV2?: AppInfoAttributesBrazilAgeRatingV2Enum;
    /**
     * 
     * @type {KidsAgeBand}
     * @memberof AppInfoAttributes
     */
    kidsAgeBand?: KidsAgeBand;
}


/**
 * @export
 */
export const AppInfoAttributesBrazilAgeRatingV2Enum = {
    SelfRatedL: 'SELF_RATED_L',
    SelfRatedTen: 'SELF_RATED_TEN',
    SelfRatedTwelve: 'SELF_RATED_TWELVE',
    SelfRatedFourteen: 'SELF_RATED_FOURTEEN',
    SelfRatedSixteen: 'SELF_RATED_SIXTEEN',
    SelfRatedEighteen: 'SELF_RATED_EIGHTEEN',
    OfficialL: 'OFFICIAL_L',
    OfficialTen: 'OFFICIAL_TEN',
    OfficialTwelve: 'OFFICIAL_TWELVE',
    OfficialFourteen: 'OFFICIAL_FOURTEEN',
    OfficialSixteen: 'OFFICIAL_SIXTEEN',
    OfficialEighteen: 'OFFICIAL_EIGHTEEN'
} as const;
export type AppInfoAttributesBrazilAgeRatingV2Enum = typeof AppInfoAttributesBrazilAgeRatingV2Enum[keyof typeof AppInfoAttributesBrazilAgeRatingV2Enum];


/**
 * Check if a given object implements the AppInfoAttributes interface.
 */
export function instanceOfAppInfoAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoAttributesFromJSON(json: any): AppInfoAttributes {
    return AppInfoAttributesFromJSONTyped(json, false);
}

export function AppInfoAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStoreState': !exists(json, 'appStoreState') ? undefined : AppStoreVersionStateFromJSON(json['appStoreState']),
        'appStoreAgeRating': !exists(json, 'appStoreAgeRating') ? undefined : AppStoreAgeRatingFromJSON(json['appStoreAgeRating']),
        'brazilAgeRatingV2': !exists(json, 'brazilAgeRatingV2') ? undefined : json['brazilAgeRatingV2'],
        'kidsAgeBand': !exists(json, 'kidsAgeBand') ? undefined : KidsAgeBandFromJSON(json['kidsAgeBand']),
    };
}

export function AppInfoAttributesToJSON(value?: AppInfoAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStoreState': AppStoreVersionStateToJSON(value.appStoreState),
        'appStoreAgeRating': AppStoreAgeRatingToJSON(value.appStoreAgeRating),
        'brazilAgeRatingV2': value.brazilAgeRatingV2,
        'kidsAgeBand': KidsAgeBandToJSON(value.kidsAgeBand),
    };
}

