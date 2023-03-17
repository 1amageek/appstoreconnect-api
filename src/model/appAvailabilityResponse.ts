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
import { AppAvailability } from './appAvailability';
import { AppAvailabilityResponseIncludedInner } from './appAvailabilityResponseIncludedInner';
import { DocumentLinks } from './documentLinks';

export class AppAvailabilityResponse {
    'data': AppAvailability;
    'included'?: Array<AppAvailabilityResponseIncludedInner>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppAvailability"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppAvailabilityResponseIncludedInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppAvailabilityResponse.attributeTypeMap;
    }
}

