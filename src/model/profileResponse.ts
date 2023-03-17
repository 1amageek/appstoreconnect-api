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
import { DocumentLinks } from './documentLinks';
import { Profile } from './profile';
import { ProfilesResponseIncludedInner } from './profilesResponseIncludedInner';

export class ProfileResponse {
    'data': Profile;
    'included'?: Array<ProfilesResponseIncludedInner>;
    'links': DocumentLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Profile"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<ProfilesResponseIncludedInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "DocumentLinks"
        }    ];

    static getAttributeTypeMap() {
        return ProfileResponse.attributeTypeMap;
    }
}

