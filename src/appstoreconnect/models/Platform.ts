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


/**
 * 
 * @export
 */
export const Platform = {
    Ios: 'IOS',
    MacOs: 'MAC_OS',
    TvOs: 'TV_OS'
} as const;
export type Platform = typeof Platform[keyof typeof Platform];


export function PlatformFromJSON(json: any): Platform {
    return PlatformFromJSONTyped(json, false);
}

export function PlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): Platform {
    return json as Platform;
}

export function PlatformToJSON(value?: Platform | null): any {
    return value as any;
}
