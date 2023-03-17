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
import { AppAvailabilityRelationshipsAppLinks } from './appAvailabilityRelationshipsAppLinks';
import { AppScreenshotSetRelationshipsAppScreenshotsDataInner } from './appScreenshotSetRelationshipsAppScreenshotsDataInner';
import { PagingInformation } from './pagingInformation';

export class AppScreenshotSetRelationshipsAppScreenshots {
    'links'?: AppAvailabilityRelationshipsAppLinks;
    'meta'?: PagingInformation;
    'data'?: Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "AppAvailabilityRelationshipsAppLinks"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingInformation"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>"
        }    ];

    static getAttributeTypeMap() {
        return AppScreenshotSetRelationshipsAppScreenshots.attributeTypeMap;
    }
}

