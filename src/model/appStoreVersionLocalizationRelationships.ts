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
import { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion } from './appClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion';
import { AppCustomProductPageLocalizationRelationshipsAppPreviewSets } from './appCustomProductPageLocalizationRelationshipsAppPreviewSets';
import { AppCustomProductPageLocalizationRelationshipsAppScreenshotSets } from './appCustomProductPageLocalizationRelationshipsAppScreenshotSets';

export class AppStoreVersionLocalizationRelationships {
    'appStoreVersion'?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion;
    'appScreenshotSets'?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSets;
    'appPreviewSets'?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appStoreVersion",
            "baseName": "appStoreVersion",
            "type": "AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersion"
        },
        {
            "name": "appScreenshotSets",
            "baseName": "appScreenshotSets",
            "type": "AppCustomProductPageLocalizationRelationshipsAppScreenshotSets"
        },
        {
            "name": "appPreviewSets",
            "baseName": "appPreviewSets",
            "type": "AppCustomProductPageLocalizationRelationshipsAppPreviewSets"
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionLocalizationRelationships.attributeTypeMap;
    }
}

