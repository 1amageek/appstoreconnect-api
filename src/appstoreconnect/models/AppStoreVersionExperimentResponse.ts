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
import type { AppStoreVersionExperiment } from './AppStoreVersionExperiment';
import {
    AppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentToJSON,
} from './AppStoreVersionExperiment';
import type { AppStoreVersionExperimentsResponseIncludedInner } from './AppStoreVersionExperimentsResponseIncludedInner';
import {
    AppStoreVersionExperimentsResponseIncludedInnerFromJSON,
    AppStoreVersionExperimentsResponseIncludedInnerFromJSONTyped,
    AppStoreVersionExperimentsResponseIncludedInnerToJSON,
} from './AppStoreVersionExperimentsResponseIncludedInner';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentResponse
 */
export interface AppStoreVersionExperimentResponse {
    /**
     * 
     * @type {AppStoreVersionExperiment}
     * @memberof AppStoreVersionExperimentResponse
     */
    data: AppStoreVersionExperiment;
    /**
     * 
     * @type {Array<AppStoreVersionExperimentsResponseIncludedInner>}
     * @memberof AppStoreVersionExperimentResponse
     */
    included?: Array<AppStoreVersionExperimentsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppStoreVersionExperimentResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentResponse interface.
 */
export function instanceOfAppStoreVersionExperimentResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function AppStoreVersionExperimentResponseFromJSON(json: any): AppStoreVersionExperimentResponse {
    return AppStoreVersionExperimentResponseFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppStoreVersionExperimentsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionExperimentResponseToJSON(value?: AppStoreVersionExperimentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionExperimentToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppStoreVersionExperimentsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}
