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
import type { SubscriptionStatusUrlVersion } from './SubscriptionStatusUrlVersion';
import {
    SubscriptionStatusUrlVersionFromJSON,
    SubscriptionStatusUrlVersionFromJSONTyped,
    SubscriptionStatusUrlVersionToJSON,
} from './SubscriptionStatusUrlVersion';

/**
 * 
 * @export
 * @interface AppUpdateRequestDataAttributes
 */
export interface AppUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppUpdateRequestDataAttributes
     */
    bundleId?: string;
    /**
     * 
     * @type {string}
     * @memberof AppUpdateRequestDataAttributes
     */
    primaryLocale?: string;
    /**
     * 
     * @type {string}
     * @memberof AppUpdateRequestDataAttributes
     */
    subscriptionStatusUrl?: string;
    /**
     * 
     * @type {SubscriptionStatusUrlVersion}
     * @memberof AppUpdateRequestDataAttributes
     */
    subscriptionStatusUrlVersion?: SubscriptionStatusUrlVersion;
    /**
     * 
     * @type {string}
     * @memberof AppUpdateRequestDataAttributes
     */
    subscriptionStatusUrlForSandbox?: string;
    /**
     * 
     * @type {SubscriptionStatusUrlVersion}
     * @memberof AppUpdateRequestDataAttributes
     */
    subscriptionStatusUrlVersionForSandbox?: SubscriptionStatusUrlVersion;
    /**
     * 
     * @type {string}
     * @memberof AppUpdateRequestDataAttributes
     */
    contentRightsDeclaration?: AppUpdateRequestDataAttributesContentRightsDeclarationEnum;
}


/**
 * @export
 */
export const AppUpdateRequestDataAttributesContentRightsDeclarationEnum = {
    DoesNotUseThirdPartyContent: 'DOES_NOT_USE_THIRD_PARTY_CONTENT',
    UsesThirdPartyContent: 'USES_THIRD_PARTY_CONTENT'
} as const;
export type AppUpdateRequestDataAttributesContentRightsDeclarationEnum = typeof AppUpdateRequestDataAttributesContentRightsDeclarationEnum[keyof typeof AppUpdateRequestDataAttributesContentRightsDeclarationEnum];


/**
 * Check if a given object implements the AppUpdateRequestDataAttributes interface.
 */
export function instanceOfAppUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppUpdateRequestDataAttributesFromJSON(json: any): AppUpdateRequestDataAttributes {
    return AppUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bundleId': !exists(json, 'bundleId') ? undefined : json['bundleId'],
        'primaryLocale': !exists(json, 'primaryLocale') ? undefined : json['primaryLocale'],
        'subscriptionStatusUrl': !exists(json, 'subscriptionStatusUrl') ? undefined : json['subscriptionStatusUrl'],
        'subscriptionStatusUrlVersion': !exists(json, 'subscriptionStatusUrlVersion') ? undefined : SubscriptionStatusUrlVersionFromJSON(json['subscriptionStatusUrlVersion']),
        'subscriptionStatusUrlForSandbox': !exists(json, 'subscriptionStatusUrlForSandbox') ? undefined : json['subscriptionStatusUrlForSandbox'],
        'subscriptionStatusUrlVersionForSandbox': !exists(json, 'subscriptionStatusUrlVersionForSandbox') ? undefined : SubscriptionStatusUrlVersionFromJSON(json['subscriptionStatusUrlVersionForSandbox']),
        'contentRightsDeclaration': !exists(json, 'contentRightsDeclaration') ? undefined : json['contentRightsDeclaration'],
    };
}

export function AppUpdateRequestDataAttributesToJSON(value?: AppUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bundleId': value.bundleId,
        'primaryLocale': value.primaryLocale,
        'subscriptionStatusUrl': value.subscriptionStatusUrl,
        'subscriptionStatusUrlVersion': SubscriptionStatusUrlVersionToJSON(value.subscriptionStatusUrlVersion),
        'subscriptionStatusUrlForSandbox': value.subscriptionStatusUrlForSandbox,
        'subscriptionStatusUrlVersionForSandbox': SubscriptionStatusUrlVersionToJSON(value.subscriptionStatusUrlVersionForSandbox),
        'contentRightsDeclaration': value.contentRightsDeclaration,
    };
}

