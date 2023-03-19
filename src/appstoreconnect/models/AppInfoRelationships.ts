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
import type { AppCategoryRelationshipsParent } from './AppCategoryRelationshipsParent';
import {
    AppCategoryRelationshipsParentFromJSON,
    AppCategoryRelationshipsParentFromJSONTyped,
    AppCategoryRelationshipsParentToJSON,
} from './AppCategoryRelationshipsParent';
import type { AppInfoRelationshipsAgeRatingDeclaration } from './AppInfoRelationshipsAgeRatingDeclaration';
import {
    AppInfoRelationshipsAgeRatingDeclarationFromJSON,
    AppInfoRelationshipsAgeRatingDeclarationFromJSONTyped,
    AppInfoRelationshipsAgeRatingDeclarationToJSON,
} from './AppInfoRelationshipsAgeRatingDeclaration';
import type { AppInfoRelationshipsAppInfoLocalizations } from './AppInfoRelationshipsAppInfoLocalizations';
import {
    AppInfoRelationshipsAppInfoLocalizationsFromJSON,
    AppInfoRelationshipsAppInfoLocalizationsFromJSONTyped,
    AppInfoRelationshipsAppInfoLocalizationsToJSON,
} from './AppInfoRelationshipsAppInfoLocalizations';

/**
 * 
 * @export
 * @interface AppInfoRelationships
 */
export interface AppInfoRelationships {
    /**
     * 
     * @type {AppAvailabilityRelationshipsApp}
     * @memberof AppInfoRelationships
     */
    app?: AppAvailabilityRelationshipsApp;
    /**
     * 
     * @type {AppInfoRelationshipsAgeRatingDeclaration}
     * @memberof AppInfoRelationships
     */
    ageRatingDeclaration?: AppInfoRelationshipsAgeRatingDeclaration;
    /**
     * 
     * @type {AppInfoRelationshipsAppInfoLocalizations}
     * @memberof AppInfoRelationships
     */
    appInfoLocalizations?: AppInfoRelationshipsAppInfoLocalizations;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    primaryCategory?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    primarySubcategoryOne?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    primarySubcategoryTwo?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    secondaryCategory?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    secondarySubcategoryOne?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    secondarySubcategoryTwo?: AppCategoryRelationshipsParent;
}

/**
 * Check if a given object implements the AppInfoRelationships interface.
 */
export function instanceOfAppInfoRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoRelationshipsFromJSON(json: any): AppInfoRelationships {
    return AppInfoRelationshipsFromJSONTyped(json, false);
}

export function AppInfoRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'app': !exists(json, 'app') ? undefined : AppAvailabilityRelationshipsAppFromJSON(json['app']),
        'ageRatingDeclaration': !exists(json, 'ageRatingDeclaration') ? undefined : AppInfoRelationshipsAgeRatingDeclarationFromJSON(json['ageRatingDeclaration']),
        'appInfoLocalizations': !exists(json, 'appInfoLocalizations') ? undefined : AppInfoRelationshipsAppInfoLocalizationsFromJSON(json['appInfoLocalizations']),
        'primaryCategory': !exists(json, 'primaryCategory') ? undefined : AppCategoryRelationshipsParentFromJSON(json['primaryCategory']),
        'primarySubcategoryOne': !exists(json, 'primarySubcategoryOne') ? undefined : AppCategoryRelationshipsParentFromJSON(json['primarySubcategoryOne']),
        'primarySubcategoryTwo': !exists(json, 'primarySubcategoryTwo') ? undefined : AppCategoryRelationshipsParentFromJSON(json['primarySubcategoryTwo']),
        'secondaryCategory': !exists(json, 'secondaryCategory') ? undefined : AppCategoryRelationshipsParentFromJSON(json['secondaryCategory']),
        'secondarySubcategoryOne': !exists(json, 'secondarySubcategoryOne') ? undefined : AppCategoryRelationshipsParentFromJSON(json['secondarySubcategoryOne']),
        'secondarySubcategoryTwo': !exists(json, 'secondarySubcategoryTwo') ? undefined : AppCategoryRelationshipsParentFromJSON(json['secondarySubcategoryTwo']),
    };
}

export function AppInfoRelationshipsToJSON(value?: AppInfoRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'app': AppAvailabilityRelationshipsAppToJSON(value.app),
        'ageRatingDeclaration': AppInfoRelationshipsAgeRatingDeclarationToJSON(value.ageRatingDeclaration),
        'appInfoLocalizations': AppInfoRelationshipsAppInfoLocalizationsToJSON(value.appInfoLocalizations),
        'primaryCategory': AppCategoryRelationshipsParentToJSON(value.primaryCategory),
        'primarySubcategoryOne': AppCategoryRelationshipsParentToJSON(value.primarySubcategoryOne),
        'primarySubcategoryTwo': AppCategoryRelationshipsParentToJSON(value.primarySubcategoryTwo),
        'secondaryCategory': AppCategoryRelationshipsParentToJSON(value.secondaryCategory),
        'secondarySubcategoryOne': AppCategoryRelationshipsParentToJSON(value.secondarySubcategoryOne),
        'secondarySubcategoryTwo': AppCategoryRelationshipsParentToJSON(value.secondarySubcategoryTwo),
    };
}
