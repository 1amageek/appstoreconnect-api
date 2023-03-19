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
import type { SubscriptionGracePeriodAttributes } from './SubscriptionGracePeriodAttributes';
import {
    SubscriptionGracePeriodAttributesFromJSON,
    SubscriptionGracePeriodAttributesFromJSONTyped,
    SubscriptionGracePeriodAttributesToJSON,
} from './SubscriptionGracePeriodAttributes';

/**
 * 
 * @export
 * @interface SubscriptionGracePeriod
 */
export interface SubscriptionGracePeriod {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGracePeriod
     */
    type: SubscriptionGracePeriodTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGracePeriod
     */
    id: string;
    /**
     * 
     * @type {SubscriptionGracePeriodAttributes}
     * @memberof SubscriptionGracePeriod
     */
    attributes?: SubscriptionGracePeriodAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionGracePeriod
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionGracePeriodTypeEnum = {
    SubscriptionGracePeriods: 'subscriptionGracePeriods'
} as const;
export type SubscriptionGracePeriodTypeEnum = typeof SubscriptionGracePeriodTypeEnum[keyof typeof SubscriptionGracePeriodTypeEnum];


/**
 * Check if a given object implements the SubscriptionGracePeriod interface.
 */
export function instanceOfSubscriptionGracePeriod(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function SubscriptionGracePeriodFromJSON(json: any): SubscriptionGracePeriod {
    return SubscriptionGracePeriodFromJSONTyped(json, false);
}

export function SubscriptionGracePeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGracePeriod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : SubscriptionGracePeriodAttributesFromJSON(json['attributes']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionGracePeriodToJSON(value?: SubscriptionGracePeriod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': SubscriptionGracePeriodAttributesToJSON(value.attributes),
        'links': ResourceLinksToJSON(value.links),
    };
}
