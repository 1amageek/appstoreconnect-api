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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionPromotion
 */
export interface AppStoreVersionPromotion {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionPromotion
     */
    type: AppStoreVersionPromotionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionPromotion
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersionPromotion
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionPromotionTypeEnum = {
    AppStoreVersionPromotions: 'appStoreVersionPromotions'
} as const;
export type AppStoreVersionPromotionTypeEnum = typeof AppStoreVersionPromotionTypeEnum[keyof typeof AppStoreVersionPromotionTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionPromotion interface.
 */
export function instanceOfAppStoreVersionPromotion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionPromotionFromJSON(json: any): AppStoreVersionPromotion {
    return AppStoreVersionPromotionFromJSONTyped(json, false);
}

export function AppStoreVersionPromotionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPromotion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionPromotionToJSON(value?: AppStoreVersionPromotion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'links': ResourceLinksToJSON(value.links),
    };
}
