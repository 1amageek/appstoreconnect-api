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
import { BetaAppClipInvocation } from './betaAppClipInvocation';
import { BetaAppClipInvocationLocalization } from './betaAppClipInvocationLocalization';
import { DocumentLinks } from './documentLinks';

export class BetaAppClipInvocationResponse {
    'data': BetaAppClipInvocation;
    'included'?: Array<BetaAppClipInvocationLocalization>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BetaAppClipInvocation"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<BetaAppClipInvocationLocalization>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return BetaAppClipInvocationResponse.attributeTypeMap;
    }
}

