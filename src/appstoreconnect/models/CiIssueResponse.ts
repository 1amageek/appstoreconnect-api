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
import type { CiIssue } from './CiIssue';
import {
    CiIssueFromJSON,
    CiIssueFromJSONTyped,
    CiIssueToJSON,
} from './CiIssue';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CiIssueResponse
 */
export interface CiIssueResponse {
    /**
     * 
     * @type {CiIssue}
     * @memberof CiIssueResponse
     */
    data: CiIssue;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CiIssueResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiIssueResponse interface.
 */
export function instanceOfCiIssueResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function CiIssueResponseFromJSON(json: any): CiIssueResponse {
    return CiIssueResponseFromJSONTyped(json, false);
}

export function CiIssueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiIssueResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CiIssueFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CiIssueResponseToJSON(value?: CiIssueResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiIssueToJSON(value.data),
        'links': DocumentLinksToJSON(value.links),
    };
}

