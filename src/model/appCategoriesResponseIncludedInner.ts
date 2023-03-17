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
import { AppCategory } from './appCategory';
import { AppCategoryAttributes } from './appCategoryAttributes';
import { AppCategoryRelationships } from './appCategoryRelationships';
import { ResourceLinks } from './resourceLinks';

export class AppCategoriesResponseIncludedInner {
    'type': AppCategoriesResponseIncludedInner.TypeEnum;
    'id': string;
    'attributes'?: AppCategoryAttributes;
    'relationships'?: AppCategoryRelationships;
    'links': ResourceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "AppCategoriesResponseIncludedInner.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppCategoryAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppCategoryRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ResourceLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppCategoriesResponseIncludedInner.attributeTypeMap;
    }
}

export namespace AppCategoriesResponseIncludedInner {
    export enum TypeEnum {
        AppCategories = <any> 'appCategories'
    }
}
