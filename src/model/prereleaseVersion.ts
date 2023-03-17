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
import { PrereleaseVersionAttributes } from './prereleaseVersionAttributes';
import { PrereleaseVersionRelationships } from './prereleaseVersionRelationships';
import { ResourceLinks } from './resourceLinks';

export class PrereleaseVersion {
    'type': PrereleaseVersion.TypeEnum;
    'id': string;
    'attributes'?: PrereleaseVersionAttributes;
    'relationships'?: PrereleaseVersionRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PrereleaseVersion.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PrereleaseVersionAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PrereleaseVersionRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return PrereleaseVersion.attributeTypeMap;
    }
}

export namespace PrereleaseVersion {
    export enum TypeEnum {
        PreReleaseVersions = <any> 'preReleaseVersions'
    }
}
