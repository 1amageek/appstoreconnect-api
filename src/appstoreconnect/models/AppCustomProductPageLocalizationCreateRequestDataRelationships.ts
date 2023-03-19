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
import type { AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion } from './AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion';
import {
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSON,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSON,
} from './AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationCreateRequestDataRelationships
 */
export interface AppCustomProductPageLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion}
     * @memberof AppCustomProductPageLocalizationCreateRequestDataRelationships
     */
    appCustomProductPageVersion: AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersion;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfAppCustomProductPageLocalizationCreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appCustomProductPageVersion" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppCustomProductPageLocalizationCreateRequestDataRelationships {
    return AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationCreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appCustomProductPageVersion': AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionFromJSON(json['appCustomProductPageVersion']),
    };
}

export function AppCustomProductPageLocalizationCreateRequestDataRelationshipsToJSON(value?: AppCustomProductPageLocalizationCreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appCustomProductPageVersion': AppCustomProductPageLocalizationCreateRequestDataRelationshipsAppCustomProductPageVersionToJSON(value.appCustomProductPageVersion),
    };
}
