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
import { SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData } from './sandboxTestersClearPurchaseHistoryRequestV2CreateRequestData';

export class SandboxTestersClearPurchaseHistoryRequestV2CreateRequest {
    'data': SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SandboxTestersClearPurchaseHistoryRequestV2CreateRequestData"
        }    ];

    static getAttributeTypeMap() {
        return SandboxTestersClearPurchaseHistoryRequestV2CreateRequest.attributeTypeMap;
    }
}

