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

import { RequestFile } from './models';
import { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment } from './appStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment';
import { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations } from './appStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations';

export class AppStoreVersionExperimentTreatmentRelationships {
    'appStoreVersionExperiment'?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment;
    'appStoreVersionExperimentTreatmentLocalizations'?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appStoreVersionExperiment",
            "baseName": "appStoreVersionExperiment",
            "type": "AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment"
        },
        {
            "name": "appStoreVersionExperimentTreatmentLocalizations",
            "baseName": "appStoreVersionExperimentTreatmentLocalizations",
            "type": "AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentTreatmentLocalizations"
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionExperimentTreatmentRelationships.attributeTypeMap;
    }
}

