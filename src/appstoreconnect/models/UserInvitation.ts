/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { UserInvitationAttributes } from './UserInvitationAttributes';
import {
    UserInvitationAttributesFromJSON,
    UserInvitationAttributesFromJSONTyped,
    UserInvitationAttributesToJSON,
} from './UserInvitationAttributes';
import type { UserInvitationRelationships } from './UserInvitationRelationships';
import {
    UserInvitationRelationshipsFromJSON,
    UserInvitationRelationshipsFromJSONTyped,
    UserInvitationRelationshipsToJSON,
} from './UserInvitationRelationships';

/**
 * 
 * @export
 * @interface UserInvitation
 */
export interface UserInvitation {
    /**
     * 
     * @type {string}
     * @memberof UserInvitation
     */
    type: UserInvitationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UserInvitation
     */
    id: string;
    /**
     * 
     * @type {UserInvitationAttributes}
     * @memberof UserInvitation
     */
    attributes?: UserInvitationAttributes;
    /**
     * 
     * @type {UserInvitationRelationships}
     * @memberof UserInvitation
     */
    relationships?: UserInvitationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof UserInvitation
     */
    links: ResourceLinks;
}


/**
 * @export
 */
export const UserInvitationTypeEnum = {
    UserInvitations: 'userInvitations'
} as const;
export type UserInvitationTypeEnum = typeof UserInvitationTypeEnum[keyof typeof UserInvitationTypeEnum];


/**
 * Check if a given object implements the UserInvitation interface.
 */
export function instanceOfUserInvitation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function UserInvitationFromJSON(json: any): UserInvitation {
    return UserInvitationFromJSONTyped(json, false);
}

export function UserInvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : UserInvitationAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : UserInvitationRelationshipsFromJSON(json['relationships']),
        'links': ResourceLinksFromJSON(json['links']),
    };
}

export function UserInvitationToJSON(value?: UserInvitation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': UserInvitationAttributesToJSON(value.attributes),
        'relationships': UserInvitationRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

