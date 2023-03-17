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
import { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './appClipAdvancedExperienceImageCreateRequestDataAttributes';
import { AppStoreReviewDetailCreateRequestDataRelationships } from './appStoreReviewDetailCreateRequestDataRelationships';

export class RoutingAppCoverageCreateRequestData {
    'type': RoutingAppCoverageCreateRequestData.TypeEnum;
    'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    'relationships': AppStoreReviewDetailCreateRequestDataRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "RoutingAppCoverageCreateRequestData.TypeEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "AppClipAdvancedExperienceImageCreateRequestDataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "AppStoreReviewDetailCreateRequestDataRelationships"
        }    ];

    static getAttributeTypeMap() {
        return RoutingAppCoverageCreateRequestData.attributeTypeMap;
    }
}

export namespace RoutingAppCoverageCreateRequestData {
    export enum TypeEnum {
        RoutingAppCoverages = <any> 'routingAppCoverages'
    }
}
