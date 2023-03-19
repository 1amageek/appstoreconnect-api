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
import type { AppCategoryRelationshipsSubcategoriesDataInner } from './AppCategoryRelationshipsSubcategoriesDataInner';
import {
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSON,
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesDataInnerToJSON,
} from './AppCategoryRelationshipsSubcategoriesDataInner';

/**
 * 
 * @export
 * @interface AppCategoryRelationshipsParent
 */
export interface AppCategoryRelationshipsParent {
    /**
     * 
     * @type {AppAvailabilityRelationshipsAppLinks}
     * @memberof AppCategoryRelationshipsParent
     */
    links?: AppAvailabilityRelationshipsAppLinks;
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesDataInner}
     * @memberof AppCategoryRelationshipsParent
     */
    data?: AppCategoryRelationshipsSubcategoriesDataInner;
}

/**
 * Check if a given object implements the AppCategoryRelationshipsParent interface.
 */
export function instanceOfAppCategoryRelationshipsParent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCategoryRelationshipsParentFromJSON(json: any): AppCategoryRelationshipsParent {
    return AppCategoryRelationshipsParentFromJSONTyped(json, false);
}

export function AppCategoryRelationshipsParentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategoryRelationshipsParent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityRelationshipsAppLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppCategoryRelationshipsSubcategoriesDataInnerFromJSON(json['data']),
    };
}

export function AppCategoryRelationshipsParentToJSON(value?: AppCategoryRelationshipsParent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityRelationshipsAppLinksToJSON(value.links),
        'data': AppCategoryRelationshipsSubcategoriesDataInnerToJSON(value.data),
    };
}

