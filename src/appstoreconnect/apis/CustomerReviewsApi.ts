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
import type { CustomerReviewResponse, CustomerReviewResponseV1Response, ErrorResponse, } from '../models';
import { CustomerReviewResponseFromJSON, CustomerReviewResponseToJSON, CustomerReviewResponseV1ResponseFromJSON, CustomerReviewResponseV1ResponseToJSON, ErrorResponseFromJSON, ErrorResponseToJSON, } from '../models';
export interface CustomerReviewsGetInstanceRequest {
    id: string;
    fieldsCustomerReviews?: Array<CustomerReviewsGetInstanceFieldsCustomerReviewsEnum>;
    include?: Array<CustomerReviewsGetInstanceIncludeEnum>;
    fieldsCustomerReviewResponses?: Array<CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum>;
}
export interface CustomerReviewsResponseGetToOneRelatedRequest {
    id: string;
    fieldsCustomerReviews?: Array<CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum>;
    fieldsCustomerReviewResponses?: Array<CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum>;
    include?: Array<CustomerReviewsResponseGetToOneRelatedIncludeEnum>;
}
/**
 *
 */
export class CustomerReviewsApi extends runtime.BaseAPI {
    /**
     */
    async customerReviewsGetInstanceRaw(requestParameters: CustomerReviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerReviewResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling customerReviewsGetInstance.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCustomerReviews) {
            queryParameters['fields[customerReviews]'] = requestParameters.fieldsCustomerReviews.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCustomerReviewResponses) {
            queryParameters['fields[customerReviewResponses]'] = requestParameters.fieldsCustomerReviewResponses.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/customerReviews/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerReviewResponseFromJSON(jsonValue));
    }
    /**
     */
    async customerReviewsGetInstance(requestParameters: CustomerReviewsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerReviewResponse> {
        const response = await this.customerReviewsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     */
    async customerReviewsResponseGetToOneRelatedRaw(requestParameters: CustomerReviewsResponseGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerReviewResponseV1Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling customerReviewsResponseGetToOneRelated.');
        }
        const queryParameters: any = {};
        if (requestParameters.fieldsCustomerReviews) {
            queryParameters['fields[customerReviews]'] = requestParameters.fieldsCustomerReviews.join(runtime.COLLECTION_FORMATS["csv"]);
        }
        if (requestParameters.fieldsCustomerReviewResponses) {
            queryParameters['fields[customerReviewResponses]'] = requestParameters.fieldsCustomerReviewResponses.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/customerReviews/{id}/response`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerReviewResponseV1ResponseFromJSON(jsonValue));
    }
    /**
     */
    async customerReviewsResponseGetToOneRelated(requestParameters: CustomerReviewsResponseGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerReviewResponseV1Response> {
        const response = await this.customerReviewsResponseGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
/**
 * @export
 */
export type CustomerReviewsGetInstanceFieldsCustomerReviewsEnum = 'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title';;
/**
 * @export
 */
export type CustomerReviewsGetInstanceIncludeEnum = 'response';;
/**
 * @export
 */
export type CustomerReviewsGetInstanceFieldsCustomerReviewResponsesEnum = 'lastModifiedDate' | 'responseBody' | 'review' | 'state';;
/**
 * @export
 */
export type CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewsEnum = 'body' | 'createdDate' | 'rating' | 'response' | 'reviewerNickname' | 'territory' | 'title';;
/**
 * @export
 */
export type CustomerReviewsResponseGetToOneRelatedFieldsCustomerReviewResponsesEnum = 'lastModifiedDate' | 'responseBody' | 'review' | 'state';;
/**
 * @export
 */
export type CustomerReviewsResponseGetToOneRelatedIncludeEnum = 'review';;
