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
import * as runtime from '../runtime';
import type { ErrorResponse, ScmGitReferenceResponse, } from '../models';
import { ErrorResponseFromJSON, ErrorResponseToJSON, ScmGitReferenceResponseFromJSON, ScmGitReferenceResponseToJSON, } from '../models';
export interface ScmGitReferencesGetInstanceRequest {
    id: string;
    fieldsScmGitReferences?: Array<ScmGitReferencesGetInstanceFieldsScmGitReferencesEnum>;
    include?: Array<ScmGitReferencesGetInstanceIncludeEnum>;
}
/**
 *
 */
export class ScmGitReferencesApi extends runtime.BaseAPI {
    /**
     */
    async scmGitReferencesGetInstanceRaw(requestParameters: ScmGitReferencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmGitReferenceResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling scmGitReferencesGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        const headerParameters: runtime.HTTPHeaders = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/scmGitReferences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => ScmGitReferenceResponseFromJSON(jsonValue));
    }
    /**
     */
    async scmGitReferencesGetInstance(requestParameters: ScmGitReferencesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmGitReferenceResponse> {
        const response = await this.scmGitReferencesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type ScmGitReferencesGetInstanceFieldsScmGitReferencesEnum = 'canonicalName' | 'isDeleted' | 'kind' | 'name' | 'repository';;
/**
 * @export
 */
export type ScmGitReferencesGetInstanceIncludeEnum = 'repository';;
