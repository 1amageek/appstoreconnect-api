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
import { AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion } from './appStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion';

export class AppStoreReviewDetailCreateRequestDataRelationships {
    'appStoreVersion': AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appStoreVersion",
            "baseName": "appStoreVersion",
            "type": "AppStoreReviewDetailCreateRequestDataRelationshipsAppStoreVersion"
        }    ];

    static getAttributeTypeMap() {
        return AppStoreReviewDetailCreateRequestDataRelationships.attributeTypeMap;
    }
}

