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
import type { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData } from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData';
import {
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataToJSON,
} from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment
 */
export interface AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment {
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData}
     * @memberof AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment
     */
    data: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentData;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSON(json: any): AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment {
    return AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataFromJSON(json['data']),
    };
}

export function AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperimentToJSON(value?: AppStoreVersionExperimentTreatmentCreateRequestDataRelationshipsAppStoreVersionExperiment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentDataToJSON(value.data),
    };
}

