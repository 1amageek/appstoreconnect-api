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
import type { CiGitUser } from './CiGitUser';
import {
    CiGitUserFromJSON,
    CiGitUserFromJSONTyped,
    CiGitUserToJSON,
} from './CiGitUser';

/**
 * 
 * @export
 * @interface CiBuildRunAttributesSourceCommit
 */
export interface CiBuildRunAttributesSourceCommit {
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    commitSha?: string;
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    message?: string;
    /**
     * 
     * @type {CiGitUser}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    author?: CiGitUser;
    /**
     * 
     * @type {CiGitUser}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    committer?: CiGitUser;
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunAttributesSourceCommit
     */
    webUrl?: string;
}

/**
 * Check if a given object implements the CiBuildRunAttributesSourceCommit interface.
 */
export function instanceOfCiBuildRunAttributesSourceCommit(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunAttributesSourceCommitFromJSON(json: any): CiBuildRunAttributesSourceCommit {
    return CiBuildRunAttributesSourceCommitFromJSONTyped(json, false);
}

export function CiBuildRunAttributesSourceCommitFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunAttributesSourceCommit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commitSha': !exists(json, 'commitSha') ? undefined : json['commitSha'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'author': !exists(json, 'author') ? undefined : CiGitUserFromJSON(json['author']),
        'committer': !exists(json, 'committer') ? undefined : CiGitUserFromJSON(json['committer']),
        'webUrl': !exists(json, 'webUrl') ? undefined : json['webUrl'],
    };
}

export function CiBuildRunAttributesSourceCommitToJSON(value?: CiBuildRunAttributesSourceCommit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commitSha': value.commitSha,
        'message': value.message,
        'author': CiGitUserToJSON(value.author),
        'committer': CiGitUserToJSON(value.committer),
        'webUrl': value.webUrl,
    };
}
