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
import type { ErrorResponse, SandboxTesterV2Response, SandboxTesterV2UpdateRequest, SandboxTestersV2Response, } from '../models';
import { ErrorResponseFromJSON, ErrorResponseToJSON, SandboxTesterV2ResponseFromJSON, SandboxTesterV2ResponseToJSON, SandboxTesterV2UpdateRequestFromJSON, SandboxTesterV2UpdateRequestToJSON, SandboxTestersV2ResponseFromJSON, SandboxTestersV2ResponseToJSON, } from '../models';
export interface SandboxTestersGetCollectionRequest {
    fieldsSandboxTesters?: Array<SandboxTestersGetCollectionFieldsSandboxTestersEnum>;
    limit?: number;
}
export interface SandboxTestersUpdateInstanceRequest {
    id: string;
    sandboxTesterV2UpdateRequest: SandboxTesterV2UpdateRequest;
}
/**
 *
 */
export class SandboxTestersApi extends runtime.BaseAPI {
    /**
     */
    async sandboxTestersGetCollectionRaw(requestParameters: SandboxTestersGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SandboxTestersV2Response>> {
        const queryParameters: any = {};
        if (requestParameters.fieldsSandboxTesters) {
            queryParameters['fields[sandboxTesters]'] = requestParameters.fieldsSandboxTesters.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
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
            path: `/v2/sandboxTesters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => SandboxTestersV2ResponseFromJSON(jsonValue));
    }
    /**
     */
    async sandboxTestersGetCollection(requestParameters: SandboxTestersGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SandboxTestersV2Response> {
        const response = await this.sandboxTestersGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async sandboxTestersUpdateInstanceRaw(requestParameters: SandboxTestersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SandboxTesterV2Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling sandboxTestersUpdateInstance.');
        }
        if (requestParameters.sandboxTesterV2UpdateRequest === null || requestParameters.sandboxTesterV2UpdateRequest === undefined) {
            throw new runtime.RequiredError('sandboxTesterV2UpdateRequest', 'Required parameter requestParameters.sandboxTesterV2UpdateRequest was null or undefined when calling sandboxTestersUpdateInstance.');
        }
        const queryParameters: any = {};
        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/sandboxTesters/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SandboxTesterV2UpdateRequestToJSON(requestParameters.sandboxTesterV2UpdateRequest),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => SandboxTesterV2ResponseFromJSON(jsonValue));
    }
    /**
     */
    async sandboxTestersUpdateInstance(requestParameters: SandboxTestersUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SandboxTesterV2Response> {
        const response = await this.sandboxTestersUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type SandboxTestersGetCollectionFieldsSandboxTestersEnum = 'acAccountName' | 'applePayCompatible' | 'firstName' | 'interruptPurchases' | 'lastName' | 'subscriptionRenewalRate' | 'territory';;
