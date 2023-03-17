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
import { AppPreviewSetRelationshipsAppCustomProductPageLocalization } from './appPreviewSetRelationshipsAppCustomProductPageLocalization';
import { AppPreviewSetRelationshipsAppPreviews } from './appPreviewSetRelationshipsAppPreviews';
import { AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization } from './appPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization';
import { AppPreviewSetRelationshipsAppStoreVersionLocalization } from './appPreviewSetRelationshipsAppStoreVersionLocalization';

export class AppPreviewSetRelationships {
    'appStoreVersionLocalization'?: AppPreviewSetRelationshipsAppStoreVersionLocalization;
    'appCustomProductPageLocalization'?: AppPreviewSetRelationshipsAppCustomProductPageLocalization;
    'appStoreVersionExperimentTreatmentLocalization'?: AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization;
    'appPreviews'?: AppPreviewSetRelationshipsAppPreviews;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appStoreVersionLocalization",
            "baseName": "appStoreVersionLocalization",
            "type": "AppPreviewSetRelationshipsAppStoreVersionLocalization"
        },
        {
            "name": "appCustomProductPageLocalization",
            "baseName": "appCustomProductPageLocalization",
            "type": "AppPreviewSetRelationshipsAppCustomProductPageLocalization"
        },
        {
            "name": "appStoreVersionExperimentTreatmentLocalization",
            "baseName": "appStoreVersionExperimentTreatmentLocalization",
            "type": "AppPreviewSetRelationshipsAppStoreVersionExperimentTreatmentLocalization"
        },
        {
            "name": "appPreviews",
            "baseName": "appPreviews",
            "type": "AppPreviewSetRelationshipsAppPreviews"
        }    ];

    static getAttributeTypeMap() {
        return AppPreviewSetRelationships.attributeTypeMap;
    }
}

