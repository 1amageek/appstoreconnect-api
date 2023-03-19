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
import type {
  ErrorResponse,
  SubscriptionGracePeriodResponse,
  SubscriptionGracePeriodUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SubscriptionGracePeriodResponseFromJSON,
    SubscriptionGracePeriodResponseToJSON,
    SubscriptionGracePeriodUpdateRequestFromJSON,
    SubscriptionGracePeriodUpdateRequestToJSON,
} from '../models';

export interface SubscriptionGracePeriodsGetInstanceRequest {
    id: string;
    fieldsSubscriptionGracePeriods?: Array<SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum>;
}

export interface SubscriptionGracePeriodsUpdateInstanceRequest {
    id: string;
    subscriptionGracePeriodUpdateRequest: SubscriptionGracePeriodUpdateRequest;
}

/**
 * 
 */
export class SubscriptionGracePeriodsApi extends runtime.BaseAPI {

    /**
     */
    async subscriptionGracePeriodsGetInstanceRaw(requestParameters: SubscriptionGracePeriodsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGracePeriodResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionGracePeriodsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionGracePeriods) {
            queryParameters['fields[subscriptionGracePeriods]'] = requestParameters.fieldsSubscriptionGracePeriods.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionGracePeriods/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGracePeriodResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGracePeriodsGetInstance(requestParameters: SubscriptionGracePeriodsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGracePeriodResponse> {
        const response = await this.subscriptionGracePeriodsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionGracePeriodsUpdateInstanceRaw(requestParameters: SubscriptionGracePeriodsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionGracePeriodResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionGracePeriodsUpdateInstance.');
        }

        if (requestParameters.subscriptionGracePeriodUpdateRequest === null || requestParameters.subscriptionGracePeriodUpdateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionGracePeriodUpdateRequest','Required parameter requestParameters.subscriptionGracePeriodUpdateRequest was null or undefined when calling subscriptionGracePeriodsUpdateInstance.');
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
            path: `/v1/subscriptionGracePeriods/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionGracePeriodUpdateRequestToJSON(requestParameters.subscriptionGracePeriodUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionGracePeriodResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionGracePeriodsUpdateInstance(requestParameters: SubscriptionGracePeriodsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionGracePeriodResponse> {
        const response = await this.subscriptionGracePeriodsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum = {
    Duration: 'duration',
    OptIn: 'optIn',
    RenewalType: 'renewalType',
    SandboxOptIn: 'sandboxOptIn'
} as const;
export type SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum = typeof SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum[keyof typeof SubscriptionGracePeriodsGetInstanceFieldsSubscriptionGracePeriodsEnum];
