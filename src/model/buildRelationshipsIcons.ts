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
import { BuildRelationshipsIconsDataInner } from './buildRelationshipsIconsDataInner';
import { PagingInformation } from './pagingInformation';

export class BuildRelationshipsIcons {
    'links'?: AppAvailabilityRelationshipsAppLinks;
    'meta'?: PagingInformation;
    'data'?: Array<BuildRelationshipsIconsDataInner>;

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
            "type": "Array<BuildRelationshipsIconsDataInner>"
        }    ];

    static getAttributeTypeMap() {
        return BuildRelationshipsIcons.attributeTypeMap;
    }
}

