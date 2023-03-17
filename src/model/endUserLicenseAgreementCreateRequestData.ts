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
import { EndUserLicenseAgreementCreateRequestDataAttributes } from './endUserLicenseAgreementCreateRequestDataAttributes';
import { EndUserLicenseAgreementCreateRequestDataRelationships } from './endUserLicenseAgreementCreateRequestDataRelationships';

export class EndUserLicenseAgreementCreateRequestData {
    'type': EndUserLicenseAgreementCreateRequestData.TypeEnum;
    'attributes': EndUserLicenseAgreementCreateRequestDataAttributes;
    'relationships': EndUserLicenseAgreementCreateRequestDataRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "EndUserLicenseAgreementCreateRequestData.TypeEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "EndUserLicenseAgreementCreateRequestDataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "EndUserLicenseAgreementCreateRequestDataRelationships"
        }    ];

    static getAttributeTypeMap() {
        return EndUserLicenseAgreementCreateRequestData.attributeTypeMap;
    }
}

export namespace EndUserLicenseAgreementCreateRequestData {
    export enum TypeEnum {
        EndUserLicenseAgreements = <any> 'endUserLicenseAgreements'
    }
}
