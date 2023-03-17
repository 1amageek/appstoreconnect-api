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
import { AppAvailabilityRelationshipsApp } from './appAvailabilityRelationshipsApp';
import { AppRelationshipsGameCenterEnabledVersions } from './appRelationshipsGameCenterEnabledVersions';

export class GameCenterEnabledVersionRelationships {
    'compatibleVersions'?: AppRelationshipsGameCenterEnabledVersions;
    'app'?: AppAvailabilityRelationshipsApp;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "compatibleVersions",
            "baseName": "compatibleVersions",
            "type": "AppRelationshipsGameCenterEnabledVersions"
        },
        {
            "name": "app",
            "baseName": "app",
            "type": "AppAvailabilityRelationshipsApp"
        }    ];

    static getAttributeTypeMap() {
        return GameCenterEnabledVersionRelationships.attributeTypeMap;
    }
}

