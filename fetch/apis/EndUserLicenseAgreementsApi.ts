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
  EndUserLicenseAgreementCreateRequest,
  EndUserLicenseAgreementResponse,
  EndUserLicenseAgreementUpdateRequest,
  ErrorResponse,
  TerritoriesResponse,
} from '../models';
import {
    EndUserLicenseAgreementCreateRequestFromJSON,
    EndUserLicenseAgreementCreateRequestToJSON,
    EndUserLicenseAgreementResponseFromJSON,
    EndUserLicenseAgreementResponseToJSON,
    EndUserLicenseAgreementUpdateRequestFromJSON,
    EndUserLicenseAgreementUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    TerritoriesResponseFromJSON,
    TerritoriesResponseToJSON,
} from '../models';

export interface EndUserLicenseAgreementsCreateInstanceRequest {
    endUserLicenseAgreementCreateRequest: EndUserLicenseAgreementCreateRequest;
}

export interface EndUserLicenseAgreementsDeleteInstanceRequest {
    id: string;
}

export interface EndUserLicenseAgreementsGetInstanceRequest {
    id: string;
    fieldsEndUserLicenseAgreements?: Array<EndUserLicenseAgreementsGetInstanceFieldsEndUserLicenseAgreementsEnum>;
    include?: Array<EndUserLicenseAgreementsGetInstanceIncludeEnum>;
    fieldsTerritories?: Array<EndUserLicenseAgreementsGetInstanceFieldsTerritoriesEnum>;
    limitTerritories?: number;
}

export interface EndUserLicenseAgreementsTerritoriesGetToManyRelatedRequest {
    id: string;
    fieldsTerritories?: Array<EndUserLicenseAgreementsTerritoriesGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
}

export interface EndUserLicenseAgreementsUpdateInstanceRequest {
    id: string;
    endUserLicenseAgreementUpdateRequest: EndUserLicenseAgreementUpdateRequest;
}

/**
 * 
 */
export class EndUserLicenseAgreementsApi extends runtime.BaseAPI {

    /**
     */
    async endUserLicenseAgreementsCreateInstanceRaw(requestParameters: EndUserLicenseAgreementsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EndUserLicenseAgreementResponse>> {
        if (requestParameters.endUserLicenseAgreementCreateRequest === null || requestParameters.endUserLicenseAgreementCreateRequest === undefined) {
            throw new runtime.RequiredError('endUserLicenseAgreementCreateRequest','Required parameter requestParameters.endUserLicenseAgreementCreateRequest was null or undefined when calling endUserLicenseAgreementsCreateInstance.');
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
            path: `/v1/endUserLicenseAgreements`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EndUserLicenseAgreementCreateRequestToJSON(requestParameters.endUserLicenseAgreementCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EndUserLicenseAgreementResponseFromJSON(jsonValue));
    }

    /**
     */
    async endUserLicenseAgreementsCreateInstance(requestParameters: EndUserLicenseAgreementsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EndUserLicenseAgreementResponse> {
        const response = await this.endUserLicenseAgreementsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async endUserLicenseAgreementsDeleteInstanceRaw(requestParameters: EndUserLicenseAgreementsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling endUserLicenseAgreementsDeleteInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itcBearerToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/endUserLicenseAgreements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async endUserLicenseAgreementsDeleteInstance(requestParameters: EndUserLicenseAgreementsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.endUserLicenseAgreementsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async endUserLicenseAgreementsGetInstanceRaw(requestParameters: EndUserLicenseAgreementsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EndUserLicenseAgreementResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling endUserLicenseAgreementsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsEndUserLicenseAgreements) {
            queryParameters['fields[endUserLicenseAgreements]'] = requestParameters.fieldsEndUserLicenseAgreements.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitTerritories !== undefined) {
            queryParameters['limit[territories]'] = requestParameters.limitTerritories;
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
            path: `/v1/endUserLicenseAgreements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EndUserLicenseAgreementResponseFromJSON(jsonValue));
    }

    /**
     */
    async endUserLicenseAgreementsGetInstance(requestParameters: EndUserLicenseAgreementsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EndUserLicenseAgreementResponse> {
        const response = await this.endUserLicenseAgreementsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async endUserLicenseAgreementsTerritoriesGetToManyRelatedRaw(requestParameters: EndUserLicenseAgreementsTerritoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerritoriesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling endUserLicenseAgreementsTerritoriesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/endUserLicenseAgreements/{id}/territories`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerritoriesResponseFromJSON(jsonValue));
    }

    /**
     */
    async endUserLicenseAgreementsTerritoriesGetToManyRelated(requestParameters: EndUserLicenseAgreementsTerritoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerritoriesResponse> {
        const response = await this.endUserLicenseAgreementsTerritoriesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async endUserLicenseAgreementsUpdateInstanceRaw(requestParameters: EndUserLicenseAgreementsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EndUserLicenseAgreementResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling endUserLicenseAgreementsUpdateInstance.');
        }

        if (requestParameters.endUserLicenseAgreementUpdateRequest === null || requestParameters.endUserLicenseAgreementUpdateRequest === undefined) {
            throw new runtime.RequiredError('endUserLicenseAgreementUpdateRequest','Required parameter requestParameters.endUserLicenseAgreementUpdateRequest was null or undefined when calling endUserLicenseAgreementsUpdateInstance.');
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
            path: `/v1/endUserLicenseAgreements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: EndUserLicenseAgreementUpdateRequestToJSON(requestParameters.endUserLicenseAgreementUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EndUserLicenseAgreementResponseFromJSON(jsonValue));
    }

    /**
     */
    async endUserLicenseAgreementsUpdateInstance(requestParameters: EndUserLicenseAgreementsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EndUserLicenseAgreementResponse> {
        const response = await this.endUserLicenseAgreementsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const EndUserLicenseAgreementsGetInstanceFieldsEndUserLicenseAgreementsEnum = {
    AgreementText: 'agreementText',
    App: 'app',
    Territories: 'territories'
} as const;
export type EndUserLicenseAgreementsGetInstanceFieldsEndUserLicenseAgreementsEnum = typeof EndUserLicenseAgreementsGetInstanceFieldsEndUserLicenseAgreementsEnum[keyof typeof EndUserLicenseAgreementsGetInstanceFieldsEndUserLicenseAgreementsEnum];
/**
 * @export
 */
export const EndUserLicenseAgreementsGetInstanceIncludeEnum = {
    App: 'app',
    Territories: 'territories'
} as const;
export type EndUserLicenseAgreementsGetInstanceIncludeEnum = typeof EndUserLicenseAgreementsGetInstanceIncludeEnum[keyof typeof EndUserLicenseAgreementsGetInstanceIncludeEnum];
/**
 * @export
 */
export const EndUserLicenseAgreementsGetInstanceFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type EndUserLicenseAgreementsGetInstanceFieldsTerritoriesEnum = typeof EndUserLicenseAgreementsGetInstanceFieldsTerritoriesEnum[keyof typeof EndUserLicenseAgreementsGetInstanceFieldsTerritoriesEnum];
/**
 * @export
 */
export const EndUserLicenseAgreementsTerritoriesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type EndUserLicenseAgreementsTerritoriesGetToManyRelatedFieldsTerritoriesEnum = typeof EndUserLicenseAgreementsTerritoriesGetToManyRelatedFieldsTerritoriesEnum[keyof typeof EndUserLicenseAgreementsTerritoriesGetToManyRelatedFieldsTerritoriesEnum];
