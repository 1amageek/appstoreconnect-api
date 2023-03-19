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
import type { DiagnosticSignature } from './DiagnosticSignature';
import {
    DiagnosticSignatureFromJSON,
    DiagnosticSignatureFromJSONTyped,
    DiagnosticSignatureToJSON,
} from './DiagnosticSignature';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface DiagnosticSignaturesResponse
 */
export interface DiagnosticSignaturesResponse {
    /**
     * 
     * @type {Array<DiagnosticSignature>}
     * @memberof DiagnosticSignaturesResponse
     */
    data: Array<DiagnosticSignature>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof DiagnosticSignaturesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof DiagnosticSignaturesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the DiagnosticSignaturesResponse interface.
 */
export function instanceOfDiagnosticSignaturesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function DiagnosticSignaturesResponseFromJSON(json: any): DiagnosticSignaturesResponse {
    return DiagnosticSignaturesResponseFromJSONTyped(json, false);
}

export function DiagnosticSignaturesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticSignaturesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(DiagnosticSignatureFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function DiagnosticSignaturesResponseToJSON(value?: DiagnosticSignaturesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(DiagnosticSignatureToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

