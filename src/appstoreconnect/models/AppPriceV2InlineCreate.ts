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
/**
 * 
 * @export
 * @interface AppPriceV2InlineCreate
 */
export interface AppPriceV2InlineCreate {
    /**
     * 
     * @type {string}
     * @memberof AppPriceV2InlineCreate
     */
    type: AppPriceV2InlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPriceV2InlineCreate
     */
    id?: string;
}


/**
 * @export
 */
export const AppPriceV2InlineCreateTypeEnum = {
    AppPrices: 'appPrices'
} as const;
export type AppPriceV2InlineCreateTypeEnum = typeof AppPriceV2InlineCreateTypeEnum[keyof typeof AppPriceV2InlineCreateTypeEnum];


/**
 * Check if a given object implements the AppPriceV2InlineCreate interface.
 */
export function instanceOfAppPriceV2InlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function AppPriceV2InlineCreateFromJSON(json: any): AppPriceV2InlineCreate {
    return AppPriceV2InlineCreateFromJSONTyped(json, false);
}

export function AppPriceV2InlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceV2InlineCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function AppPriceV2InlineCreateToJSON(value?: AppPriceV2InlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

