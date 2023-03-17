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
import { CiTestDestinationKind } from './ciTestDestinationKind';

export class CiTestDestination {
    'deviceTypeName'?: string;
    'deviceTypeIdentifier'?: string;
    'runtimeName'?: string;
    'runtimeIdentifier'?: string;
    'kind'?: CiTestDestinationKind;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deviceTypeName",
            "baseName": "deviceTypeName",
            "type": "string"
        },
        {
            "name": "deviceTypeIdentifier",
            "baseName": "deviceTypeIdentifier",
            "type": "string"
        },
        {
            "name": "runtimeName",
            "baseName": "runtimeName",
            "type": "string"
        },
        {
            "name": "runtimeIdentifier",
            "baseName": "runtimeIdentifier",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "CiTestDestinationKind"
        }    ];

    static getAttributeTypeMap() {
        return CiTestDestination.attributeTypeMap;
    }
}

export namespace CiTestDestination {
}
