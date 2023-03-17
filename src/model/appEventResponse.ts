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
import { AppEvent } from './appEvent';
import { AppEventLocalization } from './appEventLocalization';
import { DocumentLinks } from './documentLinks';

export class AppEventResponse {
    'data': AppEvent;
    'included'?: Array<AppEventLocalization>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "AppEvent"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<AppEventLocalization>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return AppEventResponse.attributeTypeMap;
    }
}

