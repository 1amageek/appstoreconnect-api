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
import { AppAvailabilityRelationshipsApp } from './appAvailabilityRelationshipsApp';
import { BundleIdRelationshipsBundleIdCapabilities } from './bundleIdRelationshipsBundleIdCapabilities';
import { BundleIdRelationshipsProfiles } from './bundleIdRelationshipsProfiles';

export class BundleIdRelationships {
    'profiles'?: BundleIdRelationshipsProfiles;
    'bundleIdCapabilities'?: BundleIdRelationshipsBundleIdCapabilities;
    'app'?: AppAvailabilityRelationshipsApp;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profiles",
            "baseName": "profiles",
            "type": "BundleIdRelationshipsProfiles"
        },
        {
            "name": "bundleIdCapabilities",
            "baseName": "bundleIdCapabilities",
            "type": "BundleIdRelationshipsBundleIdCapabilities"
        },
        {
            "name": "app",
            "baseName": "app",
            "type": "AppAvailabilityRelationshipsApp"
        }    ];

    static getAttributeTypeMap() {
        return BundleIdRelationships.attributeTypeMap;
    }
}

