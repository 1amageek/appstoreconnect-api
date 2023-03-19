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
/**
 * 
 * @export
 * @interface ScmRepositoryAttributes
 */
export interface ScmRepositoryAttributes {
    /**
     * 
     * @type {Date}
     * @memberof ScmRepositoryAttributes
     */
    lastAccessedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ScmRepositoryAttributes
     */
    httpCloneUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmRepositoryAttributes
     */
    sshCloneUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmRepositoryAttributes
     */
    ownerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmRepositoryAttributes
     */
    repositoryName?: string;
}

/**
 * Check if a given object implements the ScmRepositoryAttributes interface.
 */
export function instanceOfScmRepositoryAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScmRepositoryAttributesFromJSON(json: any): ScmRepositoryAttributes {
    return ScmRepositoryAttributesFromJSONTyped(json, false);
}

export function ScmRepositoryAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmRepositoryAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastAccessedDate': !exists(json, 'lastAccessedDate') ? undefined : (new Date(json['lastAccessedDate'])),
        'httpCloneUrl': !exists(json, 'httpCloneUrl') ? undefined : json['httpCloneUrl'],
        'sshCloneUrl': !exists(json, 'sshCloneUrl') ? undefined : json['sshCloneUrl'],
        'ownerName': !exists(json, 'ownerName') ? undefined : json['ownerName'],
        'repositoryName': !exists(json, 'repositoryName') ? undefined : json['repositoryName'],
    };
}

export function ScmRepositoryAttributesToJSON(value?: ScmRepositoryAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastAccessedDate': value.lastAccessedDate === undefined ? undefined : (value.lastAccessedDate.toISOString()),
        'httpCloneUrl': value.httpCloneUrl,
        'sshCloneUrl': value.sshCloneUrl,
        'ownerName': value.ownerName,
        'repositoryName': value.repositoryName,
    };
}
