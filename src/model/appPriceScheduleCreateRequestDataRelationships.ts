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
import { AppAvailabilityCreateRequestDataRelationshipsApp } from './appAvailabilityCreateRequestDataRelationshipsApp';
import { AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory } from './appPriceScheduleCreateRequestDataRelationshipsBaseTerritory';
import { AppPriceScheduleCreateRequestDataRelationshipsManualPrices } from './appPriceScheduleCreateRequestDataRelationshipsManualPrices';

export class AppPriceScheduleCreateRequestDataRelationships {
    'app': AppAvailabilityCreateRequestDataRelationshipsApp;
    'baseTerritory': AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory;
    'manualPrices': AppPriceScheduleCreateRequestDataRelationshipsManualPrices;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "app",
            "baseName": "app",
            "type": "AppAvailabilityCreateRequestDataRelationshipsApp"
        },
        {
            "name": "baseTerritory",
            "baseName": "baseTerritory",
            "type": "AppPriceScheduleCreateRequestDataRelationshipsBaseTerritory"
        },
        {
            "name": "manualPrices",
            "baseName": "manualPrices",
            "type": "AppPriceScheduleCreateRequestDataRelationshipsManualPrices"
        }    ];

    static getAttributeTypeMap() {
        return AppPriceScheduleCreateRequestDataRelationships.attributeTypeMap;
    }
}

