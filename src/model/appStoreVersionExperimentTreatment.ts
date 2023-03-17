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
import { AppStoreVersionExperimentTreatmentAttributes } from './appStoreVersionExperimentTreatmentAttributes';
import { AppStoreVersionExperimentTreatmentRelationships } from './appStoreVersionExperimentTreatmentRelationships';
import { ResourceLinks } from './resourceLinks';

export class AppStoreVersionExperimentTreatment {
    'type': AppStoreVersionExperimentTreatment.TypeEnum;
    'id': string;
    'attributes'?: AppStoreVersionExperimentTreatmentAttributes;
    'relationships'?: AppStoreVersionExperimentTreatmentRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppStoreVersionExperimentTreatment.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppStoreVersionExperimentTreatmentAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppStoreVersionExperimentTreatmentRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppStoreVersionExperimentTreatment.attributeTypeMap;
    }
}

export namespace AppStoreVersionExperimentTreatment {
    export enum TypeEnum {
        AppStoreVersionExperimentTreatments = <any> 'appStoreVersionExperimentTreatments'
    }
}
