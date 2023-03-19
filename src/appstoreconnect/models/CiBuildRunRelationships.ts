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
import type { AppEncryptionDeclarationRelationshipsBuilds } from './AppEncryptionDeclarationRelationshipsBuilds';
import {
    AppEncryptionDeclarationRelationshipsBuildsFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsToJSON,
} from './AppEncryptionDeclarationRelationshipsBuilds';
import type { AppRelationshipsCiProduct } from './AppRelationshipsCiProduct';
import {
    AppRelationshipsCiProductFromJSON,
    AppRelationshipsCiProductFromJSONTyped,
    AppRelationshipsCiProductToJSON,
} from './AppRelationshipsCiProduct';
import type { CiBuildRunRelationshipsPullRequest } from './CiBuildRunRelationshipsPullRequest';
import {
    CiBuildRunRelationshipsPullRequestFromJSON,
    CiBuildRunRelationshipsPullRequestFromJSONTyped,
    CiBuildRunRelationshipsPullRequestToJSON,
} from './CiBuildRunRelationshipsPullRequest';
import type { CiBuildRunRelationshipsSourceBranchOrTag } from './CiBuildRunRelationshipsSourceBranchOrTag';
import {
    CiBuildRunRelationshipsSourceBranchOrTagFromJSON,
    CiBuildRunRelationshipsSourceBranchOrTagFromJSONTyped,
    CiBuildRunRelationshipsSourceBranchOrTagToJSON,
} from './CiBuildRunRelationshipsSourceBranchOrTag';
import type { CiBuildRunRelationshipsWorkflow } from './CiBuildRunRelationshipsWorkflow';
import {
    CiBuildRunRelationshipsWorkflowFromJSON,
    CiBuildRunRelationshipsWorkflowFromJSONTyped,
    CiBuildRunRelationshipsWorkflowToJSON,
} from './CiBuildRunRelationshipsWorkflow';

/**
 * 
 * @export
 * @interface CiBuildRunRelationships
 */
export interface CiBuildRunRelationships {
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsBuilds}
     * @memberof CiBuildRunRelationships
     */
    builds?: AppEncryptionDeclarationRelationshipsBuilds;
    /**
     * 
     * @type {CiBuildRunRelationshipsWorkflow}
     * @memberof CiBuildRunRelationships
     */
    workflow?: CiBuildRunRelationshipsWorkflow;
    /**
     * 
     * @type {AppRelationshipsCiProduct}
     * @memberof CiBuildRunRelationships
     */
    product?: AppRelationshipsCiProduct;
    /**
     * 
     * @type {CiBuildRunRelationshipsSourceBranchOrTag}
     * @memberof CiBuildRunRelationships
     */
    sourceBranchOrTag?: CiBuildRunRelationshipsSourceBranchOrTag;
    /**
     * 
     * @type {CiBuildRunRelationshipsSourceBranchOrTag}
     * @memberof CiBuildRunRelationships
     */
    destinationBranch?: CiBuildRunRelationshipsSourceBranchOrTag;
    /**
     * 
     * @type {CiBuildRunRelationshipsPullRequest}
     * @memberof CiBuildRunRelationships
     */
    pullRequest?: CiBuildRunRelationshipsPullRequest;
}

/**
 * Check if a given object implements the CiBuildRunRelationships interface.
 */
export function instanceOfCiBuildRunRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunRelationshipsFromJSON(json: any): CiBuildRunRelationships {
    return CiBuildRunRelationshipsFromJSONTyped(json, false);
}

export function CiBuildRunRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'builds': !exists(json, 'builds') ? undefined : AppEncryptionDeclarationRelationshipsBuildsFromJSON(json['builds']),
        'workflow': !exists(json, 'workflow') ? undefined : CiBuildRunRelationshipsWorkflowFromJSON(json['workflow']),
        'product': !exists(json, 'product') ? undefined : AppRelationshipsCiProductFromJSON(json['product']),
        'sourceBranchOrTag': !exists(json, 'sourceBranchOrTag') ? undefined : CiBuildRunRelationshipsSourceBranchOrTagFromJSON(json['sourceBranchOrTag']),
        'destinationBranch': !exists(json, 'destinationBranch') ? undefined : CiBuildRunRelationshipsSourceBranchOrTagFromJSON(json['destinationBranch']),
        'pullRequest': !exists(json, 'pullRequest') ? undefined : CiBuildRunRelationshipsPullRequestFromJSON(json['pullRequest']),
    };
}

export function CiBuildRunRelationshipsToJSON(value?: CiBuildRunRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'builds': AppEncryptionDeclarationRelationshipsBuildsToJSON(value.builds),
        'workflow': CiBuildRunRelationshipsWorkflowToJSON(value.workflow),
        'product': AppRelationshipsCiProductToJSON(value.product),
        'sourceBranchOrTag': CiBuildRunRelationshipsSourceBranchOrTagToJSON(value.sourceBranchOrTag),
        'destinationBranch': CiBuildRunRelationshipsSourceBranchOrTagToJSON(value.destinationBranch),
        'pullRequest': CiBuildRunRelationshipsPullRequestToJSON(value.pullRequest),
    };
}

