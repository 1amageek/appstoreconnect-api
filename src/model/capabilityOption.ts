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

export class CapabilityOption {
    'key'?: CapabilityOption.KeyEnum;
    'name'?: string;
    'description'?: string;
    'enabledByDefault'?: boolean;
    'enabled'?: boolean;
    'supportsWildcard'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "CapabilityOption.KeyEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "enabledByDefault",
            "baseName": "enabledByDefault",
            "type": "boolean"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "supportsWildcard",
            "baseName": "supportsWildcard",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CapabilityOption.attributeTypeMap;
    }
}

export namespace CapabilityOption {
    export enum KeyEnum {
        Xcode5 = <any> 'XCODE_5',
        Xcode6 = <any> 'XCODE_6',
        CompleteProtection = <any> 'COMPLETE_PROTECTION',
        ProtectedUnlessOpen = <any> 'PROTECTED_UNLESS_OPEN',
        ProtectedUntilFirstUserAuth = <any> 'PROTECTED_UNTIL_FIRST_USER_AUTH',
        PrimaryAppConsent = <any> 'PRIMARY_APP_CONSENT'
    }
}
