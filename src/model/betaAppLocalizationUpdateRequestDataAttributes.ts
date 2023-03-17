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

export class BetaAppLocalizationUpdateRequestDataAttributes {
    'feedbackEmail'?: string;
    'marketingUrl'?: string;
    'privacyPolicyUrl'?: string;
    'tvOsPrivacyPolicy'?: string;
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feedbackEmail",
            "baseName": "feedbackEmail",
            "type": "string"
        },
        {
            "name": "marketingUrl",
            "baseName": "marketingUrl",
            "type": "string"
        },
        {
            "name": "privacyPolicyUrl",
            "baseName": "privacyPolicyUrl",
            "type": "string"
        },
        {
            "name": "tvOsPrivacyPolicy",
            "baseName": "tvOsPrivacyPolicy",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BetaAppLocalizationUpdateRequestDataAttributes.attributeTypeMap;
    }
}

