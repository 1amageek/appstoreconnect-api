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
import type { InAppPurchaseAppStoreReviewScreenshotRelationships } from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON,
} from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import type { InAppPurchaseContentAttributes } from './InAppPurchaseContentAttributes';
import {
    InAppPurchaseContentAttributesFromJSON,
    InAppPurchaseContentAttributesFromJSONTyped,
    InAppPurchaseContentAttributesToJSON,
} from './InAppPurchaseContentAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface InAppPurchaseContent
 */
export interface InAppPurchaseContent {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseContent
     */
    type: InAppPurchaseContentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseContent
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseContentAttributes}
     * @memberof InAppPurchaseContent
     */
    attributes?: InAppPurchaseContentAttributes;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationships}
     * @memberof InAppPurchaseContent
     */
    relationships?: InAppPurchaseAppStoreReviewScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseContent
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseContentTypeEnum = {
    InAppPurchaseContents: 'inAppPurchaseContents'
} as const;
export type InAppPurchaseContentTypeEnum = typeof InAppPurchaseContentTypeEnum[keyof typeof InAppPurchaseContentTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseContent interface.
 */
export function instanceOfInAppPurchaseContent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function InAppPurchaseContentFromJSON(json: any): InAppPurchaseContent {
    return InAppPurchaseContentFromJSONTyped(json, false);
}

export function InAppPurchaseContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : InAppPurchaseContentAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseContentToJSON(value?: InAppPurchaseContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': InAppPurchaseContentAttributesToJSON(value.attributes),
        'relationships': InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

