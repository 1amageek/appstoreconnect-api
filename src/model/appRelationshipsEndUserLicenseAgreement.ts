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
import { AppRelationshipsEndUserLicenseAgreementData } from './appRelationshipsEndUserLicenseAgreementData';

export class AppRelationshipsEndUserLicenseAgreement {
    'links'?: AppAvailabilityRelationshipsAppLinks;
    'data'?: AppRelationshipsEndUserLicenseAgreementData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "links",
            "type": "AppAvailabilityRelationshipsAppLinks"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "AppRelationshipsEndUserLicenseAgreementData"
        }    ];

    static getAttributeTypeMap() {
        return AppRelationshipsEndUserLicenseAgreement.attributeTypeMap;
    }
}

